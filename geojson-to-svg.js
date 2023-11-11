const {GeoJSON2SVG} = require('geojson2svg');
var fs = require('fs');
const path = require('path')

function generateSVG(sourcePath, outputPath, filename) {
  const inputGeoJSON = `${sourcePath}/${filename}.geojson`;
  const dataJSONSource = fs.readFileSync(inputGeoJSON, {
    encoding: "utf8",
    flag: "r",
  });

  const dataJSON = JSON.parse(dataJSONSource);

  const attributes = [
    "properties.PRO_COM_T",
    "properties.COMUNE",
    "properties.COD_REG",
    "properties.COD_PROV",
  ];

  const converter = new GeoJSON2SVG({
    attributes: attributes,
  });

  const svgStr = converter.convert(dataJSON);

  const svg = parseSVG(svgStr);

  function parseSVG(str) {
    const paths = `<g class="comuni" id="comuni">\r\n${str.join("\r\n")}</g>`;

    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
  >
  <style>
  g.comuni {
      fill: lightyellow;
      stroke-width: 3.5;
      stroke-linecap: square;
      stroke-linejoin: bevel;
      stroke-miterlimit: 3;
      stroke-opacity: 1;
      stroke: black;
      fill-opacity: 0;
  }
  </style>
  <g inkscape:groupmode="layer" id="layer1" inkscape:label="Base"/>
  <g inkscape:groupmode="layer" id="layer2" inkscape:label="Comuni">
  ${paths}
  </g>
  </svg>
  `;
  }

  fs.writeFileSync(`${outputPath}/${filename}.svg`, svg);
}

// delete all files in the directory to start fresh
function deleteFilesInDirectory(outputPath) {
  fs.readdir(outputPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        const filePath = `${directoryPath}/${file}`;
        fs.unlinkSync(filePath); // Delete the file
    });
  });
}

const outputPath = path.join(__dirname, './source/assets/images/svg/avalanche-zones')
createDirectoryRecursively(outputPath);

function createDirectoryRecursively(outputPath) {
  fs.mkdir(outputPath, { recursive: true }, (err) => {
    if (err) {
        console.log('Error creating directory:', err);
    } else {
        deleteFilesInDirectory(outputPath);

        const sourcePath = path.join(__dirname, './source/assets/json/avalanche-zones')
        fs.readdir(sourcePath, function(err, files) {
          const geosonFiles = files.filter(file => path.extname(file) === '.geojson').map(file => path.parse(file).name);
          geosonFiles.forEach(function (filename) {
            generateSVG(sourcePath, outputPath, filename);
          });
        })
    }
  });
}
