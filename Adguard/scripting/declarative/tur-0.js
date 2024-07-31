/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".container\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#player\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#reki[style*=\\\"display\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"header.container\",\"action\":[\"style\",\"margin-top: 20px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\".wrapper\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#iframe-video\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#dt_contenedor\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body > #wrap\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#episode\",\"action\":[\"style\",\"height: unset !important; width: unset !important; position: unset !important; overflow: unset !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#cn-content\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".container.main\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body > .orta:not([style*=\\\"margin-top:\\\"])\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"div.duyuru-izle.duyuru-izle\",\"action\":[\"style\",\"margin-top: 20px !important;\"]}","{\"selector\":\"div.orta.izle[style^=\\\"margin-top:\\\"]:not(#style_important)\",\"action\":[\"style\",\"margin-top: 180px !important;\"]}","{\"selector\":\"div.orta[style^=\\\"margin-top:\\\"]:not(.izle)\",\"action\":[\"style\",\"margin-top: 131px !important;\"]}"],["{\"selector\":\"#kendisi\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#reki\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".pageskin .oblong\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".previd-link\",\"action\":[\"style\",\"visibility: hidden!important;\"]}"],["{\"selector\":\"center > div > a[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".video-banner\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".card-video\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".plyr\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important; padding-right: 0 !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"height: 0px !important;\"]}"],["{\"selector\":\".topBanner + header\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\".topBanner\",\"action\":[\"style\",\"top: -50px !important;\"]}","{\"selector\":\"body > div[class^=\\\"sfv_\\\"] > div[id]\",\"action\":[\"style\",\"top: 0 !important;\"]}"],["{\"selector\":\"body #oden.adsbygoogle-noablate\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#header2\",\"action\":[\"style\",\"height: 100px !important;\"]}"],["{\"selector\":\".min-height-at-index\",\"action\":[\"style\",\"height: 144px!important;\"]}"],["{\"selector\":\"#wrap\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow: visible!important; padding-right: 0!important;\"]}"],["{\"selector\":\"body.has-mtsnb[style^=\\\"padding-top:\\\"]\",\"action\":[\"style\",\"padding-top: 0!important;\"]}"],["{\"selector\":\".content-wrapper\",\"action\":[\"style\",\"filter: none!important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto!important;\"]}"],["{\"selector\":\".icerik_reklam\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\".rek1\",\"action\":[\"style\",\"height: 1px!important;\"]}","{\"selector\":\".reklam_kontrol\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\"#solust\",\"action\":[\"style\",\"position: static!important;\"]}"],["{\"selector\":\".page_container > .single\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body .fixed_header\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"body .page_container\",\"action\":[\"style\",\"margin-top: 80px !important;\"]}","{\"selector\":\"body > div.site-outer\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; padding-right: 0 !important;\"]}"],["{\"selector\":\"#ikinci\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".sayfafull.uzat > .ie-navigasyon + .soltaraf\",\"action\":[\"style\",\"width:calc(100% - 290px)!important;\"]}","{\"selector\":\".sayfafull.uzat > .soltaraf\",\"action\":[\"style\",\"width:calc(100% - 253px)!important;\"]}","{\"selector\":\".soltaraf\",\"action\":[\"style\",\"width: calc(100%)!important;\"]}"],["{\"selector\":\"#videos\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"body div#player\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow: visible !important; padding-right: 0 !important;\"]}"],["{\"selector\":\"body.pageskin\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".tab-embed\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".embed-responsive\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background-color: #0E0E0E !important;\"]}"],["{\"selector\":\"#episode\",\"action\":[\"style\",\"height: auto !important; width: auto !important; overflow: auto !important; position: unset !important;\"]}"],["{\"selector\":\"#konu\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#head > .menu-bar.cloned\",\"action\":[\"style\",\"top: 0!important;\"]}"],["{\"selector\":\"#film\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".global-header\",\"action\":[\"style\",\"margin-bottom: 24px !important;\"]}"],["{\"selector\":\"#episode\",\"action\":[\"style\",\"height: unset !important; width: unset !important; position: unset !important;\"]}"],["{\"selector\":\"html.async-hide\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none!important;\"]}"],["{\"selector\":\".site-container\",\"action\":[\"style\",\"margin-top: 10px!important;\"]}"],["{\"selector\":\".video-content\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#videos\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".reklam-alan-tam\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background: none!important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: static !important;\"]}","{\"selector\":\"html.fancybox-lock:has(> body) > body\",\"action\":[\"style\",\"overflow: visible!important;\"]}","{\"selector\":\"html.fancybox-lock:has(> body)\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".tab-embed\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\".banner\",\"action\":[\"style\",\"visibility: hidden !important; height: 150px !important;\"]}"],["{\"selector\":\"#cn-content\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"#live-top-menu\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"div > a[href][target=\\\"_blank\\\"][style*=\\\"display: flex !important;\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\"#site\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".yildiz-pageskin #header\",\"action\":[\"style\",\"margin: 0 auto 0px auto !important;\"]}"],["{\"selector\":\"#roadblock\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"ul.app-features\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\".header[style^=\\\"margin-top:\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background: #232930 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\"body.no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body > header\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\".embed-col.ikinci\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body > .container\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body #site\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#wt-masthead\",\"action\":[\"style\",\"height: 0px !important; min-height: 0px !important;\"]}","{\"selector\":\".wt-container[style*=\\\"padding-top: 0px;\\\"]\",\"action\":[\"style\",\"padding-top: 60px!important;\"]}","{\"selector\":\".wt-masthead\",\"action\":[\"style\",\"padding: 0 !important;\"]}"],["{\"selector\":\".layout\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"body > #page\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".main-content\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height:1px!important;\"]}"],["{\"selector\":\"#dinami\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".video\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#kendisi\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"html > body\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"#menuBG.sabitle\",\"action\":[\"style\",\"top: 0!important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"position: absolute!important; left: -10000px!important;\"]}"],["{\"selector\":\"#blogkafemnet-reklam\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".tepe-banner\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".reklam\",\"action\":[\"style\",\"display: block!important; height: 1px!important;\"]}"],["{\"selector\":\"body > div[class=\\\"orta\\\"]\",\"action\":[\"style\",\"margin-top: -150px !important;\"]}"],["{\"selector\":\"#player-has-ads\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body.modal-open\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important; background-color: #171717 !important;\"]}"],["{\"selector\":\"#detect.ad-placement\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".videoAdBlock > div.content\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".tbanner\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display:block!important;\"]}"],["{\"selector\":\"body > main\",\"action\":[\"style\",\"padding-left: unset !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important; padding-right: 0!important;\"]}"],["{\"selector\":\".samBackground[style]\",\"action\":[\"style\",\"background-image: none!important;\"]}","{\"selector\":\".td-background-link #td-outer-wrap\",\"action\":[\"style\",\"cursor: auto !important;\"]}","{\"selector\":\".x-root\",\"action\":[\"style\",\"background-image: none !important;\"]}","{\"selector\":\"body > #x-root\",\"action\":[\"style\",\"background-image: none!important;\"]}","{\"selector\":\"body.td-ad-background-link #td-outer-wrap\",\"action\":[\"style\",\"cursor: auto!important;\"]}","{\"selector\":\"body.td-ad-background-link\",\"action\":[\"style\",\"background-image: none!important;\"]}"],["{\"selector\":\".pageskin .rectangle\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#wrap\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\".pageskin header\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#preroll_skip_btn\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".player\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body > main#wrapper\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".billBoardFrame\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".adsmd\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".with-popup\",\"action\":[\"style\",\"overflow: visible!important;\"]}","{\"selector\":\"body.with-bg\",\"action\":[\"style\",\"padding-top: 0!important;\"]}"],["{\"selector\":\".in-view-ads\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"div[class^=\\\"adv-\\\"]\",\"action\":[\"style\",\"height: 0 !important;\"]}"],["{\"selector\":\"#iki.oynama\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".td-pb-row > .tdc-column > .wpb_wrapper\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"header.advertControlArea\",\"action\":[\"style\",\"top: 0!important;\"]}"],["{\"selector\":\"#mvp-site-main\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#galleryContent\",\"action\":[\"style\",\"visibility: visible!important;\"]}"],["{\"selector\":\".top-banner-wrapper\",\"action\":[\"style\",\"padding: 1px!important; background-color: #007fc5!important;\"]}"],["{\"selector\":\".Banner\",\"action\":[\"style\",\"border: none !important;\"]}","{\"selector\":\"a[href$=\\\"#ReklamRezervasyon\\\"]\",\"action\":[\"style\",\"visibility:hidden !important;\"]}"],["{\"selector\":\"div[style*=\\\"min-width: 300px;\\\"][style*=\\\"min-height: 250px;\\\"][style*=\\\"display: flex!important;\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".jw-preview[style*=\\\"background-image: url\\\"]\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\"html.uk-modal-page > body\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"html.uk-modal-page\",\"action\":[\"style\",\"overflow: auto !important;\"]}"]];

const hostnamesMap = new Map([["sexfilmleriizle.com",1],["elzemfilm.org",1],["selcuksportshd78.biz",3],["filmizlehdfilm.com",[3,42]],["filmmodu10.com",[3,44]],["filmmodu11.com",[3,44]],["filmmodu12.com",[3,44]],["filmmodu13.com",[3,44]],["filmmodu14.com",[3,44]],["filmmodu15.com",[3,44]],["filmmodu16.com",[3,44]],["filmmodu17.com",[3,44]],["filmmodu18.com",[3,44]],["filmmodu19.com",[3,44]],["filmmodu20.com",[3,44]],["filmmodu9.com",[3,44]],["webteizle10.com",[3,78]],["webteizle11.com",[3,78]],["webteizle12.com",[3,78]],["webteizle3.com",[3,78]],["webteizle4.com",[3,78]],["webteizle5.com",[3,78]],["webteizle6.com",[3,78]],["webteizle7.com",[3,78]],["webteizle8.com",[3,78]],["webteizle9.com",[3,78]],["fullhdfilmizlesenebox.org",3],["hdfilmizlesene.org",[3,103]],["turkcealtyazi.org",3],["selcuksportshdamp5.xyz",3],["dizikorea.vip",4],["setfilmizleyin.com",6],["hdfilmizle.site",6],["diziwatch.net",7],["sinefy3.com",9],["filmizlersin.com",10],["tekparthdfilmizle.com",10],["1080pizle.net",[10,61]],["izlehdfilm.net",[10,96]],["filmizle10.org",13],["filmizle11.org",13],["filmizle12.org",13],["filmizle13.org",13],["filmizle14.org",13],["filmizle15.org",13],["filmizle16.org",13],["filmizle17.org",13],["filmizle18.org",13],["filmizle19.org",13],["filmizle20.org",13],["filmizle21.org",13],["filmizle22.org",13],["filmizle23.org",13],["filmizle24.org",13],["filmizle25.org",13],["filmizle5.org",13],["filmizle6.org",13],["filmizle7.org",13],["filmizle8.org",13],["filmizle9.org",13],["hdfilmseyircisi.org",13],["fullhdfilmizle.vip",13],["filmindir.be",18],["dizipal1.cloud",[19,20]],["dizipal10.cloud",[19,20]],["dizipal11.cloud",[19,20]],["dizipal12.cloud",[19,20]],["dizipal132.cloud",[19,20]],["dizipal133.cloud",[19,20]],["dizipal134.cloud",[19,20]],["dizipal135.cloud",[19,20]],["dizipal14.cloud",[19,20]],["dizipal140.cloud",[19,20]],["dizipal2.cloud",[19,20]],["dizipal37.cloud",[19,20]],["dizipal39.cloud",[19,20]],["dizipal4.cloud",[19,20]],["dizipal43.cloud",[19,20]],["dizipal45.cloud",[19,20]],["dizipal47.cloud",[19,20]],["dizipal48.cloud",[19,20]],["dizipal5.cloud",[19,20]],["dizipal54.cloud",[19,20]],["dizipal58.cloud",[19,20]],["dizipal59.cloud",[19,20]],["dizipal60.cloud",[19,20]],["dizipal61.cloud",[19,20]],["dizipal67.cloud",[19,20]],["dizipal73.cloud",[19,20]],["dizipal74.cloud",[19,20]],["dizipal9.cloud",[19,20]],["dizipal700.com",19],["dizipal701.com",19],["dizipal702.com",19],["dizipal703.com",19],["dizipal704.com",19],["dizipal705.com",19],["dizipal706.com",19],["dizipal707.com",19],["dizipal708.com",19],["dizipal709.com",19],["dizipal710.com",19],["dizipal711.com",19],["dizipal712.com",19],["dizipal713.com",19],["dizipal714.com",19],["dizipal715.com",19],["dizipal716.com",19],["dizipal717.com",19],["dizipal718.com",19],["dizipal719.com",19],["dizipal720.com",19],["dizipal721.com",19],["dizipal722.com",19],["dizipal723.com",19],["dizipal724.com",19],["dizipal725.com",19],["dizipal726.com",19],["dizipal727.com",19],["dizipal728.com",19],["dizipal729.com",19],["dizipal730.com",19],["dizipal731.com",19],["dizipal732.com",19],["dizipal733.com",19],["dizipal734.com",19],["dizipal735.com",19],["dizipal736.com",19],["dizipal737.com",19],["dizipal738.com",19],["dizipal739.com",19],["dizipal740.com",19],["dizipal741.com",19],["dizipal742.com",19],["dizipal743.com",19],["dizipal744.com",19],["dizipal745.com",19],["dizipal746.com",19],["dizipal747.com",19],["dizipal748.com",19],["dizipal749.com",19],["dizipal750.com",19],["dizipal751.com",19],["dizipal752.com",19],["dizipal753.com",19],["dizipal754.com",19],["dizipal755.com",19],["dizipal756.com",19],["dizipal757.com",19],["dizipal758.com",19],["dizipal759.com",19],["dizipal760.com",19],["dizipal761.com",19],["dizipal762.com",19],["dizipal763.com",19],["dizipal764.com",19],["dizipal765.com",19],["dizipal766.com",19],["dizipal767.com",19],["dizipal768.com",19],["dizipal769.com",19],["dizipal770.com",19],["dizipal771.com",19],["dizipal772.com",19],["dizipal773.com",19],["dizipal774.com",19],["dizipal775.com",19],["dizipal776.com",19],["dizipal777.com",19],["dizipal778.com",19],["dizipal779.com",19],["dizipal780.com",19],["dizipal781.com",19],["dizipal782.com",19],["dizipal783.com",19],["dizipal784.com",19],["dizipal785.com",19],["dizipal786.com",19],["dizipal787.com",19],["dizipal788.com",19],["dizipal789.com",19],["dizipal790.com",19],["dizipal791.com",19],["dizipal792.com",19],["dizipal793.com",19],["dizipal794.com",19],["dizipal795.com",19],["dizipal796.com",19],["dizipal797.com",19],["dizipal798.com",19],["dizipal799.com",19],["dizipal800.com",19],["dizipal801.com",19],["dizipal802.com",19],["dizipal803.com",19],["dizipal804.com",19],["dizipal805.com",19],["dizipal806.com",19],["dizipal807.com",19],["dizipal808.com",19],["dizipal809.com",19],["dizipal810.com",19],["dizipal811.com",19],["dizipal812.com",19],["dizipal813.com",19],["dizipal814.com",19],["dizipal815.com",19],["dizipal816.com",19],["dizipal817.com",19],["dizipal818.com",19],["dizipal819.com",19],["dizipal820.com",19],["dizipal821.com",19],["dizipal822.com",19],["dizipal823.com",19],["dizipal824.com",19],["dizipal825.com",19],["dizipal826.com",19],["dizipal827.com",19],["dizipal828.com",19],["dizipal829.com",19],["dizipal830.com",19],["dizipal831.com",19],["dizipal832.com",19],["dizipal833.com",19],["dizipal834.com",19],["dizipal835.com",19],["dizipal836.com",19],["dizipal837.com",19],["dizipal838.com",19],["dizipal839.com",19],["dizipal840.com",19],["dizipal841.com",19],["dizipal842.com",19],["dizipal843.com",19],["dizipal844.com",19],["dizipal845.com",19],["dizipal846.com",19],["dizipal847.com",19],["dizipal848.com",19],["dizipal849.com",19],["dizipal850.com",19],["filmmodu.co",21],["sinemia.org",21],["61saat.com",22],["esgundem26.com",22],["ademyurt.com",23],["akakce.com",24],["akillikafa.com",25],["kazanimtestleri.com.tr",25],["altinpiyasa.com",26],["arabam.com",27],["asyadiziizle.com",28],["dizimom.tv",28],["aydinpost.com",29],["mygaziantep.com",29],["bilgenc.com",30],["boxofficeturkiye.com",31],["cadcamsektoru.com",32],["cazkolik.com",33],["coin-turk.com",34],["degisimmedya.com",35],["turkishairforce.org",35],["karadenizgazete.com.tr",35],["dizimax2.com",36],["besiktas.com.tr",36],["dizimodu.com",37],["neskici.com",37],["forum.donanimhaber.com",38],["eroticpub.com",39],["filmdizievi1.com",39],["erotikfilmtube.com",40],["eskisehirhaber.com",41],["haberlisin.com",41],["halk54.com",41],["karaman24.com",41],["eskisehirekspres.net",41],["filmkuzusu1.com",43],["safirfilmizle1.com",43],["sinefilmizlesen.com",[43,69]],["filmmoduu.com",45],["hdfilmizle.org",45],["filmsezonu.com",46],["finansgundem.com",47],["fullhdfilmizleabi.com",48],["hdfilmcanavari.org",48],["gazetevatan.com",49],["goodfilmizle.com",50],["gratis.com",51],["haberintakasi.com",52],["hdfilmifullizle.com",[53,54]],["technopat.net",[53,102]],["pchocasi.com.tr",53],["hdfreeizle.com",55],["hdmixfilim.com",55],["superfilmgeldi.net",55],["hdizlefilmleri.com",56],["sinekolik.com",56],["iddaaorantahmin.com",57],["itemci.com",58],["jurnalci.com",59],["kelebekfilmizlee.com",60],["kizlarsoruyor.com",61],["kriptoarena.com",62],["kultfilmler.com",63],["mackolik.com",64],["mp3indirhane.com",65],["ceptenmuzikindir.me",65],["piyasaanketi.com",66],["teknoblog.com",66],["ucuzaucak.net",66],["radyofenomen.com",67],["sezonlukdizi6.com",68],["sinemalar.com",70],["tamindir.com",71],["tarsusakdeniz.com",72],["tipobettv204.com",73],["tipobettv205.com",73],["tipobettv206.com",73],["tipobettv207.com",73],["tipobettv208.com",73],["tipobettv209.com",73],["tipobettv210.com",73],["trabzonhaber24.com",74],["forum.turkmmo.com",74],["kayseristarhaber.com.tr",74],["turkce-brosurler.com",75],["ugurfilm10.com",76],["ugurfilm11.com",76],["ugurfilm12.com",76],["ugurfilm13.com",76],["ugurfilm14.com",76],["ugurfilm15.com",76],["ugurfilm16.com",76],["ugurfilm7.com",76],["ugurfilm8.com",76],["ugurfilm9.com",76],["webdramaturkey.com",77],["webtekno.com",79],["yenisafak.com",80],["sinema.cx",81],["jetfilmizle.de",82],["altin.in",83],["tr.link",84],["fullhd720pizle.live",85],["hdfilmcehennem.live",86],["contentx.me",87],["61medya.net",88],["birgun.net",89],["blogkafem.net",90],["evrensel.net",91],["fontyukle.net",92],["fullfilmizlesene.net",93],["fullhddizifilmizle2.net",94],["fullhddizifilmizle3.net",94],["fullhddizifilmizle4.net",94],["fullhddizifilmizle5.net",94],["haber61.net",95],["mangaship.net",97],["mobeseizle.net",98],["motosiklet.net",99],["osxinfo.net",100],["r10.net",101],["fullhdfilm.pro",104],["yabancidizi.pro",105],["apara.com.tr",106],["baho.com.tr",107],["cumhuriyet.com.tr",108],["fanatik.com.tr",109],["muud.com.tr",110],["oyunu.com.tr",111],["popsci.com.tr",112],["sabah.com.tr",113],["sanayigazetesi.com.tr",114],["sonsaat.com.tr",115],["t24.com.tr",116],["tercihrobotu.com.tr",117],["tgrthaber.com.tr",118],["dizigom1.tv",119],["ssport.tv",120]]);

const entitiesMap = new Map([["4kfilmizlesene",0],["dizicaps",1],["dizifilmbox",2],["dizilab8",3],["dizilab9",3],["filmizletv",3],["filmmakinesi",[3,4]],["fullhdfilmizle",[3,11]],["fullhdfilmizletv",3],["jetfilmizle",3],["siyahfilmizle",3],["dizitime",[4,5]],["diziyo",6],["filmizlesene",[7,8]],["filmzal",9],["hdfilmcehennemi",[9,15]],["fullfilmizle",10],["fulltimehdfilmizle",10],["fullhdfilmizlesene",12],["fullhdfilmmodu2",13],["fullhdizle",14],["hdfilmizleamk",16],["tranimeizle",17]]);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
