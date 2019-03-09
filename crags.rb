require 'fileutils'
require 'csv'
require 'set'

def create_crags(crags)
    crags.each do |crag|
      slug = crag["name"].gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase + "-" + crag["state"].gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase
      File.open("_crags/" + slug + "-weather.md","w") do |f|
        f << "---\n"
        f << "### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###\n"
        f << "layout: page\n"
        f << "title: " + crag["name"] + " Weather\n"
        f << "description: Real-time, precipitation-focused reports of current, past, and future weather conditions for " + crag["name"] + " near " + crag["name"] + ", " + crag["state"] + "\n"
        f << "js_includes:\n"
        f << "  - weather.js\n"
        f << "---\n\n"
        f << '<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">'+"\n"
        f << '<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,'+"\n"
        f << 'precipitation-focused reports of current, past, and future weather conditions sourced'+"\n"
        f << 'from <a class="no-underline fancy-link relative light-red" target="_blank" href="https://www.weather.gov/documentation/services-web-api">weather.gov</a>.'+"\n"
        f << "</section>\n\n"
        f << '<p id="settings-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Settings</p>'+"\n"
        f << '<section id="settings" class="overflow-hidden" style="transition: height 200ms;height: 0px;">'+"\n"
        f << '    <div class="mv2 ph2 center">'+"\n"
        f << '        <div class="fn f6 tc pv2">'+"\n"
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
        f << "</section>\n"
        f << '<section id="weather" data-crag="' + slug + '" class="mv4-ns mv3 ph2 center"></section>'+"\n"
        f << '<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Known Issues</p>'+"\n"
        f << '<section id="issues" class="overflow-hidden tc f6" style="transition: height 200ms;height: 0px;">'+"\n"
        f << "</section>\n\n"
      end

      File.open("assets/json/crags/" + slug + ".json","w") do |f|
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
  #TODO determine the crags near them
  metros = Set[]
  crags.each do |crag|
    metros.add(crag["metros"])
    end

  metros.each do |metro|
    slug = metro.gsub(' ', '-').gsub(/[^\w-]/, '').gsub(/(-){2,}/, '-').downcase
    File.open("_crags/" + slug + "-weather.md","w") do |f|
      f << "---\n"
        f << "### THIS FILE IS AUTO-GENERATED - DO NOT EDIT ###\n"
        f << "layout: page\n"
        f << "title: " + metro + " Weather\n"
        f << "description: Real-time, precipitation-focused reports of current, past, and future weather conditions for crags near " + metro + "\n"
        f << "js_includes:\n"
        f << "  - weather.js\n"
        f << "---\n\n"
        f << '<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">'+"\n"
        f << '<strong>"Is it dry?"</strong>, an oft-repeated, age-old question. Here are real-time,'+"\n"
        f << 'precipitation-focused reports of current, past, and future weather conditions sourced'+"\n"
        f << 'from <a class="no-underline fancy-link relative light-red" target="_blank" href="https://www.weather.gov/documentation/services-web-api">weather.gov</a>.'+"\n"
        f << "</section>\n\n"
        f << '<p id="settings-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Settings</p>'+"\n"
        f << '<section id="settings" class="overflow-hidden" style="transition: height 200ms;height: 0px;">'+"\n"
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
        f << "</section>\n"
        f << '<section id="weather" data-crag="' + slug + '" class="mv4-ns mv3 ph2 center"></section>'+"\n"
        f << '<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Known Issues</p>'+"\n"
        f << '<section id="issues" class="overflow-hidden tc f6" style="transition: height 200ms;height: 0px;">'+"\n"
        f << "</section>\n\n"
      end
    end
  end

#TODO catch errors and don't proceed
crags = CSV.read("crags.csv", headers: true)

# clear the old crags markdown files
Dir.foreach('_crags') do |f|
  fn = File.join('_crags', f)
  File.delete(fn) if f != '.' && f != '..'
end

#TODO clear the old crags json files
#Dir.foreach('assets/json/crags') do |f|
#  fn = File.join('_crags', f)
#  File.delete(fn) if f != '.' && f != '..'
#end

create_crags(crags)
create_metros(crags)
