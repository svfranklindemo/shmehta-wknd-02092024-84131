export const id=280;export const ids=[280];export const modules={1520:(n,r,t)=>{t.d(r,{OC:()=>m});var e=t(7320),i=t(2720);function o(){throw new Error("Cycle detected")}var s=Symbol.for("preact-signals");function a(){if(u>1)u--;else{for(var n,r=!1;void 0!==p;){var t=p;for(p=void 0,d++;void 0!==t;){var e=t.o;if(t.o=void 0,t.f&=-3,!(8&t.f)&&y(t))try{t.c()}catch(t){r||(n=t,r=!0)}t=e}}if(d=0,u--,r)throw n}}var l=void 0;var c,p=void 0,u=0,d=0,f=0;function v(n){if(void 0!==l){var r=n.n;if(void 0===r||r.t!==l)return r={i:0,S:n,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r},void 0!==l.s&&(l.s.n=r),l.s=r,n.n=r,32&l.f&&n.S(r),r;if(-1===r.i)return r.i=0,void 0!==r.n&&(r.n.p=r.p,void 0!==r.p&&(r.p.n=r.n),r.p=l.s,r.n=void 0,l.s.n=r,l.s=r),r}}function h(n){this.v=n,this.i=0,this.n=void 0,this.t=void 0}function m(n){return new h(n)}function y(n){for(var r=n.s;void 0!==r;r=r.n)if(r.S.i!==r.i||!r.S.h()||r.S.i!==r.i)return!0;return!1}function g(n){for(var r=n.s;void 0!==r;r=r.n){var t=r.S.n;if(void 0!==t&&(r.r=t),r.S.n=r,r.i=-1,void 0===r.n){n.s=r;break}}}function b(n){for(var r=n.s,t=void 0;void 0!==r;){var e=r.p;-1===r.i?(r.S.U(r),void 0!==e&&(e.n=r.n),void 0!==r.n&&(r.n.p=e)):t=r,r.S.n=r.r,void 0!==r.r&&(r.r=void 0),r=e}n.s=t}function w(n){h.call(this,void 0),this.x=n,this.s=void 0,this.g=f-1,this.f=4}function _(n){var r=n.u;if(n.u=void 0,"function"==typeof r){u++;var t=l;l=void 0;try{r()}catch(r){throw n.f&=-2,n.f|=8,O(n),r}finally{l=t,a()}}}function O(n){for(var r=n.s;void 0!==r;r=r.n)r.S.U(r);n.x=void 0,n.s=void 0,_(n)}function k(n){if(l!==this)throw new Error("Out-of-order effect");b(this),l=n,this.f&=-2,8&this.f&&O(this),a()}function S(n){this.x=n,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function j(n){var r=new S(n);try{r.c()}catch(n){throw r.d(),n}return r.d.bind(r)}function x(n,r){e.options[n]=r.bind(null,e.options[n]||function(){})}function P(n){c&&c(),c=n&&n.S()}function N(n){var r=this,t=n.data,o=function(n){return(0,i.useMemo)((function(){return m(n)}),[])}(t);o.value=t;var s=(0,i.useMemo)((function(){for(var n=r.__v;n=n.__;)if(n.__c){n.__c.__$f|=4;break}return r.__$u.c=function(){var n;(0,e.isValidElement)(s.peek())||3!==(null==(n=r.base)?void 0:n.nodeType)?(r.__$f|=1,r.setState({})):r.base.data=s.peek()},function(n){return new w(n)}((function(){var n=o.value.value;return 0===n?0:!0===n?"":n||""}))}),[]);return s.value}function E(n,r,t,e){var i=r in n&&void 0===n.ownerSVGElement,o=m(t);return{o:function(n,r){o.value=n,e=r},d:j((function(){var t=o.value.value;e[r]!==t&&(e[r]=t,i?n[r]=t:t?n.setAttribute(r,t):n.removeAttribute(r))}))}}h.prototype.brand=s,h.prototype.h=function(){return!0},h.prototype.S=function(n){this.t!==n&&void 0===n.e&&(n.x=this.t,void 0!==this.t&&(this.t.e=n),this.t=n)},h.prototype.U=function(n){if(void 0!==this.t){var r=n.e,t=n.x;void 0!==r&&(r.x=t,n.e=void 0),void 0!==t&&(t.e=r,n.x=void 0),n===this.t&&(this.t=t)}},h.prototype.subscribe=function(n){var r=this;return j((function(){var t=r.value,e=32&this.f;this.f&=-33;try{n(t)}finally{this.f|=e}}))},h.prototype.valueOf=function(){return this.value},h.prototype.toString=function(){return this.value+""},h.prototype.toJSON=function(){return this.value},h.prototype.peek=function(){return this.v},Object.defineProperty(h.prototype,"value",{get:function(){var n=v(this);return void 0!==n&&(n.i=this.i),this.v},set:function(n){if(l instanceof w&&function(){throw new Error("Computed cannot have side-effects")}(),n!==this.v){d>100&&o(),this.v=n,this.i++,f++,u++;try{for(var r=this.t;void 0!==r;r=r.x)r.t.N()}finally{a()}}}}),(w.prototype=new h).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===f)return!0;if(this.g=f,this.f|=1,this.i>0&&!y(this))return this.f&=-2,!0;var n=l;try{g(this),l=this;var r=this.x();(16&this.f||this.v!==r||0===this.i)&&(this.v=r,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return l=n,b(this),this.f&=-2,!0},w.prototype.S=function(n){if(void 0===this.t){this.f|=36;for(var r=this.s;void 0!==r;r=r.n)r.S.S(r)}h.prototype.S.call(this,n)},w.prototype.U=function(n){if(void 0!==this.t&&(h.prototype.U.call(this,n),void 0===this.t)){this.f&=-33;for(var r=this.s;void 0!==r;r=r.n)r.S.U(r)}},w.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var n=this.t;void 0!==n;n=n.x)n.t.N()}},w.prototype.peek=function(){if(this.h()||o(),16&this.f)throw this.v;return this.v},Object.defineProperty(w.prototype,"value",{get:function(){1&this.f&&o();var n=v(this);if(this.h(),void 0!==n&&(n.i=this.i),16&this.f)throw this.v;return this.v}}),S.prototype.c=function(){var n=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var r=this.x();"function"==typeof r&&(this.u=r)}finally{n()}},S.prototype.S=function(){1&this.f&&o(),this.f|=1,this.f&=-9,_(this),g(this),u++;var n=l;return l=this,k.bind(this,n)},S.prototype.N=function(){2&this.f||(this.f|=2,this.o=p,p=this)},S.prototype.d=function(){this.f|=8,1&this.f||O(this)},N.displayName="_st",Object.defineProperties(h.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:N},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),x("__b",(function(n,r){if("string"==typeof r.type){var t,e=r.props;for(var i in e)if("children"!==i){var o=e[i];o instanceof h&&(t||(r.__np=t={}),t[i]=o,e[i]=o.peek())}}n(r)})),x("__r",(function(n,r){P();var t,e=r.__c;e&&(e.__$f&=-2,void 0===(t=e.__$u)&&(e.__$u=t=function(n){var r;return j((function(){r=this})),r.c=function(){e.__$f|=1,e.setState({})},r}())),e,P(t),n(r)})),x("__e",(function(n,r,t,e){P(),void 0,n(r,t,e)})),x("diffed",(function(n,r){var t;if(P(),void 0,"string"==typeof r.type&&(t=r.__e)){var e=r.__np,i=r.props;if(e){var o=t.U;if(o)for(var s in o){var a=o[s];void 0===a||s in e||(a.d(),o[s]=void 0)}else t.U=o={};for(var l in e){var c=o[l],p=e[l];void 0===c?(c=E(t,l,p,i),o[l]=c):c.o(p,i)}}}n(r)})),x("unmount",(function(n,r){if("string"==typeof r.type){var t=r.__e;if(t){var e=t.U;if(e)for(var i in t.U=void 0,e){var o=e[i];o&&o.d()}}}else{var s=r.__c;if(s){var a=s.__$u;a&&(s.__$u=void 0,a.d())}}n(r)})),x("__h",(function(n,r,t,e){(e<3||9===e)&&(r.__$f|=2),n(r,t,e)})),e.Component.prototype.shouldComponentUpdate=function(n,r){var t=this.__$u;if(!(t&&void 0!==t.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var e in r)return!0;for(var i in n)if("__source"!==i&&n[i]!==this.props[i])return!0;for(var o in this.props)if(!(o in n))return!0;return!1}},1724:(n,r,t)=>{t.d(r,{M:()=>j});var e=t(4944),i=t(5536),o=t.n(i),s=t(7008),a=t.n(s),l=t(1496),c=t.n(l),p=t(9836),u=t.n(p),d=t(9904),f=t.n(d),v=t(4192),h=t.n(v),m=t(9288),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=f();o()(m.c,y);m.c&&m.c.locals&&m.c.locals;var g=t(8340);function b(n){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b(n)}var w=["variant","className","children"];function _(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function O(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){k(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function k(n,r,t){return(r=function(n){var r=function(n,r){if("object"!=b(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,r||"default");if("object"!=b(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(n,"string");return"symbol"==b(r)?r:String(r)}(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function S(n,r){if(null==n)return{};var t,e,i=function(n,r){if(null==n)return{};var t,e,i={},o=Object.keys(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||(i[t]=n[t]);return i}(n,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var j=function(n){var r=n.variant,t=void 0===r?"primary":r,i=n.className,o=n.children,s=S(n,w);return(0,g.jsx)("div",O(O({},s),{},{className:(0,e.i)(["dropin-card","dropin-card--".concat(t),i]),children:(0,g.jsx)("div",{class:"dropin-card__content",children:o})}))}},7420:(n,r,t)=>{t.d(r,{y:()=>x});var e=t(2460),i=t(4944),o=t(5536),s=t.n(o),a=t(7008),l=t.n(a),c=t(1496),p=t.n(c),u=t(9836),d=t.n(u),f=t(9904),v=t.n(f),h=t(4192),m=t.n(h),y=t(4424),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=p().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=v();s()(y.c,g);y.c&&y.c.locals&&y.c.locals;var b=t(8340);function w(n){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(n)}var _=["ariaLabel","size","stroke","children","className","style"];function O(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function k(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){S(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function S(n,r,t){return(r=function(n){var r=function(n,r){if("object"!=w(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,r||"default");if("object"!=w(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(n,"string");return"symbol"==w(r)?r:String(r)}(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function j(n,r){if(null==n)return{};var t,e,i=function(n,r){if(null==n)return{};var t,e,i={},o=Object.keys(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||(i[t]=n[t]);return i}(n,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var x=function(n){var r=n.ariaLabel,t=n.size,o=void 0===t?"small":t,s=n.stroke,a=void 0===s?"4":s,l=n.children,c=n.className,p=n.style,u=j(n,_),d=["dropin-progress-spinner","dropin-progress-spinner--shape-size-".concat(o),"dropin-progress-spinner--shape-stroke-".concat(a)],f=(0,e.cF)({updating:"Dropin.ProgressSpinner.updating.label",updatingChildren:"Dropin.ProgressSpinner.updatingChildren.label"}),v=function(){return r||(l?f.updatingChildren:f.updating)};return l?(0,b.jsxs)("div",k(k({},u),{},{className:(0,i.i)(["dropin-progress-spinner-provider"]),"aria-live":"polite",role:"status",children:[(0,b.jsx)("div",{"aria-hidden":!0,children:l}),(0,b.jsx)("div",{"aria-label":v(),role:"status",className:(0,i.i)(["dropin-progress-spinner-background",c]),style:p}),(0,b.jsx)("div",{className:(0,i.i)(["dropin-progress-spinner-with-provider"].concat(d)),"aria-hidden":!0})]})):(0,b.jsx)("div",k(k({},u),{},{className:(0,i.i)([c].concat(d)),"aria-live":"polite",role:"status","aria-label":v()}))}},6668:(n,r,t)=>{t.d(r,{W:()=>P,K:()=>x});var e=t(4944),i=t(5536),o=t.n(i),s=t(7008),a=t.n(s),l=t(1496),c=t.n(l),p=t(9836),u=t.n(p),d=t(9904),f=t.n(d),v=t(4192),h=t.n(v),m=t(1492),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=f();o()(m.c,y);m.c&&m.c.locals&&m.c.locals;var g=t(8340);function b(n){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b(n)}var w=["className","fullWidth","lines","size","variant","children","multilineGap"],_=["className","children","rowGap"];function O(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function k(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){S(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function S(n,r,t){return(r=function(n){var r=function(n,r){if("object"!=b(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,r||"default");if("object"!=b(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}(n,"string");return"symbol"==b(r)?r:String(r)}(r))in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function j(n,r){if(null==n)return{};var t,e,i=function(n,r){if(null==n)return{};var t,e,i={},o=Object.keys(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||(i[t]=n[t]);return i}(n,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var x=function(n){var r=n.className,t=n.fullWidth,i=void 0!==t&&t,o=n.lines,s=void 0===o?1:o,a=n.size,l=void 0===a?"small":a,c=n.variant,p=void 0===c?"row":c,u=n.children,d=void 0===u?null:u,f=n.multilineGap,v=void 0===f?"medium":f,h=j(n,w),m=[["dropin-skeleton-row__".concat(p),p],["dropin-skeleton-row__".concat(p,"-").concat(l),p&&l]];if(!d&&"empty"===p)return(0,g.jsx)("div",{className:(0,e.i)(["dropin-skeleton-row dropin-skeleton-row__empty",r])});if(d){var y=d.trim();return(0,g.jsx)("div",k(k({},h),{},{class:(0,e.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",i],r]),dangerouslySetInnerHTML:{__html:y}}))}return!1===s>1?(0,g.jsx)("div",k(k({},h),{},{class:(0,e.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",i],"dropin-skeleton--row__content"].concat(m,[r]))})):(0,g.jsx)("div",k(k({},h),{},{style:{"--multiline-gap-spacing":"var(--spacing-".concat(v,")")},class:(0,e.i)(["dropin-skeleton-row--multiline",["dropin-skeleton-row--full",i],r]),children:Array.from({length:s}).map((function(n,r){return(0,g.jsx)("div",{class:(0,e.i)(["dropin-skeleton-row",["dropin-skeleton-row--full",i],"dropin-skeleton--row__content"].concat(m))},r)}))}))},P=function(n){var r=n.className,t=n.children,i=n.rowGap,o=void 0===i?"medium":i,s=j(n,_);return(0,g.jsx)("div",k(k({style:{"--row-gap-spacing":"var(--spacing-".concat(o,")")}},s),{},{className:(0,e.i)(["dropin-skeleton",r]),role:"status","aria-label":"Loading...",children:t}))}},9288:(n,r,t)=>{t.d(r,{c:()=>a});var e=t(6008),i=t.n(e),o=t(2076),s=t.n(o)()(i());s.push([n.id,".dropin-card{\n  --bgColor:var(--color-neutral-200);\n  background-color:var(--bgColor);\n  border-width:0;\n  border-radius:var(--shape-border-radius-2);\n}\n\n.dropin-card--secondary{\n  --bgColor:var(--color-neutral-50);\n  border-width:var(--shape-border-width-2);\n  border-style:solid;\n  border-color:var(--color-neutral-400);\n}\n\n.dropin-card__content{\n  display:flex;\n  flex-direction:column;\n  gap:var(--spacing-medium);\n  padding-top:var(--spacing-medium);\n  padding-right:var(--spacing-medium);\n  padding-bottom:var(--spacing-medium);\n  padding-left:var(--spacing-medium);\n}\n",""]);const a=s},4424:(n,r,t)=>{t.d(r,{c:()=>a});var e=t(6008),i=t.n(e),o=t(2076),s=t.n(o)()(i());s.push([n.id,".dropin-progress-spinner-provider{\n  position:relative;\n  display:flex;\n  flex-direction:column;\n  border-radius:inherit;\n  opacity:1;\n  padding:var(--spacing-small);\n}\n\n.dropin-progress-spinner{\n  --size:var(--spacing-medium);\n  --stroke-width:var(--shape-icon-stroke-4);\n  width:var(--size);\n  height:var(--size);\n  border-style:solid;\n  border-width:var(--stroke-width);\n  border-color:var(--color-neutral-400);\n  border-top-color:var(--color-brand-500);\n  border-radius:50%;\n  animation:indeterminate 1s infinite ease-in-out;\n}\n\n.dropin-progress-spinner-with-provider{\n  position:absolute;\n  top:calc(50% - var(--size) / 2 - var(--stroke-width));\n  left:calc(50% - var(--size) / 2 - var(--stroke-width));\n}\n\n.dropin-progress-spinner-background{\n  --bgColor:var(--color-neutral-50);\n  background-color:var(--bgColor);\n  border-radius:inherit;\n  opacity:0.5;\n  position:absolute;\n  width:100%;\n  height:100%;\n  margin-top:calc(-1 * var(--spacing-small));\n  margin-left:calc(-1 * var(--spacing-small));\n}\n\n.dropin-progress-spinner--shape-size-small{\n  --size:var(--spacing-medium);\n}\n\n.dropin-progress-spinner--shape-size-medium{\n  --size:var(--spacing-big);\n}\n\n.dropin-progress-spinner--shape-size-big{\n  --size:var(--spacing-xxbig);\n}\n\n.dropin-progress-spinner--shape-size-large{\n  --size:var(--spacing-large);\n}\n\n.dropin-progress-spinner--shape-stroke-1{\n  --stroke-width:var(--shape-icon-stroke-1);\n}\n\n.dropin-progress-spinner--shape-stroke-2{\n  --stroke-width:var(--shape-icon-stroke-2);\n}\n\n.dropin-progress-spinner--shape-stroke-3{\n  --stroke-width:var(--shape-icon-stroke-3);\n}\n\n.dropin-progress-spinner--shape-stroke-4{\n  --stroke-width:var(--shape-icon-stroke-4);\n}\n\n@keyframes indeterminate{\n  0%{\n    transform:rotate(0deg);\n  }\n  100%{\n    transform:rotate(360deg);\n  }\n}\n",""]);const a=s},1492:(n,r,t)=>{t.d(r,{c:()=>a});var e=t(6008),i=t.n(e),o=t(2076),s=t.n(o)()(i());s.push([n.id,".dropin-skeleton{\n  --row-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:var(--row-gap-spacing);\n}\n\n.dropin-skeleton .dropin-skeleton--row__content{\n  background:var(--color-neutral-300) linear-gradient(\n      to right,\n      var(--color-neutral-300) 0%,\n      var(--color-neutral-100) 20%,\n      var(--color-neutral-300) 40%,\n      var(--color-neutral-300) 100%\n    ) no-repeat;\n  animation:skeletonShimmer infinite 1.2s linear;\n  border-radius:var(--shape-border-radius-2);\n}\n.dropin-skeleton__empty{\n  background:none;\n}\n\n.dropin-skeleton-row--multiline{\n  --multiline-gap-spacing:var(--spacing-medium);\n  display:grid;\n  grid-auto-rows:max-content;\n  gap:var(--multiline-gap-spacing);\n}\n\n.dropin-skeleton-row--full{\n  grid-column:1 / -1;\n}\n.dropin-skeleton-row svg{\n  fill:var(--color-neutral-400);\n  fill-opacity:0.5;\n  animation-duration:1s;\n  animation-fill-mode:forwards;\n  animation-iteration-count:infinite;\n  animation-name:placeholderShimmer;\n  animation-timing-function:linear;\n}\n\n.dropin-skeleton-row__row-xsmall{\n  height:32px;\n}\n\n.dropin-skeleton-row__row-small{\n  height:40px;\n}\n\n.dropin-skeleton-row__row-medium{\n  height:48px;\n}\n\n.dropin-skeleton-row__row-large{\n  height:56px;\n}\n\n.dropin-skeleton-row__row-xlarge{\n  height:72px;\n}\n\n.dropin-skeleton-row__heading-xsmall{\n  height:20px;\n}\n\n.dropin-skeleton-row__heading-small{\n  height:24px;\n}\n\n.dropin-skeleton-row__heading-medium{\n  height:32px;\n}\n\n.dropin-skeleton-row__heading-large{\n  height:40px;\n}\n\n.dropin-skeleton-row__heading-xlarge{\n  height:48px;\n}\n\n@keyframes skeletonShimmer{\n  0%{\n    background-position:-600px 0;\n  }\n\n  100%{\n    background-position:600px 0;\n  }\n}\n\n@keyframes placeholderShimmer{\n  0%{\n    fill-opacity:0.5;\n  }\n\n  50%{\n    fill-opacity:1;\n  }\n\n  100%{\n    fill-opacity:0.5;\n  }\n}\n@media only screen and (max-width: 600px){\n  .dropin-skeleton{\n    grid-template-columns:1fr;\n  }\n}\n",""]);const a=s}};