(()=>{"use strict";var t={426:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(81),a=r.n(n),o=r(645),s=r.n(o)()(a());s.push([t.id,"main {\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.board-container {\r\n    display: flex;\r\n    gap: 100px;\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    width: max-content;\r\n    grid-template-columns: repeat(10, 1fr);\r\n}\r\n\r\n.cell {\r\n    height: 1.2rem;\r\n    width: 1.2rem;\r\n    border: 1px solid black;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ship {\r\n    background-color: aqua;\r\n}\r\n\r\n.damaged-ship {\r\n    background-color: red;\r\n}\r\n\r\n.missed-attack {\r\n    background-color: yellow;\r\n}\r\n",""]);const i=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);n&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var o={},s=[],i=0;i<t.length;i++){var c=t[i],d=n.base?c[0]+n.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var h=r(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var m=a(p,n);n.byIndex=i,e.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function a(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,a){var o=n(t=t||[],a=a||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var i=r(o[s]);e[i].references--}for(var c=n(t,a),d=0;d<o.length;d++){var l=r(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,a&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{class t{constructor(t,e,r){this.length=t,this.hits=0,[this.startRow,this.startCol]=e,[this.endRow,this.endCol]=r}coversCoordinate(t,e){return t>=this.startRow&&t<=this.endRow&&e>=this.startCol&&e<=this.endCol}hit(){this.hits+=1}isSunk(){return this.hits===this.length}}class e{constructor(t){this.size=t,this.board=this.createBoard(t),this.ships=[],this.missedAttacks=[]}createBoard(){const t=[];for(let e=0;e<this.size;e++){t[e]=[];for(let r=0;r<this.size;r++)t[e][r]=0}return t}addShip(e,r,n){const[a,o]=r,[s,i]=n;for(let t=a;t<=s;t++)for(let e=o;e<=i;e++)this.board[t][e]=1;this.ships.push(new t(e,r,n))}receiveAttack(t,e){if(1===this.board[t][e]){this.board[t][e]=2;for(let r of this.ships)if(r.coversCoordinate(t,e)){r.hit();break}return!0}return 0===this.board[t][e]&&(this.missedAttacks.push([t,e]),this.board[t][e]=3,!0)}allSunk(){return this.ships.every((t=>t.isSunk()))}isPositionAvailable(t,e){return this.board[t][e]<2}}class n{constructor(t){this.type=t,this.gameboard=new e(10),this.turn="AI"!==t}attackEnemy(t,e,r){if(this.turn)if("AI"===this.type){const[e,r]=this.#t(t);t.gameboard.receiveAttack(e,r),this.turn=!1,t.turn=!0}else!0===t.gameboard.receiveAttack(e,r)&&(this.turn=!1,t.turn=!0)}#t(t){let e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());for(;!1===t.gameboard.isPositionAvailable(e,r);)e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());return[e,r]}}var a=r(379),o=r.n(a),s=r(795),i=r.n(s),c=r(569),d=r.n(c),l=r(565),u=r.n(l),h=r(216),p=r.n(h),m=r(589),f=r.n(m),b=r(426),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const g=document.querySelector("main");function y(t,e){g.innerHTML="";const r=document.createElement("div");r.classList.add("board-container"),g.appendChild(r);const n=document.createElement("div");n.classList.add("board"),r.appendChild(n);for(let e=0;e<t.length;e++)for(let r=0;r<t[e].length;r++){const a=document.createElement("div");a.classList.add("cell"),a.dataset.row=`${e}`,a.dataset.col=`${r}`,n.appendChild(a),1===t[e][r]?a.classList.add("ship"):2===t[e][r]?a.classList.add("damaged-ship"):3===t[e][r]&&a.classList.add("missed-attack")}const a=document.createElement("div");a.classList.add("board"),a.classList.add("ai-board"),r.appendChild(a);for(let t=0;t<e.length;t++)for(let r=0;r<e[t].length;r++){const n=document.createElement("div");n.classList.add("cell"),n.dataset.row=`${t}`,n.dataset.col=`${r}`,a.appendChild(n),2===e[t][r]?n.classList.add("damaged-ship"):3===e[t][r]&&n.classList.add("missed-attack")}}function k(t){g.innerHTML=`<h1>${t} wins!</h1>`;const e=document.createElement("button");e.classList.add("restart-button"),e.innerHTML="Restart",g.appendChild(e)}function w(){!function(){g.innerHTML="";const t=document.createElement("button");t.textContent="Start Game",t.classList.add("start-game-button"),g.appendChild(t)}(),document.querySelector(".start-game-button").addEventListener("click",L)}function L(){const t=new n("Player"),e=new n("AI");x(t,5),x(e,5),y(t.gameboard.board,e.gameboard.board),C(t,e)}function x(t,e){const[r,n]=prompt(`Ship size: ${e}`).split("");t.gameboard.addShip(e,[Number(r),Number(n)],[Number(r),Number(n)+e-1])}function C(t,e){document.querySelector(".ai-board").addEventListener("click",(r=>{!function(t,e,r){if(!0===e.turn){const{row:n,col:a}=t.target.dataset;e.attackEnemy(r,n,a),y(e.gameboard.board,r.gameboard.board),M(e,r),r.attackEnemy(e,0,0),y(e.gameboard.board,r.gameboard.board),M(e,r)}}(r,t,e)}))}function M(t,e){!0===t.gameboard.allSunk()?(k("Player2"),S()):!0===e.gameboard.allSunk()?(k("Player1"),S()):C(t,e)}function S(){document.querySelector(".restart-button").addEventListener("click",(()=>{w()}))}w()})()})();