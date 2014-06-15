/* tripledollar v.0.7.2, (c) 2014 Steen Klingberg. License MIT. */
(function(){var e="0.7.2";var t={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml"};var n=function(){var e=Array.prototype.slice.call(arguments);if(typeof e[0]!=="string"){if(Object.prototype.toString.call(e[0])==="[object Array]"){return n.apply(this,e[0])}}var i=e.shift(),r=i.split(/[\.#]/),a=i.split(/[^\.#]+/),o;if(a[0]==""){a.shift()}for(var s=0;s<r.length;s++){if(s===0){var l=r[0].split(":");if(Object.keys(t).indexOf(l[0])>-1){var c=l[1]||l[0];o=document.createElementNS(t[l[0]],c)}else{o=document.createElement(l[1]||l[0])}}else{if(a[s-1]==="."){o.classList.add(r[s])}else if(a[s-1]==="#"){o.setAttribute("id",r[s])}}}function f(e){for(var t=0;t<e.length;t++){var i=e[t];if(i&&i.nodeType){o.appendChild(i)}else if(typeof i==="object"){if(Object.prototype.toString.call(i)==="[object Array]"){o.appendChild(n.apply(this,i))}else{for(var r in i){if(r.match(/^data./)){var a=r.substr(4).toLowerCase();o.setAttribute("data-"+a,i[r])}else{o.setAttribute(r,i[r])}}}}else{o.appendChild(document.createTextNode(String(i)))}}}f(e);o.css=function(e){for(var t in e){this.style[t]=e[t]}return this};o.set=function(e,t){this[e]=t;return this};o.fun=function(e){var t=Array.prototype.slice.call(arguments,1);this[e].apply(this,t);return this};o.evt=function(e,t){if(arguments.length>2){var n=Array.prototype.slice.call(arguments,2);if(this.addEventListener){this.addEventListener(e,function(e){var i=[e].concat(n);t.apply(this,i)},false)}else{this.attachEvent("on"+e,function(e){var i=[e].concat(n);t.apply(this,i)})}}else{if(this.addEventListener){this.addEventListener(e,t,false)}else{this.attachEvent("on"+e,t)}}return this};o.ins=function(){var e=Array.prototype.slice.call(arguments);f(e);return this};o.query=o.querySelector;o.queryAll=o.querySelectorAll;o.prototype=o;return o};n.version=e;n.structify=function(e){var t=null;if(e.nodeType===1){function n(e){var t=[],i=e.localName,r=String(e.className).replace(" ",".");if(r){i+="."+r}if(e.id){i+="#"+e.id}t.push(i);if(e.hasAttributes()){var a=e.attributes,o={};for(var s=0;s<a.length;s++){if(!a[s].name.match(/id|class|contenteditable/)){o[a[s].name]=a[s].value}}if(Object.keys(o).length>0){t.push(o)}}e.normalize();var l=e.childNodes;for(var s=0;s<l.length;s++){if(l[s].nodeType===3){var c=l[s].data.replace(/\s\s*/," ").trim();if(c.length>0){t.push(c)}}else if(l[s].nodeType===1){t.push(n(l[s]))}}return t}t=n(e)}return t};n.onReady=function(e){if(document.readyState==="complete"){e()}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",e,false)}else{document.attachEvent("onreadystatechange",e)}};var i;if(window.setImmediate){i=window.setImmediate}else{var r=[],a="doNext"+(Math.random()*67108864|0).toString(16),o=function(e){if(e.source===window&&typeof e.data==="string"&&e.data.indexOf(a)===0){var t=r.shift();t.length>0&&t[0].apply(null,t.splice(1))}};if(window.postMessage){if(window.addEventListener){window.addEventListener("message",o,false)}else{window.attachEvent("message",o)}}i=function(){var e=Array.prototype.slice.call(arguments);if(typeof e[0]==="function"){r.push(e);window.postMessage(a,"*")}}}n.setImmediate=i;n.appendToDoc=function(){var e=Array.prototype.slice.call(arguments),t=this;t.follow=[];t.emit=function(){t.follow.forEach(function(e){i(e)})};t.then=function(e){if(typeof e==="function"){t.follow.push(e)}else{console.log('$$$: Only functions can be passed to "then()"!')}return t};n.onReady(function(){for(var r=0;r<e.length;r++){if(Object.prototype.toString.call(e[r])==="[object Array]"){document.body.appendChild(n(e[r]))}else if(e[r]instanceof HTMLElement||e[r]instanceof SVGSVGElement){document.body.appendChild(e[r])}else if(typeof e[r]==="function"){e[r]()}}i(t.emit)});return t};if(typeof define==="function"){define(function(e){return n})}else{window.$$$=n;window.tripledollar=n.appendToDoc}n.query=function(e){return document.querySelector(e)};n.queryAll=function(e){return document.querySelectorAll(e)}})();