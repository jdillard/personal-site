require 'csv'
require 'fileutils'
require 'set'

def create_crag_page(crags)
  # determine unique metros
  metros = Set[]
  states = Set[]
  state_locals = Hash.new

  #TODO needs to loop through each metros cell
  crags.each do |crag|
    crag["metros"].split("|").each do |metro|
      metros.add(metro)
    end
    states.add(crag["state"])
    end

  # determine the locales in each state
  states.each do |state|
    state_locals[state] = Set[]
  end

  #TODO combine into original crag loop?
  crags.each do |crag|
    state_locals[crag["state"]].add(crag["name"])
  end

  File.open("source/crags.html","w") do |f|
    f << "---\n"
    f << "### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###\n"
    f << "layout: page\n"
    f << "title: Climbing Weather\n"
    f << "description: Real-time, precipitation-focused reports of current, past, and forecasted climbing weather for local climbing crags\n"
    f << "---\n\n"
    f << '<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">'+"\n"
    f << '<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,'+"\n"
    f << 'precipitation-focused reports of current, past, and future climbing weather for crags located in the United States, sourced'+"\n"
    f << 'from <a class="no-underline fancy-link relative light-red" target="_blank" href="https://www.weather.gov/documentation/services-web-api">weather.gov</a>.'+"\n"
    f << "</section>\n\n"
    f << '<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">'+"\n"
    f << '<h2 class="bb b--moon-gray">Crags by Nearest Metro</h2>'+"\n"
    f << '<ul class="list pl3 f6 mt2">'+"\n"
    metros.each do |metro|
      metro_slug = metro.gsub(',', '').gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase
      f << '<li><a class="no-underline fancy-link relative black-70 hover-light-red" href="/crags/' + metro_slug + '-weather.html">' + metro + "</a></li>\n"
    end
    f << "</ul>\n"
    f << '<h2 class="bb b--moon-gray">Crag by State</h2>'+"\n"
    state_locals.each do |state, crags|
      f << '<h3 class="mb2">' + state + "</h3>\n"
      f << '<ul class="list pl3 f6 mt2">'+"\n"
      crags.each do |crag|
        crag_slug = crag.gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase + '-' + state.gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase
        f << '<li><a class="no-underline fancy-link relative black-70 hover-light-red" href="/crags/' + crag_slug + '-weather.html">' + crag + "</a></li>\n"
      end
      f << "</ul>\n"
    end
    f << "</section>\n\n"
    f << "{% include feedback.html %}\n"
  end
end

def create_crags(crags)
  # determine unique metros
  metros = Set[]
  local_crags = Hash.new
  states = Hash.new

  #TODO needs to loop through each metros cell
  crags.each do |crag|
    crag["metros"].split("|").each do |metro|
      metros.add(metro)
    end
  end

  # determine the crags near them
  metros.each do |metro|
    local_crags[metro] = [];
    states[metro.split(", ")[1]] ? states[metro.split(", ")[1]].add(metro.split(",")[0]) : states[metro.split(", ")[1]] = Set[metro.split(", ")[0]]
  end

  crags.each do |crag|
    crag["metros"].split("|").each do |metro|
      local_crags[metro].push({ name: crag["name"], state: crag["state"], note: crag["note"], url: crag["url"], station: crag["station"], office: crag["office"], lat: crag["lat"], long: crag["long"] })
    end
  end

  crags.each do |crag|
    slug = crag["name"].gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase + "-" + crag["state"].gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase
    File.open("source/_crags/" + slug + "-weather.md","w") do |f|
      f << "---\n"
      f << "### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###\n"
      f << "layout: page\n"
      f << "title: " + crag["name"] + ", " + crag["state"] + " Climbing Weather - Current, Past, and Forecasted Report\n"
      f << "title_override: " + crag["name"] + "<br /><small>Climbing Weather</small>\n"
      f << "description: A lightweight weather report for " + crag["name"] + ', ' + crag["state"] + ". Optimized for slow internet connections.\n"
      f << "js_includes:\n"
      f << "  - weather.js\n"
      f << "---\n\n"
      f << '<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">'+"\n"
      f << '<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,'+"\n"
      f << 'precipitation-focused reports of current, past, and forecasted climbing weather for ' + crag["name"] + ', ' + crag["state"] + '.'+"\n"
      # f << 'If it is too wet here, check for a dry crag near'
      # local_crags.each do |metro, crags|
      #   if metro == crag["metros"]
      #     url = metro.gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase
      #     f << ' <a class="nowrap no-underline fancy-link relative light-red" href="/crags/' + url + '-weather.html">' + metro + '</a>'
      #   end
      # end
      # f << " and keep the stoke high.\n"
      f << "</section>\n\n"
      f << '<p id="settings-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Instructions</p>'+"\n"
      f << '<section id="settings" class="overflow-hidden" style="display:none;">'+"\n"
      f << '    <div class="mv2 ph2 center">'+"\n"
      f << '        <div class="fn f6 tc pv2">'+"\n"
      f << '            <p class="measure lh-copy center"><strong>Show/hide hourly forecasts</strong> by clicking the desired day.</p>'+"\n"
      f << '            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">'+"\n"
      f << '            <p class="measure lh-copy center"><strong>Current and Past conditions</strong> are measured by the nearest weather station. <strong>Forecast conditions</strong> are calculated and polled separately.</p>'+"\n"
      f << '            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">'+"\n"
      f << '            <p class="measure lh-copy center"><strong>Having issues?</strong> Try <a id="clear-cache" class="no-underline relative fancy-link light-red hover-light-red" href="#">clearing the local cache</a>.</p>'+"\n"
      f << '            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">'+"\n"
      f << '            <p class="measure lh-copy center">Weather data sourced from <a class="no-underline fancy-link relative light-red" target="_blank" href="https://www.weather.gov/documentation/services-web-api">weather.gov</a>.</p>'+"\n"
      f << "        </div>\n"
      f << "    </div>\n"
      f << "</section>\n"
      f << '<section id="weather" data-crag="' + slug + '" class="mv4-ns mv3 ph2 center"></section>'+"\n"
      f << '<section id="nearby" class="tc lh-copy">'+"\n"
      f << '  <h3>Nearby Crags</h3>'+"\n"
      local_crags.each do |metro, crags|
        crag["metros"].split("|").each do |metro2|
          if metro == metro2
            crags.each do |crag2|
              if crag2[:name] != crag["name"]
                url = crag2[:name].gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase + "-" + crag2[:state].gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase
                f << '<a class="nowrap no-underline fancy-link relative light-red mh3" href="/crags/' + url + '-weather.html">' + crag2[:name] + '</a>'+"\n"
              end
            end
          end
        end
      end
      f << '</section>'+"\n"
      f << '<section id="nearby" class="tc lh-copy">'+"\n"
      f << '  <h3>Other Metros</h3>'+"\n"
      f << '  <select class="ma1 bg-near-white pa2" id="stateSel">'+"\n"
      states.each do |state, cities|
        f << '    <option value="' + state + '"'
        state === crag["metros"].split('|')[0].split(', ')[1] ?  f << ' selected' :  f << ''
        f << '>' + state + '</option>'+"\n"
      end
      f << '  </select>'+"\n"
      f << '  <select class="ma1 bg-near-white pa2" id="citySel">'+"\n"
      states[crag["metros"].split('|')[0].split(', ')[1]].each do |city|
        f << '    <option value="' + city + '"'
        city === crag["metros"].split('|')[0].split(', ')[0] ?  f << ' selected' :  f << ''
        f << '>' + city + '</option>'+"\n"
      end
      f << '  </select>'+"\n"
      f << '  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/' + slug + '-weather.html">Select Metro</a>'+"\n"
      f << '  <script>'+"\n"
      f << '    var states = [];'+"\n"
      states.each do |state, cities|
        f << '    states["' + state + '"] = "' +  cities.to_a.join('|') + '"'+"\n"
      end
      f << '  </script>'+"\n"
      f << '</section>'+"\n"
      f << "{% include feedback.html %}\n"
      f << '<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Known Issues</p>'+"\n"
      f << '<section id="issues" class="overflow-hidden tc f6">'+"\n"
      f << "</section>\n\n"
    end

    File.open("source/assets/json/crags/" + slug + ".json","w") do |f|
      f << "[\n"
      f << "  {\n"
      f << '    "name": "' + crag["name"] + '",'+"\n"
      f << '    "note": "' + crag["note"] + '",'+"\n"
      f << '    "mountainProject": "' + crag["url"] + '",'+"\n"
      f << '    "station": "' + crag["station"] + '",'+"\n"
      f << '    "office": "' + crag["office"] + '",'+"\n"
      f << '    "coordinates": ['+"\n"
      f << "      " + crag["lat"] + ",\n"
      f << "      " + crag["long"] + "\n"
      f << "    ]\n"
      f << "  }\n"
      f << "]"
    end
  end
end

def create_metros(crags)
  # determine unique metros
  metros = Set[]
  local_crags = Hash.new
  states = Hash.new

  #TODO needs to loop through each metros cell
  crags.each do |crag|
    crag["metros"].split("|").each do |metro|
      metros.add(metro)
      states[metro.split(", ")[1]] ? states[metro.split(", ")[1]].add(metro.split(",")[0]) : states[metro.split(", ")[1]] = Set[metro.split(", ")[0]]
    end
  end

  # determine the crags near them
  metros.each do |metro|
    local_crags[metro] = [];
  end

  crags.each do |crag|
    crag["metros"].split("|").each do |metro|
      local_crags[metro].push({ name: crag["name"], note: crag["note"], url: crag["url"], station: crag["station"], office: crag["office"], lat: crag["lat"], long: crag["long"] })
    end
  end

  local_crags.each do |metro, crags|
    slug = metro.gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase
    File.open("source/assets/json/crags/" + slug + ".json","w") do |f|
      f << "[\n"
      crags.each do |crag|
        f << "  {\n"
        f << '    "name": "' + crag[:name] + '",'+"\n"
        f << '    "note": "' + crag[:note] + '",'+"\n"
        f << '    "mountainProject": "' + crag[:url] + '",'+"\n"
        f << '    "station": "' + crag[:station] + '",'+"\n"
        f << '    "office": "' + crag[:office] + '",'+"\n"
        f << '    "coordinates": ['+"\n"
        f << "      " + crag[:lat] + ",\n"
        f << "      " + crag[:long] + "\n"
        f << "    ]\n"
        f << "  }"
        if crag != crags.last
          f << ",\n"
        else
          f << "\n"
        end
      end
      f << "]"
    end
  end

  metros.each do |metro|
    slug = metro.gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase
    File.open("source/_crags/" + slug + "-weather.md","w") do |f|
      f << "---\n"
      f << "### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###\n"
      f << "layout: page\n"
      f << "title: " + metro + " Climbing Weather - Current, Past, and Forecasted Report\n"
      f << "title_override: " + metro + "<br /><small>Climbing Weather</small>\n"
      f << "description: A lightweight climbing weather report for crags near " + metro + ". Optimized for slow internet connections.\n"
      f << "js_includes:\n"
      f << "  - weather.js\n"
      f << "---\n\n"
      f << '<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">'+"\n"
      f << '<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,'+"\n"
      f << 'precipitation-focused reports of current, past, and forecasted climbing weather for crags near ' + metro + ', sourced'+"\n"
      f << 'from <a class="no-underline fancy-link relative light-red" target="_blank" href="https://www.weather.gov/documentation/services-web-api">weather.gov</a>.'+"\n"
      f << "</section>\n\n"
      f << '<p id="settings-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Settings</p>'+"\n"
      f << '<section id="settings" class="overflow-hidden" style="display:none;">'+"\n"
      f << '    <div class="mv2 ph2 center">'+"\n"
      f << '        <div id="menu" class="fn fl-ns w-50-l w-100 pv2 pr4-l">'+"\n"
      f << '            <div class="f7 tc b">Select Defaults:</div>'+"\n"
      f << "        </div>\n"
      f << '        <div class="fn f6 tc fl-ns w-50-l w-100 pv2">'+"\n"
      f << '            <span class="f7 b">Instructions:</span>'+"\n"
      f << '            <p class="measure lh-copy center"><strong>Show/hide crags</strong> by clicking on their name to the left; green mean shown and gray means hidden.</p>'+"\n"
      f << '            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">'+"\n"
      f << '            <p class="measure lh-copy center"><strong>Show/hide hourly forecasts</strong> by clicking the desired day.</p>'+"\n"
      f << '            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">'+"\n"
      f << '            <p class="measure lh-copy center"><strong>Current and Past conditions</strong> are measured by the nearest weather station. <strong>Forecast conditions</strong> are calculated and polled separately.</p>'+"\n"
      f << '            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">'+"\n"
      f << '            <p class="measure lh-copy center"><strong>Having issues?</strong> Try <a id="clear-cache" class="no-underline relative fancy-link light-red hover-light-red" href="#">clearing the local cache</a>.</p>'+"\n"
      f << "        </div>\n"
      f << "    </div>\n"
      f << '    <section class="cb ph5  center">'+"\n"
      f << '      <hr class="mw5 p0 mb3 o-70 b0 bt b--light-red light-red bg-light-red">'+"\n"
      f << "      <h3>Submit a New Area</h3>\n"
      f << '      <form class="black-80" name="new-crag" data-netlify="true">'+"\n"
    f << '          <label for="mp-url" class="f6 b db mb2">Mountain Project Area URL</label>'+"\n"
    f << '          <input id="mp-url" name="mp-url" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="https://www.mountainproject.com/area/105833381/yosemite-national-park" type="text">'+"\n"
      f << '        <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Submit"></div>'+"\n"
      f << '      </form>'+"\n"
      f << '    </section>'+"\n"
      f << "</section>\n"
      f << '<section id="weather" data-crag="' + slug + '" class="mv4-ns mv3 ph2 center"></section>'+"\n"
      f << '<section id="nearby" class="tc lh-copy">'+"\n"
      f << '  <h3>Other Metros</h3>'+"\n"
      f << '  <select class="ma1 bg-near-white pa2" id="stateSel">'+"\n"
      states.each do |state, cities|
        f << '    <option value="' + state + '"'
        state === metro.split(', ')[1] ?  f << ' selected' :  f << ''
          f << '>' + state + '</option>'+"\n"
      end
      f << '  </select>'+"\n"
      f << '  <select class="ma1 bg-near-white pa2" id="citySel">'+"\n"
      states[metro.split(', ')[1]].each do |city|
        f << '    <option value="' + city + '"'
        city === metro.split(', ')[0] ?  f << ' selected' :  f << ''
        f << '>' + city + '</option>'+"\n"
      end
      f << '  </select>'+"\n"
      f << '  <a id="selectMetro" class="f6 link dim ph3 pv2 ma1 dib white bg-light-red" href="/crags/' + slug + '-weather.html">Select Metro</a>'+"\n"
      f << '  <script>'+"\n"
      f << '    var states = [];'+"\n"
      states.each do |state, cities|
        f << '    states["' + state + '"] = "' +  cities.to_a.join('|') + '"'+"\n"
      end
      f << '  </script>'+"\n"
      f << '</section>'+"\n"
      f << "{% include feedback.html %}\n"
      f << '<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Known Issues</p>'+"\n"
      f << '<section id="issues" class="overflow-hidden tc f6">'+"\n"
      f << "</section>\n\n"
    end
  end
end

crags = CSV.read("crags.csv", headers: true)

# clear the old crags markdown files
Dir.foreach('source/_crags') do |f|
  fn = File.join('source/_crags', f)
  File.delete(fn) if f != '.' && f != '..'
end

# clear the old crags json files
Dir.foreach('source/assets/json/crags') do |f|
  fn = File.join('source/assets/json/crags', f)
  File.delete(fn) if f != '.' && f != '..'
end

create_crag_page(crags)
create_crags(crags)
create_metros(crags)
