---
layout: page
title: Idaho Avalanche Forecast Layers for CalTopo
description: The latest avalanche forecasts for Idaho as CalTopo map layers, with danger rating and avalanche problem shading for each advisory zone.
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
                
                <option value="IPAC-3018" title="Selkirk Mountains" selected="">Selkirk Mountains</option>
                
                <option value="IPAC-1902" title="Silver Valley & Bitterroot Mountains" >Silver Valley & Bitterroot Mountains</option>
                
                <option value="IPAC-1900" title="West Cabinet Mountains" >West Cabinet Mountains</option>
                
                <option value="PAC-3014" title="Salmon River Mountains" >Salmon River Mountains</option>
                
                <option value="PAC-3015" title="West Mountains" >West Mountains</option>
                
                <option value="SNFAC-2907" title="Banner Summit" >Banner Summit</option>
                
                <option value="SNFAC-2904" title="Galena Summit & Eastern Mtns" >Galena Summit & Eastern Mtns</option>
                
                <option value="SNFAC-2906" title="Sawtooth & Western Smoky Mtns" >Sawtooth & Western Smoky Mtns</option>
                
                <option value="SNFAC-2905" title="Soldier & Wood River Valley Mtns" >Soldier & Wood River Valley Mtns</option>
                
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
                    
                    
                    
                    <option value="/avy/#region-id" selected="">Idaho</option>
                    
                    
                    
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
        
        <div id="IPAC-3018-report" class="avy-zone" data-id="IPAC-3018" data-color="#939598" data-published="Friday, November 20, 2026 10:15AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.idahopanhandleavalanche.org/forecasts/#/selkirk-mountains/">IPAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.idahopanhandleavalanche.org/">Idaho Panhandle Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.idahopanhandleavalanche.org/forecasts/#/selkirk-mountains/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="IPAC-1902-report" class="avy-zone dn" data-id="IPAC-1902" data-color="#939598" data-published="Friday, November 20, 2026 10:15AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.idahopanhandleavalanche.org/forecasts/#/silver-valley-&-bitterroot-mountains/">IPAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.idahopanhandleavalanche.org/">Idaho Panhandle Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.idahopanhandleavalanche.org/forecasts/#/silver-valley-&-bitterroot-mountains/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="IPAC-1900-report" class="avy-zone dn" data-id="IPAC-1900" data-color="#939598" data-published="Friday, November 20, 2026 10:15AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.idahopanhandleavalanche.org/forecasts/#/west-cabinet-mountains/">IPAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.idahopanhandleavalanche.org/">Idaho Panhandle Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.idahopanhandleavalanche.org/forecasts/#/west-cabinet-mountains/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="PAC-3014-report" class="avy-zone dn" data-id="PAC-3014" data-color="#939598" data-published="Monday, November 23, 2026 7:20PM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://payetteavalanche.org/forecasts/avalanche/salmon-river-mountains">PAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://payetteavalanche.org/">Payette Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://payetteavalanche.org/forecasts/avalanche/salmon-river-mountains">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="PAC-3015-report" class="avy-zone dn" data-id="PAC-3015" data-color="#939598" data-published="Monday, November 23, 2026 7:20PM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://payetteavalanche.org/forecasts/avalanche/west-mountains">PAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://payetteavalanche.org/">Payette Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://payetteavalanche.org/forecasts/avalanche/west-mountains">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="SNFAC-2907-report" class="avy-zone dn" data-id="SNFAC-2907" data-color="#939598" data-published="Wednesday, November 25, 2026 9:09AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.sawtoothavalanche.com/forecasts/avalanche/banner-summit">SNFAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://www.sawtoothavalanche.com/">Sawtooth Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.sawtoothavalanche.com/forecasts/avalanche/banner-summit">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="SNFAC-2904-report" class="avy-zone dn" data-id="SNFAC-2904" data-color="#939598" data-published="Wednesday, November 25, 2026 9:09AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.sawtoothavalanche.com/forecasts/avalanche/galena-summit-&-eastern-mtns">SNFAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://www.sawtoothavalanche.com/">Sawtooth Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.sawtoothavalanche.com/forecasts/avalanche/galena-summit-&-eastern-mtns">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="SNFAC-2906-report" class="avy-zone dn" data-id="SNFAC-2906" data-color="#939598" data-published="Wednesday, November 25, 2026 9:09AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.sawtoothavalanche.com/forecasts/avalanche/sawtooth-&-western-smoky-mtns">SNFAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://www.sawtoothavalanche.com/">Sawtooth Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.sawtoothavalanche.com/forecasts/avalanche/sawtooth-&-western-smoky-mtns">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="SNFAC-2905-report" class="avy-zone dn" data-id="SNFAC-2905" data-color="#939598" data-published="Wednesday, November 25, 2026 9:09AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.sawtoothavalanche.com/forecasts/avalanche/soldier-&-wood-river-valley-mtns">SNFAC</a> for more information.</div>
            
            

            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://www.sawtoothavalanche.com/">Sawtooth Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.sawtoothavalanche.com/forecasts/avalanche/soldier-&-wood-river-valley-mtns">full forecast</a> before heading out.
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