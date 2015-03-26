/* tripledollar v.0.9.4, (c) 2015 Steen Klingberg. License MIT. */
(function(e){"use strict";var t="0.9.4",n={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml"},i=function(){var e=Array.prototype.slice.call(arguments),t,r,o,s,a,l,c,f=/^[A-Za-z][A-Za-z0-9-_\.:#]*$/;if(typeof e[0]!=="string"){if(Object.prototype.toString.call(e[0])==="[object Array]"){return i.apply(this,e[0])}return}t=e.shift();r=t.split(/[\.#]/);o=t.split(/[^\.#]+/);if(o[0]===""){o.shift()}for(a=0;a<r.length;a++){if(r[a]&&!r[a].match(f)){return}if(a===0){l=r[0].split(":");if(Object.keys(n).indexOf(l[0])>-1){s=document.createElementNS(n[l[0]],l[1]||l[0])}else{s=document.createElement(l[1]||l[0])}}else{if(s&&o[a-1]==="."){c=s.className.toString().split(" ");if(c.indexOf(r[a])===-1){c.push(r[a]);s.setAttribute("class",c.join(" "))}}else if(o[a-1]==="#"){s.setAttribute("id",r[a])}}}function u(e){var t,r,o,a,l;for(r=0;r<e.length;r++){t=e[r];if(t&&t.nodeType){s.appendChild(t)}else if(typeof t==="object"){if(Object.prototype.toString.call(t)==="[object Array]"){s.appendChild(i.apply(this,t))}else{for(a in t){if(t.hasOwnProperty(a)){if(a.match(/^data./)){l=a.substr(4).toLowerCase();s.setAttribute("data-"+l,t[a])}else{o=a.split(":");if(o.length===2&&Object.keys(n).indexOf(o[0])>-1){s.setAttributeNS(n[o[0]],o[1],t[a])}else{s.setAttribute(a,t[a])}}}}}}else{s.appendChild(document.createTextNode(String(t)))}}}u(e);function p(e){var t,n,i;for(t in e){if(e.hasOwnProperty(t)){if(typeof e[t]!=="object"){this.style[t]=e[t]}else{n=this.querySelectorAll(t);for(i=0;i<n.length;i++){p.call(n[i],e[t])}}}}return this}s.css=p;s.set=function(e,t){this[e]=t;return this};s.fun=function(e){var t=Array.prototype.slice.call(arguments,1);this[e].apply(this,t);return this};s.evt=function(e,t){if(arguments.length>2){var n=Array.prototype.slice.call(arguments,2);if(this.addEventListener){this.addEventListener(e,function(e){var i=[e].concat(n);t.apply(this,i)},false)}else{this.attachEvent("on"+e,function(e){var i=[e].concat(n);t.apply(this,i)})}}else{if(this.addEventListener){this.addEventListener(e,t,false)}else{this.attachEvent("on"+e,t)}}return this};s.ins=function(){u(Array.prototype.slice.call(arguments));return this};s.query=s.querySelector;s.queryAll=s.querySelectorAll;s.prototype=s;return s},r,o,s,a;i.version=t;i.structify=function(e){var t=null,n;if(e.nodeType===1){n=function(e){var t=[],i,r,o,s,a,l=/id|class|contenteditable/,c=e.localName,f=String(e.className).replace(" ",".");if(f){c+="."+f}if(e.id){c+="#"+e.id}t.push(c);if(e.hasAttributes()){r=e.attributes;i={};for(a=0;a<r.length;a++){if(!r[a].name.match(l)){i[r[a].name]=r[a].value}}if(Object.keys(i).length>0){t.push(i)}}e.normalize();o=e.childNodes;for(a=0;a<o.length;a++){if(o[a].nodeType===3){s=o[a].data.replace(/\s\s*/," ").trim();if(s.length>0){t.push(s)}}else if(o[a].nodeType===1){t.push(n(o[a]))}}return t};t=n(e)}return t};i.onReady=function(e){if(document.readyState==="complete"||document.readyState==="interactive"){r(e)}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",e,false)}else{document.attachEvent("onreadystatechange",e)}};if(e.setImmediate){r=e.setImmediate}else{s=[];a="doNext"+(Math.random()*67108864|0).toString(16);o=function(t){var n,i;if(t.source===e&&typeof t.data==="string"&&t.data.indexOf(a)===0){var r=s.shift();if(r.length>0){n=r[0].apply(undefined,r.splice(1),true);if(s[0]&&s[0].length===1){s[0].push(n)}}}};if(e.postMessage){if(e.addEventListener){e.addEventListener("message",o,false)}else{e.attachEvent("message",o)}}r=function(){var t=Array.prototype.slice.call(arguments);if(typeof t[0]==="function"){s.push(t);e.postMessage(a,"*")}}}i.setImmediate=r;i.appendToDoc=function l(){var t=Array.prototype.slice.call(arguments),n,o=[];l.then=function(e){var t;if(l===e){throw new TypeError("Circular reference.")}if(typeof e==="function"){o.push(e)}else{console.log('$$$: Only functions can be passed to "then()"!')}return l};l.catch=function(e){console.log("$$$: Error occured.",e);return l};function s(r){i.onReady(function(){for(n=0;n<t.length;n++){if(Object.prototype.toString.call(t[n])==="[object Array]"){document.body.appendChild(i(t[n]))}else if(t[n]instanceof e.HTMLElement||t[n]instanceof e.SVGSVGElement){document.body.appendChild(t[n])}else if(typeof t[n]==="function"){t[n]()}}r()})}if(typeof Promise!=="undefined"){return new Promise(function(e,t){try{s(e)}catch(n){t(n)}})}else{s(function(){var e;o.forEach(function(t){r(function(){if(e&&e.then){e.then(function(e){t(e)})}else{e=t(e)}})})});return l}};i.query=function(e){return document.querySelector(e)};i.queryAll=function(e){return document.querySelectorAll(e)};if(typeof e.define==="function"){e.define(function(){return i})}else if(typeof module==="object"){module.exports=i}else{e.$$$=i;e.tripledollar=i.appendToDoc}})(this);