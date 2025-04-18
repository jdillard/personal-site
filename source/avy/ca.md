---
layout: page
title: California Avalanche Danger Report Interactive Map
description: Autogenerated DEM Shading rules for each advisory zone in California for quickly adding avalanche danger and problem layers in CalTopo.
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
            
            <option value="BAC-1350" selected="">Bridgeport Avalanche Center</option>
            
            <option value="ESAC-128" >Eastside Region</option>
            
            <option value="MSAC-1833" >Mount Shasta</option>
            
            <option value="SAC-1605" >Central Sierra Nevada</option>
            
        </select>
    </div>
</div>

<div class="flex flex-column flex-row-ns">
    <div id="regional_zones" class="ph3 w-100 w-50-ns">
        
        <div id="BAC-1350-report" class="avy-zone" data-id="BAC-1350" data-color="#939598" data-min="0"  data-max="20310" data-btl="6200" data-atl="8700" data-published="Friday, April 11, 2025 7:00AM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://bridgeportavalanchecenter.org/avalanche-forecast/"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgeportavalanchecenter.org/avalanche-forecast/">BAC</a> for more information.</div>
            

            
            
        </div>
        
        <div id="ESAC-128-report" class="avy-zone dn" data-id="ESAC-128" data-color="#939598" data-min="0"  data-max="20310" data-btl="7800" data-atl="10000" data-published="Monday, April 14, 2025 7:00AM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://www.esavalanche.org/forecasts#/eastside-region"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.esavalanche.org/forecasts#/eastside-region">ESAC</a> for more information.</div>
            

            
            
        </div>
        
        <div id="MSAC-1833-report" class="avy-zone dn" data-id="MSAC-1833" data-color="#939598" data-min="0"  data-max="20310" data-btl="6200" data-atl="8700" data-published="Sunday, April 13, 2025 6:30AM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://www.shastaavalanche.org/advisories/avalanche-advisory/#/mount-shasta"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.shastaavalanche.org/advisories/avalanche-advisory/#/mount-shasta">MSAC</a> for more information.</div>
            

            
            
        </div>
        
        <div id="SAC-1605-report" class="avy-zone dn" data-id="SAC-1605" data-color="#fff200" data-min="0"  data-max="20310" data-btl="6200" data-atl="8700" data-published="Saturday, April 19, 2025 6:25AM">
            <h3 class="tc bb b--moon-gray">Avalanche Report <a target="_blank" href="https://www.sierraavalanchecenter.org/forecasts/#/central-sierra-nevada"><img style="width: 15px;" src="/assets/images/svg/info-icon.svg"></a></h3>
            
            <div id="SAC-1605-title" class="mv4 tc">
                <div><a id="SAC-1605-url" class="no-underline black-70 pa2 hover-light-red b--moon-gray bg-light-gray ba" target="_blank" data-url="https://caltopo.com/map.html#ll=39.0956315357288,-120.118373536066&z=10&b=mbt&a=sc_a0-0e0-6200fcfff200pa0-0e6201-8700fcfff200pa0-0e8701-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222025-04-20%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6200fcfff200pa0-0e6201-8700fcfff200pa0-0e8701-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22cb98a7e2-7107-45d0-8204-3a5c54326d59%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222025-04-20%20Wet%20Loose%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e0-6200fcA200FFpa158-158e6201-8700fcA200FFpa158-158e8701-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D" href="https://caltopo.com/map.html#ll=39.0956315357288,-120.118373536066&z=10&b=mbt&a=sc_a0-0e0-6200fcfff200pa0-0e6201-8700fcfff200pa0-0e8701-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222025-04-20%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6200fcfff200pa0-0e6201-8700fcfff200pa0-0e8701-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22cb98a7e2-7107-45d0-8204-3a5c54326d59%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222025-04-20%20Wet%20Loose%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e0-6200fcA200FFpa158-158e6201-8700fcA200FFpa158-158e8701-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Pre-populated CalTopo Map</a></div>
            </div>
            <dl class="f6">
                <dt>
                    <strong>2025-04-20 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e8701-20310f fff200&#10;a0-0e6201-8700f fff200&#10;a0-0e0-6200f fff200" onclick="clickFunc(this, 'danger-tooltip-1605'); return false;" onmouseout="outFunc('danger-tooltip-1605')" href="#"><span class="tooltiptext" id="danger-tooltip-1605">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-SAC-1605">
                    
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
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (below 6200')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2025-04-20 Wet Loose</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a158-158e8701-20310f A200FF&#10;a158-158e6201-8700f A200FF&#10;a158-158e0-6200f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-1605'); return false;" onmouseout="outFunc('problem-1-tooltip-1605')" href="#"><span class="tooltiptext" id="problem-1-tooltip-1605">Copy to clipboard</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg"></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-SAC-1605">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 8701')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (6201' to 8700')</span>
                            </li>
                        
                            <li class="pv1 btl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (below 6200')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            
            
            <p class="tc f6">
                <strong>Issued at:</strong> Saturday, April 19, 2025 6:25AM<br />
                <strong>Issued by:</strong> <a class="no-underline fancy-link relative light-red" href="https://www.sierraavalanchecenter.org/forecasts/#/central-sierra-nevada">SAC</a>
            </p>
            
        </div>
        
    </div>
    <div class="ph3 w-100 w-50-ns">
        <h3 class="tc bb b--moon-gray">Zone</h3>
        <div style="height: 300px;" id="map"></div>
        
        <div id="BAC-1350-shape" data-geojson="/assets/json/avalanche-zones/BAC-1350.geojson" class="avy-zone">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/BAC-1350.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="ESAC-128-shape" data-geojson="/assets/json/avalanche-zones/ESAC-128.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/ESAC-128.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="MSAC-1833-shape" data-geojson="/assets/json/avalanche-zones/MSAC-1833.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/MSAC-1833.geojson" download="">Download GeoJSON</a></div>
        </div>
        
        <div id="SAC-1605-shape" data-geojson="/assets/json/avalanche-zones/SAC-1605.geojson" class="avy-zone dn">
            <div class="mt1 tc"><a class="no-underline fancy-link relative light-red f6" target="_blank" href="/assets/json/avalanche-zones/SAC-1605.geojson" download="">Download GeoJSON</a></div>
        </div>
        
    </div>
</div>

<hr id="hr-0" class="mw5 p0 mv4 o-70 b0 bt b--light-red light-red bg-light-red">
<section class="tc lh-copy">
    <strong class="f6">Change Regions:</strong>
    <select class="f6 ma1 bg-near-white pa2" id="regionSel">
        
        
        <option value="/avy/ca.html" selected="">California</option>
        
        
        
        <option value="/avy/id.html">Idaho</option>
        
        
        
        <option value="/avy/wy.html">Wyoming</option>
        
        
        
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