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

<div class="tc mt4">
    
    
    
    
    
    
    
    
    
    
    <div id="GNFAC-2819-title" class="avy-zone-link dn" data-id="GNFAC-2819">
        <a id="GNFAC-2819-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=45.84957461261667,-110.96619450447818&z=12&b=mbt&a=sc_a0-0e0-7500fc50b848pa0-0e7501-8500fcfff200pa0-0e8501-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-7500fc50b848pa0-0e7501-8500fcfff200pa0-0e8501-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2247cefaa6-bb48-4222-b9cd-846eae8797eb%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e7501-8500fcA200FFpa158-158e8501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22a7ad5f71-a16c-455c-ad9d-86f1fcfb7e86%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e7501-8500fc0000FFpa158-158e8501-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="GNFAC-2827-title" class="avy-zone-link dn" data-id="GNFAC-2827">
        <a id="GNFAC-2827-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=45.054773394834804,-109.93983030151414&z=12&b=mbt&a=sc_a0-0e0-9000fc50b848pa0-0e9001-10000fcfff200pa0-0e10001-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-9000fc50b848pa0-0e9001-10000fcfff200pa0-0e10001-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2253fa11b8-be08-4ee1-9aee-d28984de48d1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e9001-10000fcA200FFpa158-158e10001-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22f216b9e2-b0d5-40ac-bede-71df26a969cb%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e9001-10000fc0000FFpa158-158e10001-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="GNFAC-2826-title" class="avy-zone-link dn" data-id="GNFAC-2826">
        <a id="GNFAC-2826-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=44.54035657697031,-111.562749276615&z=12&b=mbt&a=sc_a0-0e0-8000fc50b848pa0-0e8001-9500fcfff200pa0-0e9501-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-8000fc50b848pa0-0e8001-9500fcfff200pa0-0e9501-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%220db18e69-d47c-4cdf-be4b-4f087a0b993b%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fcA200FFpa158-158e9501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22624ae200-a2b1-44fd-9207-ca595b78a7ff%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fc0000FFpa158-158e9501-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="GNFAC-2825-title" class="avy-zone-link dn" data-id="GNFAC-2825">
        <a id="GNFAC-2825-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=44.7597840084871,-111.34782062017248&z=12&b=mbt&a=sc_a0-0e0-8000fc50b848pa0-0e8001-9500fcfff200pa0-0e9501-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-8000fc50b848pa0-0e8001-9500fcfff200pa0-0e9501-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22c013f03f-2883-4570-a67e-5ecfcb850835%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fcA200FFpa158-158e9501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%227a9a2429-7ee0-491c-8813-2d663ccc7b83%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fc0000FFpa158-158e9501-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="GNFAC-2821-title" class="avy-zone-link dn" data-id="GNFAC-2821">
        <a id="GNFAC-2821-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=45.380643480805126,-111.01234899486651&z=12&b=mbt&a=sc_a0-0e0-8000fcfff200pa0-0e8001-9500fcf7941epa0-0e9501-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-8000fcfff200pa0-0e8001-9500fcf7941epa0-0e9501-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2238a81d45-f8f3-47e3-ad0b-4f79690b2f3c%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fcA200FFpa158-158e9501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22a3311063-45d5-4b74-a089-6b37aee4f7c7%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fc0000FFpa158-158e9501-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="GNFAC-2822-title" class="avy-zone-link dn" data-id="GNFAC-2822">
        <a id="GNFAC-2822-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=45.29605974422686,-111.3866617951651&z=12&b=mbt&a=sc_a0-0e0-8000fcfff200pa0-0e8001-9500fcf7941epa0-0e9501-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-8000fcfff200pa0-0e8001-9500fcf7941epa0-0e9501-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22670a49ee-0952-4fb5-803d-e897768b9ad6%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fcA200FFpa158-158e9501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22f081d974-a277-4ee0-930a-f913eb45e5b3%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fc0000FFpa158-158e9501-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="GNFAC-2824-title" class="avy-zone-link dn" data-id="GNFAC-2824">
        <a id="GNFAC-2824-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=45.004962476279545,-110.94647479036524&z=12&b=mbt&a=sc_a0-0e0-8000fcfff200pa0-0e8001-9500fcf7941epa0-0e9501-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-8000fcfff200pa0-0e8001-9500fcf7941epa0-0e9501-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%227e15cf45-8bef-4db8-b463-95e76340a242%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fcA200FFpa158-158e9501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%223c70b1cb-bfa3-4194-a01e-7f55766c36ae%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fc0000FFpa158-158e9501-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="GNFAC-2823-title" class="avy-zone-link dn" data-id="GNFAC-2823">
        <a id="GNFAC-2823-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=44.96368036191882,-111.28051657878589&z=12&b=mbt&a=sc_a0-0e0-8000fcfff200pa0-0e8001-9500fcf7941epa0-0e9501-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-8000fcfff200pa0-0e8001-9500fcf7941epa0-0e9501-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22852abd14-cc9a-4995-b416-9388bc27abf1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fcA200FFpa158-158e9501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%229e65a5c1-15ce-4e9f-acf6-8c922612787d%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e8001-9500fc0000FFpa158-158e9501-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
</div>

<div class="flex flex-column flex-row-ns mt4">
    <div id="regional_zones" class="ph3 w-100 w-50-ns">
        
        <div id="FAC-3043-report" class="avy-zone" data-id="FAC-3043" data-color="#939598" data-published="Friday, November 27, 2026 1:52PM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.flatheadavalanche.org/avalanche-forecast/#/flathead-range-&-glacier-np">FAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.flatheadavalanche.org/">Flathead Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.flatheadavalanche.org/avalanche-forecast/#/flathead-range-&-glacier-np">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="FAC-3040-report" class="avy-zone dn" data-id="FAC-3040" data-color="#939598" data-published="Friday, November 27, 2026 1:52PM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.flatheadavalanche.org/avalanche-forecast/#/northern-whitefish-range">FAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.flatheadavalanche.org/">Flathead Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.flatheadavalanche.org/avalanche-forecast/#/northern-whitefish-range">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="FAC-3041-report" class="avy-zone dn" data-id="FAC-3041" data-color="#939598" data-published="Friday, November 27, 2026 1:52PM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.flatheadavalanche.org/avalanche-forecast/#/southern-whitefish-range">FAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.flatheadavalanche.org/">Flathead Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.flatheadavalanche.org/avalanche-forecast/#/southern-whitefish-range">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="FAC-3042-report" class="avy-zone dn" data-id="FAC-3042" data-color="#939598" data-published="Friday, November 27, 2026 1:52PM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.flatheadavalanche.org/avalanche-forecast/#/swan-range">FAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.flatheadavalanche.org/">Flathead Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.flatheadavalanche.org/avalanche-forecast/#/swan-range">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2819-report" class="avy-zone dn" data-id="GNFAC-2819" data-color="#fff200" data-published="Saturday, November 28, 2026 7:09AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e8501-20310f fff200&#10;a0-0e7501-8500f fff200&#10;a0-0e0-7500f 50b848" onclick="clickFunc(this, 'danger-tooltip-GNFAC-2819'); return false;" onmouseout="outFunc('danger-tooltip-GNFAC-2819')" onblur="outFunc('danger-tooltip-GNFAC-2819')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-GNFAC-2819" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2819">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 8501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (7501' to 8500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 7500')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e8501-20310f A200FF&#10;a158-158e7501-8500f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-GNFAC-2819'); return false;" onmouseout="outFunc('problem-1-tooltip-GNFAC-2819')" onblur="outFunc('problem-1-tooltip-GNFAC-2819')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-GNFAC-2819" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2819">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 8501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (7501' to 8500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e8501-20310f 0000FF&#10;a158-158e7501-8500f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-GNFAC-2819'); return false;" onmouseout="outFunc('problem-2-tooltip-GNFAC-2819')" onblur="outFunc('problem-2-tooltip-GNFAC-2819')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-GNFAC-2819" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2819">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (above 8501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (7501' to 8500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:09AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/bridger-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2827-report" class="avy-zone dn" data-id="GNFAC-2827" data-color="#fff200" data-published="Saturday, November 28, 2026 7:09AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e10001-20310f fff200&#10;a0-0e9001-10000f fff200&#10;a0-0e0-9000f 50b848" onclick="clickFunc(this, 'danger-tooltip-GNFAC-2827'); return false;" onmouseout="outFunc('danger-tooltip-GNFAC-2827')" onblur="outFunc('danger-tooltip-GNFAC-2827')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-GNFAC-2827" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2827">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 10001')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (9001' to 10000')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 9000')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e10001-20310f A200FF&#10;a158-158e9001-10000f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-GNFAC-2827'); return false;" onmouseout="outFunc('problem-1-tooltip-GNFAC-2827')" onblur="outFunc('problem-1-tooltip-GNFAC-2827')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-GNFAC-2827" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2827">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 10001')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (9001' to 10000')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e10001-20310f 0000FF&#10;a158-158e9001-10000f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-GNFAC-2827'); return false;" onmouseout="outFunc('problem-2-tooltip-GNFAC-2827')" onblur="outFunc('problem-2-tooltip-GNFAC-2827')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-GNFAC-2827" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2827">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (above 10001')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (9001' to 10000')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:09AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/cooke-city/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2826-report" class="avy-zone dn" data-id="GNFAC-2826" data-color="#fff200" data-published="Saturday, November 28, 2026 7:09AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9501-20310f fff200&#10;a0-0e8001-9500f fff200&#10;a0-0e0-8000f 50b848" onclick="clickFunc(this, 'danger-tooltip-GNFAC-2826'); return false;" onmouseout="outFunc('danger-tooltip-GNFAC-2826')" onblur="outFunc('danger-tooltip-GNFAC-2826')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-GNFAC-2826" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2826">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 9501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (8001' to 9500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 8000')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f A200FF&#10;a158-158e8001-9500f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-GNFAC-2826'); return false;" onmouseout="outFunc('problem-1-tooltip-GNFAC-2826')" onblur="outFunc('problem-1-tooltip-GNFAC-2826')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-GNFAC-2826" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2826">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f 0000FF&#10;a158-158e8001-9500f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-GNFAC-2826'); return false;" onmouseout="outFunc('problem-2-tooltip-GNFAC-2826')" onblur="outFunc('problem-2-tooltip-GNFAC-2826')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-GNFAC-2826" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2826">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:09AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/island-park/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2825-report" class="avy-zone dn" data-id="GNFAC-2825" data-color="#fff200" data-published="Saturday, November 28, 2026 7:09AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9501-20310f fff200&#10;a0-0e8001-9500f fff200&#10;a0-0e0-8000f 50b848" onclick="clickFunc(this, 'danger-tooltip-GNFAC-2825'); return false;" onmouseout="outFunc('danger-tooltip-GNFAC-2825')" onblur="outFunc('danger-tooltip-GNFAC-2825')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-GNFAC-2825" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2825">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 9501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (8001' to 9500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 8000')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f A200FF&#10;a158-158e8001-9500f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-GNFAC-2825'); return false;" onmouseout="outFunc('problem-1-tooltip-GNFAC-2825')" onblur="outFunc('problem-1-tooltip-GNFAC-2825')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-GNFAC-2825" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2825">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f 0000FF&#10;a158-158e8001-9500f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-GNFAC-2825'); return false;" onmouseout="outFunc('problem-2-tooltip-GNFAC-2825')" onblur="outFunc('problem-2-tooltip-GNFAC-2825')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-GNFAC-2825" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2825">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:09AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/lionhead-area/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2821-report" class="avy-zone dn" data-id="GNFAC-2821" data-color="#f7941e" data-published="Saturday, November 28, 2026 7:10AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9501-20310f f7941e&#10;a0-0e8001-9500f f7941e&#10;a0-0e0-8000f fff200" onclick="clickFunc(this, 'danger-tooltip-GNFAC-2821'); return false;" onmouseout="outFunc('danger-tooltip-GNFAC-2821')" onblur="outFunc('danger-tooltip-GNFAC-2821')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-GNFAC-2821" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2821">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 9501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (8001' to 9500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (below 8000')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f A200FF&#10;a158-158e8001-9500f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-GNFAC-2821'); return false;" onmouseout="outFunc('problem-1-tooltip-GNFAC-2821')" onblur="outFunc('problem-1-tooltip-GNFAC-2821')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-GNFAC-2821" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2821">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f 0000FF&#10;a158-158e8001-9500f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-GNFAC-2821'); return false;" onmouseout="outFunc('problem-2-tooltip-GNFAC-2821')" onblur="outFunc('problem-2-tooltip-GNFAC-2821')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-GNFAC-2821" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2821">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:10AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/northern-gallatin-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2822-report" class="avy-zone dn" data-id="GNFAC-2822" data-color="#f7941e" data-published="Saturday, November 28, 2026 7:10AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9501-20310f f7941e&#10;a0-0e8001-9500f f7941e&#10;a0-0e0-8000f fff200" onclick="clickFunc(this, 'danger-tooltip-GNFAC-2822'); return false;" onmouseout="outFunc('danger-tooltip-GNFAC-2822')" onblur="outFunc('danger-tooltip-GNFAC-2822')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-GNFAC-2822" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2822">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 9501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (8001' to 9500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (below 8000')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f A200FF&#10;a158-158e8001-9500f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-GNFAC-2822'); return false;" onmouseout="outFunc('problem-1-tooltip-GNFAC-2822')" onblur="outFunc('problem-1-tooltip-GNFAC-2822')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-GNFAC-2822" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2822">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f 0000FF&#10;a158-158e8001-9500f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-GNFAC-2822'); return false;" onmouseout="outFunc('problem-2-tooltip-GNFAC-2822')" onblur="outFunc('problem-2-tooltip-GNFAC-2822')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-GNFAC-2822" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2822">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:10AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/northern-madison-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2824-report" class="avy-zone dn" data-id="GNFAC-2824" data-color="#f7941e" data-published="Saturday, November 28, 2026 7:10AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9501-20310f f7941e&#10;a0-0e8001-9500f f7941e&#10;a0-0e0-8000f fff200" onclick="clickFunc(this, 'danger-tooltip-GNFAC-2824'); return false;" onmouseout="outFunc('danger-tooltip-GNFAC-2824')" onblur="outFunc('danger-tooltip-GNFAC-2824')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-GNFAC-2824" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2824">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 9501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (8001' to 9500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (below 8000')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f A200FF&#10;a158-158e8001-9500f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-GNFAC-2824'); return false;" onmouseout="outFunc('problem-1-tooltip-GNFAC-2824')" onblur="outFunc('problem-1-tooltip-GNFAC-2824')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-GNFAC-2824" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2824">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f 0000FF&#10;a158-158e8001-9500f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-GNFAC-2824'); return false;" onmouseout="outFunc('problem-2-tooltip-GNFAC-2824')" onblur="outFunc('problem-2-tooltip-GNFAC-2824')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-GNFAC-2824" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2824">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:10AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/southern-gallatin-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="GNFAC-2823-report" class="avy-zone dn" data-id="GNFAC-2823" data-color="#f7941e" data-published="Saturday, November 28, 2026 7:10AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9501-20310f f7941e&#10;a0-0e8001-9500f f7941e&#10;a0-0e0-8000f fff200" onclick="clickFunc(this, 'danger-tooltip-GNFAC-2823'); return false;" onmouseout="outFunc('danger-tooltip-GNFAC-2823')" onblur="outFunc('danger-tooltip-GNFAC-2823')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-GNFAC-2823" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2823">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 9501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (8001' to 9500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (below 8000')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            <div class="avy-layer">
            <h3 class="avy-layer-title">Avalanche Problems</h3>
            <dl class="f6 ma0">
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f A200FF&#10;a158-158e8001-9500f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-GNFAC-2823'); return false;" onmouseout="outFunc('problem-1-tooltip-GNFAC-2823')" onblur="outFunc('problem-1-tooltip-GNFAC-2823')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-GNFAC-2823" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2823">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e9501-20310f 0000FF&#10;a158-158e8001-9500f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-GNFAC-2823'); return false;" onmouseout="outFunc('problem-2-tooltip-GNFAC-2823')" onblur="outFunc('problem-2-tooltip-GNFAC-2823')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-GNFAC-2823" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-GNFAC-2823">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (above 9501')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#0000FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#0000FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">All aspects (8001' to 9500')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:10AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.mtavalanche.com">Gallatin NF Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.mtavalanche.com/avalanche-forecast#/southern-madison-range/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="IPAC-1901-report" class="avy-zone dn" data-id="IPAC-1901" data-color="#939598" data-published="Friday, November 27, 2026 6:00PM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.idahopanhandleavalanche.org/forecasts/#/east-cabinet-mountains/">IPAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.idahopanhandleavalanche.org/">Idaho Panhandle Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.idahopanhandleavalanche.org/forecasts/#/east-cabinet-mountains/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="IPAC-3019-report" class="avy-zone dn" data-id="IPAC-3019" data-color="#939598" data-published="Friday, November 27, 2026 6:00PM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://www.idahopanhandleavalanche.org/forecasts/#/purcell-mountains/">IPAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://www.idahopanhandleavalanche.org/">Idaho Panhandle Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://www.idahopanhandleavalanche.org/forecasts/#/purcell-mountains/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="WCMAC-1724-report" class="avy-zone dn" data-id="WCMAC-1724" data-color="#939598" data-published="False">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://missoulaavalanche.org/forecasts/#/Bitterroot">WCMAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://missoulaavalanche.org/">West Central Montana Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://missoulaavalanche.org/forecasts/#/Bitterroot">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="WCMAC-1723-report" class="avy-zone dn" data-id="WCMAC-1723" data-color="#939598" data-published="False">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://missoulaavalanche.org/forecasts/#/rattlesnake">WCMAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://missoulaavalanche.org/">West Central Montana Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://missoulaavalanche.org/forecasts/#/rattlesnake">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="WCMAC-1722-report" class="avy-zone dn" data-id="WCMAC-1722" data-color="#939598" data-published="False">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="http://www.missoulaavalanche.org/forecasts/#/seeley-lake">WCMAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
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
    </div>
</div>

<hr id="hr-0" class="mw5 p0 mv4 o-70 b0 bt b--light-red light-red bg-light-red">


{% include feedback.html %}


<p id="issues-toggle" class="mw5 b center tc hover-light-red black-70 pointer" role="button" tabindex="0" aria-expanded="false" aria-controls="issues">Show Known Issues</p>
<section id="issues" class="overflow-hidden tc f6" aria-live="polite">
</section>