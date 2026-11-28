---
layout: page
title: California Avalanche Forecast Layers for CalTopo
description: The latest avalanche forecasts for California as CalTopo map layers, with danger rating and avalanche problem shading for each advisory zone.
tool: avy
image:
  path: /assets/images/avy-layers.png
  width: 175
  height: 131
js_includes:
  - https://unpkg.com/leaflet@1.9.4/dist/leaflet.js
  - avy.js
css_includes:
 - https://unpkg.com/leaflet@1.9.4/dist/leaflet.css
---

<!-- Looking out for you... -->

<section class="measure center lh-copy f5-ns f6 ph2 mv3" style="text-align: justify;">
    The latest avalanche forecasts as CalTopo map layers. Each advisory zone gets danger rating and avalanche problem shading, pulled automatically from the local forecast center. Open a zone in CalTopo with one click, or copy the DEM shading rules into your own map. This is a planning aid, not a replacement for reading the full forecast.
</section>

<p id="settings-toggle" class="mw5 b center tc hover-light-red black-70 pointer" role="button" tabindex="0" aria-expanded="false" aria-controls="settings">Show Instructions</p>
<section id="settings" class="overflow-hidden" style="display:none;">
    <div class="mv2 ph2 center">
        <div class="fn f6 tc">
            <p class="measure lh-copy center"><a class="no-underline fancy-link relative light-red" href="https://training.caltopo.com/all_users/base-layers/custom2#dem">Digital Elevation Model (DEM)</a> shading lets you create custom shading schemes based on elevation, slope, aspect and tree cover.</p>
            <p class="measure lh-copy center">These layers are built on relatively low resolution elevation data, so small terrain features and exact slope angles won't always show up. For higher definition terrain analysis (lidar-based), check out <a class="no-underline fancy-link relative light-red" href="https://www.aspectavy.com/">AspectAvy</a> (not affiliated).</p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center"><strong>Avalanche Report</strong></p>
            <p class="measure lh-copy center">
                The selected elevation bands are not meant to be exact, but represent a characteristic of the terrain which varies locally.
            </p>
            <p class="measure lh-copy center">
                The highest band, <b>ATL</b> (<i>Above Tree Line</i>), typically includes alpine areas beginning as the treeline transitions into open slopes extending to ridges and peaks.
            </p>
            <p class="measure lh-copy center">
                The middle band, <b>NTL</b> (<i>Near Tree Line</i>), is typically a narrow transition zone between dense forests and treeless alpine areas.
            </p>
            <p class="measure lh-copy center">
                The lowest band, <b>BTL</b> (<i>Below Tree Line</i>), typically extends from valley floors or snowline to near treeline.
            </p>
            <hr class="mw5 p0 mv2 o-60 b0 bt b--light-red light-red bg-light-red">
            <p class="measure lh-copy center"><b>Usage</b></p>
            <p class="measure lh-copy center">
                You'll find that <b>Terrain Modeling</b> in the left pane will show layers that can be turned on and edited. The right pane will show <b>Custom Layers</b> that can be toggled on or off.
            </p>
        </div>
    </div>
</section>

<div>
    <div class="mt4 ph2 tc">
        <span class="avy-picker">
            <label for="zoneSel">Zone</label>
            <select class="avy-select" id="zoneSel">
                
                <option value="BAC-3004" title="Bridgeport Avalanche Center" selected="">Bridgeport Avalanche Center</option>
                
                <option value="ESAC-128" title="Eastside Region" >Eastside Region</option>
                
                <option value="MSAC-3044" title="Mount Shasta" >Mount Shasta</option>
                
                <option value="SAC-2458" title="Central Sierra Nevada" >Central Sierra Nevada</option>
                
            </select>
        </span>
        <span class="avy-picker">
            <label for="regionSel">Region</label>
            <select class="avy-select" id="regionSel">
                <option value="/avy/">All Regions</option>
                <optgroup label="US">
                    
                    
                    <option value="/avy/#region-ak">Alaska</option>
                    
                    
                    
                    <option value="/avy/#region-az">Arizona</option>
                    
                    
                    
                    <option value="/avy/#region-ca" selected="">California</option>
                    
                    
                    
                    <option value="/avy/#region-co">Colorado</option>
                    
                    
                    
                    <option value="/avy/#region-id">Idaho</option>
                    
                    
                    
                    <option value="/avy/#region-mt">Montana</option>
                    
                    
                    
                    <option value="/avy/#region-nh">New Hampshire</option>
                    
                    
                    
                    <option value="/avy/#region-nm">New Mexico</option>
                    
                    
                    
                    <option value="/avy/#region-ny">New York</option>
                    
                    
                    
                    <option value="/avy/#region-or">Oregon</option>
                    
                    
                    
                    <option value="/avy/#region-ut">Utah</option>
                    
                    
                    
                    <option value="/avy/#region-wa">Washington</option>
                    
                    
                    
                    <option value="/avy/#region-wy">Wyoming</option>
                    
                    
                </optgroup>
                <optgroup label="Canada">
                    <option value="/avy/#region-canada">Canada</option>
                </optgroup>
            </select>
        </span>
    </div>
</div>

<div class="tc mt4">
    
    
    <div id="BAC-3004-title" class="avy-zone-link" data-id="BAC-3004">
        <a id="BAC-3004-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=38.25593147524261,-119.45133664482246&z=12&b=mbt&a=sc_s40-90a0-0e0-5549fcFF9900ps35-40a0-0e5550-20310fcFF9900ps40-90a0-0e5550-20310fcE00000&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%226a1f3c2e-5b7d-4e8a-9c0f-2d4b6e8a1c3f%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Steep%20Terrain%20%28GRM%29%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_s40-90a0-0e0-5549fcFF9900ps35-40a0-0e5550-20310fcFF9900ps40-90a0-0e5550-20310fcE00000%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e5550-20310fcfff200pa0-0e0-5549fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2247534303-27fe-4809-85da-987de8a8ccc9%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a270-135e5550-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="ESAC-128-title" class="avy-zone-link dn" data-id="ESAC-128">
        <a id="ESAC-128-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=37.55589080519621,-118.85603362526295&z=12&b=mbt&a=sc_s40-90a0-0e0-8849fcFF9900ps35-40a0-0e8850-20310fcFF9900ps40-90a0-0e8850-20310fcE00000&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%226a1f3c2e-5b7d-4e8a-9c0f-2d4b6e8a1c3f%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Steep%20Terrain%20%28GRM%29%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_s40-90a0-0e0-8849fcFF9900ps35-40a0-0e8850-20310fcFF9900ps40-90a0-0e8850-20310fcE00000%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e8850-20310fcfff200pa0-0e0-8849fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2216e1d683-ec0d-4f45-b05f-1e0f50ffe1ce%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a270-135e8850-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    
    
    <div id="SAC-2458-title" class="avy-zone-link dn" data-id="SAC-2458">
        <a id="SAC-2458-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=39.09562427335995,-120.11836720161703&z=12&b=mbt&a=sc_s40-90a0-0e0-20310fcFF9900&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%226a1f3c2e-5b7d-4e8a-9c0f-2d4b6e8a1c3f%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Steep%20Terrain%20%28GRM%29%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_s40-90a0-0e0-20310fcFF9900%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
</div>

<div class="flex flex-column flex-row-ns mt4">
    <div id="regional_zones" class="ph3 w-100 w-50-ns">
        
        <div id="BAC-3004-report" class="avy-zone" data-id="BAC-3004" data-color="#fff200" data-published="Friday, November 27, 2026 7:00AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Steep Terrain (GRM)</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="s40-90a0-0e0-5549f FF9900&#10;s35-40a0-0e5550-20310f FF9900&#10;s40-90a0-0e5550-20310f E00000" onclick="clickFunc(this, 'grm-tooltip-BAC-3004'); return false;" onmouseout="outFunc('grm-tooltip-BAC-3004')" onblur="outFunc('grm-tooltip-BAC-3004')" href="#" role="button" aria-label="Copy GRM rules"><span class="tooltiptext" id="grm-tooltip-BAC-3004" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7">
                        <li class="pv1"><span class="dib v-mid h1 w1 mr2" style="background-color: #FF9900"></span><b>Caution</b>: steep for the rating</li>
                        <li class="pv1"><span class="dib v-mid h1 w1 mr2" style="background-color: #E00000"></span><b>Avoid</b>: too steep for the rating</li>
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">GRM </span>layer</summary><div class="avy-howto-body"><p>This layer shows how steep is too steep for the forecast danger level. It uses the <a class="no-underline fancy-link relative dark-gray b" href="https://www.wsl.ch/en/publications/caution-avalanches/">Graphical Reduction Method</a> (GRM), a Swiss planning rule of thumb: the higher the danger, the gentler the terrain you should stick to.</p><p>Orange slopes are steep enough to need extra caution at the rating for that elevation and aspect, and riders with limited experience should stay off them. Red slopes are steep enough that the method says to avoid them. Unshaded doesn't mean safe. Judge a slope by its steepest part, not its average angle.</p><table><thead><tr><th>Level</th><th><span class="dib v-mid h1 w1 mr2" style="background-color: #FF9900"></span>Caution</th><th><span class="dib v-mid h1 w1 mr2" style="background-color: #E00000"></span>Avoid</th></tr></thead><tbody><tr class="b"><td>Low (forecast)</td><td>40&deg;+</td><td>&ndash;</td></tr><tr class="b"><td>Moderate (forecast)</td><td>35&ndash;40&deg;</td><td>40&deg;+</td></tr><tr><td>Considerable</td><td>30&ndash;35&deg;</td><td>35&deg;+</td></tr><tr><td>High</td><td>25&ndash;30&deg;</td><td>30&deg;+</td></tr><tr><td>Extreme</td><td>&ndash;</td><td>All slopes</td></tr></tbody></table><p>Use this layer to narrow down which terrain to consider while planning, not to judge the danger on any one slope. It's based on the regional rating, so it doesn't account for spatial variability, connected terrain or runouts. Check the terrain above and below you.</p><p>Forecast elevation bands and aspects blend together rather than meeting at a sharp line, so the shading blurs band edges by &plusmn;650' and aspect edges by &plusmn;22.5&deg;, using the worse rating where they overlap.</p></div></details>
            </div>
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e5550-20310f fff200&#10;a0-0e0-5549f 50b848" onclick="clickFunc(this, 'danger-tooltip-BAC-3004'); return false;" onmouseout="outFunc('danger-tooltip-BAC-3004')" onblur="outFunc('danger-tooltip-BAC-3004')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-BAC-3004" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-BAC-3004">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (above 8701')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (6201' to 8700')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 6200')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p><p>Forecast elevation bands and aspects blend together rather than meeting at a sharp line. The list shows the ratings as forecast, but the map layer and copied rules blur band edges by &plusmn;650' and aspect edges by &plusmn;22.5&deg;, using the worse rating where they overlap.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a270-135e5550-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-BAC-3004'); return false;" onmouseout="outFunc('problem-1-tooltip-BAC-3004')" onblur="outFunc('problem-1-tooltip-BAC-3004')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-BAC-3004" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-BAC-3004">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (above 8701')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (6201' to 8700')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Forecast elevation bands and aspects blend together rather than meeting at a sharp line. The list shows the problem's aspects and elevations as forecast, but the map layer and copied rules blur band edges by &plusmn;650' and aspect edges by &plusmn;22.5&deg;, so the shaded area is larger than the list.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f6 mv1">
                <strong>Issued at:</strong> Friday, November 27, 2026 7:00AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://bridgeportavalanchecenter.org/">Bridgeport Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://bridgeportavalanchecenter.org/avalanche-forecast/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="ESAC-128-report" class="avy-zone dn" data-id="ESAC-128" data-color="#fff200" data-published="Friday, November 27, 2026 7:00AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Steep Terrain (GRM)</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="s40-90a0-0e0-8849f FF9900&#10;s35-40a0-0e8850-20310f FF9900&#10;s40-90a0-0e8850-20310f E00000" onclick="clickFunc(this, 'grm-tooltip-ESAC-128'); return false;" onmouseout="outFunc('grm-tooltip-ESAC-128')" onblur="outFunc('grm-tooltip-ESAC-128')" href="#" role="button" aria-label="Copy GRM rules"><span class="tooltiptext" id="grm-tooltip-ESAC-128" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7">
                        <li class="pv1"><span class="dib v-mid h1 w1 mr2" style="background-color: #FF9900"></span><b>Caution</b>: steep for the rating</li>
                        <li class="pv1"><span class="dib v-mid h1 w1 mr2" style="background-color: #E00000"></span><b>Avoid</b>: too steep for the rating</li>
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">GRM </span>layer</summary><div class="avy-howto-body"><p>This layer shows how steep is too steep for the forecast danger level. It uses the <a class="no-underline fancy-link relative dark-gray b" href="https://www.wsl.ch/en/publications/caution-avalanches/">Graphical Reduction Method</a> (GRM), a Swiss planning rule of thumb: the higher the danger, the gentler the terrain you should stick to.</p><p>Orange slopes are steep enough to need extra caution at the rating for that elevation and aspect, and riders with limited experience should stay off them. Red slopes are steep enough that the method says to avoid them. Unshaded doesn't mean safe. Judge a slope by its steepest part, not its average angle.</p><table><thead><tr><th>Level</th><th><span class="dib v-mid h1 w1 mr2" style="background-color: #FF9900"></span>Caution</th><th><span class="dib v-mid h1 w1 mr2" style="background-color: #E00000"></span>Avoid</th></tr></thead><tbody><tr class="b"><td>Low (forecast)</td><td>40&deg;+</td><td>&ndash;</td></tr><tr class="b"><td>Moderate (forecast)</td><td>35&ndash;40&deg;</td><td>40&deg;+</td></tr><tr><td>Considerable</td><td>30&ndash;35&deg;</td><td>35&deg;+</td></tr><tr><td>High</td><td>25&ndash;30&deg;</td><td>30&deg;+</td></tr><tr><td>Extreme</td><td>&ndash;</td><td>All slopes</td></tr></tbody></table><p>Use this layer to narrow down which terrain to consider while planning, not to judge the danger on any one slope. It's based on the regional rating, so it doesn't account for spatial variability, connected terrain or runouts. Check the terrain above and below you.</p><p>Forecast elevation bands and aspects blend together rather than meeting at a sharp line, so the shading blurs band edges by &plusmn;650' and aspect edges by &plusmn;22.5&deg;, using the worse rating where they overlap.</p></div></details>
            </div>
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e8850-20310f fff200&#10;a0-0e0-8849f 50b848" onclick="clickFunc(this, 'danger-tooltip-ESAC-128'); return false;" onmouseout="outFunc('danger-tooltip-ESAC-128')" onblur="outFunc('danger-tooltip-ESAC-128')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-ESAC-128" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-ESAC-128">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (above 10501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (9501' to 10500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 9500')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p><p>Forecast elevation bands and aspects blend together rather than meeting at a sharp line. The list shows the ratings as forecast, but the map layer and copied rules blur band edges by &plusmn;650' and aspect edges by &plusmn;22.5&deg;, using the worse rating where they overlap.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a270-135e8850-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-ESAC-128'); return false;" onmouseout="outFunc('problem-1-tooltip-ESAC-128')" onblur="outFunc('problem-1-tooltip-ESAC-128')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-ESAC-128" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-ESAC-128">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (above 10501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (9501' to 10500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Forecast elevation bands and aspects blend together rather than meeting at a sharp line. The list shows the problem's aspects and elevations as forecast, but the map layer and copied rules blur band edges by &plusmn;650' and aspect edges by &plusmn;22.5&deg;, so the shaded area is larger than the list.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Eastern Sierra Avalanche Center doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f6 mv1">
                <strong>Issued at:</strong> Friday, November 27, 2026 7:00AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.esavalanche.org/">Eastern Sierra Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.esavalanche.org/forecasts#/eastside-region">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="MSAC-3044-report" class="avy-zone dn" data-id="MSAC-3044" data-color="#939598" data-published="Wednesday, November 25, 2026 6:56AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.shastaavalanche.org/forecasts/avalanche/mount-shasta">MSAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://shastaavalanche.org/">Mount Shasta Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.shastaavalanche.org/forecasts/avalanche/mount-shasta">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="SAC-2458-report" class="avy-zone dn" data-id="SAC-2458" data-color="#50b848" data-published="Friday, November 27, 2026 6:39AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Steep Terrain (GRM)</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="s40-90a0-0e0-20310f FF9900" onclick="clickFunc(this, 'grm-tooltip-SAC-2458'); return false;" onmouseout="outFunc('grm-tooltip-SAC-2458')" onblur="outFunc('grm-tooltip-SAC-2458')" href="#" role="button" aria-label="Copy GRM rules"><span class="tooltiptext" id="grm-tooltip-SAC-2458" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7">
                        <li class="pv1"><span class="dib v-mid h1 w1 mr2" style="background-color: #FF9900"></span><b>Caution</b>: steep for the rating</li>
                        <li class="pv1"><span class="dib v-mid h1 w1 mr2" style="background-color: #E00000"></span><b>Avoid</b>: too steep for the rating</li>
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">GRM </span>layer</summary><div class="avy-howto-body"><p>This layer shows how steep is too steep for the forecast danger level. It uses the <a class="no-underline fancy-link relative dark-gray b" href="https://www.wsl.ch/en/publications/caution-avalanches/">Graphical Reduction Method</a> (GRM), a Swiss planning rule of thumb: the higher the danger, the gentler the terrain you should stick to.</p><p>Orange slopes are steep enough to need extra caution at the rating for that elevation and aspect, and riders with limited experience should stay off them. Red slopes are steep enough that the method says to avoid them. Unshaded doesn't mean safe. Judge a slope by its steepest part, not its average angle.</p><table><thead><tr><th>Level</th><th><span class="dib v-mid h1 w1 mr2" style="background-color: #FF9900"></span>Caution</th><th><span class="dib v-mid h1 w1 mr2" style="background-color: #E00000"></span>Avoid</th></tr></thead><tbody><tr class="b"><td>Low (forecast)</td><td>40&deg;+</td><td>&ndash;</td></tr><tr><td>Moderate</td><td>35&ndash;40&deg;</td><td>40&deg;+</td></tr><tr><td>Considerable</td><td>30&ndash;35&deg;</td><td>35&deg;+</td></tr><tr><td>High</td><td>25&ndash;30&deg;</td><td>30&deg;+</td></tr><tr><td>Extreme</td><td>&ndash;</td><td>All slopes</td></tr></tbody></table><p>Use this layer to narrow down which terrain to consider while planning, not to judge the danger on any one slope. It's based on the regional rating, so it doesn't account for spatial variability, connected terrain or runouts. Check the terrain above and below you.</p><p>Forecast elevation bands and aspects blend together rather than meeting at a sharp line, so the shading blurs band edges by &plusmn;650' and aspect edges by &plusmn;22.5&deg;, using the worse rating where they overlap.</p></div></details>
            </div>
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e0-20310f 50b848" onclick="clickFunc(this, 'danger-tooltip-SAC-2458'); return false;" onmouseout="outFunc('danger-tooltip-SAC-2458')" onblur="outFunc('danger-tooltip-SAC-2458')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-SAC-2458" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-SAC-2458">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (above 9201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (7801' to 9200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 7800')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p><p>Forecast elevation bands and aspects blend together rather than meeting at a sharp line. The list shows the ratings as forecast, but the map layer and copied rules blur band edges by &plusmn;650' and aspect edges by &plusmn;22.5&deg;, using the worse rating where they overlap.</p></div></details>
            </div>
            

            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Sierra Avalanche Center doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f6 mv1">
                <strong>Issued at:</strong> Friday, November 27, 2026 6:39AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://www.sierraavalanchecenter.org/">Sierra Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.sierraavalanchecenter.org/forecasts/avalanche/central-sierra-nevada#/central-sierra-nevada/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
    </div>
    <div class="ph3 w-100 w-50-ns mt4 mt0-ns">
        <div class="avy-map-card avy-map-framed">
            <h3 class="avy-layer-title">California Forecast Zones</h3>
            <span class="avy-map-tip">Click a zone to view</span>
            <div class="avy-map" id="map"></div>
            <details id="zone-areas" class="avy-howto dn"><summary>Areas in this zone</summary><div class="avy-howto-body"><p><b>This zone covers:</b> <span id="zone-areas-list"></span></p></div></details>
        </div>
    </div>
</div>

<hr id="hr-0" class="mw5 p0 mv4 o-70 b0 bt b--light-red light-red bg-light-red">


{% include feedback.html %}


<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer" role="button" tabindex="0" aria-expanded="false" aria-controls="issues">Show Known Issues</p>
<section id="issues" class="overflow-hidden tc f6" aria-live="polite">
</section>