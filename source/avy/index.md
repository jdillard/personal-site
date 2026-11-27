---
layout: page
title: Avalanche Forecast Layers for CalTopo
description: The latest avalanche forecasts as CalTopo map layers, with danger rating and avalanche problem shading for each advisory zone.
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

<div>
    <div class="mt4 ph2 tc">
        <span class="avy-picker">
            <label for="indexSel">Region</label>
            <select class="avy-select" id="indexSel">
                <option value="all" selected="">All Regions</option>
                <optgroup label="US">
                    
                    
                    <option value="ak">Alaska</option>
                    
                    
                    
                    <option value="az">Arizona</option>
                    
                    
                    
                    <option value="ca">California</option>
                    
                    
                    
                    <option value="co">Colorado</option>
                    
                    
                    
                    <option value="id">Idaho</option>
                    
                    
                    
                    <option value="mt">Montana</option>
                    
                    
                    
                    <option value="nh">New Hampshire</option>
                    
                    
                    
                    <option value="nm">New Mexico</option>
                    
                    
                    
                    <option value="ny">New York</option>
                    
                    
                    
                    <option value="or">Oregon</option>
                    
                    
                    
                    <option value="ut">Utah</option>
                    
                    
                    
                    <option value="wa">Washington</option>
                    
                    
                    
                    <option value="wy">Wyoming</option>
                    
                    
                </optgroup>
                <optgroup label="Canada">
                    <option value="canada">Canada</option>
                </optgroup>
            </select>
        </span>
    </div>
</div>

<div id="avy-layout" class="avy-layout ph3 mt3">
    <div class="avy-layout-map">
        <div class="avy-map" id="map"></div>
    </div>
    <div class="avy-regions">
    
    
        <div id="ak-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html">Alaska</a></h3>
            <ul id="ak-zones" class="list pl3 f5 mt2">
                
                <li data-zone="CNFAIC-2818" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-CNFAIC-2818" title="Chugach State Park">Chugach State Park</a>
                </li>
                
                <li data-zone="CNFAIC-2817" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-CNFAIC-2817" title="Seward and Lost Lake">Seward and Lost Lake</a>
                </li>
                
                <li data-zone="CNFAIC-2816" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-CNFAIC-2816" title="Summit Lake">Summit Lake</a>
                </li>
                
                <li data-zone="CNFAIC-2815" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-CNFAIC-2815" title="Turnagain Pass and Girdwood">Turnagain Pass and Girdwood</a>
                </li>
                
                <li data-zone="CAAC-2165" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-CAAC-2165" title="Douglas Island">Douglas Island</a>
                </li>
                
                <li data-zone="CAAC-2164" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-CAAC-2164" title="Juneau">Juneau</a>
                </li>
                
                <li data-zone="CAC-1421" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-CAC-1421" title="Cordova">Cordova</a>
                </li>
                
                <li data-zone="EARAC-3002" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-EARAC-3002" title="North (Castner-Canwell) Eastern Alaska Range">North (Castner-Canwell) Eastern Alaska Range</a>
                </li>
                
                <li data-zone="EARAC-3003" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-EARAC-3003" title="South (Summit) Eastern Alaska Range">South (Summit) Eastern Alaska Range</a>
                </li>
                
                <li data-zone="HAC-3049" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-HAC-3049" title="Chilkat Pass">Chilkat Pass</a>
                </li>
                
                <li data-zone="HAC-3047" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-HAC-3047" title="Lutak">Lutak</a>
                </li>
                
                <li data-zone="HAC-3048" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-HAC-3048" title="Transitional">Transitional</a>
                </li>
                
                <li data-zone="HPAC-2152" data-color="#fff200" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-HPAC-2152" title="Hatcher Pass">Hatcher Pass</a>
                </li>
                
                <li data-zone="VAC-1611" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-VAC-1611" title="Continental">Continental</a>
                </li>
                
                <li data-zone="VAC-1610" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-VAC-1610" title="Intermountain">Intermountain</a>
                </li>
                
                <li data-zone="VAC-1609" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ak.html#zone-VAC-1609" title="Maritime">Maritime</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="az-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/az.html">Arizona</a></h3>
            <ul id="az-zones" class="list pl3 f5 mt2">
                
                <li data-zone="KPAC-2990" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/az.html#zone-KPAC-2990" title="San Francisco Peaks / Kachina Peaks Wilderness">San Francisco Peaks / Kachina Peaks Wilderness</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="ca-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ca.html">California</a></h3>
            <ul id="ca-zones" class="list pl3 f5 mt2">
                
                <li data-zone="BAC-3004" data-color="#fff200" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ca.html#zone-BAC-3004" title="Bridgeport Avalanche Center">Bridgeport Avalanche Center</a>
                </li>
                
                <li data-zone="ESAC-128" data-color="#fff200" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ca.html#zone-ESAC-128" title="Eastside Region">Eastside Region</a>
                </li>
                
                <li data-zone="MSAC-3044" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ca.html#zone-MSAC-3044" title="Mount Shasta">Mount Shasta</a>
                </li>
                
                <li data-zone="SAC-2458" data-color="#50b848" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ca.html#zone-SAC-2458" title="Central Sierra Nevada">Central Sierra Nevada</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="co-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/co.html">Colorado</a></h3>
            <ul id="co-zones" class="list pl3 f5 mt2">
                
                <li data-zone="CAIC-2747" data-color="#50b848" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/co.html#zone-CAIC-2747" title="Grand Mesa, Battlement Mesa">Grand Mesa, Battlement Mesa</a>
                </li>
                
                <li data-zone="CAIC-2754" data-color="#50b848" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/co.html#zone-CAIC-2754" title="Sawatch Mountains, Sangre de Cristo Mountains, Pikes Peak Massif, Cochetopa Hills, Northern San Juan Mountains, La Garita Mountains">Sawatch Mountains +5 more</a>
                </li>
                
                <li data-zone="CAIC-2697" data-color="#50b848" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/co.html#zone-CAIC-2697" title="Flat Top Mountains, Front Range, Park Range, Gore Range, Rabbit Ears Mountains, Never Summer Mountains">Flat Top Mountains +5 more</a>
                </li>
                
                <li data-zone="CAIC-2755" data-color="#50b848" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/co.html#zone-CAIC-2755" title="Mosquito Range, Front Range, Elkhead Mountains, Red Table and Hardscrabble, Ten Mile Range, Sawatch Mountains, Park Range, Medicine Bow Mountains, Gore Range">Mosquito Range +8 more</a>
                </li>
                
                <li data-zone="CAIC-2660" data-color="#fff200" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/co.html#zone-CAIC-2660" title="La Plata Mountains, Northern San Juan Mountains, Rico Mountains, La Garita Mountains, Southern San Juan Mountains">La Plata Mountains +4 more</a>
                </li>
                
                <li data-zone="CAIC-2753" data-color="#fff200" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/co.html#zone-CAIC-2753" title="Elk Mountains, Sawatch Mountains, West Elk Mountains">Elk Mountains +2 more</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="id-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html">Idaho</a></h3>
            <ul id="id-zones" class="list pl3 f5 mt2">
                
                <li data-zone="IPAC-3018" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html#zone-IPAC-3018" title="Selkirk Mountains">Selkirk Mountains</a>
                </li>
                
                <li data-zone="IPAC-1902" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html#zone-IPAC-1902" title="Silver Valley & Bitterroot Mountains">Silver Valley & Bitterroot Mountains</a>
                </li>
                
                <li data-zone="IPAC-1900" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html#zone-IPAC-1900" title="West Cabinet Mountains">West Cabinet Mountains</a>
                </li>
                
                <li data-zone="PAC-3014" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html#zone-PAC-3014" title="Salmon River Mountains">Salmon River Mountains</a>
                </li>
                
                <li data-zone="PAC-3015" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html#zone-PAC-3015" title="West Mountains">West Mountains</a>
                </li>
                
                <li data-zone="SNFAC-2907" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html#zone-SNFAC-2907" title="Banner Summit">Banner Summit</a>
                </li>
                
                <li data-zone="SNFAC-2904" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html#zone-SNFAC-2904" title="Galena Summit & Eastern Mtns">Galena Summit & Eastern Mtns</a>
                </li>
                
                <li data-zone="SNFAC-2906" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html#zone-SNFAC-2906" title="Sawtooth & Western Smoky Mtns">Sawtooth & Western Smoky Mtns</a>
                </li>
                
                <li data-zone="SNFAC-2905" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/id.html#zone-SNFAC-2905" title="Soldier & Wood River Valley Mtns">Soldier & Wood River Valley Mtns</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="mt-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html">Montana</a></h3>
            <ul id="mt-zones" class="list pl3 f5 mt2">
                
                <li data-zone="FAC-3043" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-FAC-3043" title="Flathead Range & Glacier NP">Flathead Range & Glacier NP</a>
                </li>
                
                <li data-zone="FAC-3040" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-FAC-3040" title="Northern Whitefish Range">Northern Whitefish Range</a>
                </li>
                
                <li data-zone="FAC-3041" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-FAC-3041" title="Southern Whitefish Range">Southern Whitefish Range</a>
                </li>
                
                <li data-zone="FAC-3042" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-FAC-3042" title="Swan Range">Swan Range</a>
                </li>
                
                <li data-zone="GNFAC-2819" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-GNFAC-2819" title="Bridger Range">Bridger Range</a>
                </li>
                
                <li data-zone="GNFAC-2827" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-GNFAC-2827" title="Cooke City">Cooke City</a>
                </li>
                
                <li data-zone="GNFAC-2826" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-GNFAC-2826" title="Island Park">Island Park</a>
                </li>
                
                <li data-zone="GNFAC-2825" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-GNFAC-2825" title="Lionhead Area">Lionhead Area</a>
                </li>
                
                <li data-zone="GNFAC-2821" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-GNFAC-2821" title="Northern Gallatin Range">Northern Gallatin Range</a>
                </li>
                
                <li data-zone="GNFAC-2822" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-GNFAC-2822" title="Northern Madison Range">Northern Madison Range</a>
                </li>
                
                <li data-zone="GNFAC-2824" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-GNFAC-2824" title="Southern Gallatin Range">Southern Gallatin Range</a>
                </li>
                
                <li data-zone="GNFAC-2823" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-GNFAC-2823" title="Southern Madison Range">Southern Madison Range</a>
                </li>
                
                <li data-zone="IPAC-1901" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-IPAC-1901" title="East Cabinet Mountains">East Cabinet Mountains</a>
                </li>
                
                <li data-zone="IPAC-3019" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-IPAC-3019" title="Purcell Mountains">Purcell Mountains</a>
                </li>
                
                <li data-zone="WCMAC-1724" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-WCMAC-1724" title="Bitterroot">Bitterroot</a>
                </li>
                
                <li data-zone="WCMAC-1723" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-WCMAC-1723" title="Rattlesnake">Rattlesnake</a>
                </li>
                
                <li data-zone="WCMAC-1722" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/mt.html#zone-WCMAC-1722" title="Seeley Lake">Seeley Lake</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="nh-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/nh.html">New Hampshire</a></h3>
            <ul id="nh-zones" class="list pl3 f5 mt2">
                
                <li data-zone="MWAC-2355" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/nh.html#zone-MWAC-2355" title="Presidential Range">Presidential Range</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="nm-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/nm.html">New Mexico</a></h3>
            <ul id="nm-zones" class="list pl3 f5 mt2">
                
                <li data-zone="TAC-490" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/nm.html#zone-TAC-490" title="Northern New Mexico">Northern New Mexico</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="ny-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ny.html">New York</a></h3>
            <ul id="ny-zones" class="list pl3 f5 mt2">
                
                <li data-zone="NYSAC-3017" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ny.html#zone-NYSAC-3017" title="Adirondack Park">Adirondack Park</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="or-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/or.html">Oregon</a></h3>
            <ul id="or-zones" class="list pl3 f5 mt2">
                
                <li data-zone="COAA-2470" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/or.html#zone-COAA-2470" title="Central Cascades">Central Cascades</a>
                </li>
                
                <li data-zone="COAA-2471" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/or.html#zone-COAA-2471" title="Newberry">Newberry</a>
                </li>
                
                <li data-zone="NWAC-3032" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/or.html#zone-NWAC-3032" title="Mt Hood">Mt Hood</a>
                </li>
                
                <li data-zone="SOAIX-1369" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/or.html#zone-SOAIX-1369" title="Southern Oregon">Southern Oregon</a>
                </li>
                
                <li data-zone="WAC-2985" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/or.html#zone-WAC-2985" title="Blues">Blues</a>
                </li>
                
                <li data-zone="WAC-2984" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/or.html#zone-WAC-2984" title="Elkhorns">Elkhorns</a>
                </li>
                
                <li data-zone="WAC-2982" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/or.html#zone-WAC-2982" title="Northern Wallowas">Northern Wallowas</a>
                </li>
                
                <li data-zone="WAC-2983" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/or.html#zone-WAC-2983" title="Southern Wallowas">Southern Wallowas</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="ut-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html">Utah</a></h3>
            <ul id="ut-zones" class="list pl3 f5 mt2">
                
                <li data-zone="UAC-1744" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html#zone-UAC-1744" title="Abajos">Abajos</a>
                </li>
                
                <li data-zone="UAC-1736" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html#zone-UAC-1736" title="Logan">Logan</a>
                </li>
                
                <li data-zone="UAC-1742" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html#zone-UAC-1742" title="Moab">Moab</a>
                </li>
                
                <li data-zone="UAC-1737" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html#zone-UAC-1737" title="Ogden">Ogden</a>
                </li>
                
                <li data-zone="UAC-1739" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html#zone-UAC-1739" title="Provo">Provo</a>
                </li>
                
                <li data-zone="UAC-1738" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html#zone-UAC-1738" title="Salt Lake">Salt Lake</a>
                </li>
                
                <li data-zone="UAC-1741" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html#zone-UAC-1741" title="Skyline">Skyline</a>
                </li>
                
                <li data-zone="UAC-1743" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html#zone-UAC-1743" title="Southwest">Southwest</a>
                </li>
                
                <li data-zone="UAC-1740" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/ut.html#zone-UAC-1740" title="Uintas">Uintas</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="wa-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html">Washington</a></h3>
            <ul id="wa-zones" class="list pl3 f5 mt2">
                
                <li data-zone="NWAC-3030" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html#zone-NWAC-3030" title="East Slopes Central">East Slopes Central</a>
                </li>
                
                <li data-zone="NWAC-3029" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html#zone-NWAC-3029" title="East Slopes North">East Slopes North</a>
                </li>
                
                <li data-zone="NWAC-3031" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html#zone-NWAC-3031" title="East Slopes South">East Slopes South</a>
                </li>
                
                <li data-zone="NWAC-3020" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html#zone-NWAC-3020" title="Olympics">Olympics</a>
                </li>
                
                <li data-zone="NWAC-3028" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html#zone-NWAC-3028" title="Snoqualmie Pass">Snoqualmie Pass</a>
                </li>
                
                <li data-zone="NWAC-3024" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html#zone-NWAC-3024" title="Stevens Pass">Stevens Pass</a>
                </li>
                
                <li data-zone="NWAC-3022" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html#zone-NWAC-3022" title="West Slopes Central">West Slopes Central</a>
                </li>
                
                <li data-zone="NWAC-3021" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html#zone-NWAC-3021" title="West Slopes North">West Slopes North</a>
                </li>
                
                <li data-zone="NWAC-3023" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wa.html#zone-NWAC-3023" title="West Slopes South">West Slopes South</a>
                </li>
                
            </ul>
        </div>
    
    
    
        <div id="wy-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wy.html">Wyoming</a></h3>
            <ul id="wy-zones" class="list pl3 f5 mt2">
                
                <li data-zone="BTAC-2856" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wy.html#zone-BTAC-2856" title="Salt River and Wyoming Ranges">Salt River and Wyoming Ranges</a>
                </li>
                
                <li data-zone="BTAC-2860" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wy.html#zone-BTAC-2860" title="Snake River Range">Snake River Range</a>
                </li>
                
                <li data-zone="BTAC-2855" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wy.html#zone-BTAC-2855" title="Tetons">Tetons</a>
                </li>
                
                <li data-zone="BTAC-2852" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wy.html#zone-BTAC-2852" title="Togwotee Pass">Togwotee Pass</a>
                </li>
                
                <li data-zone="EWYAIX-2841" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wy.html#zone-EWYAIX-2841" title="Big Horns">Big Horns</a>
                </li>
                
                <li data-zone="EWYAIX-3045" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wy.html#zone-EWYAIX-3045" title="Sierra Madre">Sierra Madre</a>
                </li>
                
                <li data-zone="EWYAIX-3046" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/wy.html#zone-EWYAIX-3046" title="Snowy Range">Snowy Range</a>
                </li>
                
            </ul>
        </div>
    
    
        <div id="canada-region" class="avy-region">
            <h3 class="tc bb b--moon-gray"><a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html">Canada</a></h3>
            <ul id="canada-zones" class="list pl3 f5 mt2">
                
                <li data-zone="afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" data-color="#fff200" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-afe9ffd14c0637d10e2530857f8e7a8cba0277f33351d3b31c8f37f4111c6ecf" title="Banff, East Side 93N, Field, Kootenay, Lake Louise, Little Yoho, LLSA, Sunshine, West Side 93N">Banff, East Side 93N +7 more</a>
                </li>
                
                <li data-zone="b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a" data-color="#fff200" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-b2a14eb464567902bcdf5b0cf1efe870416fee4de1d80d5b1f6d9cbc1b3bd73a" title="Glacier">Glacier</a>
                </li>
                
                <li data-zone="426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e" data-color="#939598" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-426b4bc4f761f2890921214b32ed3bf9f5de086f39b6f755296daf3a3048587e" title="Brazeau, Churchill, Cirrus-Wilson, Fryatt, Icefields, Maligne, Marmot, Miette Lake, Pyramid">Brazeau, Churchill +7 more</a>
                </li>
                
                <li data-zone="ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-ff27f89a78600ce8622e02e807bc89b31d7f1876832b9dc0ceab5b43cab072e5" title="Haines Pass">Haines Pass</a>
                </li>
                
                <li data-zone="5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e" data-color="#50b848" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-5eef47a6f069ff87be8c099f45593abef02fd067da030b538750ab4bff19d02e" title="Crawford, Dogtooth, East Purcell, Moyie, St. Mary, West Purcell">Crawford, Dogtooth +4 more</a>
                </li>
                
                <li data-zone="a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62" data-color="#fff200" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-a6eaa6fc749af511729c647e3225934acf3cc711efdc09d2e673515f4fa2ca62" title="Coquihalla, Harrison-Fraser, Manning, Skagit">Coquihalla +3 more</a>
                </li>
                
                <li data-zone="cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" data-color="#fff200" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-cc0488b77181621ea6539a8aae5058a9d7f9228455cdb06fd04fc3da767c171f" title="Badshot-Battle, Blue River, Central Selkirk, Clemina, Esplanade, Goat, Gold, Jordan, North Monashee, North Selkirk, Premier, Robson">Badshot-Battle +11 more</a>
                </li>
                
                <li data-zone="2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1" data-color="#50b848" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-2c9088bd3656cc50dde613e8988aa032bb054cfb3c2601e1a9e050b8dc2169b1" title="North Shore, Sasquatch, Sky Pilot, Tetrahedron">North Shore +3 more</a>
                </li>
                
                <li data-zone="9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" data-color="#f7941e" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #f7941e" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-9476288b73b38d428c40abcdac4a2bc9efcee359e23c201ff05a5b0b45346609" title="Boundary, Ningunsaw">Boundary, Ningunsaw</a>
                </li>
                
                <li data-zone="14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da" data-color="#f7941e" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #f7941e" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-14cb3ee8b3d2e2aa8f879077e43aaa6dd865c462104e7f5d161cfc9ba24927da" title="Birkenhead, Duffey, South Chilcotin, Stein, Taseko">Birkenhead, Duffey +3 more</a>
                </li>
                
                <li data-zone="2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" data-color="#50b848" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-2e2d70ec8c53844ea6a0c0d527884ad3d7f76cb269418a8df28a77bd8bc982b4" title="Tutshi, Wheaton, White Pass East, White Pass West">Tutshi, Wheaton +2 more</a>
                </li>
                
                <li data-zone="010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-010016cb778a7962e0174e68d5a278372db93924e19e450052de07b95eb72c85" title="Waterton">Waterton</a>
                </li>
                
                <li data-zone="2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d" data-color="#939598" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-2b27cc579bf40b0d3360a5ffe527102213d07f32526775c4e2f0af58e02f8d3d" title="Corner Brook, Gros Morne, Northern Peninsula">Corner Brook +2 more</a>
                </li>
                
                <li data-zone="3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1" data-color="#f7941e" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #f7941e" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-3f39aaf57d16d5bfd5cbfbeaedbb007d59ca58b3ee81d7cc141237eeb436e1e1" title="Howson, Kitimat, Microwave-Sinclair, Nass, Rupert, Seven Sisters, Shames, Stewart">Howson, Kitimat +6 more</a>
                </li>
                
                <li data-zone="0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" data-color="#50b848" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-0f23c8baa694da6047b905917ff75428ec8d4422697c6a7d6c297ac5ddeb4e60" title="Bonnington, Grohman, Kokanee, Kootenay Pass, Norns, Retallack, Rossland, South Okanagan, Valhalla, Whatshan, Ymir">Bonnington, Grohman +9 more</a>
                </li>
                
                <li data-zone="871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7" data-color="#fff200" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #fff200" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-871c109605381ca82a15f1c3a99ede9092e2ac514e30aee789b3d816986c02e7" title="Kispiox, North Bulkley, South Bulkley, Telkwa">Kispiox +3 more</a>
                </li>
                
                <li data-zone="76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" data-color="#50b848" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-76677f8b456f0efafa1e5d686775434cdc162b64d79f557880b8eefa6ed09891" title="East Island, North Island, South Island, West Island">East Island +3 more</a>
                </li>
                
                <li data-zone="6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d" data-color="#f7941e" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #f7941e" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-6832021ccd53924459d6723ac8ec1fb45577deff7f5fef50b2c8ebd0b66e671d" title="Brandywine, Garibaldi, Homathko, Powell River, Spearhead, Tantalus">Brandywine +5 more</a>
                </li>
                
                <li data-zone="479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" data-color="#50b848" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-479dbbc0268615ac524cb3eb49c702499df9df1dd24684b3d0054699f5e11013" title="East Kakwa, Kakwa, McBride, McGregor, Pine Pass, Renshaw, Sugarbowl, Tumbler">East Kakwa, Kakwa +6 more</a>
                </li>
                
                <li data-zone="22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" data-color="#50b848" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-22f8effd952a627fef02a5c8a7d562795ca1143e8c0a28fa68d13ede54a73d16" title="Akamina, Bull, Crowsnest North, Crowsnest South, Elkford East, Elkford West, Flathead, Lizard">Akamina, Bull +6 more</a>
                </li>
                
                <li data-zone="d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" data-color="#50b848" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-d15dff296f550c29a26e3203191d60ed0a36eeda9361320a324047b0850d77ea" title="Bow Valley, Highwood Pass, North 40, Spray - KLakes">Bow Valley +3 more</a>
                </li>
                
                <li data-zone="fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" data-color="#50b848" data-subregions="true" class="pv1">
                    <div style="clear: both;background-color: #50b848" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-fd81d6f6be094ef894f6931c9e0097fc137deae7a10c62aaff8ea96a3b133553" title="Clearwater, North Okanagan, Quesnel, Shuswap">Clearwater +3 more</a>
                </li>
                
                <li data-zone="03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762" data-color="#939598" class="pv1">
                    <div style="clear: both;background-color: #939598" class="fl mr2 h1 w1"></div>
                    <a class="no-underline fancy-link relative black-70 hover-light-red" href="/avy/canada.html#zone-03eb3e06c31ffda095ce133e8c6974197efdccd29c7723d078ef27742ff6a762" title="Chic-Chocs">Chic-Chocs</a>
                </li>
                
            </ul>
        </div>
    </div>
</div>


{% include feedback.html %}
