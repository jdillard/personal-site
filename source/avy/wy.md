---
layout: page
title: Wyoming Avalanche Danger Report Interactive Map
description: Autogenerated DEM Shading rules for each advisory zone in Wyoming for quickly adding avalanche danger and problem layers in CalTopo.
tool: avy
image:
  path: /assets/images/avy-layers.png
  width: 175
  height: 131
js_includes:
  - https://unpkg.com/leaflet/dist/leaflet.js
  - avy.js
css_includes:
 - https://unpkg.com/leaflet/dist/leaflet.css
---

<!-- Looking out for you... -->

<section class="measure center lh-copy f5-ns f6 ph2 mv3" style="text-align: justify;">
    <strong>"Where's the danger?"</strong> Here are autogenerated DEM Shading rules for each advisory zone that allow for quickly adding avalanche danger and problem layers to CalTopo maps.
</section>

<p id="settings-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Instructions</p>
<section id="settings" class="overflow-hidden" style="display:none;">
    <div class="mv2 ph2 center">
        <div class="fn f6 tc">
            <p class="measure lh-copy center"><a class="no-underline fancy-link relative light-red" href="https://training.caltopo.com/all_users/base-layers/custom2#dem">Digital Elevation Model (DEM)</a> shading let's you    create custom shading schemes based on elevation, slope, aspect and tree cover.</p>
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
            <div id="band-sliders">
                <p class="measure lh-copy center"><b>Adjusting bands</b></p>
                <p class="measure lh-copy center">
                    The default elevation bands may not be accurate for the current zone, you can adjust the bands by dragging the sliders.
                </p>
                <div class="ranges-display center mw5 mt3">
                    <div class="range-item range-1 bg-lightest-blue br2 pa2 mb2" id="atl-band"></div>
                    <div class="slider-container center mw5 mb2">
                        <input
                            class="mv2 w-100"
                            type="range"
                            id="atlSlider"
                            min="1"
                            max="20310"
                            value="5500"
                        >
                    </div>
                    <div class="range-item range-2 bg-light-blue br2 pa2 mb2" id="ntl-band"></div>
                    <div class="slider-container center mw5 mb2">
                        <input
                            class="mv2 w-100"
                            type="range"
                            id="btlSlider"
                            min="0"
                            max="20310"
                            value="1999"
                        >
                    </div>
                    <div class="range-item range-3 bg-blue br2 pa2 mb3" id="btl-band"></div>
                </div>
            </div>
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
        <strong class="f6">Select A Zone:</strong>
        <select class="f6 ma1 bg-near-white pa2" id="zoneSel">
            
            <option value="BTAC-2131" selected="">Gros Ventre</option>
            
            <option value="BTAC-2121" >Salt River and Wyoming Ranges</option>
            
            <option value="BTAC-2129" >Snake River Range</option>
            
            <option value="BTAC-2132" >Southern Wyoming Range</option>
            
            <option value="BTAC-2120" >Tetons</option>
            
            <option value="BTAC-2122" >Togwotee Pass</option>
            
            <option value="EWYAIX-1343" >Big Horns</option>
            
            <option value="EWYAIX-1344" >Sierra Madre</option>
            
            <option value="EWYAIX-1345" >Snowy Range</option>
            
        </select>
    </div>
</div>

<div class="flex flex-column flex-row-ns">
    <div id="regional_zones" class="ph3 w-100 w-50-ns">
        
        <div id="BTAC-2131-report" class="avy-zone" data-id="BTAC-2131" data-color="#939598" data-min="6000"  data-max="20310" data-btl="7500" data-atl="9000" data-published="Friday, November 22, 2024 5:30PM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://bridgertetonavalanchecenter.org/forecasts/#/gros-ventre/"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgertetonavalanchecenter.org/forecasts/#/gros-ventre/">BTAC</a> for more information.</div>
            

            
            
        </div>
        
        <div id="BTAC-2121-report" class="avy-zone dn" data-id="BTAC-2121" data-color="#939598" data-min="6000"  data-max="20310" data-btl="7500" data-atl="9000" data-published="Tuesday, May 06, 2025 10:09AM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://bridgertetonavalanchecenter.org/forecasts/#/salt-river-and-wyoming-ranges/"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgertetonavalanchecenter.org/forecasts/#/salt-river-and-wyoming-ranges/">BTAC</a> for more information.</div>
            

            
            
        </div>
        
        <div id="BTAC-2129-report" class="avy-zone dn" data-id="BTAC-2129" data-color="#939598" data-min="6000"  data-max="20310" data-btl="7500" data-atl="9000" data-published="Tuesday, May 06, 2025 10:09AM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://bridgertetonavalanchecenter.org/forecasts/#/snake-river-range"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgertetonavalanchecenter.org/forecasts/#/snake-river-range">BTAC</a> for more information.</div>
            

            
            
        </div>
        
        <div id="BTAC-2132-report" class="avy-zone dn" data-id="BTAC-2132" data-color="#939598" data-min="6000"  data-max="20310" data-btl="7500" data-atl="9000" data-published="Friday, November 22, 2024 5:30PM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://bridgertetonavalanchecenter.org/forecasts/#/southern-wyoming-range/"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgertetonavalanchecenter.org/forecasts/#/southern-wyoming-range/">BTAC</a> for more information.</div>
            

            
            
        </div>
        
        <div id="BTAC-2120-report" class="avy-zone dn" data-id="BTAC-2120" data-color="#939598" data-min="6000"  data-max="20310" data-btl="7500" data-atl="9000" data-published="Tuesday, May 06, 2025 10:09AM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://bridgertetonavalanchecenter.org/forecasts/#/tetons"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgertetonavalanchecenter.org/forecasts/#/tetons">BTAC</a> for more information.</div>
            

            
            
        </div>
        
        <div id="BTAC-2122-report" class="avy-zone dn" data-id="BTAC-2122" data-color="#939598" data-min="6000"  data-max="20310" data-btl="7500" data-atl="9000" data-published="Tuesday, May 06, 2025 10:09AM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://bridgertetonavalanchecenter.org/forecasts/#/togwotee-pass"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgertetonavalanchecenter.org/forecasts/#/togwotee-pass">BTAC</a> for more information.</div>
            

            
            
        </div>
        
        <div id="EWYAIX-1343-report" class="avy-zone dn" data-id="EWYAIX-1343" data-color="#939598" data-min="6000"  data-max="20310" data-btl="7500" data-atl="9000" data-published="False">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://ewyoavalanche.org"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://ewyoavalanche.org">EWYAIX</a> for more information.</div>
            

            
            
        </div>
        
        <div id="EWYAIX-1344-report" class="avy-zone dn" data-id="EWYAIX-1344" data-color="#939598" data-min="6000"  data-max="20310" data-btl="7500" data-atl="9000" data-published="False">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://ewyoavalanche.org"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://ewyoavalanche.org">EWYAIX</a> for more information.</div>
            

            
            
        </div>
        
        <div id="EWYAIX-1345-report" class="avy-zone dn" data-id="EWYAIX-1345" data-color="#939598" data-min="6000"  data-max="20310" data-btl="7500" data-atl="9000" data-published="False">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://ewyoavalanche.org"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://ewyoavalanche.org">EWYAIX</a> for more information.</div>
            

            
            
        </div>
        
    </div>
    <div class="ph3 w-100 w-50-ns">
        <h3 class="tc bb b--moon-gray">Zone</h3>
        <div style="height: 300px;" id="map"></div>
        
        <div id="BTAC-2131-shape" data-geojson="/assets/json/avalanche-zones/BTAC-2131.geojson" class="avy-zone">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/BTAC-2131.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="BTAC-2121-shape" data-geojson="/assets/json/avalanche-zones/BTAC-2121.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/BTAC-2121.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="BTAC-2129-shape" data-geojson="/assets/json/avalanche-zones/BTAC-2129.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/BTAC-2129.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="BTAC-2132-shape" data-geojson="/assets/json/avalanche-zones/BTAC-2132.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/BTAC-2132.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="BTAC-2120-shape" data-geojson="/assets/json/avalanche-zones/BTAC-2120.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/BTAC-2120.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="BTAC-2122-shape" data-geojson="/assets/json/avalanche-zones/BTAC-2122.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/BTAC-2122.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="EWYAIX-1343-shape" data-geojson="/assets/json/avalanche-zones/EWYAIX-1343.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/EWYAIX-1343.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="EWYAIX-1344-shape" data-geojson="/assets/json/avalanche-zones/EWYAIX-1344.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/EWYAIX-1344.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="EWYAIX-1345-shape" data-geojson="/assets/json/avalanche-zones/EWYAIX-1345.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/EWYAIX-1345.geojson" download="">Download GeoJSON</a></div>
        </div>
        
    </div>
</div>

<hr id="hr-0" class="mw5 p0 mv4 o-70 b0 bt b--light-red light-red bg-light-red">
<section class="tc lh-copy">
    <strong class="f6">Change Regions:</strong>
    <select class="f6 ma1 bg-near-white pa2" id="regionSel">
        
        
        <option value="/avy/ca.html">California</option>
        
        
        
        <option value="/avy/id.html">Idaho</option>
        
        
        
        <option value="/avy/wy.html" selected="">Wyoming</option>
        
        
        
        <option value="/avy/or.html">Oregon</option>
        
        
        
        <option value="/avy/ak.html">Alaska</option>
        
        
        
        <option value="/avy/mt.html">Montana</option>
        
        
        
        <option value="/avy/az.html">Arizona</option>
        
        
        
        <option value="/avy/nh.html">New Hampshire</option>
        
        
        
        <option value="/avy/wa.html">Washington</option>
        
        
        
        <option value="/avy/nm.html">New Mexico</option>
        
        
        
        <option value="/avy/ut.html">Utah</option>
        
        
        
        <option value="/avy/co.html">Colorado</option>
        
        
        <option value="/avy/canada.html">Canada</option>
    </select>
</section>


{% include feedback.html %}


<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer">Show Known Issues</p>
<section id="issues" class="overflow-hidden tc f6">
</section>