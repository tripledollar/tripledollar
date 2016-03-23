/* tripledollar v.1.3.3, (c) 2016 Steen Klingberg. License MIT. */
(function(e){var t="1.3.3";var n=function(e){"use strict";var n={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml"},i=function(t){var r=Array.prototype.slice.call(arguments,1),s,o,a,l,c=[],f=/^[A-Za-z][A-Za-z0-9-_\.:#]*$/;if(typeof t!=="string"){if(Object.prototype.toString.call(t)==="[object Array]"){return i.apply(this,t)}else if(t instanceof e.HTMLElement||t instanceof e.SVGElement){t.evt=y;t.set=p;t.fun=h;t.ins=m;t.css=d;t.query=t.querySelector;t.queryAll=t.querySelectorAll;t.prototype=t;return t}else return}if(t&&!f.test(t)){console.log('$$$: not a valid ident parameter "'+t+'".');return}s=t.split(/([\.#])/);for(a=0;a<s.length;a++){if(a===0){l=s[0].split(":");if(n[l[0]]){o=e.document.createElementNS(n[l[0]],l[1]||l[0])}else{o=e.document.createElement(l[1]||l[0])}}else{if(o&&s[a-1]==="."){c.push(s[a])}else if(s[a-1]==="#"){o.setAttribute("id",s[a])}}}if(c.length>0){o.setAttribute("class",c.join(" "))}function u(t){var r,s,o,a,l;for(s=0;s<t.length;s++){r=t[s];if(r&&r.nodeType){this.appendChild(r)}else if(typeof r==="object"){if(Object.prototype.toString.call(r)==="[object Array]"){this.appendChild(i.apply(this,r))}else{for(a in r){if(r.hasOwnProperty(a)){if(/^data[A-Z]/.test(a)){l=a.substr(4).toLowerCase();this.setAttribute("data-"+l,r[a])}else{o=a.split(":");if(o.length===2&&Object.keys(n).indexOf(o[0])>-1){this.setAttributeNS(n[o[0]],o[1],r[a])}else{this.setAttribute(a,r[a])}}}}}}else{this.appendChild(e.document.createTextNode(String(r)))}}}u.call(o,r);function d(e){var t,n,i;for(t in e){if(e.hasOwnProperty(t)){if(typeof e[t]!=="object"){this.style[t]=e[t]}else{n=this.querySelectorAll(t);for(i=0;i<n.length;i++){d.call(n[i],e[t])}}}}return this}o.css=d;function p(e,t){this[e]=t;return this}o.set=p;function h(e){var t=Array.prototype.slice.call(arguments,1);this[e].apply(this,t);return this}o.fun=h;function y(e,t){if(arguments.length>2){var n=Array.prototype.slice.call(arguments,2);if(this.addEventListener){this.addEventListener(e,function(e){var i=[e].concat(n);t.apply(this,i)},false)}else{this.attachEvent("on"+e,function(e){var i=[e].concat(n);t.apply(this,i)})}}else{if(this.addEventListener){this.addEventListener(e,t,false)}else{this.attachEvent("on"+e,t)}}return this}o.evt=y;function m(){u.call(this,Array.prototype.slice.call(arguments));return this}o.ins=m;o.query=o.querySelector;o.queryAll=o.querySelectorAll;o.prototype=o;return o},r,s,o,a;i.version=t;i.structify=function(e,t){var n=null,i;if(e.nodeType===1){i=function(e){var n=[],r,s,o,a,l,c=/id|class|contenteditable/,f=e.localName,u=String(e.getAttribute("class")||"").replace(/\s/g,".");if(u){f+="."+u}if(e.id){f+="#"+e.id}n.push(f);if(e.hasAttributes()){s=e.attributes;r={};for(l=0;l<s.length;l++){if(!c.test(s[l].name)){r[s[l].name]=s[l].value}}if(Object.keys(r).length>0){n.push(r)}}e.normalize();o=e.childNodes;for(l=0;l<o.length;l++){if(o[l].nodeType===3){if(t){a=o[l].data.replace(/\s\s*/," ").trim()}else{a=o[l].data}if(a.length>0){n.push(a)}}else if(o[l].nodeType===1){n.push(i(o[l]))}}return n};n=i(e)}return n};i.onReady=function(t){if(e.document.readyState==="complete"||e.document.readyState==="interactive"){r(t)}else if(e.document.addEventListener){e.document.addEventListener("DOMContentLoaded",t,false)}else{e.document.attachEvent("onreadystatechange",t)}};if(typeof setImmediate==="function"){r=setImmediate}else if(e.setImmediate){r=e.setImmediate}else{o=[];a="doNext"+(Math.random()*67108864|0).toString(16);s=function(t){var n,i;if(t.source===e&&typeof t.data==="string"&&t.data.indexOf(a)===0){i=o.shift();if(i.length>0){n=i[0].apply(undefined,i.splice(1),true);if(o[0]&&o[0].length===1){o[0].push(n)}}}};if(e.postMessage){if(e.addEventListener){e.addEventListener("message",s,false)}else{e.attachEvent("message",s)}}else{e.postMessage=function(t){e.setTimeout(function(){s({source:e,data:t})},0)}}r=function(){var t=Array.prototype.slice.call(arguments);if(typeof t[0]==="function"){o.push(t);e.postMessage(a,"*")}}}i.setImmediate=r;i.appendToDoc=function l(){var t=Array.prototype.slice.call(arguments),n,s=[];l.then=function(e){if(l===e){throw new TypeError("Circular reference.")}if(typeof e==="function"){s.push(e)}else{console.log('$$$: Only functions can be passed to "then()"!')}return l};l.catch=function(e){console.log("$$$: Error occured.",e);return l};function o(r){var s;i.onReady(function(){for(n=0;n<t.length;n++){if(Object.prototype.toString.call(t[n])==="[object Array]"){s=i.apply(this,t[n]);if(s){e.document.body.appendChild(s)}}else if(t[n]instanceof e.Element){e.document.body.appendChild(t[n])}else if(typeof t[n]==="function"){t[n]()}}r()})}if(typeof Promise!=="undefined"){return new Promise(function(e,t){try{o(e)}catch(n){t(n)}})}else{o(function(){var e;s.forEach(function(t){r(function(){if(e&&e.then){e.then(function(e){t(e)})}else{e=t(e)}})})});return l}};i.query=function(t){return e.document.querySelector(t)};i.queryAll=function(t){return e.document.querySelectorAll(t)};i.destroy=function c(e){if(e){while(e.hasChildNodes()){c(e.firstChild);e.removeChild(e.firstChild)}}};i.namespace=function(e,t){if(t){n[e]=t}return n[e]};return i};n.version=t;if(e&&typeof e.define==="function"){e.define(function(){return n(e)})}else if(typeof module==="object"){module.exports=n}else{e.$$$=n(e)}})(this);