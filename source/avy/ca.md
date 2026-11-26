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

<div class="flex flex-column flex-row-ns mt4">
    <div id="regional_zones" class="ph3 w-100 w-50-ns">
        
        <div id="BAC-3004-report" class="avy-zone" data-id="BAC-3004" data-color="#939598" data-published="Monday, November 23, 2026 7:00AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgeportavalanchecenter.org/avalanche-forecast/">BAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://bridgeportavalanchecenter.org/">Bridgeport Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://bridgeportavalanchecenter.org/avalanche-forecast/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="ESAC-128-report" class="avy-zone dn" data-id="ESAC-128" data-color="#fff200" data-published="Wednesday, November 25, 2026 7:00AM">
            
            <div id="ESAC-128-title" class="mb4 tc">
                <div><a id="ESAC-128-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=37.55589080519621,-118.85603362526295&z=10&b=mbt&a=sc_a0-0e0-9500fc50b848pa0-0e9501-10500fcfff200pa0-0e10501-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-9500fc50b848pa0-0e9501-10500fcfff200pa0-0e10501-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%226067f138-468c-4d0d-a11c-6d6df9ea7730%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-113e9501-10500fcA200FFpa293-113e10501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e10501-20310f fff200&#10;a0-0e9501-10500f fff200&#10;a0-0e0-9500f 50b848" onclick="clickFunc(this, 'danger-tooltip-ESAC-128'); return false;" onmouseout="outFunc('danger-tooltip-ESAC-128')" onblur="outFunc('danger-tooltip-ESAC-128')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-ESAC-128" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
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
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Persistent Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a293-113e10501-20310f A200FF&#10;a293-113e9501-10500f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-ESAC-128'); return false;" onmouseout="outFunc('problem-1-tooltip-ESAC-128')" onblur="outFunc('problem-1-tooltip-ESAC-128')" href="#" role="button" aria-label="Copy 2026-11-26 Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-ESAC-128" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-ESAC-128">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">NW to E aspects (above 10501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">NW to E aspects (9501' to 10500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Eastern Sierra Avalanche Center doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 7:00AM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.esavalanche.org/">Eastern Sierra Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.esavalanche.org/forecasts#/eastside-region">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="MSAC-3044-report" class="avy-zone dn" data-id="MSAC-3044" data-color="#939598" data-published="Wednesday, November 25, 2026 6:56AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.shastaavalanche.org/forecasts/avalanche/mount-shasta">MSAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://shastaavalanche.org/">Mount Shasta Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.shastaavalanche.org/forecasts/avalanche/mount-shasta">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="SAC-2458-report" class="avy-zone dn" data-id="SAC-2458" data-color="#939598" data-published="False">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.sierraavalanchecenter.org/forecasts/avalanche/central-sierra-nevada#/central-sierra-nevada/">SAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://www.sierraavalanchecenter.org/">Sierra Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.sierraavalanchecenter.org/forecasts/avalanche/central-sierra-nevada#/central-sierra-nevada/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
    </div>
    <div class="ph3 w-100 w-50-ns">
        <div class="avy-map" id="map"></div>
        <p id="zone-areas" class="f6 black-70 lh-copy tc mt3 dn"><b>This zone covers:</b> <span id="zone-areas-list"></span></p>
    </div>
</div>

<hr id="hr-0" class="mw5 p0 mv4 o-70 b0 bt b--light-red light-red bg-light-red">


{% include feedback.html %}


<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer" role="button" tabindex="0" aria-expanded="false" aria-controls="issues">Show Known Issues</p>
<section id="issues" class="overflow-hidden tc f6" aria-live="polite">
</section>