---
layout: page
title: Colorado Avalanche Forecast Layers for CalTopo
description: The latest avalanche forecasts for Colorado as CalTopo map layers, with danger rating and avalanche problem shading for each advisory zone.
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
                
                <option value="CAIC-2747" title="Grand Mesa, Battlement Mesa" selected="">Grand Mesa, Battlement Mesa</option>
                
                <option value="CAIC-2651" title="Sangre de Cristo Mountains, Pikes Peak Massif, Cochetopa Hills, Northern San Juan Mountains, La Garita Mountains" >Sangre de Cristo Mountains +4 more</option>
                
                <option value="CAIC-2690" title="Park Range" >Park Range</option>
                
                <option value="CAIC-2660" title="La Plata Mountains, Northern San Juan Mountains, Rico Mountains, La Garita Mountains, Southern San Juan Mountains" >La Plata Mountains +4 more</option>
                
                <option value="CAIC-2754" title="Sawatch Mountains, Elk Mountains, West Elk Mountains" >Sawatch Mountains +2 more</option>
                
                <option value="CAIC-2755" title="Mosquito Range, Front Range, Red Table and Hardscrabble, Ten Mile Range, Sawatch Mountains, Gore Range, Park Range" >Mosquito Range +6 more</option>
                
                <option value="CAIC-2701" title="Medicine Bow Mountains, Elkhead Mountains, Front Range, Flat Top Mountains, Park Range, Gore Range, Rabbit Ears Mountains, Never Summer Mountains" >Medicine Bow Mountains +7 more</option>
                
                <option value="CAIC-2750" title="West Elk Mountains, Sawatch Mountains, Elk Mountains" >West Elk Mountains +2 more</option>
                
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
                    
                    
                    
                    <option value="/avy/#region-co" selected="">Colorado</option>
                    
                    
                    
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
    
    
    <div id="CAIC-2747-title" class="avy-zone-link" data-id="CAIC-2747">
        <a id="CAIC-2747-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=39.181875505109026,-107.76300339810068&z=12&b=mbt&a=sc_a0-0e0-10000fc50b848pa0-0e10001-10800fc50b848pa0-0e10801-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-10000fc50b848pa0-0e10001-10800fc50b848pa0-0e10801-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="CAIC-2651-title" class="avy-zone-link dn" data-id="CAIC-2651">
        <a id="CAIC-2651-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=37.6388150803601,-105.40117707097188&z=12&b=mbt&a=sc_a0-0e0-11200fc50b848pa0-0e11201-12200fc50b848pa0-0e12201-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-11200fc50b848pa0-0e11201-12200fc50b848pa0-0e12201-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="CAIC-2690-title" class="avy-zone-link dn" data-id="CAIC-2690">
        <a id="CAIC-2690-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=40.68619907817636,-106.71020204093355&z=12&b=mbt&a=sc_a0-0e0-10300fc50b848pa0-0e10301-11300fcf7941epa0-0e11301-20310fced1c24&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-10300fc50b848pa0-0e10301-11300fcf7941epa0-0e11301-20310fced1c24%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2250f3fdc3-9f38-4b8c-9329-c8c61b3da4e1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-113e10301-11300fcA200FFpa113-113e11301-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="CAIC-2660-title" class="avy-zone-link dn" data-id="CAIC-2660">
        <a id="CAIC-2660-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=37.636766674935274,-107.33232497014352&z=12&b=mbt&a=sc_a0-0e0-11200fc50b848pa0-0e11201-12200fcfff200pa0-0e12201-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-11200fc50b848pa0-0e11201-12200fcfff200pa0-0e12201-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22cd360981-d9b5-49dc-a911-e23f30cddfb3%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-113e11201-12200fcA200FFpa248-113e12201-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="CAIC-2754-title" class="avy-zone-link dn" data-id="CAIC-2754">
        <a id="CAIC-2754-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=38.72364842307682,-106.76847734085672&z=12&b=mbt&a=sc_a0-0e0-10800fc50b848pa0-0e10801-11800fcfff200pa0-0e11801-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-10800fc50b848pa0-0e10801-11800fcfff200pa0-0e11801-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22b2ff81b6-f470-4246-8797-25bcaee2ae63%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-113e10801-11800fcA200FFpa293-113e11801-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2284be5d65-d890-4872-8bbf-891a43b76af9%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a23-158e10801-11800fc0000FFpa23-158e11801-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="CAIC-2755-title" class="avy-zone-link dn" data-id="CAIC-2755">
        <a id="CAIC-2755-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=39.80225030095346,-106.03220885395386&z=12&b=mbt&a=sc_a0-0e0-10800fc50b848pa0-0e10801-11800fcfff200pa0-0e11801-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-10800fc50b848pa0-0e10801-11800fcfff200pa0-0e11801-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22e9a7f3e8-f8ed-4bec-a64b-9375ebcb9dee%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-113e10801-11800fcA200FFpa293-113e11801-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="CAIC-2701-title" class="avy-zone-link dn" data-id="CAIC-2701">
        <a id="CAIC-2701-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=39.92844115209058,-107.36418680750454&z=12&b=mbt&a=sc_a0-0e0-10300fc50b848pa0-0e10301-11300fcfff200pa0-0e11301-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-10300fc50b848pa0-0e10301-11300fcfff200pa0-0e11301-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2215c62622-2362-4581-b8d4-1fb2cd29d06f%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-113e10301-11300fcA200FFpa293-113e11301-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="CAIC-2750-title" class="avy-zone-link dn" data-id="CAIC-2750">
        <a id="CAIC-2750-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=39.10923528272908,-106.83947754043932&z=12&b=mbt&a=sc_a0-0e0-10800fc50b848pa0-0e10801-11800fcf7941epa0-0e11801-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-10800fc50b848pa0-0e10801-11800fcf7941epa0-0e11801-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22ce7d25ef-7ff7-430b-b712-8cce3d310e65%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-113e10801-11800fcA200FFpa293-113e11801-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%229d873a5b-cdc5-4bef-a399-434949512309%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a23-158e10801-11800fc0000FFpa23-158e11801-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
</div>

<div class="flex flex-column flex-row-ns mt4">
    <div id="regional_zones" class="ph3 w-100 w-50-ns">
        
        <div id="CAIC-2747-report" class="avy-zone" data-id="CAIC-2747" data-color="#50b848" data-published="Friday, November 27, 2026 4:30PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e10801-20310f 939598&#10;a0-0e10001-10800f 50b848&#10;a0-0e0-10000f 50b848" onclick="clickFunc(this, 'danger-tooltip-CAIC-2747'); return false;" onmouseout="outFunc('danger-tooltip-CAIC-2747')" onblur="outFunc('danger-tooltip-CAIC-2747')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-CAIC-2747" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2747">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (above 10801')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (10001' to 10800')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 10000')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:30PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/">Colorado Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/?lat=39.181875505109026&lng=-107.76300339810068">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="CAIC-2651-report" class="avy-zone dn" data-id="CAIC-2651" data-color="#50b848" data-published="Friday, November 27, 2026 4:30PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e12201-20310f 50b848&#10;a0-0e11201-12200f 50b848&#10;a0-0e0-11200f 50b848" onclick="clickFunc(this, 'danger-tooltip-CAIC-2651'); return false;" onmouseout="outFunc('danger-tooltip-CAIC-2651')" onblur="outFunc('danger-tooltip-CAIC-2651')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-CAIC-2651" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2651">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (above 12201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (11201' to 12200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 11200')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:30PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/">Colorado Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/?lat=37.6388150803601&lng=-105.40117707097188">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="CAIC-2690-report" class="avy-zone dn" data-id="CAIC-2690" data-color="#ed1c24" data-published="Friday, November 27, 2026 4:30PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e11301-20310f ed1c24&#10;a0-0e10301-11300f f7941e&#10;a0-0e0-10300f 50b848" onclick="clickFunc(this, 'danger-tooltip-CAIC-2690'); return false;" onmouseout="outFunc('danger-tooltip-CAIC-2690')" onblur="outFunc('danger-tooltip-CAIC-2690')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-CAIC-2690" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2690">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#ed1c24"
                            
                            ></div> <span class="desc">High (above 11301')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (10301' to 11300')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 10300')</span>
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
                        <strong>Storm Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a113-113e11301-20310f A200FF&#10;a293-113e10301-11300f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-CAIC-2690'); return false;" onmouseout="outFunc('problem-1-tooltip-CAIC-2690')" onblur="outFunc('problem-1-tooltip-CAIC-2690')" href="#" role="button" aria-label="Copy Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-CAIC-2690" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2690">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 11301')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (10301' to 11300')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:30PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/">Colorado Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/?lat=40.68619907817636&lng=-106.71020204093355">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="CAIC-2660-report" class="avy-zone dn" data-id="CAIC-2660" data-color="#fff200" data-published="Friday, November 27, 2026 4:30PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e12201-20310f fff200&#10;a0-0e11201-12200f fff200&#10;a0-0e0-11200f 50b848" onclick="clickFunc(this, 'danger-tooltip-CAIC-2660'); return false;" onmouseout="outFunc('danger-tooltip-CAIC-2660')" onblur="outFunc('danger-tooltip-CAIC-2660')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-CAIC-2660" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2660">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 12201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (11201' to 12200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 11200')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a248-113e12201-20310f A200FF&#10;a248-113e11201-12200f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-CAIC-2660'); return false;" onmouseout="outFunc('problem-1-tooltip-CAIC-2660')" onblur="outFunc('problem-1-tooltip-CAIC-2660')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-CAIC-2660" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2660">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">W to E aspects (above 12201')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">W to E aspects (11201' to 12200')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:30PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/">Colorado Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/?lat=37.636766674935274&lng=-107.33232497014352">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="CAIC-2754-report" class="avy-zone dn" data-id="CAIC-2754" data-color="#fff200" data-published="Friday, November 27, 2026 4:30PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e11801-20310f fff200&#10;a0-0e10801-11800f fff200&#10;a0-0e0-10800f 50b848" onclick="clickFunc(this, 'danger-tooltip-CAIC-2754'); return false;" onmouseout="outFunc('danger-tooltip-CAIC-2754')" onblur="outFunc('danger-tooltip-CAIC-2754')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-CAIC-2754" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2754">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 11801')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (10801' to 11800')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 10800')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a293-113e11801-20310f A200FF&#10;a293-113e10801-11800f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-CAIC-2754'); return false;" onmouseout="outFunc('problem-1-tooltip-CAIC-2754')" onblur="outFunc('problem-1-tooltip-CAIC-2754')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-CAIC-2754" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2754">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (above 11801')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (10801' to 11800')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a23-158e11801-20310f 0000FF&#10;a23-158e10801-11800f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-CAIC-2754'); return false;" onmouseout="outFunc('problem-2-tooltip-CAIC-2754')" onblur="outFunc('problem-2-tooltip-CAIC-2754')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-CAIC-2754" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2754">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#e6e6e6"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#e6e6e6"/></svg> <span class="desc">NE to SE aspects (above 11801')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#e6e6e6"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#e6e6e6"/></svg> <span class="desc">NE to SE aspects (10801' to 11800')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:30PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/">Colorado Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/?lat=38.72364842307682&lng=-106.76847734085672">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="CAIC-2755-report" class="avy-zone dn" data-id="CAIC-2755" data-color="#fff200" data-published="Friday, November 27, 2026 4:30PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e11801-20310f fff200&#10;a0-0e10801-11800f fff200&#10;a0-0e0-10800f 50b848" onclick="clickFunc(this, 'danger-tooltip-CAIC-2755'); return false;" onmouseout="outFunc('danger-tooltip-CAIC-2755')" onblur="outFunc('danger-tooltip-CAIC-2755')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-CAIC-2755" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2755">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 11801')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (10801' to 11800')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 10800')</span>
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
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a293-113e11801-20310f A200FF&#10;a293-113e10801-11800f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-CAIC-2755'); return false;" onmouseout="outFunc('problem-1-tooltip-CAIC-2755')" onblur="outFunc('problem-1-tooltip-CAIC-2755')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-CAIC-2755" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2755">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (above 11801')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (10801' to 11800')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:30PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/">Colorado Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/?lat=39.80225030095346&lng=-106.03220885395386">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="CAIC-2701-report" class="avy-zone dn" data-id="CAIC-2701" data-color="#f7941e" data-published="Friday, November 27, 2026 4:30PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e11301-20310f f7941e&#10;a0-0e10301-11300f fff200&#10;a0-0e0-10300f 50b848" onclick="clickFunc(this, 'danger-tooltip-CAIC-2701'); return false;" onmouseout="outFunc('danger-tooltip-CAIC-2701')" onblur="outFunc('danger-tooltip-CAIC-2701')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-CAIC-2701" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2701">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 11301')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (10301' to 11300')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 10300')</span>
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
                        <strong>Storm Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a293-113e11301-20310f A200FF&#10;a293-113e10301-11300f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-CAIC-2701'); return false;" onmouseout="outFunc('problem-1-tooltip-CAIC-2701')" onblur="outFunc('problem-1-tooltip-CAIC-2701')" href="#" role="button" aria-label="Copy Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-CAIC-2701" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2701">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (above 11301')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (10301' to 11300')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:30PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/">Colorado Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/?lat=39.92844115209058&lng=-107.36418680750454">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="CAIC-2750-report" class="avy-zone dn" data-id="CAIC-2750" data-color="#f7941e" data-published="Friday, November 27, 2026 4:30PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e11801-20310f f7941e&#10;a0-0e10801-11800f f7941e&#10;a0-0e0-10800f 50b848" onclick="clickFunc(this, 'danger-tooltip-CAIC-2750'); return false;" onmouseout="outFunc('danger-tooltip-CAIC-2750')" onblur="outFunc('danger-tooltip-CAIC-2750')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-CAIC-2750" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2750">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 11801')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (10801' to 11800')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 10800')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a293-113e11801-20310f A200FF&#10;a293-113e10801-11800f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-CAIC-2750'); return false;" onmouseout="outFunc('problem-1-tooltip-CAIC-2750')" onblur="outFunc('problem-1-tooltip-CAIC-2750')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-CAIC-2750" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2750">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (above 11801')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to E aspects (10801' to 11800')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Wind Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a23-158e11801-20310f 0000FF&#10;a23-158e10801-11800f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-CAIC-2750'); return false;" onmouseout="outFunc('problem-2-tooltip-CAIC-2750')" onblur="outFunc('problem-2-tooltip-CAIC-2750')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-CAIC-2750" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-CAIC-2750">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#e6e6e6"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#e6e6e6"/></svg> <span class="desc">NE to SE aspects (above 11801')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#e6e6e6"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#0000FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#e6e6e6"/></svg> <span class="desc">NE to SE aspects (10801' to 11800')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use these <span class="clip">problem </span>layers</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:30PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/">Colorado Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.state.co.us/?lat=39.10923528272908&lng=-106.83947754043932">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
    </div>
    <div class="ph3 w-100 w-50-ns mt4 mt0-ns">
        <div class="avy-map-card avy-map-framed">
            <h3 class="avy-layer-title">Colorado Forecast Zones</h3>
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