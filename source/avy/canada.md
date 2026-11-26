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
                
                <option value="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" title="East Kakwa, Kakwa, McBride, McGregor, Pine Pass, Renshaw, Sugarbowl, Tumbler" selected="">East Kakwa, Kakwa +6 more</option>
                
                <option value="5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e" title="Crawford, Dogtooth, East Purcell, Moyie, St. Mary, West Purcell" >Crawford, Dogtooth +4 more</option>
                
                <option value="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" title="Banff, East Side 93N, Field, Kootenay, Lake Louise, Little Yoho, LLSA, Sunshine, West Side 93N" >Banff, East Side 93N +7 more</option>
                
                <option value="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e" title="Brazeau, Churchill, Cirrus-Wilson, Fryatt, Icefields, Maligne, Marmot, Miette Lake, Pyramid" >Brazeau, Churchill +7 more</option>
                
                <option value="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d" title="Corner Brook, Gros Morne, Northern Peninsula" >Corner Brook, Gros Morne, Northern Peninsula</option>
                
                <option value="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" title="Boundary, Ningunsaw" >Boundary, Ningunsaw</option>
                
                <option value="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" title="Bow Valley, Highwood Pass, North 40, Spray - KLakes" >Bow Valley, Highwood Pass +2 more</option>
                
                <option value="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762" title="Chic-Chocs" >Chic-Chocs</option>
                
                <option value="4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0" title="Howson, Kispiox, Microwave-Sinclair, North Bulkley, Seven Sisters, South Bulkley, Telkwa" >Howson, Kispiox +5 more</option>
                
                <option value="2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5" title="North Shore, Sasquatch, Tetrahedron" >North Shore, Sasquatch, Tetrahedron</option>
                
                <option value="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" title="Akamina, Bull, Crowsnest North, Crowsnest South, Elkford East, Elkford West, Flathead, Lizard" >Akamina, Bull +6 more</option>
                
                <option value="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" title="Badshot-Battle, Blue River, Central Selkirk, Clemina, Esplanade, Goat, Gold, Jordan, North Monashee, North Selkirk, Premier, Robson" >Badshot-Battle, Blue River +10 more</option>
                
                <option value="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a" title="Glacier" >Glacier</option>
                
                <option value="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85" title="Waterton" >Waterton</option>
                
                <option value="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" title="Bonnington, Grohman, Kokanee, Kootenay Pass, Norns, Retallack, Rossland, South Okanagan, Valhalla, Whatshan, Ymir" >Bonnington, Grohman +9 more</option>
                
                <option value="8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b" title="Birkenhead, Coquihalla, Duffey, Harrison-Fraser, Manning, Skagit, South Chilcotin, Stein, Taseko" >Birkenhead, Coquihalla +7 more</option>
                
                <option value="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5" title="Haines Pass" >Haines Pass</option>
                
                <option value="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" title="Clearwater, North Okanagan, Quesnel, Shuswap" >Clearwater, North Okanagan +2 more</option>
                
                <option value="a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb" title="Kitimat, Nass, Rupert, Shames, Stewart" >Kitimat, Nass +3 more</option>
                
                <option value="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" title="Tutshi, Wheaton, White Pass East, White Pass West" >Tutshi, Wheaton +2 more</option>
                
                <option value="f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d" title="Brandywine, Garibaldi, Homathko, Powell River, Sky Pilot, Spearhead, Tantalus" >Brandywine, Garibaldi +5 more</option>
                
                <option value="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" title="East Island, North Island, South Island, West Island" >East Island, North Island +2 more</option>
                
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

<div class="flex flex-column flex-row-ns mt4">
    <div id="regional_zones" class="ph3 w-100 w-50-ns">
        
        <div id="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013-report" class="avy-zone" data-id="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" data-color="#50b848" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013-title" class="mb4 tc">
                <div><a id="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=54.46408211400717,-121.41271451846092&z=10&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6600fc50b848pa0-0e6601-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6600fc50b848pa0-0e6601-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%222cc68ddb-4c42-4a28-a970-3a7976d518e2%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a339-113e6601-20310fcA200FFpa339-113e4901-6600fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6601-20310f 50b848&#10;a0-0e4901-6600f 50b848&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013'); return false;" onmouseout="outFunc('danger-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013')" onblur="outFunc('danger-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (above 6601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (4901' to 6600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 4900')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Wind Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a339-113e4901-6600f A200FF&#10;a339-113e6601-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013'); return false;" onmouseout="outFunc('problem-1-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013')" onblur="outFunc('problem-1-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013')" href="#" role="button" aria-label="Copy 2026-11-26 Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013">
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">N to E aspects (4901' to 6600')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">N to E aspects (above 6601')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/195c89d5-874e-414e-b44c-5f6166f47e7e_479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e-report" class="avy-zone dn" data-id="5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e" data-color="#50b848" data-subregions="true" data-published="Wednesday, November 25, 2026 5:00PM">
            
            <div id="5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e-title" class="mb4 tc">
                <div><a id="5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=50.01051968382965,-116.33764199458888&z=10&b=mbt&a=sc_a0-0e0-5600fc50b848pa0-0e5601-6900fc50b848pa0-0e6901-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-5600fc50b848pa0-0e5601-6900fc50b848pa0-0e6901-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22a3a2438f-12ac-4684-962e-45637358b866%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a339-339e6901-20310fcA200FFpa339-339e5601-6900fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6901-20310f 50b848&#10;a0-0e5601-6900f 50b848&#10;a0-0e0-5600f 50b848" onclick="clickFunc(this, 'danger-tooltip-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e'); return false;" onmouseout="outFunc('danger-tooltip-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e')" onblur="outFunc('danger-tooltip-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (above 6901')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (5601' to 6900')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 5600')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Storm Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a339-339e5601-6900f A200FF&#10;a339-339e6901-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e'); return false;" onmouseout="outFunc('problem-1-tooltip-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e')" onblur="outFunc('problem-1-tooltip-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e')" href="#" role="button" aria-label="Copy 2026-11-26 Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e">
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (5601' to 6900')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 6901')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 5:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/b408be14-5fd2-45ec-925e-a1ebaee57054_5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf-report" class="avy-zone dn" data-id="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" data-color="#fff200" data-subregions="true" data-published="Wednesday, November 25, 2026 5:00PM">
            
            <div id="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf-title" class="mb4 tc">
                <div><a id="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=51.382373463285056,-116.16044043836781&z=10&b=mbt&a=sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%223c25b05c-7223-494a-9cd4-f00c5ef35c0b%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Dry%20Loose%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a68-68e7501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22d1dd0c97-a6c3-4472-a6aa-579d55ce1c2f%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-293e7501-20310fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e7501-20310f fff200&#10;a0-0e6601-7500f 939598&#10;a0-0e0-6600f 939598" onclick="clickFunc(this, 'danger-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf'); return false;" onmouseout="outFunc('danger-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" onblur="outFunc('danger-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (above 7501')</span>
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
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Dry Loose</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a68-68e7501-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf'); return false;" onmouseout="outFunc('problem-1-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" onblur="outFunc('problem-1-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" href="#" role="button" aria-label="Copy 2026-11-26 Dry Loose rules"><span class="tooltiptext" id="problem-1-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 7501')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
                    <dt class="mt3">
                        <strong>2026-11-26 Wind Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a293-293e7501-20310f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf'); return false;" onmouseout="outFunc('problem-2-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" onblur="outFunc('problem-2-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf')" href="#" role="button" aria-label="Copy 2026-11-26 Wind Slab rules"><span class="tooltiptext" id="problem-2-tooltip-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #0000FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 7501')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 5:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/8eae96d4-3910-42cd-ae20-e6b9302719bb_afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e-report" class="avy-zone dn" data-id="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e" data-color="#939598" data-subregions="true" data-published="Friday, October 02, 2026 4:00PM">
            
            <div id="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e-title" class="mb4 tc">
                <div><a id="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=52.55611523237941,-117.62626152142234&z=10&b=mbt&a=sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-10-03%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e7501-20310f 939598&#10;a0-0e6601-7500f 939598&#10;a0-0e0-6600f 939598" onclick="clickFunc(this, 'danger-tooltip-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e'); return false;" onmouseout="outFunc('danger-tooltip-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e')" onblur="outFunc('danger-tooltip-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
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
            

            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Friday, October 02, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/7de2860d-58a5-4cbd-94a4-519c762b1b79_426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d-report" class="avy-zone dn" data-id="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d" data-color="#939598" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d-title" class="mb4 tc">
                <div><a id="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.827739704176054,-57.33055405402596&z=10&b=mbt&a=sc_a0-0e0-1300fc939598pa0-0e1301-2000fc939598pa0-0e2001-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-1300fc939598pa0-0e1301-2000fc939598pa0-0e2001-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e2001-20310f 939598&#10;a0-0e1301-2000f 939598&#10;a0-0e0-1300f 939598" onclick="clickFunc(this, 'danger-tooltip-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d'); return false;" onmouseout="outFunc('danger-tooltip-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d')" onblur="outFunc('danger-tooltip-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
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
            

            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/4464334b-791f-45e9-aef0-b17a74368874_2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609-report" class="avy-zone dn" data-id="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" data-color="#fff200" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609-title" class="mb4 tc">
                <div><a id="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=57.07685282147797,-129.95365245316722&z=10&b=mbt&a=sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%227462017b-bf6a-43c4-9849-2b89690e255f%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a203-68e4301-5600fcA200FFpa203-68e5601-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e5601-20310f fff200&#10;a0-0e4301-5600f fff200&#10;a0-0e0-4300f 50b848" onclick="clickFunc(this, 'danger-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609'); return false;" onmouseout="outFunc('danger-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609')" onblur="outFunc('danger-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (above 5601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (4301' to 5600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 4300')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Wind Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a203-68e5601-20310f A200FF&#10;a203-68e4301-5600f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609'); return false;" onmouseout="outFunc('problem-1-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609')" onblur="outFunc('problem-1-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609')" href="#" role="button" aria-label="Copy 2026-11-26 Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">SW to NE aspects (above 5601')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">SW to NE aspects (4301' to 5600')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/bf7e4d53-c970-411b-a6cf-b32a91e2c67c_9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea-report" class="avy-zone dn" data-id="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" data-color="#50b848" data-subregions="true" data-published="Wednesday, November 25, 2026 5:30PM">
            
            <div id="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea-title" class="mb4 tc">
                <div><a id="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=50.78856882104437,-115.1958225555043&z=10&b=mbt&a=sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6600fc939598pa0-0e6601-7500fc939598pa0-0e7501-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%229a8b8be8-bce6-4760-a3bf-507db55ac279%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a23-248e7501-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e7501-20310f 50b848&#10;a0-0e6601-7500f 939598&#10;a0-0e0-6600f 939598" onclick="clickFunc(this, 'danger-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea'); return false;" onmouseout="outFunc('danger-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea')" onblur="outFunc('danger-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (above 7501')</span>
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
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Wind Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a23-248e7501-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea'); return false;" onmouseout="outFunc('problem-1-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea')" onblur="outFunc('problem-1-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea')" href="#" role="button" aria-label="Copy 2026-11-26 Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">NE to SW aspects (above 7501')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 5:30PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/79e6aad0-f4d5-4702-a379-7fb79e42d8e0_d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762-report" class="avy-zone dn" data-id="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762" data-color="#939598" data-published="Wednesday, November 04, 2026 8:15AM">
            
            <div id="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762-title" class="mb4 tc">
                <div><a id="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=48.90968671256848,-66.08685907369768&z=10&b=mbt&a=sc_a0-0e0-2600fc939598pa0-0e2601-3300fc939598pa0-0e3301-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-05%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-2600fc939598pa0-0e2601-3300fc939598pa0-0e3301-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e3301-20310f 939598&#10;a0-0e2601-3300f 939598&#10;a0-0e0-2600f 939598" onclick="clickFunc(this, 'danger-tooltip-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762'); return false;" onmouseout="outFunc('danger-tooltip-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762')" onblur="outFunc('danger-tooltip-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
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
            

            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 04, 2026 8:15AM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/f0c31cb6-b22b-41d2-8b8d-e3e95bf35bc0_03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0-report" class="avy-zone dn" data-id="4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0" data-color="#fff200" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0-title" class="mb4 tc">
                <div><a id="4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=55.27696637249017,-127.49791683839963&z=10&b=mbt&a=sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22888572f5-0d4b-43d3-a181-d228381e375a%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-113e5601-20310fcA200FFpa248-113e4301-5600fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e5601-20310f fff200&#10;a0-0e4301-5600f fff200&#10;a0-0e0-4300f 50b848" onclick="clickFunc(this, 'danger-tooltip-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0'); return false;" onmouseout="outFunc('danger-tooltip-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0')" onblur="outFunc('danger-tooltip-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (above 5601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (4301' to 5600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 4300')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Wind Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a248-113e4301-5600f A200FF&#10;a248-113e5601-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0'); return false;" onmouseout="outFunc('problem-1-tooltip-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0')" onblur="outFunc('problem-1-tooltip-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0')" href="#" role="button" aria-label="Copy 2026-11-26 Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0">
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">W to E aspects (4301' to 5600')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">W to E aspects (above 5601')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/0bfbdaa9-de77-4365-bc78-2043439824e8_4b0950a4734fee48d9453ba598216653bb0cad96375323722dc009b2eb4db2f0">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5-report" class="avy-zone dn" data-id="2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5" data-color="#50b848" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5-title" class="mb4 tc">
                <div><a id="2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.48623161504521,-122.70793542465903&z=10&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6201-20310f 50b848&#10;a0-0e4901-6200f 50b848&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5'); return false;" onmouseout="outFunc('danger-tooltip-2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5')" onblur="outFunc('danger-tooltip-2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (above 6201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (4901' to 6200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 4900')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/60448830-0823-434c-85c7-d8e6eb656dc5_2bde11f690e700986ff26b36e6daa05b1b6b701844fe78eab819e69921e65ff5">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16-report" class="avy-zone dn" data-id="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" data-color="#50b848" data-subregions="true" data-published="Wednesday, November 25, 2026 5:00PM">
            
            <div id="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16-title" class="mb4 tc">
                <div><a id="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.677551300395436,-114.88444885982769&z=10&b=mbt&a=sc_a0-0e0-6200fc50b848pa0-0e6201-7200fc50b848pa0-0e7201-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6200fc50b848pa0-0e6201-7200fc50b848pa0-0e7201-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22bc30f62f-fe59-415d-8c5b-acb0c9bd365c%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a339-339e7201-20310fcA200FFpa339-339e6201-7200fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e7201-20310f 50b848&#10;a0-0e6201-7200f 50b848&#10;a0-0e0-6200f 50b848" onclick="clickFunc(this, 'danger-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16'); return false;" onmouseout="outFunc('danger-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16')" onblur="outFunc('danger-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (above 7201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (6201' to 7200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 6200')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Storm Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a339-339e6201-7200f A200FF&#10;a339-339e7201-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16'); return false;" onmouseout="outFunc('problem-1-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16')" onblur="outFunc('problem-1-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16')" href="#" role="button" aria-label="Copy 2026-11-26 Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16">
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (6201' to 7200')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 7201')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 5:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/9ea3daf5-fdcc-467a-9198-e3be9b521e04_22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f-report" class="avy-zone dn" data-id="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" data-color="#fff200" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f-title" class="mb4 tc">
                <div><a id="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=51.54556672460684,-118.59921203137101&z=10&b=mbt&a=sc_a0-0e0-5600fc50b848pa0-0e5601-6900fcfff200pa0-0e6901-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-5600fc50b848pa0-0e5601-6900fcfff200pa0-0e6901-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%2241d1a2b3-82ca-4c47-886c-21ad17a1da40%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a23-23e6901-20310fcA200FFpa23-23e5601-6900fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6901-20310f fff200&#10;a0-0e5601-6900f fff200&#10;a0-0e0-5600f 50b848" onclick="clickFunc(this, 'danger-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f'); return false;" onmouseout="outFunc('danger-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f')" onblur="outFunc('danger-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (above 6901')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (5601' to 6900')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 5600')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Storm Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a23-23e5601-6900f A200FF&#10;a23-23e6901-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f'); return false;" onmouseout="outFunc('problem-1-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f')" onblur="outFunc('problem-1-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f')" href="#" role="button" aria-label="Copy 2026-11-26 Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f">
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (5601' to 6900')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 6901')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/f3ce4ecd-add8-47de-9d34-f1c82f27d34f_cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a-report" class="avy-zone dn" data-id="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a" data-color="#939598" data-published="Tuesday, November 24, 2026 4:00PM">
            
            <div id="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a-title" class="mb4 tc">
                <div><a id="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=51.26859075131051,-117.52435368057834&z=10&b=mbt&a=sc_a0-0e0-5600fc939598pa0-0e5601-6900fc939598pa0-0e6901-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-25%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-5600fc939598pa0-0e5601-6900fc939598pa0-0e6901-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6901-20310f 939598&#10;a0-0e5601-6900f 939598&#10;a0-0e0-5600f 939598" onclick="clickFunc(this, 'danger-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a'); return false;" onmouseout="outFunc('danger-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a')" onblur="outFunc('danger-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (above 6901')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (5601' to 6900')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">Early season (below 5600')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Tuesday, November 24, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/b1731ba1-de3c-402b-b98a-ec0fcfba9093_b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85-report" class="avy-zone dn" data-id="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85" data-color="#939598" data-published="Wednesday, October 07, 2026 1:00PM">
            
            <div id="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85-title" class="mb4 tc">
                <div><a id="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.08129207544112,-113.93284710370706&z=10&b=mbt&a=sc_a0-0e0-6200fc939598pa0-0e6201-7200fc939598pa0-0e7201-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-10-08%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-6200fc939598pa0-0e6201-7200fc939598pa0-0e7201-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e7201-20310f 939598&#10;a0-0e6201-7200f 939598&#10;a0-0e0-6200f 939598" onclick="clickFunc(this, 'danger-tooltip-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85'); return false;" onmouseout="outFunc('danger-tooltip-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85')" onblur="outFunc('danger-tooltip-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
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
            

            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, October 07, 2026 1:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/cf50334f-3c6b-478b-b02f-dd9ecb233074_010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60-report" class="avy-zone dn" data-id="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" data-color="#50b848" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60-title" class="mb4 tc">
                <div><a id="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.60459937261922,-118.1819501416253&z=10&b=mbt&a=sc_a0-0e0-5600fc50b848pa0-0e5601-6900fc50b848pa0-0e6901-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-5600fc50b848pa0-0e5601-6900fc50b848pa0-0e6901-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%220453d7fb-c5b4-4f8f-ae0a-17ae88777f0f%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a68-68e6901-20310fcA200FFpa68-68e5601-6900fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6901-20310f 50b848&#10;a0-0e5601-6900f 50b848&#10;a0-0e0-5600f 50b848" onclick="clickFunc(this, 'danger-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60'); return false;" onmouseout="outFunc('danger-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60')" onblur="outFunc('danger-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (above 6901')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (5601' to 6900')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 5600')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Storm Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a68-68e5601-6900f A200FF&#10;a68-68e6901-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60'); return false;" onmouseout="outFunc('problem-1-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60')" onblur="outFunc('problem-1-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60')" href="#" role="button" aria-label="Copy 2026-11-26 Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60">
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (5601' to 6900')</span>
                            </li>
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 6901')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/6b6dd37d-45c7-4f7d-a30b-ebaac6e82905_0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b-report" class="avy-zone dn" data-id="8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b" data-color="#f7941e" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b-title" class="mb4 tc">
                <div><a id="8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=50.197141001293566,-122.13499181624928&z=10&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6200fcfff200pa0-0e6201-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6200fcfff200pa0-0e6201-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22d4aa34ec-68f2-4682-b5ba-ccc3b4d33067%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a248-248e4901-6200fcA200FFpa248-248e6201-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6201-20310f f7941e&#10;a0-0e4901-6200f fff200&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b'); return false;" onmouseout="outFunc('danger-tooltip-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b')" onblur="outFunc('danger-tooltip-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable danger (above 6201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (4901' to 6200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 4900')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Storm Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a248-248e6201-20310f A200FF&#10;a248-248e4901-6200f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b'); return false;" onmouseout="outFunc('problem-1-tooltip-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b')" onblur="outFunc('problem-1-tooltip-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b')" href="#" role="button" aria-label="Copy 2026-11-26 Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 6201')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (4901' to 6200')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/50c689da-3cd6-49a5-83ff-b6530c206613_8bbff7545c284dfbd7711c42e5134d2d733a983276cf96da67f380a1a011780b">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5-report" class="avy-zone dn" data-id="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5" data-color="#939598" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5-title" class="mb4 tc">
                <div><a id="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=59.79371165198136,-136.63255032559098&z=10&b=mbt&a=sc_a0-0e0-4300fc939598pa0-0e4301-5600fc939598pa0-0e5601-20310fc939598&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc939598pa0-0e4301-5600fc939598pa0-0e5601-20310fc939598%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e5601-20310f 939598&#10;a0-0e4301-5600f 939598&#10;a0-0e0-4300f 939598" onclick="clickFunc(this, 'danger-tooltip-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5'); return false;" onmouseout="outFunc('danger-tooltip-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5')" onblur="outFunc('danger-tooltip-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
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
            

            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/498d6b29-f5d7-4628-8a89-b8ac75ba94e0_ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553-report" class="avy-zone dn" data-id="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" data-color="#50b848" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553-title" class="mb4 tc">
                <div><a id="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=51.78012692480538,-120.19894397513676&z=10&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6600fc50b848pa0-0e6601-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6600fc50b848pa0-0e6601-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%229ba75ff6-eeb9-4d88-a4a7-d4eadb6b6f9e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a339-113e6601-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6601-20310f 50b848&#10;a0-0e4901-6600f 50b848&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553'); return false;" onmouseout="outFunc('danger-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553')" onblur="outFunc('danger-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (above 6601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (4901' to 6600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 4900')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Wind Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a339-113e6601-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553'); return false;" onmouseout="outFunc('problem-1-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553')" onblur="outFunc('problem-1-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553')" href="#" role="button" aria-label="Copy 2026-11-26 Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">N to E aspects (above 6601')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--light-red bg-washed-red pa2 br2 mv3 lh-copy" role="note">
                <b>Low confidence elevation bands.</b>
                No published elevation bands were found for this zone, so these are a rough estimate.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/c8097aae-de2d-4203-a393-4048a4500751_fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb-report" class="avy-zone dn" data-id="a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb" data-color="#f7941e" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb-title" class="mb4 tc">
                <div><a id="a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=54.88964525054398,-129.29475800314614&z=10&b=mbt&a=sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcf7941e&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc50b848pa0-0e4301-5600fcfff200pa0-0e5601-20310fcf7941e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%220b8617d0-aaaa-406a-81bf-ef8a8cb1c31a%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-293e4301-5600fcA200FFpa293-293e5601-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e5601-20310f f7941e&#10;a0-0e4301-5600f fff200&#10;a0-0e0-4300f 50b848" onclick="clickFunc(this, 'danger-tooltip-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb'); return false;" onmouseout="outFunc('danger-tooltip-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb')" onblur="outFunc('danger-tooltip-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable danger (above 5601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (4301' to 5600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 4300')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Storm Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a293-293e5601-20310f A200FF&#10;a293-293e4301-5600f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb'); return false;" onmouseout="outFunc('problem-1-tooltip-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb')" onblur="outFunc('problem-1-tooltip-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb')" href="#" role="button" aria-label="Copy 2026-11-26 Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 5601')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (4301' to 5600')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/9fbc67ea-028f-4ed2-93e7-439bf51264c4_a6b42d5cb67ca4e9548983bb081ab7d6995578f1e6b1d2e7241cbb41a763e8bb">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4-report" class="avy-zone dn" data-id="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" data-color="#50b848" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4-title" class="mb4 tc">
                <div><a id="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=60.00417780780808,-135.1428861670814&z=10&b=mbt&a=sc_a0-0e0-4300fc939598pa0-0e4301-5600fc50b848pa0-0e5601-20310fc50b848&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4300fc939598pa0-0e4301-5600fc50b848pa0-0e5601-20310fc50b848%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%226c5ed29d-2eeb-463f-87d0-75d127df16e0%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a339-339e4301-5600fcA200FFpa339-339e5601-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e5601-20310f 50b848&#10;a0-0e4301-5600f 50b848&#10;a0-0e0-4300f 939598" onclick="clickFunc(this, 'danger-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4'); return false;" onmouseout="outFunc('danger-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4')" onblur="outFunc('danger-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (above 5601')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (4301' to 5600')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#939598"
                            
                            ></div> <span class="desc">No rating (below 4300')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Wind Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a339-339e5601-20310f A200FF&#10;a339-339e4301-5600f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4'); return false;" onmouseout="outFunc('problem-1-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4')" onblur="outFunc('problem-1-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4')" href="#" role="button" aria-label="Copy 2026-11-26 Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 5601')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (4301' to 5600')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/71cae2dd-faf4-4739-bd13-8750311a9969_2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d-report" class="avy-zone dn" data-id="f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d" data-color="#ed1c24" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d-title" class="mb4 tc">
                <div><a id="f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=50.34045762412855,-123.78577466230858&z=10&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6200fcf7941epa0-0e6201-20310fced1c24&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6200fcf7941epa0-0e6201-20310fced1c24%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%223b652e24-a900-4d22-b5c2-cd0f502f6599%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Storm%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-293e4901-6200fcA200FFpa293-293e6201-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6201-20310f ed1c24&#10;a0-0e4901-6200f f7941e&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d'); return false;" onmouseout="outFunc('danger-tooltip-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d')" onblur="outFunc('danger-tooltip-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#ed1c24"
                            
                            ></div> <span class="desc">High danger (above 6201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#f7941e"
                            
                            ></div> <span class="desc">Considerable danger (4901' to 6200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 4900')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Storm Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a293-293e6201-20310f A200FF&#10;a293-293e4901-6200f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d'); return false;" onmouseout="outFunc('problem-1-tooltip-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d')" onblur="outFunc('problem-1-tooltip-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d')" href="#" role="button" aria-label="Copy 2026-11-26 Storm Slab rules"><span class="tooltiptext" id="problem-1-tooltip-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (above 6201')</span>
                            </li>
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (4901' to 6200')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/0d68a610-d4a0-4569-b802-a9ee66eb4f7e_f88bb4126b4ed477f7c4e9b2f2bc3275170e881924475c26096bc692261d5d4d">full forecast</a> before heading out.
            </p>
            
            </div>
            
        </div>
        
        <div id="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891-report" class="avy-zone dn" data-id="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" data-color="#fff200" data-subregions="true" data-published="Wednesday, November 25, 2026 4:00PM">
            
            <div id="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891-title" class="mb4 tc">
                <div><a id="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891-url" class="avy-button" target="_blank" rel="noopener" href="https://caltopo.com/map.html#ll=49.66861554427248,-125.7486505757722&z=10&b=mbt&a=sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fcfff200&cl=%7B%0A%20%20%20%20%22cfglayers%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22fbfd2235-dc90-4f6f-bead-4826d4983f82%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Avalanche%20Danger%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a0-0e0-4900fc50b848pa0-0e4901-6200fc50b848pa0-0e6201-20310fcfff200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22db0731b8-2551-4b64-9c87-5f695c0f831e%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wind%20Slab%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a293-158e6201-20310fcA200FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22Feature%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%228907cfa2-82ae-4710-aad8-3f1b4c24c301%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22geometry%22%3A%20null%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%22properties%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%222026-11-26%20Wet%20Loose%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22alias%22%3A%20%22sc_a23-23e4901-6200fc0000FF%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22class%22%3A%20%22ConfiguredLayer%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D">Open in CalTopo <span aria-hidden="true">↗</span></a></div>
            </div>
            
            
            <dl class="f6">
                <dt>
                    <strong>2026-11-26 Avalanche Danger</strong>
                    <div class="tooltip dib v-top pl2"><a data-clipboard-text="a0-0e6201-20310f fff200&#10;a0-0e4901-6200f 50b848&#10;a0-0e0-4900f 50b848" onclick="clickFunc(this, 'danger-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891'); return false;" onmouseout="outFunc('danger-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" onblur="outFunc('danger-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" href="#" role="button" aria-label="Copy danger rules"><span class="tooltiptext" id="danger-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                </dt>
                <dd class="ml3">
                    <ul class="list pl0 mt1 mb0 code f7 rules-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891">
                    
                        <li class="pv1 atl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#fff200"
                            
                            ></div> <span class="desc">Moderate danger (above 6201')</span>
                        </li>
                    
                        <li class="pv1 ntl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (4901' to 6200')</span>
                        </li>
                    
                        <li class="pv1 btl">
                            <div style="clear: both;" class="dynamic-color fl mr2 h1 w1"
                            
                                data-color1="#50b848"
                            
                            ></div> <span class="desc">Low danger (below 4900')</span>
                        </li>
                    
                    </ul>
                </dd>
            </dl>
            

            
            <dl class="f6">
                
                    <dt class="mt3">
                        <strong>2026-11-26 Wind Slab</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a293-158e6201-20310f A200FF" onclick="clickFunc(this, 'problem-1-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891'); return false;" onmouseout="outFunc('problem-1-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" onblur="outFunc('problem-1-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" href="#" role="button" aria-label="Copy 2026-11-26 Wind Slab rules"><span class="tooltiptext" id="problem-1-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891">
                        
                            <li class="pv1 atl">
                                <div style="clear: both;background-color: #A200FF" class="fl mr2 h1 w1"></div> <span class="desc">NW to SE aspects (above 6201')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
                    <dt class="mt3">
                        <strong>2026-11-26 Wet Loose</strong>
                        <div class="tooltip dib v-top pl2"><a data-clipboard-text="a23-23e4901-6200f 0000FF" onclick="clickFunc(this, 'problem-2-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891'); return false;" onmouseout="outFunc('problem-2-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" onblur="outFunc('problem-2-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891')" href="#" role="button" aria-label="Copy 2026-11-26 Wet Loose rules"><span class="tooltiptext" id="problem-2-tooltip-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" aria-live="polite">Copy rules</span><img style="width: 15px;" src="/assets/images/svg/copy-icon.svg" alt=""></a></div>
                    </dt>
                    <dd class="ml3">
                        <ul class="list pl0 mt1 mb0 code f7 rules-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891">
                        
                            <li class="pv1 ntl">
                                <div style="clear: both;background-color: #0000FF" class="fl mr2 h1 w1"></div> <span class="desc">All aspects (4901' to 6200')</span>
                            </li>
                        
                        </ul>
                    </dd>
                
            </dl>
            

            
            <div class="f6 black-70 bl bw2 b--gold bg-washed-yellow pa2 br2 mv3 lh-copy" role="note">
                <b>Medium confidence elevation bands.</b>
                Avalanche Canada doesn't publish numeric elevation bands, so these are derived from elevations mentioned in its past forecasts.
                Adjust them in CalTopo by editing the layer.
            </div>
            
            
            <div class="bg-near-white br2 ph3 pv2 mt4 tc black-60">
            
            <p class="f7 mv1">
                <strong>Issued at:</strong> Wednesday, November 25, 2026 4:00PM
            </p>
            
            
            <p class="f7 mv1 measure center">
                Forecast data from <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/">Avalanche Canada</a>. This site is not affiliated with or endorsed by them. Read the <a class="no-underline fancy-link relative dark-gray b" href="https://avalanche.ca/forecasts/80a8b428-a542-481c-b961-b0ce3f0b6dec_76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891">full forecast</a> before heading out.
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