---
layout: page
title: Wyoming Avalanche Forecast Layers for CalTopo
description: The latest avalanche forecasts for Wyoming as CalTopo map layers, with danger rating and avalanche problem shading for each advisory zone.
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
                
                <option value="BTAC-2856" title="Salt River and Wyoming Ranges" selected="">Salt River and Wyoming Ranges</option>
                
                <option value="BTAC-2860" title="Snake River Range" >Snake River Range</option>
                
                <option value="BTAC-2855" title="Tetons" >Tetons</option>
                
                <option value="BTAC-2855" title="Tetons" >Tetons</option>
                
                <option value="BTAC-2852" title="Togwotee Pass" >Togwotee Pass</option>
                
                <option value="BTAC-2852" title="Togwotee Pass" >Togwotee Pass</option>
                
                <option value="EWYAIX-2841" title="Big Horns" >Big Horns</option>
                
                <option value="EWYAIX-3045" title="Sierra Madre" >Sierra Madre</option>
                
                <option value="EWYAIX-3046" title="Snowy Range" >Snowy Range</option>
                
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
                    
                    
                    
                    <option value="/avy/#region-ut">Utah</option>
                    
                    
                    
                    <option value="/avy/#region-wa">Washington</option>
                    
                    
                    
                    <option value="/avy/#region-wy" selected="">Wyoming</option>
                    
                    
                </optgroup>
                <optgroup label="Canada">
                    <option value="/avy/#region-canada">Canada</option>
                </optgroup>
            </select>
        </span>
    </div>
</div>

<div class="tc mt4">
    
    
    
    
    
    
    <div id="BTAC-2855-title" class="avy-zone-link dn" data-id="BTAC-2855">
        <a id="BTAC-2855-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=43.77904318722218,-110.8587036850104&z=12&b=mbt&a=sc_a0-0e0-7500fc939598pa0-0e7501-9000fcfff200pa0-0e9001-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-7500fc939598pa0-0e7501-9000fcfff200pa0-0e9001-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2215fb6c2d-0c6e-4b66-912c-11da455b740e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-248e7501-9000fcA200FFpa113-113e9001-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22c9fd770e-552a-46ec-b63e-6c1b6bec262a%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-113e9001-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="BTAC-2855-title" class="avy-zone-link dn" data-id="BTAC-2855">
        <a id="BTAC-2855-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=43.77904318722218,-110.8587036850104&z=12&b=mbt&a=sc_a0-0e0-7500fc939598pa0-0e7501-9000fcfff200pa0-0e9001-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-7500fc939598pa0-0e7501-9000fcfff200pa0-0e9001-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fdb7b319-fdd1-4c4a-8cf8-d76aab4267ba%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-248e7501-9000fcA200FFpa113-113e9001-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22e04b4d17-59cb-47fc-9ac3-e4e1a8b60c58%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-113e9001-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="BTAC-2852-title" class="avy-zone-link dn" data-id="BTAC-2852">
        <a id="BTAC-2852-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=43.67440775861655,-110.15829105983822&z=12&b=mbt&a=sc_a0-0e6000-7500fc939598pa0-0e7501-9000fcfff200pa0-0e9001-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e6000-7500fc939598pa0-0e7501-9000fcfff200pa0-0e9001-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%227891eb1b-e2e0-4bc9-a04b-f2367078b734%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-248e7501-9000fcA200FFpa113-113e9001-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%225095779e-09d8-4c97-94e3-27a973f825f0%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-113e9001-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="BTAC-2852-title" class="avy-zone-link dn" data-id="BTAC-2852">
        <a id="BTAC-2852-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=43.67440775861655,-110.15829105983822&z=12&b=mbt&a=sc_a0-0e6000-7500fc939598pa0-0e7501-9000fcfff200pa0-0e9001-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e6000-7500fc939598pa0-0e7501-9000fcfff200pa0-0e9001-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%228fe6a1bb-6d74-4f71-b033-b4f116ec00ff%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-248e7501-9000fcA200FFpa113-113e9001-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2255c7b521-85c6-4673-b523-550e03e4d262%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-29%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-113e9001-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    
    
    
    
    
</div>

<div class="flex flex-column flex-row-ns mt4">
    <div id="regional_zones" class="ph3 w-100 w-50-ns">
        
        <div id="BTAC-2856-report" class="avy-zone" data-id="BTAC-2856" data-color="#939598" data-published="Friday, November 27, 2026 7:00AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgertetonavalanchecenter.org/forecasts/#/salt-river-and-wyoming-ranges/">BTAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://bridgertetonavalanchecenter.org/">Bridger-Teton Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://bridgertetonavalanchecenter.org/forecasts/#/salt-river-and-wyoming-ranges/">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="BTAC-2860-report" class="avy-zone dn" data-id="BTAC-2860" data-color="#939598" data-published="Friday, November 27, 2026 7:00AM">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://bridgertetonavalanchecenter.org/forecasts/#/snake-river-range">BTAC</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://bridgertetonavalanchecenter.org/">Bridger-Teton Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://bridgertetonavalanchecenter.org/forecasts/#/snake-river-range">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="BTAC-2855-report" class="avy-zone dn" data-id="BTAC-2855" data-color="#f7941e" data-published="Saturday, November 28, 2026 6:57AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9001-20310f f7941e&#10;a0-0e7501-9000f fff200&#10;a0-0e0-7500f 939598" onclick="clickFunc(this, 'danger-tooltip-BTAC-2855'); return false;" onmouseout="outFunc('danger-tooltip-BTAC-2855')" onblur="outFunc('danger-tooltip-BTAC-2855')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-BTAC-2855" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2855">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 9001')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (7501' to 9000')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (below 7500')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a113-113e9001-20310f A200FF&#10;a293-248e7501-9000f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-BTAC-2855'); return false;" onmouseout="outFunc('problem-1-tooltip-BTAC-2855')" onblur="outFunc('problem-1-tooltip-BTAC-2855')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-BTAC-2855" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2855">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9001')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SW aspects (7501' to 9000')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a248-113e9001-20310f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-BTAC-2855'); return false;" onmouseout="outFunc('problem-2-tooltip-BTAC-2855')" onblur="outFunc('problem-2-tooltip-BTAC-2855')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-2-tooltip-BTAC-2855" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2855">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">W to E aspects (above 9001')</span>
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
                <strong>Issued at:</strong> Saturday, November 28, 2026 6:57AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://bridgertetonavalanchecenter.org/">Bridger-Teton Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://bridgertetonavalanchecenter.org/forecasts/#/tetons">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="BTAC-2855-report" class="avy-zone dn" data-id="BTAC-2855" data-color="#f7941e" data-published="Saturday, November 28, 2026 6:57AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9001-20310f f7941e&#10;a0-0e7501-9000f fff200&#10;a0-0e0-7500f 939598" onclick="clickFunc(this, 'danger-tooltip-BTAC-2855'); return false;" onmouseout="outFunc('danger-tooltip-BTAC-2855')" onblur="outFunc('danger-tooltip-BTAC-2855')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-BTAC-2855" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2855">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 9001')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (7501' to 9000')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (below 7500')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a113-113e9001-20310f A200FF&#10;a293-248e7501-9000f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-BTAC-2855'); return false;" onmouseout="outFunc('problem-1-tooltip-BTAC-2855')" onblur="outFunc('problem-1-tooltip-BTAC-2855')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-BTAC-2855" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2855">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9001')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SW aspects (7501' to 9000')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a248-113e9001-20310f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-BTAC-2855'); return false;" onmouseout="outFunc('problem-2-tooltip-BTAC-2855')" onblur="outFunc('problem-2-tooltip-BTAC-2855')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-2-tooltip-BTAC-2855" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2855">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">W to E aspects (above 9001')</span>
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
                <strong>Issued at:</strong> Saturday, November 28, 2026 6:57AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://bridgertetonavalanchecenter.org/">Bridger-Teton Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://bridgertetonavalanchecenter.org/forecasts/#/tetons">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="BTAC-2852-report" class="avy-zone dn" data-id="BTAC-2852" data-color="#f7941e" data-published="Saturday, November 28, 2026 7:00AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9001-20310f f7941e&#10;a0-0e7501-9000f fff200&#10;a0-0e6000-7500f 939598" onclick="clickFunc(this, 'danger-tooltip-BTAC-2852'); return false;" onmouseout="outFunc('danger-tooltip-BTAC-2852')" onblur="outFunc('danger-tooltip-BTAC-2852')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-BTAC-2852" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2852">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 9001')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (7501' to 9000')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (below 7500')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a113-113e9001-20310f A200FF&#10;a293-248e7501-9000f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-BTAC-2852'); return false;" onmouseout="outFunc('problem-1-tooltip-BTAC-2852')" onblur="outFunc('problem-1-tooltip-BTAC-2852')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-BTAC-2852" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2852">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9001')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SW aspects (7501' to 9000')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a248-113e9001-20310f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-BTAC-2852'); return false;" onmouseout="outFunc('problem-2-tooltip-BTAC-2852')" onblur="outFunc('problem-2-tooltip-BTAC-2852')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-2-tooltip-BTAC-2852" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2852">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">W to E aspects (above 9001')</span>
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
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:00AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://bridgertetonavalanchecenter.org/">Bridger-Teton Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://bridgertetonavalanchecenter.org/forecasts/#/togwotee-pass">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="BTAC-2852-report" class="avy-zone dn" data-id="BTAC-2852" data-color="#f7941e" data-published="Saturday, November 28, 2026 7:00AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e9001-20310f f7941e&#10;a0-0e7501-9000f fff200&#10;a0-0e6000-7500f 939598" onclick="clickFunc(this, 'danger-tooltip-BTAC-2852'); return false;" onmouseout="outFunc('danger-tooltip-BTAC-2852')" onblur="outFunc('danger-tooltip-BTAC-2852')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-BTAC-2852" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2852">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 9001')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (7501' to 9000')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (below 7500')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a113-113e9001-20310f A200FF&#10;a293-248e7501-9000f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-BTAC-2852'); return false;" onmouseout="outFunc('problem-1-tooltip-BTAC-2852')" onblur="outFunc('problem-1-tooltip-BTAC-2852')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-BTAC-2852" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2852">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 9001')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SW aspects (7501' to 9000')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
                <div class="avy-problem">
                    <dt>
                        <strong>Persistent Slab</strong>
                    </dt>
                    <dd class="ml0">
                        <div class="tooltip avy-copy"><a data-clipboard-text="a248-113e9001-20310f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-BTAC-2852'); return false;" onmouseout="outFunc('problem-2-tooltip-BTAC-2852')" onblur="outFunc('problem-2-tooltip-BTAC-2852')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-2-tooltip-BTAC-2852" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-BTAC-2852">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#0000FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#0000FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#0000FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#0000FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#0000FF"/></svg> <span class="desc">W to E aspects (above 9001')</span>
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
                <strong>Issued at:</strong> Saturday, November 28, 2026 7:00AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="http://bridgertetonavalanchecenter.org/">Bridger-Teton Avalanche Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://bridgertetonavalanchecenter.org/forecasts/#/togwotee-pass">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="EWYAIX-2841-report" class="avy-zone dn" data-id="EWYAIX-2841" data-color="#939598" data-published="False">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://ewyoavalanche.org">EWYAIX</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://ewyoavalanche.org">Eastern Wyoming Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://ewyoavalanche.org">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="EWYAIX-3045-report" class="avy-zone dn" data-id="EWYAIX-3045" data-color="#939598" data-published="False">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://ewyoavalanche.org">EWYAIX</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://ewyoavalanche.org">Eastern Wyoming Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://ewyoavalanche.org">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="EWYAIX-3046-report" class="avy-zone dn" data-id="EWYAIX-3046" data-color="#939598" data-published="False">
            
            
            
            <div class="pv4 ph2 tc ba b--moon-gray">Report not available. See <a class="no-underline fancy-link relative light-red" href="https://ewyoavalanche.org">EWYAIX</a> for more information.</div>
            
            

            
            

            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://ewyoavalanche.org">Eastern Wyoming Avalanche Information Center</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://ewyoavalanche.org">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
    </div>
    <div class="ph3 w-100 w-50-ns mt4 mt0-ns">
        <div class="avy-map-card avy-map-framed">
            <h3 class="avy-layer-title">Wyoming Forecast Zones</h3>
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