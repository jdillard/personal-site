---
layout: page
title: Utah Avalanche Forecast Layers for CalTopo
description: The latest avalanche forecasts for Utah as CalTopo map layers, with danger rating and avalanche problem shading for each advisory zone.
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
                
                <option value="UAC-1744" title="Abajos" selected="">Abajos</option>
                
                <option value="UAC-1736" title="Logan" >Logan</option>
                
                <option value="UAC-1742" title="Moab" >Moab</option>
                
                <option value="UAC-1737" title="Ogden" >Ogden</option>
                
                <option value="UAC-1739" title="Provo" >Provo</option>
                
                <option value="UAC-1738" title="Salt Lake" >Salt Lake</option>
                
                <option value="UAC-1741" title="Skyline" >Skyline</option>
                
                <option value="UAC-1743" title="Southwest" >Southwest</option>
                
                <option value="UAC-1740" title="Uintas" >Uintas</option>
                
            </select>
        </span>
        <span class="avy-picker">
            <label for="regionSel">Region</label>
            <select class="avy-select" id="regionSel">
                <option value="/avy/">All Regions</option>
                <optgroup label="US">
                    
                    
                    <option value="/avy/#region-ak">Alaska</option>
                    
                    
                    
                    <option value="/avy/#region-az">Arizona</option>
                    
                    
                    
                    <option value="/avy/#region-ca">California</option>
                    
                    
                    
                    <option value="/avy/#region-co">Colorado</option>
                    
                    
                    
                    <option value="/avy/#region-id">Idaho</option>
                    
                    
                    
                    <option value="/avy/#region-mt">Montana</option>
                    
                    
                    
                    <option value="/avy/#region-nh">New Hampshire</option>
                    
                    
                    
                    <option value="/avy/#region-nm">New Mexico</option>
                    
                    
                    
                    <option value="/avy/#region-ny">New York</option>
                    
                    
                    
                    <option value="/avy/#region-or">Oregon</option>
                    
                    
                    
                    <option value="/avy/#region-ut" selected="">Utah</option>
                    
                    
                    
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
        
        <div id="UAC-1744-report" class="avy-zone" data-id="UAC-1744" data-color="#939598" data-published="False">
            
            
            
            <div class="avy-note-wrap">
                <div class="shadow-5 dark-blue bg-lightest-blue bl bw3 b--dark-blue mv3 tl lh-copy" style="border-radius: 5px; font-size: 1.05em; padding: .1em 1.75em;" role="note">
                    <p class="i" style="margin: .8em 0;"><b>Note:</b> Danger and problem layers aren't available here, as this site doesn't have access to the Utah Avalanche Center's forecast data. Please visit the <a class="no-underline fancy-link relative dark-blue b" href="https://utahavalanchecenter.org/forecast/abajos">Utah Avalanche Center</a> for the latest forecast.</p>
                </div>
            </div>
            
            

            

            
            
        </div>
        
        <div id="UAC-1736-report" class="avy-zone dn" data-id="UAC-1736" data-color="#939598" data-published="False">
            
            
            
            <div class="avy-note-wrap">
                <div class="shadow-5 dark-blue bg-lightest-blue bl bw3 b--dark-blue mv3 tl lh-copy" style="border-radius: 5px; font-size: 1.05em; padding: .1em 1.75em;" role="note">
                    <p class="i" style="margin: .8em 0;"><b>Note:</b> Danger and problem layers aren't available here, as this site doesn't have access to the Utah Avalanche Center's forecast data. Please visit the <a class="no-underline fancy-link relative dark-blue b" href="https://utahavalanchecenter.org/forecast/logan">Utah Avalanche Center</a> for the latest forecast.</p>
                </div>
            </div>
            
            

            

            
            
        </div>
        
        <div id="UAC-1742-report" class="avy-zone dn" data-id="UAC-1742" data-color="#939598" data-published="False">
            
            
            
            <div class="avy-note-wrap">
                <div class="shadow-5 dark-blue bg-lightest-blue bl bw3 b--dark-blue mv3 tl lh-copy" style="border-radius: 5px; font-size: 1.05em; padding: .1em 1.75em;" role="note">
                    <p class="i" style="margin: .8em 0;"><b>Note:</b> Danger and problem layers aren't available here, as this site doesn't have access to the Utah Avalanche Center's forecast data. Please visit the <a class="no-underline fancy-link relative dark-blue b" href="https://utahavalanchecenter.org/forecast/moab">Utah Avalanche Center</a> for the latest forecast.</p>
                </div>
            </div>
            
            

            

            
            
        </div>
        
        <div id="UAC-1737-report" class="avy-zone dn" data-id="UAC-1737" data-color="#939598" data-published="False">
            
            
            
            <div class="avy-note-wrap">
                <div class="shadow-5 dark-blue bg-lightest-blue bl bw3 b--dark-blue mv3 tl lh-copy" style="border-radius: 5px; font-size: 1.05em; padding: .1em 1.75em;" role="note">
                    <p class="i" style="margin: .8em 0;"><b>Note:</b> Danger and problem layers aren't available here, as this site doesn't have access to the Utah Avalanche Center's forecast data. Please visit the <a class="no-underline fancy-link relative dark-blue b" href="https://utahavalanchecenter.org/forecast/ogden">Utah Avalanche Center</a> for the latest forecast.</p>
                </div>
            </div>
            
            

            

            
            
        </div>
        
        <div id="UAC-1739-report" class="avy-zone dn" data-id="UAC-1739" data-color="#939598" data-published="False">
            
            
            
            <div class="avy-note-wrap">
                <div class="shadow-5 dark-blue bg-lightest-blue bl bw3 b--dark-blue mv3 tl lh-copy" style="border-radius: 5px; font-size: 1.05em; padding: .1em 1.75em;" role="note">
                    <p class="i" style="margin: .8em 0;"><b>Note:</b> Danger and problem layers aren't available here, as this site doesn't have access to the Utah Avalanche Center's forecast data. Please visit the <a class="no-underline fancy-link relative dark-blue b" href="https://utahavalanchecenter.org/forecast/provo">Utah Avalanche Center</a> for the latest forecast.</p>
                </div>
            </div>
            
            

            

            
            
        </div>
        
        <div id="UAC-1738-report" class="avy-zone dn" data-id="UAC-1738" data-color="#939598" data-published="False">
            
            
            
            <div class="avy-note-wrap">
                <div class="shadow-5 dark-blue bg-lightest-blue bl bw3 b--dark-blue mv3 tl lh-copy" style="border-radius: 5px; font-size: 1.05em; padding: .1em 1.75em;" role="note">
                    <p class="i" style="margin: .8em 0;"><b>Note:</b> Danger and problem layers aren't available here, as this site doesn't have access to the Utah Avalanche Center's forecast data. Please visit the <a class="no-underline fancy-link relative dark-blue b" href="https://utahavalanchecenter.org/forecast/salt-lake">Utah Avalanche Center</a> for the latest forecast.</p>
                </div>
            </div>
            
            

            

            
            
        </div>
        
        <div id="UAC-1741-report" class="avy-zone dn" data-id="UAC-1741" data-color="#939598" data-published="False">
            
            
            
            <div class="avy-note-wrap">
                <div class="shadow-5 dark-blue bg-lightest-blue bl bw3 b--dark-blue mv3 tl lh-copy" style="border-radius: 5px; font-size: 1.05em; padding: .1em 1.75em;" role="note">
                    <p class="i" style="margin: .8em 0;"><b>Note:</b> Danger and problem layers aren't available here, as this site doesn't have access to the Utah Avalanche Center's forecast data. Please visit the <a class="no-underline fancy-link relative dark-blue b" href="https://utahavalanchecenter.org/forecast/skyline">Utah Avalanche Center</a> for the latest forecast.</p>
                </div>
            </div>
            
            

            

            
            
        </div>
        
        <div id="UAC-1743-report" class="avy-zone dn" data-id="UAC-1743" data-color="#939598" data-published="False">
            
            
            
            <div class="avy-note-wrap">
                <div class="shadow-5 dark-blue bg-lightest-blue bl bw3 b--dark-blue mv3 tl lh-copy" style="border-radius: 5px; font-size: 1.05em; padding: .1em 1.75em;" role="note">
                    <p class="i" style="margin: .8em 0;"><b>Note:</b> Danger and problem layers aren't available here, as this site doesn't have access to the Utah Avalanche Center's forecast data. Please visit the <a class="no-underline fancy-link relative dark-blue b" href="https://utahavalanchecenter.org/forecast/southwest">Utah Avalanche Center</a> for the latest forecast.</p>
                </div>
            </div>
            
            

            

            
            
        </div>
        
        <div id="UAC-1740-report" class="avy-zone dn" data-id="UAC-1740" data-color="#939598" data-published="False">
            
            
            
            <div class="avy-note-wrap">
                <div class="shadow-5 dark-blue bg-lightest-blue bl bw3 b--dark-blue mv3 tl lh-copy" style="border-radius: 5px; font-size: 1.05em; padding: .1em 1.75em;" role="note">
                    <p class="i" style="margin: .8em 0;"><b>Note:</b> Danger and problem layers aren't available here, as this site doesn't have access to the Utah Avalanche Center's forecast data. Please visit the <a class="no-underline fancy-link relative dark-blue b" href="https://utahavalanchecenter.org/forecast/uintas">Utah Avalanche Center</a> for the latest forecast.</p>
                </div>
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