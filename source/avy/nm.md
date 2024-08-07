---
layout: page
title: New Mexico Avalanche Map Layers
description: Autogenerated DEM Shading rules for each advisory zone for quickly adding avalanche danger, problems, and sun angle layers in CalTopo.
js_includes:
  - dem.js
---

<script>
function clickFunc(layer, tooltip) {
  if(layer == "url") {
    navigator.clipboard.writeText(document.location.href);

    var tooltip = document.getElementById(tooltip);
    tooltip.innerHTML = "URL Copied!";
  }
  else {
    var copyText = document.getElementById(layer);
    navigator.clipboard.writeText(copyText.textContent);

    var tooltip = document.getElementById(tooltip);
    tooltip.innerHTML = "Ruleset Copied!";
  }
}

function outFunc(tooltip) {
  var tooltip = document.getElementById(tooltip);
  tooltip.innerHTML = "Copy to clipboard";
}
</script>

<!-- Looking out for you. -->

<section class="measure center lh-copy f5-ns f6 ph2 mv4" style="text-align: justify;">
<strong>"What's the danger?"</strong> Here are autogenerated DEM Shading rules for each advisory zone that allow for quickly adding avalanche danger, problems, and sun angle layers to CalTopo maps.
Reports sourced from <a class="no-underline fancy-link relative light-red" target="_blank" href="https://avalanche.org/">avalanche.org</a>.
</section>

<p id="settings-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Instructions</p>
<section id="settings" class="overflow-hidden" style="display:none;">
    <div class="mv2 ph2 center">
        <div class="fn f6 tc">
            <p class="measure lh-copy center"><a class="no-underline fancy-link relative light-red" href="https://training.caltopo.com/all_users/base-layers/custom2#dem">Digital Elevation Model (DEM)</a> shading let's you    create custom shading schemes based on elevation, slope, aspect and tree cover.</p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center"><strong>Avalanche Report</strong></p>
            <p class="measure lh-copy center">
                Danger report updates are fetched at 7:33pm and 7:33am. The selected elevation bands are not meant to be exact, but represent a characteristic of the terrain which varies locally.
            </p>
            <p class="measure lh-copy center">
                The <strong>highest</strong> band typically includes alpine areas beginning as the treeline transitions into open slopes extending to ridges and peaks.
            </p>
            <p class="measure lh-copy center">
                The <strong>middle</strong> band is typically a narrow transition zone between dense forests and treeless alpine areas.
            </p>
            <p class="measure lh-copy center">
                The <strong>lowest</strong> band typically extends from valley floors or snowline to near treeline.
            </p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center"><b>Usage</b></p>
            <p class="measure lh-copy center">
                You'll find that <b>Terrain Modeling</b> in the left pane will show layers that can be turned on and edited. The right pane will show <b>Custom Layers</b> that can be toggled on or off.
            </p>
        </div>
    </div>
</section>

<div class="flex flex-column flex-row-ns mb">
    <div class="ph3 w-100 w-60-ns">
        <div class="mt4 ph2 tc">
            <strong class="f6">Select A Zone:</strong>
            <select class="f6 ma1 bg-near-white pa2" id="zoneSel">
                
                <option value="TAC-490" selected="">Northern New Mexico</option>
                
            </select>
            <div class="tooltip dib v-top pt3">
                <a onclick="clickFunc('url', 'zone-url'); return false;" onmouseout="outFunc('zone-url')" href="#"><span class="tooltiptext" id="zone-url">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a>
            </div>
            
            <div id="TAC-490-title" class="avy-zone mt4 mb3 tc">
                <div><a class="no-underline black-70 pa2 hover-light-red b--moon-gray bg-light-gray ba" target="_blank" href="https://caltopo.com/map.html#ll=36.618799161942384,-105.47002125048397&z=10&b=mbt&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%22id%22%3A%20%2254fba057-5190-4b97-845e-216e78ea9f30%22%2C%0A%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222024-04-02%2008%3A30AM%20Shade%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22rb_m99z20%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%22id%22%3A%20%222bfb15f3-53d9-4ab3-9a0e-20c39285c55f%22%2C%0A%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222024-04-02%2011%3A30AM%20Shade%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22rb_m139z52%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%22id%22%3A%20%22b81ff053-8945-4858-b164-0262323e35e3%22%2C%0A%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222024-04-02%2004%3A00PM%20Shade%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22rb_m243z39%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Pre-populated CalTopo Map</a></div>
            </div>
            
        </div>
    </div>
    <div class="ph3 w-100 w-40-ns" style="display: flex;flex-direction: column;">
        
        <div id="TAC-490-shape" class="avy-zone ">
          <div class="tc" style="flex: 1;height: 130px;">
             <img src="/assets/images/svg/avalanche-zones/TAC-490.svg" alt="Northern New Mexico shape" height="100%"/>
          </div>
          <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/TAC-490.geojson" download="">Download Zone Shape</a></div>
        </div>
        
    </div>
</div>

<div class="flex flex-column flex-row-ns">
    <div class="ph3 w-100 w-50-ns">
        
        <div id="TAC-490-report" class="avy-zone" data-published="Monday, April 01, 2024 8:36AM">
        <h3 class="tc bb b--moon-gray">Northern New Mexico<br />Avalanche Report <a target="_blank" href="https://taosavalanchecenter.org/forecasts/#/northern-new-mexico"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://taosavalanchecenter.org/forecasts/#/northern-new-mexico">TAC</a> for more information.</div>
            

            
            
            <p class="tc f6">
                <strong>Issued at:</strong> Monday, April 01, 2024 8:36AM<br />
                <strong>Issued by:</strong> <a class="no-underline fancy-link relative light-red" href="https://taosavalanchecenter.org/forecasts/#/northern-new-mexico">TAC</a>
            </p>
            
        </div>
        
    </div>
    <div class="ph3 w-100 w-50-ns">
        
        <div id="TAC-490-shade" class="avy-zone">
            <h3 class="tc bb b--moon-gray"><br />Sunlight Angles</h3>
            <table class="f6">
                <thead>
                    <tr>
                        <th class="pa2">Time of day</th>
                        <th class="pa2">Lighting (Az/Z)</th>
                    </tr>
                </thead>
                <tbody>
                
                <tr>
                    <th class="pv2 ph1">
                        2024-04-02 07:00AM Shade
                    </th>
                    <td class="pv2 ph1">
                        <code id="shade-1-layer-490" class="pa1 b--silver bw1 ba language-plaintext highlighter-rouge">85 by 2</code>
                        <div class="tooltip dib v-top"><a onclick="clickFunc('shade-1-layer-490', 'shade-1-tooltip-490'); return false;" onmouseout="outFunc('shade-1-tooltip-490')" href="#"><span class="tooltiptext" id="shade-1-tooltip-490">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </td>
                </tr>
                
                <tr>
                    <th class="pv2 ph1">
                        2024-04-02 08:30AM Shade
                    </th>
                    <td class="pv2 ph1">
                        <code id="shade-2-layer-490" class="pa1 b--silver bw1 ba language-plaintext highlighter-rouge">99 by 20</code>
                        <div class="tooltip dib v-top"><a onclick="clickFunc('shade-2-layer-490', 'shade-2-tooltip-490'); return false;" onmouseout="outFunc('shade-2-tooltip-490')" href="#"><span class="tooltiptext" id="shade-2-tooltip-490">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </td>
                </tr>
                
                <tr>
                    <th class="pv2 ph1">
                        2024-04-02 10:00AM Shade
                    </th>
                    <td class="pv2 ph1">
                        <code id="shade-3-layer-490" class="pa1 b--silver bw1 ba language-plaintext highlighter-rouge">115 by 37</code>
                        <div class="tooltip dib v-top"><a onclick="clickFunc('shade-3-layer-490', 'shade-3-tooltip-490'); return false;" onmouseout="outFunc('shade-3-tooltip-490')" href="#"><span class="tooltiptext" id="shade-3-tooltip-490">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </td>
                </tr>
                
                <tr>
                    <th class="pv2 ph1">
                        2024-04-02 11:30AM Shade
                    </th>
                    <td class="pv2 ph1">
                        <code id="shade-4-layer-490" class="pa1 b--silver bw1 ba language-plaintext highlighter-rouge">139 by 52</code>
                        <div class="tooltip dib v-top"><a onclick="clickFunc('shade-4-layer-490', 'shade-4-tooltip-490'); return false;" onmouseout="outFunc('shade-4-tooltip-490')" href="#"><span class="tooltiptext" id="shade-4-tooltip-490">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </td>
                </tr>
                
                <tr>
                    <th class="pv2 ph1">
                        2024-04-02 01:00PM Shade
                    </th>
                    <td class="pv2 ph1">
                        <code id="shade-5-layer-490" class="pa1 b--silver bw1 ba language-plaintext highlighter-rouge">178 by 59</code>
                        <div class="tooltip dib v-top"><a onclick="clickFunc('shade-5-layer-490', 'shade-5-tooltip-490'); return false;" onmouseout="outFunc('shade-5-tooltip-490')" href="#"><span class="tooltiptext" id="shade-5-tooltip-490">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </td>
                </tr>
                
                <tr>
                    <th class="pv2 ph1">
                        2024-04-02 02:30PM Shade
                    </th>
                    <td class="pv2 ph1">
                        <code id="shade-6-layer-490" class="pa1 b--silver bw1 ba language-plaintext highlighter-rouge">217 by 53</code>
                        <div class="tooltip dib v-top"><a onclick="clickFunc('shade-6-layer-490', 'shade-6-tooltip-490'); return false;" onmouseout="outFunc('shade-6-tooltip-490')" href="#"><span class="tooltiptext" id="shade-6-tooltip-490">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </td>
                </tr>
                
                <tr>
                    <th class="pv2 ph1">
                        2024-04-02 04:00PM Shade
                    </th>
                    <td class="pv2 ph1">
                        <code id="shade-7-layer-490" class="pa1 b--silver bw1 ba language-plaintext highlighter-rouge">243 by 39</code>
                        <div class="tooltip dib v-top"><a onclick="clickFunc('shade-7-layer-490', 'shade-7-tooltip-490'); return false;" onmouseout="outFunc('shade-7-tooltip-490')" href="#"><span class="tooltiptext" id="shade-7-tooltip-490">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </td>
                </tr>
                
                <tr>
                    <th class="pv2 ph1">
                        2024-04-02 05:30PM Shade
                    </th>
                    <td class="pv2 ph1">
                        <code id="shade-8-layer-490" class="pa1 b--silver bw1 ba language-plaintext highlighter-rouge">260 by 22</code>
                        <div class="tooltip dib v-top"><a onclick="clickFunc('shade-8-layer-490', 'shade-8-tooltip-490'); return false;" onmouseout="outFunc('shade-8-tooltip-490')" href="#"><span class="tooltiptext" id="shade-8-tooltip-490">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </td>
                </tr>
                
                <tr>
                    <th class="pv2 ph1">
                        2024-04-02 07:00PM Shade
                    </th>
                    <td class="pv2 ph1">
                        <code id="shade-9-layer-490" class="pa1 b--silver bw1 ba language-plaintext highlighter-rouge">274 by 4</code>
                        <div class="tooltip dib v-top"><a onclick="clickFunc('shade-9-layer-490', 'shade-9-tooltip-490'); return false;" onmouseout="outFunc('shade-9-tooltip-490')" href="#"><span class="tooltiptext" id="shade-9-tooltip-490">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </td>
                </tr>
                
                </tbody>
            </table>
        </div>
        
    </div>
</div>

<hr id="hr-0" class="mw5 p0 mv4 o-70 b0 bt b--light-red light-red bg-light-red">
<section class="tc lh-copy">
    <strong class="f6">Change Regions:</strong>
    <select class="f6 ma1 bg-near-white pa2" id="regionSel">
        
        
        <option value="/avy/ca.html">California</option>
        
        
        
        <option value="/avy/wy.html">Wyoming</option>
        
        
        
        <option value="/avy/or.html">Oregon</option>
        
        
        
        <option value="/avy/ak.html">Alaska</option>
        
        
        
        <option value="/avy/mt.html">Montana</option>
        
        
        
        <option value="/avy/id.html">Idaho</option>
        
        
        
        <option value="/avy/az.html">Arizona</option>
        
        
        
        <option value="/avy/nh.html">New Hampshire</option>
        
        
        
        <option value="/avy/wa.html">Washington</option>
        
        
        
        <option value="/avy/nm.html" selected="">New Mexico</option>
        
        
        
        <option value="/avy/ut.html">Utah</option>
        
        
        
        <option value="/avy/co.html">Colorado</option>
        
        
        <option value="/avy/canada.html">Canada</option>
    </select>
</section>


{% include feedback.html %}


<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Known Issues</p>
<section id="issues" class="overflow-hidden tc f6">
</section>