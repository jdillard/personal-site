---
layout: page
title: Montana Avalanche Forecast Layers for CalTopo
description: The latest avalanche forecasts for Montana as CalTopo map layers, with danger rating and avalanche problem shading for each advisory zone.
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
                
                <option value="FAC-3043" title="Flathead Range & Glacier NP" selected="">Flathead Range & Glacier NP</option>
                
                <option value="FAC-3040" title="Northern Whitefish Range" >Northern Whitefish Range</option>
                
                <option value="FAC-3041" title="Southern Whitefish Range" >Southern Whitefish Range</option>
                
                <option value="FAC-3042" title="Swan Range" >Swan Range</option>
                
                <option value="GNFAC-2819" title="Bridger Range" >Bridger Range</option>
                
                <option value="GNFAC-2827" title="Cooke City" >Cooke City</option>
                
                <option value="GNFAC-2826" title="Island Park" >Island Park</option>
                
                <option value="GNFAC-2825" title="Lionhead Area" >Lionhead Area</option>
                
                <option value="GNFAC-2821" title="Northern Gallatin Range" >Northern Gallatin Range</option>
                
                <option value="GNFAC-2822" title="Northern Madison Range" >Northern Madison Range</option>
                
                <option value="GNFAC-2824" title="Southern Gallatin Range" >Southern Gallatin Range</option>
                
                <option value="GNFAC-2823" title="Southern Madison Range" >Southern Madison Range</option>
                
                <option value="IPAC-1901" title="East Cabinet Mountains" >East Cabinet Mountains</option>
                
                <option value="IPAC-3019" title="Purcell Mountains" >Purcell Mountains</option>
                
                <option value="WCMAC-1724" title="Bitterroot" >Bitterroot</option>
                
                <option value="WCMAC-1723" title="Rattlesnake" >Rattlesnake</option>
                
                <option value="WCMAC-1722" title="Seeley Lake" >Seeley Lake</option>
                
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
                    
                    
                    
                    <option value="/avy/#region-mt" selected="">Montana</option>
                    
                    
                    
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
        
        <div id="FAC-3043-report" class="avy-zone" data-id="FAC-3043" data-color="#939598" data-published="Friday, November 27, 2026 1:52PM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.flatheadavalanche.org/avalanche-forecast/#/flathead-range-&-glacier-np">FAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.flatheadavalanche.org/">Flathead Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.flatheadavalanche.org/avalanche-forecast/#/flathead-range-&-glacier-np">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="FAC-3040-report" class="avy-zone dn" data-id="FAC-3040" data-color="#939598" data-published="Friday, November 27, 2026 1:52PM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.flatheadavalanche.org/avalanche-forecast/#/northern-whitefish-range">FAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.flatheadavalanche.org/">Flathead Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.flatheadavalanche.org/avalanche-forecast/#/northern-whitefish-range">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="FAC-3041-report" class="avy-zone dn" data-id="FAC-3041" data-color="#939598" data-published="Friday, November 27, 2026 1:52PM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.flatheadavalanche.org/avalanche-forecast/#/southern-whitefish-range">FAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.flatheadavalanche.org/">Flathead Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.flatheadavalanche.org/avalanche-forecast/#/southern-whitefish-range">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="FAC-3042-report" class="avy-zone dn" data-id="FAC-3042" data-color="#939598" data-published="Friday, November 27, 2026 1:52PM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.flatheadavalanche.org/avalanche-forecast/#/swan-range">FAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.flatheadavalanche.org/">Flathead Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.flatheadavalanche.org/avalanche-forecast/#/swan-range">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2819-report" class="avy-zone dn" data-id="GNFAC-2819" data-color="#939598" data-published="Friday, November 27, 2026 7:10AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.mtavalanche.com/avalanche-forecast#/bridger-range/">GNFAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/bridger-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2827-report" class="avy-zone dn" data-id="GNFAC-2827" data-color="#939598" data-published="Friday, November 27, 2026 7:10AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.mtavalanche.com/avalanche-forecast#/cooke-city/">GNFAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/cooke-city/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2826-report" class="avy-zone dn" data-id="GNFAC-2826" data-color="#939598" data-published="Friday, November 27, 2026 7:10AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.mtavalanche.com/avalanche-forecast#/island-park/">GNFAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/island-park/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2825-report" class="avy-zone dn" data-id="GNFAC-2825" data-color="#939598" data-published="Friday, November 27, 2026 7:10AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.mtavalanche.com/avalanche-forecast#/lionhead-area/">GNFAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/lionhead-area/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2821-report" class="avy-zone dn" data-id="GNFAC-2821" data-color="#939598" data-published="Friday, November 27, 2026 7:10AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.mtavalanche.com/avalanche-forecast#/northern-gallatin-range/">GNFAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/northern-gallatin-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2822-report" class="avy-zone dn" data-id="GNFAC-2822" data-color="#939598" data-published="Friday, November 27, 2026 7:10AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.mtavalanche.com/avalanche-forecast#/northern-madison-range/">GNFAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/northern-madison-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2824-report" class="avy-zone dn" data-id="GNFAC-2824" data-color="#939598" data-published="Friday, November 27, 2026 7:10AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.mtavalanche.com/avalanche-forecast#/southern-gallatin-range/">GNFAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/southern-gallatin-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2823-report" class="avy-zone dn" data-id="GNFAC-2823" data-color="#939598" data-published="Friday, November 27, 2026 7:10AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.mtavalanche.com/avalanche-forecast#/southern-madison-range/">GNFAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/southern-madison-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="IPAC-1901-report" class="avy-zone dn" data-id="IPAC-1901" data-color="#939598" data-published="False">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.idahopanhandleavalanche.org/forecasts/#/east-cabinet-mountains/">IPAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.idahopanhandleavalanche.org/">Idaho Panhandle Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.idahopanhandleavalanche.org/forecasts/#/east-cabinet-mountains/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="IPAC-3019-report" class="avy-zone dn" data-id="IPAC-3019" data-color="#939598" data-published="False">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.idahopanhandleavalanche.org/forecasts/#/purcell-mountains/">IPAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.idahopanhandleavalanche.org/">Idaho Panhandle Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.idahopanhandleavalanche.org/forecasts/#/purcell-mountains/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="WCMAC-1724-report" class="avy-zone dn" data-id="WCMAC-1724" data-color="#939598" data-published="Friday, November 27, 2026 6:56AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://missoulaavalanche.org/forecasts/#/Bitterroot">WCMAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://missoulaavalanche.org/">West Central Montana Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://missoulaavalanche.org/forecasts/#/Bitterroot">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="WCMAC-1723-report" class="avy-zone dn" data-id="WCMAC-1723" data-color="#939598" data-published="Friday, November 27, 2026 6:56AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://missoulaavalanche.org/forecasts/#/rattlesnake">WCMAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://missoulaavalanche.org/">West Central Montana Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://missoulaavalanche.org/forecasts/#/rattlesnake">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="WCMAC-1722-report" class="avy-zone dn" data-id="WCMAC-1722" data-color="#939598" data-published="Friday, November 27, 2026 6:56AM">
            
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="http://www.missoulaavalanche.org/forecasts/#/seeley-lake">WCMAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://missoulaavalanche.org/">West Central Montana Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="http://www.missoulaavalanche.org/forecasts/#/seeley-lake">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
    </div>
    <div class="ph3 w-100 w-50-ns mt4 mt0-ns">
        <div class="avy-map-card avy-map-framed">
            <h3 class="avy-layer-title">Montana Forecast Zones</h3>
            <span class="avy-map-tip">Click a zone to view</span>
            <div class="avy-map" id="map"></div>
        </div>
        <p id="zone-areas" class="f6 black-70 lh-copy tc mt3 dn"><b>This zone covers:</b> <span id="zone-areas-list"></span></p>
    </div>
</div>

<hr id="hr-0" class="mw5 p0 mv4 o-70 b0 bt b--light-red light-red bg-light-red">


{% include feedback.html %}


<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer" role="button" tabindex="0" aria-expanded="false" aria-controls="issues">Show Known Issues</p>
<section id="issues" class="overflow-hidden tc f6" aria-live="polite">
</section>