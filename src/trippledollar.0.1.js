window.$$$ = function () {
            var ident = arguments[0];
            var id = ident.split('#')[1];
            var cl = (ident.split('#')[0]).split('.');
            var type = cl.shift();
            var clazz = cl.join(' ').trim();
            var e = document.createElement(type);
            if (clazz) {
              e.className = clazz;
            };
            if (id) {
              e.setAttribute('id', id);
            };
            for (var i=1; i<arguments.length; i++) {
              var param = arguments[i];
              alert(typeof param);
              if (param.nodeType) {
                e.appendChild(param);
              } else if (typeof param === 'string') {
                e.appendChild(document.createTextNode(param));
              } else if (typeof param === 'object') {
                for (var a in param) {
                  if (a.match(/^data/)) {
                    var atr = a.substr(4).toLowerCase();
                    e.setAttribute('data-' + atr, param[a]);
                  } else {
                    e.setAttribute(a, param[a]);
                  }
                }
              }
            };
            e.css = function (obj) {
              for (var k in obj) {
                this.style[k] = obj[k];
              };
              return this;
            };
            e.set = function (key, val) {
              this[key] = val;
              return this;
            };
            e.fun = function (func, args) {
              this[func].apply(this, args);
              return this;
            };
            e.evt = function (ev, func) {
              this.addEventListener(ev, func);
              return this;
            };
            e.prototype = e;
            return e;
};

window.$$$.version = '0.1';

if (! window.$ && window.querySelectorAll) {window.$ = function (sel) { return window.querySelectorAll(sel);}}
