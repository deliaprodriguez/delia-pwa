if(!self.define){let e,r={};const s=(s,a)=>(s=new URL(s+".js",a).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(r[i])return;let n={};const f=e=>s(e,i),d={module:{uri:i},exports:n,require:f};r[i]=Promise.all(a.map((e=>d[e]||f(e)))).then((e=>(c(...e),n)))}}define(["./workbox-c9776f8b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"src/index.js",revision:"96e6d725e706748bef964dcb703c1b9f"},{url:"src/styles.css",revision:"d5e9278d1aeb38a2547d88af947ba11c"},{url:"src/game/game.css",revision:"03e3e58a292df61ad10b798e1d5e9300"},{url:"src/game/game.html",revision:"0626c06aa100bb51b94f3cff16795f85"},{url:"src/game/game.js",revision:"7ecf50d7ba07e6cf22a606510c9271b2"},{url:"src/images/back.png",revision:"ce1cab4b0d825d4ae371feb1cbc86609"},{url:"src/images/bronce.png",revision:"cf19b0c20511abf9d23731b3988fdc98"},{url:"src/images/happyClick.png",revision:"7f074b820250a88bd6c4c9ca072617ba"},{url:"src/images/logoPWA.png",revision:"3c774ef03a0844ca12c21fcaa357f27d"},{url:"src/images/logout.png",revision:"97cf2d2036c31a005fcd054e7767c7a9"},{url:"src/images/oro.png",revision:"78ed7f59f9c7bab2ad110e86eda0359d"},{url:"src/images/plata.png",revision:"7e834a92b72d9ee23960acea504441fd"},{url:"src/images/player.png",revision:"178bfd5a77908da3187adcea67e1cda3"},{url:"src/images/plus.png",revision:"8a60a4cd84437617f0d6bf4a4c65fd44"},{url:"src/images/ranking.png",revision:"75f3674530e039ab4f8c62e9598e3289"},{url:"src/ranking/ranking.css",revision:"4a4a09cd142d2300cb1e79ff2ad39ac6"},{url:"src/ranking/ranking.html",revision:"1921b63bf8ab183fabfde8353b81f795"},{url:"src/ranking/ranking.js",revision:"bdb15558ee4a5fa9ae43a45c65253e25"},{url:"src/test/game.test.js",revision:"54c8b8f0181ae0b7821b0794535220f9"},{url:"src/test/index.test.js",revision:"a023fb6c27566c14eb4c078d3d335127"},{url:"src/test/ranking.test.js",revision:"1e61bae3dff24e5ad92d87f9137c6b25"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map