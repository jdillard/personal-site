---
layout: page
title: Canada Avalanche Forecast Layers for CalTopo
description: The latest avalanche forecasts for Canada as CalTopo map layers, with danger rating and avalanche problem shading for each advisory zone.
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
                
                <option value="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e" title="Brazeau, Churchill, Cirrus-Wilson, Fryatt, Icefields, Maligne, Marmot, Miette Lake, Pyramid" selected="">Brazeau, Churchill +7 more</option>
                
                <option value="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d" title="Corner Brook, Gros Morne, Northern Peninsula" >Corner Brook +2 more</option>
                
                <option value="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" title="Tutshi, Wheaton, White Pass East, White Pass West" >Tutshi, Wheaton +2 more</option>
                
                <option value="a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62" title="Coquihalla, Harrison-Fraser, Manning, Skagit" >Coquihalla +3 more</option>
                
                <option value="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" title="Boundary, Ningunsaw" >Boundary, Ningunsaw</option>
                
                <option value="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" title="Clearwater, North Okanagan, Quesnel, Shuswap" >Clearwater +3 more</option>
                
                <option value="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" title="Badshot-Battle, Blue River, Central Selkirk, Clemina, Esplanade, Goat, Gold, Jordan, North Monashee, North Selkirk, Premier, Robson" >Badshot-Battle +11 more</option>
                
                <option value="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762" title="Chic-Chocs" >Chic-Chocs</option>
                
                <option value="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5" title="Haines Pass" >Haines Pass</option>
                
                <option value="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" title="East Island, North Island, South Island, West Island" >East Island +3 more</option>
                
                <option value="14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da" title="Birkenhead, Duffey, South Chilcotin, Stein, Taseko" >Birkenhead, Duffey +3 more</option>
                
                <option value="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" title="Bonnington, Grohman, Kokanee, Kootenay Pass, Norns, Retallack, Rossland, South Okanagan, Valhalla, Whatshan, Ymir" >Bonnington, Grohman +9 more</option>
                
                <option value="871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7" title="Kispiox, North Bulkley, South Bulkley, Telkwa" >Kispiox +3 more</option>
                
                <option value="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" title="Banff, East Side 93N, Field, Kootenay, Lake Louise, Little Yoho, LLSA, Sunshine, West Side 93N" >Banff, East Side 93N +7 more</option>
                
                <option value="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85" title="Waterton" >Waterton</option>
                
                <option value="0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05" title="Crawford, West Purcell" >Crawford, West Purcell</option>
                
                <option value="b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a" title="Dogtooth, East Purcell, Moyie, St. Mary" >Dogtooth +3 more</option>
                
                <option value="2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1" title="North Shore, Sasquatch, Sky Pilot, Tetrahedron" >North Shore +3 more</option>
                
                <option value="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" title="Bow Valley, Highwood Pass, North 40, Spray - KLakes" >Bow Valley +3 more</option>
                
                <option value="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" title="Akamina, Bull, Crowsnest North, Crowsnest South, Elkford East, Elkford West, Flathead, Lizard" >Akamina, Bull +6 more</option>
                
                <option value="3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1" title="Howson, Kitimat, Microwave-Sinclair, Nass, Rupert, Seven Sisters, Shames, Stewart" >Howson, Kitimat +6 more</option>
                
                <option value="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" title="East Kakwa, Kakwa, McBride, McGregor, Pine Pass, Renshaw, Sugarbowl, Tumbler" >East Kakwa, Kakwa +6 more</option>
                
                <option value="6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d" title="Brandywine, Garibaldi, Homathko, Powell River, Spearhead, Tantalus" >Brandywine +5 more</option>
                
                <option value="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a" title="Glacier" >Glacier</option>
                
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
                    
                    
                    
                    <option value="/avy/#region-wy">Wyoming</option>
                    
                    
                </optgroup>
                <optgroup label="Canada">
                    <option value="/avy/#region-canada" selected="">Canada</option>
                </optgroup>
            </select>
        </span>
    </div>
</div>

<div class="tc mt4">
    
    
    <div id="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e-title" class="avy-zone-link" data-id="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e">
        <a id="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=52.55611523237941,-117.62626152142234&z=12&b=mbt&a=sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-10-03%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d-title" class="avy-zone-link dn" data-id="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d">
        <a id="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.827739704176054,-57.33055405402596&z=12&b=mbt&a=sc_a0-0e0-1300fc939598pa0-0e1301-2000fc939598pa0-0e2001-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-1300fc939598pa0-0e1301-2000fc939598pa0-0e2001-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4-title" class="avy-zone-link dn" data-id="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4">
        <a id="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=60.00417780780808,-135.1428861670814&z=12&b=mbt&a=sc_a0-0e0-4300fc939598pa0-0e4301-5600fc50b848pa0-0e5601-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc939598pa0-0e4301-5600fc50b848pa0-0e5601-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%225de752c2-481b-4b90-8e8f-913cfdd342bf%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a113-113e4301-5600fcA200FFpa113-113e5601-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62-title" class="avy-zone-link dn" data-id="a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62">
        <a id="a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.46741504532889,-121.2247926704341&z=12&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fdcc3dc8-361d-4869-b057-3f7bfa5f8cc8%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-113e6201-20310fcA200FFpa248-113e4901-6200fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609-title" class="avy-zone-link dn" data-id="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609">
        <a id="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=57.07685282147797,-129.95365245316722&z=12&b=mbt&a=sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22a6e8479d-7466-4e25-9076-60e66cf7d98b%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a158-158e4301-5600fcA200FFpa158-158e5601-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553-title" class="avy-zone-link dn" data-id="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553">
        <a id="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=51.78012692480538,-120.19894397513676&z=12&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6600fc50b848pa0-0e6601-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6600fc50b848pa0-0e6601-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2270032525-6662-4d43-837e-dc4d2b8ba15d%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a339-113e6601-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f-title" class="avy-zone-link dn" data-id="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f">
        <a id="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=51.54556672460684,-118.59921203137101&z=12&b=mbt&a=sc_a0-0e0-5600fc50b848pa0-0e5601-6900fcfff200pa0-0e6901-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-5600fc50b848pa0-0e5601-6900fcfff200pa0-0e6901-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2298d4af0c-fea6-4141-a16b-7da201282bfe%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a339-339e6901-20310fcA200FFpa339-339e5601-6900fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762-title" class="avy-zone-link dn" data-id="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762">
        <a id="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=48.90968671256848,-66.08685907369768&z=12&b=mbt&a=sc_a0-0e0-2600fc939598pa0-0e2601-3300fc939598pa0-0e3301-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-05%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-2600fc939598pa0-0e2601-3300fc939598pa0-0e3301-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5-title" class="avy-zone-link dn" data-id="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5">
        <a id="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=59.79371165198136,-136.63255032559098&z=12&b=mbt&a=sc_a0-0e0-4300fc939598pa0-0e4301-5600fc939598pa0-0e5601-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc939598pa0-0e4301-5600fc939598pa0-0e5601-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891-title" class="avy-zone-link dn" data-id="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891">
        <a id="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.66861554427248,-125.7486505757722&z=12&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%220264547a-b357-4c59-a41c-09bc64889476%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-158e6201-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da-title" class="avy-zone-link dn" data-id="14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da">
        <a id="14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=50.72333375827345,-122.79132066685739&z=12&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6200fcfff200pa0-0e6201-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6200fcfff200pa0-0e6201-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22d4e8e946-963a-4f8b-a8e6-09facea25b51%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a23-23e4901-6200fcA200FFpa23-23e6201-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60-title" class="avy-zone-link dn" data-id="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60">
        <a id="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.60459937261922,-118.1819501416253&z=12&b=mbt&a=sc_a0-0e0-5600fc50b848pa0-0e5601-6900fc50b848pa0-0e6901-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-5600fc50b848pa0-0e5601-6900fc50b848pa0-0e6901-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22aea7b7b5-8cbf-463f-b74c-763471c86d82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-158e5601-6900fcA200FFpa293-158e6901-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7-title" class="avy-zone-link dn" data-id="871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7">
        <a id="871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=55.42879619472748,-127.39294164289278&z=12&b=mbt&a=sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22bd1f09f9-56b5-45d3-b7a2-50ffa732a5f5%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a68-68e4301-5600fcA200FFpa68-68e5601-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf-title" class="avy-zone-link dn" data-id="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf">
        <a id="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=51.382373463285056,-116.16044043836781&z=12&b=mbt&a=sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22e9eb3b8f-ba48-4e1a-a4a0-b22806077337%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a339-339e7501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85-title" class="avy-zone-link dn" data-id="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85">
        <a id="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.08129207544112,-113.93284710370706&z=12&b=mbt&a=sc_a0-0e0-6200fc939598pa0-0e6201-7200fc939598pa0-0e7201-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-10-08%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6200fc939598pa0-0e6201-7200fc939598pa0-0e7201-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05-title" class="avy-zone-link dn" data-id="0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05">
        <a id="0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=50.328425004277975,-116.77489193055627&z=12&b=mbt&a=sc_a0-0e0-5600fc50b848pa0-0e5601-6900fcfff200pa0-0e6901-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-5600fc50b848pa0-0e5601-6900fcfff200pa0-0e6901-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2288211902-0d49-469d-b6ed-cfc32a62c065%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a113-113e6901-20310fcA200FFpa113-113e5601-6900fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a-title" class="avy-zone-link dn" data-id="b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a">
        <a id="b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.886688141602356,-116.16732317655102&z=12&b=mbt&a=sc_a0-0e0-5600fc50b848pa0-0e5601-6900fc50b848pa0-0e6901-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-5600fc50b848pa0-0e5601-6900fc50b848pa0-0e6901-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%224c65b1e9-beee-4bd2-a270-1555bee7da1a%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-158e6901-20310fcA200FFpa293-158e5601-6900fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1-title" class="avy-zone-link dn" data-id="2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1">
        <a id="2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.503127466206045,-122.74131543869079&z=12&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea-title" class="avy-zone-link dn" data-id="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea">
        <a id="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=50.78856882104437,-115.1958225555043&z=12&b=mbt&a=sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%229543aa63-dc0e-489a-ab0b-bb4fae17be65%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a23-248e7501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16-title" class="avy-zone-link dn" data-id="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16">
        <a id="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.677551300395436,-114.88444885982769&z=12&b=mbt&a=sc_a0-0e0-6200fc50b848pa0-0e6201-7200fc50b848pa0-0e7201-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6200fc50b848pa0-0e6201-7200fc50b848pa0-0e7201-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2298e1dd8d-538b-4284-99a0-d25e812cbdf6%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-158e7201-20310fcA200FFpa293-158e6201-7200fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1-title" class="avy-zone-link dn" data-id="3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1">
        <a id="3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=54.83747393342712,-129.08100895548884&z=12&b=mbt&a=sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcf7941epa0-0e5601-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcf7941epa0-0e5601-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22ccaefd4a-8a17-463d-85da-714abba4cb69%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-248e5601-20310fcA200FFpa248-248e4301-5600fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013-title" class="avy-zone-link dn" data-id="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013">
        <a id="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=54.46408211400717,-121.41271451846092&z=12&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6600fc50b848pa0-0e6601-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6600fc50b848pa0-0e6601-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22a4e13b53-b4c6-42da-91f1-3617a5ff1508%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a339-113e6601-20310fcA200FFpa339-113e4901-6600fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d-title" class="avy-zone-link dn" data-id="6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d">
        <a id="6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=50.37423086114513,-123.82517839380104&z=12&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6200fcf7941epa0-0e6201-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6200fcf7941epa0-0e6201-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22a184f699-63f6-4431-94b4-ae0b8fa5e61c%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Persistent%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-248e6201-20310fcA200FFpa248-248e4901-6200fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
    
    <div id="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a-title" class="avy-zone-link dn" data-id="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a">
        <a id="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=51.26859075131051,-117.52435368057834&z=12&b=mbt&a=sc_a0-0e0-5600fc939598pa0-0e5601-6900fc50b848pa0-0e6901-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-5600fc939598pa0-0e5601-6900fc50b848pa0-0e6901-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%225cb737fd-fbac-4dd1-8584-1eb8eacd183b%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-28%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a203-203e5601-6900fcA200FFpa203-203e6901-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a>
    </div>
    
    
</div>

<div class="flex flex-column flex-row-ns mt4">
    <div id="regional_zones" class="ph3 w-100 w-50-ns">
        
        <div id="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e-report" class="avy-zone" data-id="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e" data-color="#939598" data-subregions="true" data-published="Friday, October 02, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e7501-20310f 939598&#10;a0-0e6601-7500f 939598&#10;a0-0e0-6600f 939598" onclick="clickFunc(this, 'danger-tooltip-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e'); return false;" onmouseout="outFunc('danger-tooltip-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e')" onblur="outFunc('danger-tooltip-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (above 7501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (6601' to 7500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (below 6600')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, October 02, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/7de2860d-58a5-4cbd-94a4-519c762b1b79_426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d-report" class="avy-zone dn" data-id="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d" data-color="#939598" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e2001-20310f 939598&#10;a0-0e1301-2000f 939598&#10;a0-0e0-1300f 939598" onclick="clickFunc(this, 'danger-tooltip-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d'); return false;" onmouseout="outFunc('danger-tooltip-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d')" onblur="outFunc('danger-tooltip-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (above 2001')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (1301' to 2000')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (below 1300')</span>
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
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/4464334b-791f-45e9-aef0-b17a74368874_2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4-report" class="avy-zone dn" data-id="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" data-color="#fff200" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e5601-20310f fff200&#10;a0-0e4301-5600f 50b848&#10;a0-0e0-4300f 939598" onclick="clickFunc(this, 'danger-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4'); return false;" onmouseout="outFunc('danger-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4')" onblur="outFunc('danger-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 5601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (4301' to 5600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (below 4300')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a113-113e5601-20310f A200FF&#10;a113-113e4301-5600f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4'); return false;" onmouseout="outFunc('problem-1-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4')" onblur="outFunc('problem-1-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 5601')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (4301' to 5600')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/b9ff0475-508a-4a42-b775-1a213a946758_2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62-report" class="avy-zone dn" data-id="a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62" data-color="#fff200" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6201-20310f fff200&#10;a0-0e4901-6200f 50b848&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62'); return false;" onmouseout="outFunc('danger-tooltip-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62')" onblur="outFunc('danger-tooltip-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 6201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (4901' to 6200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4900')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a248-113e4901-6200f A200FF&#10;a248-113e6201-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62'); return false;" onmouseout="outFunc('problem-1-tooltip-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62')" onblur="outFunc('problem-1-tooltip-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62">
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">W to E aspects (4901' to 6200')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">W to E aspects (above 6201')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/b285cc4a-7a17-4998-a0f4-10e72d6060d8_a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609-report" class="avy-zone dn" data-id="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" data-color="#fff200" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e5601-20310f fff200&#10;a0-0e4301-5600f fff200&#10;a0-0e0-4300f 50b848" onclick="clickFunc(this, 'danger-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609'); return false;" onmouseout="outFunc('danger-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609')" onblur="outFunc('danger-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 5601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (4301' to 5600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4300')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a158-158e5601-20310f A200FF&#10;a158-158e4301-5600f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609'); return false;" onmouseout="outFunc('problem-1-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609')" onblur="outFunc('problem-1-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609')" href="#" role="button" aria-label="Copy Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 5601')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (4301' to 5600')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/15d448cb-6c3f-4510-95fe-9055e1fa7b0c_9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553-report" class="avy-zone dn" data-id="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" data-color="#50b848" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6601-20310f 50b848&#10;a0-0e4901-6600f 50b848&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553'); return false;" onmouseout="outFunc('danger-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553')" onblur="outFunc('danger-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (above 6601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (4901' to 6600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4900')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a339-113e6601-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553'); return false;" onmouseout="outFunc('problem-1-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553')" onblur="outFunc('problem-1-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#e6e6e6"/></svg> <span class="desc">N to E aspects (above 6601')</span>
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
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/2e488228-5520-4759-9ae6-ed9b335e56e5_fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f-report" class="avy-zone dn" data-id="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" data-color="#fff200" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6901-20310f fff200&#10;a0-0e5601-6900f fff200&#10;a0-0e0-5600f 50b848" onclick="clickFunc(this, 'danger-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f'); return false;" onmouseout="outFunc('danger-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f')" onblur="outFunc('danger-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 6901')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (5601' to 6900')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 5600')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a339-339e5601-6900f A200FF&#10;a339-339e6901-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f'); return false;" onmouseout="outFunc('problem-1-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f')" onblur="outFunc('problem-1-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f')" href="#" role="button" aria-label="Copy Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f">
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (5601' to 6900')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 6901')</span>
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
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/45ea6534-f1c9-4b16-9bf0-819f359b802e_cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762-report" class="avy-zone dn" data-id="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762" data-color="#939598" data-published="Wednesday, November 04, 2026 8:15AM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e3301-20310f 939598&#10;a0-0e2601-3300f 939598&#10;a0-0e0-2600f 939598" onclick="clickFunc(this, 'danger-tooltip-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762'); return false;" onmouseout="outFunc('danger-tooltip-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762')" onblur="outFunc('danger-tooltip-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No forecast (above 3301')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No forecast (2601' to 3300')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No forecast (below 2600')</span>
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
                <strong>Issued at:</strong> Wednesday, November 04, 2026 8:15AM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/f0c31cb6-b22b-41d2-8b8d-e3e95bf35bc0_03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5-report" class="avy-zone dn" data-id="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5" data-color="#939598" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e5601-20310f 939598&#10;a0-0e4301-5600f 939598&#10;a0-0e0-4300f 939598" onclick="clickFunc(this, 'danger-tooltip-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5'); return false;" onmouseout="outFunc('danger-tooltip-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5')" onblur="outFunc('danger-tooltip-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (above 5601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (4301' to 5600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (below 4300')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/498d6b29-f5d7-4628-8a89-b8ac75ba94e0_ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891-report" class="avy-zone dn" data-id="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" data-color="#50b848" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6201-20310f 50b848&#10;a0-0e4901-6200f 50b848&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891'); return false;" onmouseout="outFunc('danger-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" onblur="outFunc('danger-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (above 6201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (4901' to 6200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4900')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a293-158e6201-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891'); return false;" onmouseout="outFunc('problem-1-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" onblur="outFunc('problem-1-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SE aspects (above 6201')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/d2345009-8c5c-484c-839b-799d067085b7_76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da-report" class="avy-zone dn" data-id="14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da" data-color="#f7941e" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6201-20310f f7941e&#10;a0-0e4901-6200f fff200&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da'); return false;" onmouseout="outFunc('danger-tooltip-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da')" onblur="outFunc('danger-tooltip-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 6201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (4901' to 6200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4900')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a23-23e6201-20310f A200FF&#10;a23-23e4901-6200f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da'); return false;" onmouseout="outFunc('problem-1-tooltip-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da')" onblur="outFunc('problem-1-tooltip-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 6201')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (4901' to 6200')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/774e14de-1d51-4baa-9b21-ed1107cfc0af_14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60-report" class="avy-zone dn" data-id="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" data-color="#50b848" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6901-20310f 50b848&#10;a0-0e5601-6900f 50b848&#10;a0-0e0-5600f 50b848" onclick="clickFunc(this, 'danger-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60'); return false;" onmouseout="outFunc('danger-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60')" onblur="outFunc('danger-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (above 6901')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (5601' to 6900')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 5600')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a293-158e6901-20310f A200FF&#10;a293-158e5601-6900f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60'); return false;" onmouseout="outFunc('problem-1-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60')" onblur="outFunc('problem-1-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SE aspects (above 6901')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SE aspects (5601' to 6900')</span>
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
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/9d9d0848-fdaa-451f-b1ff-228772565c19_0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7-report" class="avy-zone dn" data-id="871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7" data-color="#fff200" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e5601-20310f fff200&#10;a0-0e4301-5600f fff200&#10;a0-0e0-4300f 50b848" onclick="clickFunc(this, 'danger-tooltip-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7'); return false;" onmouseout="outFunc('danger-tooltip-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7')" onblur="outFunc('danger-tooltip-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 5601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (4301' to 5600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4300')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a68-68e5601-20310f A200FF&#10;a68-68e4301-5600f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7'); return false;" onmouseout="outFunc('problem-1-tooltip-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7')" onblur="outFunc('problem-1-tooltip-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 5601')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (4301' to 5600')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/2c09adb8-a8c0-4eb7-a4cf-400069bffc00_871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf-report" class="avy-zone dn" data-id="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" data-color="#fff200" data-subregions="true" data-published="Friday, November 27, 2026 5:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e7501-20310f fff200&#10;a0-0e6601-7500f 939598&#10;a0-0e0-6600f 939598" onclick="clickFunc(this, 'danger-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf'); return false;" onmouseout="outFunc('danger-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" onblur="outFunc('danger-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 7501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (6601' to 7500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (below 6600')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a339-339e7501-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf'); return false;" onmouseout="outFunc('problem-1-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" onblur="outFunc('problem-1-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 7501')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 5:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/e1bc5d53-708c-486d-8de5-dc114d8f6f79_afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85-report" class="avy-zone dn" data-id="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85" data-color="#939598" data-published="Wednesday, October 07, 2026 1:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e7201-20310f 939598&#10;a0-0e6201-7200f 939598&#10;a0-0e0-6200f 939598" onclick="clickFunc(this, 'danger-tooltip-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85'); return false;" onmouseout="outFunc('danger-tooltip-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85')" onblur="outFunc('danger-tooltip-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (above 7201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (6201' to 7200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (below 6200')</span>
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
                <strong>Issued at:</strong> Wednesday, October 07, 2026 1:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/cf50334f-3c6b-478b-b02f-dd9ecb233074_010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05-report" class="avy-zone dn" data-id="0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05" data-color="#fff200" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6901-20310f fff200&#10;a0-0e5601-6900f fff200&#10;a0-0e0-5600f 50b848" onclick="clickFunc(this, 'danger-tooltip-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05'); return false;" onmouseout="outFunc('danger-tooltip-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05')" onblur="outFunc('danger-tooltip-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 6901')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (5601' to 6900')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 5600')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a113-113e5601-6900f A200FF&#10;a113-113e6901-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05'); return false;" onmouseout="outFunc('problem-1-tooltip-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05')" onblur="outFunc('problem-1-tooltip-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05')" href="#" role="button" aria-label="Copy Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05">
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (5601' to 6900')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 6901')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/7a9589f9-4034-43ab-8e03-94188385f6f0_0148fd3ef964f07581ca55eb1590f20c2892ca838d46b3fd3e58a64f41f20d05">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a-report" class="avy-zone dn" data-id="b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a" data-color="#50b848" data-subregions="true" data-published="Friday, November 27, 2026 5:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6901-20310f 50b848&#10;a0-0e5601-6900f 50b848&#10;a0-0e0-5600f 50b848" onclick="clickFunc(this, 'danger-tooltip-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a'); return false;" onmouseout="outFunc('danger-tooltip-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a')" onblur="outFunc('danger-tooltip-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (above 6901')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (5601' to 6900')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 5600')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a293-158e5601-6900f A200FF&#10;a293-158e6901-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a'); return false;" onmouseout="outFunc('problem-1-tooltip-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a')" onblur="outFunc('problem-1-tooltip-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a">
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SE aspects (5601' to 6900')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SE aspects (above 6901')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 5:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/7dc20093-c3cc-4a34-9974-88e3b8139300_b4ff352578c704f27057b366d19f6e65696cdc6ff4b868d8fc95d6795d0d1d3a">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1-report" class="avy-zone dn" data-id="2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1" data-color="#50b848" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6201-20310f 50b848&#10;a0-0e4901-6200f 50b848&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1'); return false;" onmouseout="outFunc('danger-tooltip-2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1')" onblur="outFunc('danger-tooltip-2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (above 6201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (4901' to 6200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4900')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">danger </span>layer</summary><div class="avy-howto-body"><p>Danger ratings are regional. Each rating covers a whole elevation band across the forecast zone, not any single slope, and danger varies within a band. Treeline shifts with aspect, terrain and local weather, so band edges aren't lines.</p><p>A Low or Moderate rating doesn't mean every slope is safe: isolated dangerous slopes can exist at any level. Use the rating to set expectations for the day, not to pick slopes.</p></div></details>
            </div>
            

            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/6400ab07-693d-448f-862c-7c6ef7a40100_2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea-report" class="avy-zone dn" data-id="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" data-color="#50b848" data-subregions="true" data-published="Wednesday, November 25, 2026 5:30PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e7501-20310f 50b848&#10;a0-0e6601-7500f 939598&#10;a0-0e0-6600f 939598" onclick="clickFunc(this, 'danger-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea'); return false;" onmouseout="outFunc('danger-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea')" onblur="outFunc('danger-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (above 7501')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (6601' to 7500')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (below 6600')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a23-248e7501-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea'); return false;" onmouseout="outFunc('problem-1-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea')" onblur="outFunc('problem-1-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#e6e6e6"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#e6e6e6"/></svg> <span class="desc">NE to SW aspects (above 7501')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 5:30PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/79e6aad0-f4d5-4702-a379-7fb79e42d8e0_d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16-report" class="avy-zone dn" data-id="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" data-color="#50b848" data-subregions="true" data-published="Friday, November 27, 2026 5:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e7201-20310f 50b848&#10;a0-0e6201-7200f 50b848&#10;a0-0e0-6200f 50b848" onclick="clickFunc(this, 'danger-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16'); return false;" onmouseout="outFunc('danger-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16')" onblur="outFunc('danger-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (above 7201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (6201' to 7200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 6200')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a293-158e6201-7200f A200FF&#10;a293-158e7201-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16'); return false;" onmouseout="outFunc('problem-1-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16')" onblur="outFunc('problem-1-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16')" href="#" role="button" aria-label="Copy Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16">
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SE aspects (6201' to 7200')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">NW to SE aspects (above 7201')</span>
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
                <strong>Issued at:</strong> Friday, November 27, 2026 5:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/ec66a21d-163c-4e16-8bb2-53ff25862bc3_22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1-report" class="avy-zone dn" data-id="3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1" data-color="#f7941e" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e5601-20310f f7941e&#10;a0-0e4301-5600f f7941e&#10;a0-0e0-4300f 50b848" onclick="clickFunc(this, 'danger-tooltip-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1'); return false;" onmouseout="outFunc('danger-tooltip-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1')" onblur="outFunc('danger-tooltip-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 5601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (4301' to 5600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4300')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a248-248e4301-5600f A200FF&#10;a248-248e5601-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1'); return false;" onmouseout="outFunc('problem-1-tooltip-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1')" onblur="outFunc('problem-1-tooltip-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1')" href="#" role="button" aria-label="Copy Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1">
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (4301' to 5600')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 5601')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/390ccf83-4f80-4393-88d0-a5f08d6ac717_3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013-report" class="avy-zone dn" data-id="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" data-color="#50b848" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6601-20310f 50b848&#10;a0-0e4901-6600f 50b848&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013'); return false;" onmouseout="outFunc('danger-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013')" onblur="outFunc('danger-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (above 6601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (4901' to 6600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4900')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a339-113e4901-6600f A200FF&#10;a339-113e6601-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013'); return false;" onmouseout="outFunc('problem-1-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013')" onblur="outFunc('problem-1-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013')" href="#" role="button" aria-label="Copy Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013">
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#e6e6e6"/></svg> <span class="desc">N to E aspects (4901' to 6600')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#e6e6e6"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#e6e6e6"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#e6e6e6"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#e6e6e6"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#e6e6e6"/></svg> <span class="desc">N to E aspects (above 6601')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/1ecef62d-3785-4be8-b935-094cf993a8f2_479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d-report" class="avy-zone dn" data-id="6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d" data-color="#f7941e" data-subregions="true" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6201-20310f f7941e&#10;a0-0e4901-6200f f7941e&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d'); return false;" onmouseout="outFunc('danger-tooltip-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d')" onblur="outFunc('danger-tooltip-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (above 6201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable (4901' to 6200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (below 4900')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a248-248e4901-6200f A200FF&#10;a248-248e6201-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d'); return false;" onmouseout="outFunc('problem-1-tooltip-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d')" onblur="outFunc('problem-1-tooltip-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d')" href="#" role="button" aria-label="Copy Persistent Slab rules"><span class="tooltiptext" id="problem-1-tooltip-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d">
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (4901' to 6200')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 6201')</span>
                            </li>
                        
                        </ul>
                    </dd>
                </div>
                
            </dl>
            <details class="avy-howto"><summary>How to use this <span class="clip">problem </span>layer</summary><div class="avy-howto-body"><p>Problem aspects and elevations show where the forecaster expects each problem to be most widespread or most sensitive, not hard boundaries. A problem can also exist on neighboring aspects and elevations, and unshaded slopes aren't free of it.</p><p>Gullies, ridges and convex rolls face many directions within one slope, so one slope can fall partly inside and partly outside the shading. A slope outside the shading can still be threatened by a shaded slope above it. Read the forecast's problem description for likelihood, size and distribution.</p></div></details>
            </div>
            
            
            </section>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt3 tc black-60">
            
            <p class="f7 f6-ns code mt1 mb2">
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/55260e9d-5ee5-40c1-8f90-e29e1dd414ad_6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a-report" class="avy-zone dn" data-id="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a" data-color="#fff200" data-published="Friday, November 27, 2026 4:00PM">
            
            <section class="avy-layers" aria-label="CalTopo layers">
            
            
            <div class="avy-layer">
            <dl class="f6 ma0">
                <dt>
                    <strong>Avalanche Danger</strong>
                </dt>
                <dd class="ml0">
                    <div class="tooltip avy-copy"><a data-clipboard-text="a0-0e6901-20310f fff200&#10;a0-0e5601-6900f 50b848&#10;a0-0e0-5600f 939598" onclick="clickFunc(this, 'danger-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a'); return false;" onmouseout="outFunc('danger-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a')" onblur="outFunc('danger-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    <ul class="list pl0 mt1 mb0 code f7 rules-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate (above 6901')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low (5601' to 6900')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (below 5600')</span>
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
                        <div class="tooltip avy-copy"><a data-clipboard-text="a203-203e6901-20310f A200FF&#10;a203-203e5601-6900f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a'); return false;" onmouseout="outFunc('problem-1-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a')" onblur="outFunc('problem-1-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a')" href="#" role="button" aria-label="Copy Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                        <ul class="list pl0 mt1 mb0 code f7 rules-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a">
                        
                            <li class="pv1 atl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (above 6901')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <svg class="avy-rose fl mr2" style="clear: both;" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 10L6.36 1.22A9.5 9.5 0 0 1 13.64 1.22Z" fill="#A200FF"/><path d="M10 10L13.64 1.22A9.5 9.5 0 0 1 18.78 6.36Z" fill="#A200FF"/><path d="M10 10L18.78 6.36A9.5 9.5 0 0 1 18.78 13.64Z" fill="#A200FF"/><path d="M10 10L18.78 13.64A9.5 9.5 0 0 1 13.64 18.78Z" fill="#A200FF"/><path d="M10 10L13.64 18.78A9.5 9.5 0 0 1 6.36 18.78Z" fill="#A200FF"/><path d="M10 10L6.36 18.78A9.5 9.5 0 0 1 1.22 13.64Z" fill="#A200FF"/><path d="M10 10L1.22 13.64A9.5 9.5 0 0 1 1.22 6.36Z" fill="#A200FF"/><path d="M10 10L1.22 6.36A9.5 9.5 0 0 1 6.36 1.22Z" fill="#A200FF"/></svg> <span class="desc">All aspects (5601' to 6900')</span>
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
                <strong>Issued at:</strong> Friday, November 27, 2026 4:00PM
            </p>
            
            
            <p class="f6 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/92153e11-a125-4827-98ac-a7402cd9da4a_b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
    </div>
    <div class="ph3 w-100 w-50-ns mt4 mt0-ns">
        <div class="avy-map-card avy-map-framed">
            <h3 class="avy-layer-title">Canada Forecast Zones</h3>
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