/* tripledollar v.1.0.0-rc.3, (c) 2015 Steen Klingberg. License MIT. */
(function(e){"use strict";var t="1.0.0-rc.3",n={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml"},i="svg xlink xhtml ",r=function(e,t){var n=e.length,i=[""],r=0,s=0,o=0;while(r<n){if(e[r]==="."||e[r]==="#"){if(t){i[s++]=e[r]}else{i[o++]=e.slice(s,r);s=r+1}}r++;if(!t&&r===n){i[o++]=e.slice(s)}}return i},s=function(t){var o=Array.prototype.slice.call(arguments,1),l,a,c,f,u,p=[],d,h=/^[A-Za-z][A-Za-z0-9-_\.:#]*$/;if(typeof t!=="string"){if(Object.prototype.toString.call(t)==="[object Array]"){return s.apply(this,t)}else if(t instanceof e.HTMLElement||t instanceof e.SVGSVGElement){t.evt=A;t.set=g;t.fun=v;t.ins=b;t.css=m;t.query=t.querySelector;t.queryAll=t.querySelectorAll;t.prototype=t;return t}else return}l=r(t,false);a=r(t,true);for(f=0;f<l.length;f++){if(l[f]&&!h.test(l[f])){return}if(f===0){u=l[0].split(":");if(i.indexOf(u[0]+" ")>-1){c=document.createElementNS(n[u[0]],u[1]||u[0])}else{c=document.createElement(u[1]||u[0])}}else{if(c&&a[f-1]==="."){p.push(l[f])}else if(a[f-1]==="#"){c.setAttribute("id",l[f])}}if(p.length>0){c.setAttribute("class",p.join(" "))}}function y(e){var t,i,r,o,l;for(i=0;i<e.length;i++){t=e[i];if(t&&t.nodeType){this.appendChild(t)}else if(typeof t==="object"){if(Object.prototype.toString.call(t)==="[object Array]"){this.appendChild(s.apply(this,t))}else{for(o in t){if(t.hasOwnProperty(o)){if(/^data[A-Z]/.test(o)){l=o.substr(4).toLowerCase();this.setAttribute("data-"+l,t[o])}else{r=o.split(":");if(r.length===2&&Object.keys(n).indexOf(r[0])>-1){this.setAttributeNS(n[r[0]],r[1],t[o])}else{this.setAttribute(o,t[o])}}}}}}else{this.appendChild(document.createTextNode(String(t)))}}}y.call(c,o);function m(e){var t,n,i;for(t in e){if(e.hasOwnProperty(t)){if(typeof e[t]!=="object"){this.style[t]=e[t]}else{n=this.querySelectorAll(t);for(i=0;i<n.length;i++){m.call(n[i],e[t])}}}}return this}c.css=m;function g(e,t){this[e]=t;return this}c.set=g;function v(e){var t=Array.prototype.slice.call(arguments,1);this[e].apply(this,t);return this}c.fun=v;function A(e,t){if(arguments.length>2){var n=Array.prototype.slice.call(arguments,2);if(this.addEventListener){this.addEventListener(e,function(e){var i=[e].concat(n);t.apply(this,i)},false)}else{this.attachEvent("on"+e,function(e){var i=[e].concat(n);t.apply(this,i)})}}else{if(this.addEventListener){this.addEventListener(e,t,false)}else{this.attachEvent("on"+e,t)}}return this}c.evt=A;function b(){y.call(this,Array.prototype.slice.call(arguments));return this}c.ins=b;c.query=c.querySelector;c.queryAll=c.querySelectorAll;c.prototype=c;return c},o,l,a,c;s.version=t;s.structify=function(e){var t=null,n;if(e.nodeType===1){n=function(e){var t=[],i,r,s,o,l,a=/id|class|contenteditable/,c=e.localName,f=String(e.getAttribute("class")||"").replace(/\s/g,".");if(f){c+="."+f}if(e.id){c+="#"+e.id}t.push(c);if(e.hasAttributes()){r=e.attributes;i={};for(l=0;l<r.length;l++){if(!a.test(r[l].name)){i[r[l].name]=r[l].value}}if(Object.keys(i).length>0){t.push(i)}}e.normalize();s=e.childNodes;for(l=0;l<s.length;l++){if(s[l].nodeType===3){o=s[l].data.replace(/\s\s*/," ").trim();if(o.length>0){t.push(o)}}else if(s[l].nodeType===1){t.push(n(s[l]))}}return t};t=n(e)}return t};s.onReady=function(e){if(document.readyState==="complete"||document.readyState==="interactive"){o(e)}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",e,false)}else{document.attachEvent("onreadystatechange",e)}};if(e.setImmediate){o=e.setImmediate}else{a=[];c="doNext"+(Math.random()*67108864|0).toString(16);l=function(t){var n,i;if(t.source===e&&typeof t.data==="string"&&t.data.indexOf(c)===0){i=a.shift();if(i.length>0){n=i[0].apply(undefined,i.splice(1),true);if(a[0]&&a[0].length===1){a[0].push(n)}}}};if(e.postMessage){if(e.addEventListener){e.addEventListener("message",l,false)}else{e.attachEvent("message",l)}}o=function(){var t=Array.prototype.slice.call(arguments);if(typeof t[0]==="function"){a.push(t);e.postMessage(c,"*")}}}s.setImmediate=o;s.appendToDoc=function f(){var t=Array.prototype.slice.call(arguments),n,i=[];f.then=function(e){if(f===e){throw new TypeError("Circular reference.")}if(typeof e==="function"){i.push(e)}else{console.log('$$$: Only functions can be passed to "then()"!')}return f};f.catch=function(e){console.log("$$$: Error occured.",e);return f};function r(i){s.onReady(function(){for(n=0;n<t.length;n++){if(Object.prototype.toString.call(t[n])==="[object Array]"){document.body.appendChild(s(t[n]))}else if(t[n]instanceof e.HTMLElement||t[n]instanceof e.SVGSVGElement){document.body.appendChild(t[n])}else if(typeof t[n]==="function"){t[n]()}}i()})}if(typeof Promise!=="undefined"){return new Promise(function(e,t){try{r(e)}catch(n){t(n)}})}else{r(function(){var e;i.forEach(function(t){o(function(){if(e&&e.then){e.then(function(e){t(e)})}else{e=t(e)}})})});return f}};s.query=function(e){return document.querySelector(e)};s.queryAll=function(e){return document.querySelectorAll(e)};if(typeof e.define==="function"){e.define(function(){return s})}else if(typeof module==="object"){module.exports=s}else{e.$$$=s}})(this);