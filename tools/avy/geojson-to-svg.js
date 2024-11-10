const {GeoJSON2SVG} = require('geojson2svg');
var fs = require('fs');
const path = require('path')
const {svgPathBbox} = require("svg-path-bbox");

function generateSVG(sourcePath, outputPath, filename) {
  const inputGeoJSON = `${sourcePath}/${filename}.geojson`;
  const dataJSONSource = fs.readFileSync(inputGeoJSON, {
    encoding: "utf8",
    flag: "r",
  });

  const dataJSON = JSON.parse(dataJSONSource);

  const converter = new GeoJSON2SVG();

  const svgStr = converter.convert(dataJSON);

  // calculate the SVG viewBox
  let lowestX = 1000;
  let lowestY = 1000;
  let highestW = 0;
  let highestH = 0;
  for (let path in svgStr) {
    let pathBox = svgPathBbox(svgStr[path].slice(9, -3));

    if (pathBox[0] < lowestX) {
      lowestX = pathBox[0];
    }

    if (pathBox[1] < lowestY) {
      lowestY = pathBox[1];
    }

    if ((pathBox[2]) > highestW) {
      highestW = (pathBox[2]);
    }

    if ((pathBox[3]) > highestH) {
      highestH = (pathBox[3]);
    }
  }

  viewBox = [lowestX,lowestY,highestW,highestH]

  const svg = parseSVG(svgStr);

  function parseSVG(str) {
    const paths = `<g class="zone" id="zone">\r\n    ${str.join("\r\n    ")}\r\n  </g>`;

    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg viewBox="${viewBox.join(" ")}" xmlns="http://www.w3.org/2000/svg">
  <style>
    g.zone {
      fill: lightgray;
      stroke-width: 2;
      stroke-linecap: square;
      stroke-linejoin: bevel;
      stroke-miterlimit: 3;
      stroke-opacity: 0.8;
      stroke: black;
      fill-opacity: 0.3;
    }
  </style>
  ${paths}
</svg>`;
  }

  try {
    fs.writeFileSync(`${outputPath}/${filename}.svg`, svg);
    console.log(`${outputPath}/${filename}.svg created`);
  } catch (error) {
    console.log(error);
  }
}

// delete all files in the directory to start fresh
function deleteFilesInDirectory(outputPath) {
  fs.readdir(outputPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        const filePath = `${outputPath}/${file}`;
        fs.unlinkSync(filePath); // Delete the file
    });
  });
}

const outputPath = path.join(__dirname, '../../source/assets/images/svg/avalanche-zones')
createDirectoryRecursively(outputPath);

function createDirectoryRecursively(outputPath) {
  fs.mkdir(outputPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } else {
        deleteFilesInDirectory(outputPath);

        const sourcePath = path.join(__dirname, '../../source/assets/json/avalanche-zones')
        fs.readdir(sourcePath, function(err, files) {
          const geosonFiles = files.filter(file => path.extname(file) === '.geojson').map(file => path.parse(file).name);
          geosonFiles.forEach(function (filename) {
            generateSVG(sourcePath, outputPath, filename);
          });
        })
    }
  });
}
