_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function a(e){return n.isMemo(e)?u:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=u;var f=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var u=s(r);l&&(u=u.concat(l(r)));for(var c=a(t),v=a(r),b=0;b<u.length;++b){var h=u[b];if(!i[h]&&(!n||!n[h])&&(!v||!v[h])&&(!c||!c[h])){var m=p(r,h);try{f(t,h,m)}catch(g){}}}}return t}},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("cha2")}])},Rpix:function(e,t,r){},TOwV:function(e,t,r){"use strict";e.exports=r("qT12")},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),o=r("7KCV");t.__esModule=!0,t.default=void 0;var i=o(r("q1tI")),u=r("elyg"),c=r("nOHt"),a=r("vNVm"),f={};function s(e,t,r,n){if(e&&(0,u.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),o=r&&r.pathname||"/",l=i.default.useMemo((function(){var t=(0,u.resolveHref)(o,e.href,!0),r=n(t,2),i=r[0],c=r[1];return{href:i,as:e.as?(0,u.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),p=l.href,d=l.as,y=e.children,v=e.replace,b=e.shallow,h=e.scroll,m=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var g=i.Children.only(y),w=g&&"object"===typeof g&&g.ref,O=(0,a.useIntersection)({rootMargin:"200px"}),P=n(O,2),S=P[0],j=P[1],E=i.default.useCallback((function(e){S(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,S]);(0,i.useEffect)((function(){var e=j&&t&&(0,u.isLocalURL)(p),n="undefined"!==typeof m?m:r&&r.locale,o=f[p+"%"+d+(n?"%"+n:"")];e&&!o&&s(r,p,d,{locale:n})}),[d,p,j,m,t,r]);var x={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,c,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:i,locale:a,scroll:c}))}(e,r,p,d,v,b,h,m)},onMouseEnter:function(e){(0,u.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(r,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var _="undefined"!==typeof m?m:r&&r.locale,A=r&&r.isLocaleDomain&&(0,u.getDomainLocale)(d,_,r&&r.locales,r&&r.domainLocales);x.href=A||(0,u.addBasePath)((0,u.addLocale)(d,_,r&&r.defaultLocale))}return i.default.cloneElement(g,x)};t.default=l},cha2:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=(r("17x9"),o.a.createContext(null));var u=function(e){e()},c={notify:function(){}};function a(){var e=u,t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var f=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=c,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=a())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=c)},e}(),s="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect;var l=function(e){var t=e.store,r=e.context,u=e.children,c=Object(n.useMemo)((function(){var e=new f(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),a=Object(n.useMemo)((function(){return t.getState()}),[t]);s((function(){var e=c.subscription;return e.trySubscribe(),a!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[c,a]);var l=r||i;return o.a.createElement(l.Provider,{value:c},u)};r("2mql"),r("TOwV");var p,d=r("i8i4");p=d.unstable_batchedUpdates,u=p;r("Rpix");function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var m="function"===typeof Symbol&&Symbol.observable||"@@observable",g=function(){return Math.random().toString(36).substring(7).split("").join(".")},w={INIT:"@@redux/INIT"+g(),REPLACE:"@@redux/REPLACE"+g(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+g()}};function O(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function P(e,t,r){var n;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(h(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(h(1));return r(P)(e,t)}if("function"!==typeof e)throw new Error(h(2));var o=e,i=t,u=[],c=u,a=!1;function f(){c===u&&(c=u.slice())}function s(){if(a)throw new Error(h(3));return i}function l(e){if("function"!==typeof e)throw new Error(h(4));if(a)throw new Error(h(5));var t=!0;return f(),c.push(e),function(){if(t){if(a)throw new Error(h(6));t=!1,f();var r=c.indexOf(e);c.splice(r,1),u=null}}}function p(e){if(!O(e))throw new Error(h(7));if("undefined"===typeof e.type)throw new Error(h(8));if(a)throw new Error(h(9));try{a=!0,i=o(i,e)}finally{a=!1}for(var t=u=c,r=0;r<t.length;r++){(0,t[r])()}return e}function d(e){if("function"!==typeof e)throw new Error(h(10));o=e,p({type:w.REPLACE})}function y(){var e,t=l;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(h(11));function r(){e.next&&e.next(s())}return r(),{unsubscribe:t(r)}}})[m]=function(){return this},e}return p({type:w.INIT}),(n={dispatch:p,subscribe:l,getState:s,replaceReducer:d})[m]=y,n}function S(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"===typeof e[o]&&(r[o]=e[o])}var i,u=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:w.INIT}))throw new Error(h(12));if("undefined"===typeof r(void 0,{type:w.PROBE_UNKNOWN_ACTION()}))throw new Error(h(13))}))}(r)}catch(c){i=c}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},c=0;c<u.length;c++){var a=u[c],f=r[a],s=e[a],l=f(s,t);if("undefined"===typeof l){t&&t.type;throw new Error(h(14))}o[a]=l,n=n||l!==s}return(n=n||u.length!==Object.keys(e).length)?o:e}}function j(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function E(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(h(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return n=j.apply(void 0,i)(r.dispatch),b(b({},r),{},{dispatch:n})}}}function x(e,t){return e===t}function _(e,t,r){if(null===t||null===r||t.length!==r.length)return!1;for(var n=t.length,o=0;o<n;o++)if(!e(t[o],r[o]))return!1;return!0}function A(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var r=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return t}!function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,r=null,n=null;return function(){return _(t,r,arguments)||(n=e.apply(null,arguments)),r=arguments,n}}));function N(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function C(e){return!!e&&!!e[ge]}function D(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===we}(e)||Array.isArray(e)||!!e[me]||!!e.constructor[me]||$(e)||F(e))}function M(e,t,r){void 0===r&&(r=!1),0===k(e)?(r?Object.keys:Oe)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function k(e){var t=e[ge];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:$(e)?2:F(e)?3:0}function T(e,t){return 2===k(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function I(e,t){return 2===k(e)?e.get(t):e[t]}function R(e,t,r){var n=k(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function L(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function $(e){return ye&&e instanceof Map}function F(e){return ve&&e instanceof Set}function U(e){return e.o||e.t}function z(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Pe(e);delete t[ge];for(var r=Oe(t),n=0;n<r.length;n++){var o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function K(e,t){return void 0===t&&(t=!1),W(e)||C(e)||!D(e)||(k(e)>1&&(e.set=e.add=e.clear=e.delete=q),Object.freeze(e),t&&M(e,(function(e,t){return K(t,!0)}),!0)),e}function q(){N(2)}function W(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function V(e){var t=Se[e];return t||N(18,e),t}function X(e,t){Se[e]||(Se[e]=t)}function B(){return pe}function H(e,t){t&&(V("Patches"),e.u=[],e.s=[],e.v=t)}function J(e){Y(e),e.p.forEach(Q),e.p=null}function Y(e){e===pe&&(pe=e.l)}function G(e){return pe={p:[],l:pe,h:e,m:!0,_:0}}function Q(e){var t=e[ge];0===t.i||1===t.i?t.j():t.O=!0}function Z(e,t){t._=t.p.length;var r=t.p[0],n=void 0!==e&&e!==r;return t.h.g||V("ES5").S(t,e,n),n?(r[ge].P&&(J(t),N(4)),D(e)&&(e=ee(t,e),t.l||re(t,e)),t.u&&V("Patches").M(r[ge],e,t.u,t.s)):e=ee(t,r,[]),J(t),t.u&&t.v(t.u,t.s),e!==he?e:void 0}function ee(e,t,r){if(W(t))return t;var n=t[ge];if(!n)return M(t,(function(o,i){return te(e,n,t,o,i,r)}),!0),t;if(n.A!==e)return t;if(!n.P)return re(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=z(n.k):n.o;M(3===n.i?new Set(o):o,(function(t,i){return te(e,n,o,t,i,r)})),re(e,o,!1),r&&e.u&&V("Patches").R(n,r,e.u,e.s)}return n.o}function te(e,t,r,n,o,i){if(C(o)){var u=ee(e,o,i&&t&&3!==t.i&&!T(t.D,n)?i.concat(n):void 0);if(R(r,n,u),!C(u))return;e.m=!1}if(D(o)&&!W(o)){if(!e.h.F&&e._<1)return;ee(e,o),t&&t.A.l||re(e,o)}}function re(e,t,r){void 0===r&&(r=!1),e.h.F&&e.m&&K(t,r)}function ne(e,t){var r=e[ge];return(r?U(r):e)[t]}function oe(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function ie(e){e.P||(e.P=!0,e.l&&ie(e.l))}function ue(e){e.o||(e.o=z(e.t))}function ce(e,t,r){var n=$(t)?V("MapSet").N(t,r):F(t)?V("MapSet").T(t,r):e.g?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:B(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=n,i=je;r&&(o=[n],i=Ee);var u=Proxy.revocable(o,i),c=u.revoke,a=u.proxy;return n.k=a,n.j=c,a}(t,r):V("ES5").J(t,r);return(r?r.A:B()).p.push(n),n}function ae(e){return C(e)||N(22,e),function e(t){if(!D(t))return t;var r,n=t[ge],o=k(t);if(n){if(!n.P&&(n.i<4||!V("ES5").K(n)))return n.t;n.I=!0,r=fe(t,o),n.I=!1}else r=fe(t,o);return M(r,(function(t,o){n&&I(n.t,t)===o||R(r,t,e(o))})),3===o?new Set(r):r}(e)}function fe(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return z(e)}function se(){function e(e,t){var r=o[e];return r?r.enumerable=t:o[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[ge];return je.get(t,e)},set:function(t){var r=this[ge];je.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var o=e[t][ge];if(!o.P)switch(o.i){case 5:n(o)&&ie(o);break;case 4:r(o)&&ie(o)}}}function r(e){for(var t=e.t,r=e.k,n=Oe(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==ge){var u=t[i];if(void 0===u&&!T(t,i))return!0;var c=r[i],a=c&&c[ge];if(a?a.t!==u:!L(c,u))return!0}}var f=!!t[ge];return n.length!==Oe(t).length+(f?0:1)}function n(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}var o={};X("ES5",{J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var i=Pe(r);delete i[ge];for(var u=Oe(i),c=0;c<u.length;c++){var a=u[c];i[a]=e(a,t||!!i[a].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,t),i={i:n?5:4,A:r?r.A:B(),P:!1,I:!1,D:{},l:r,t:t,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,ge,{value:i,writable:!0}),o},S:function(e,r,o){o?C(r)&&r[ge].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[ge];if(r){var o=r.t,i=r.k,u=r.D,c=r.i;if(4===c)M(i,(function(t){t!==ge&&(void 0!==o[t]||T(o,t)?u[t]||e(i[t]):(u[t]=!0,ie(r)))})),M(o,(function(e){void 0!==i[e]||T(i,e)||(u[e]=!1,ie(r))}));else if(5===c){if(n(r)&&(ie(r),u.length=!0),i.length<o.length)for(var a=i.length;a<o.length;a++)u[a]=!1;else for(var f=o.length;f<i.length;f++)u[f]=!0;for(var s=Math.min(i.length,o.length),l=0;l<s;l++)void 0===u[l]&&e(i[l])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):n(e)}})}var le,pe,de="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),ye="undefined"!=typeof Map,ve="undefined"!=typeof Set,be="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,he=de?Symbol.for("immer-nothing"):((le={})["immer-nothing"]=!0,le),me=de?Symbol.for("immer-draftable"):"__$immer_draftable",ge=de?Symbol.for("immer-state"):"__$immer_state",we=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),Oe="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Pe=Object.getOwnPropertyDescriptors||function(e){var t={};return Oe(e).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)})),t},Se={},je={get:function(e,t){if(t===ge)return e;var r=U(e);if(!T(r,t))return function(e,t,r){var n,o=oe(t,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(e.k):void 0}(e,r,t);var n=r[t];return e.I||!D(n)?n:n===ne(e.t,t)?(ue(e),e.o[t]=ce(e.A.h,n,e)):n},has:function(e,t){return t in U(e)},ownKeys:function(e){return Reflect.ownKeys(U(e))},set:function(e,t,r){var n=oe(U(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=ne(U(e),t),i=null==o?void 0:o[ge];if(i&&i.t===r)return e.o[t]=r,e.D[t]=!1,!0;if(L(r,o)&&(void 0!==r||T(e.t,t)))return!0;ue(e),ie(e)}return e.o[t]===r&&"number"!=typeof r||(e.o[t]=r,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==ne(e.t,t)||t in e.t?(e.D[t]=!1,ue(e),ie(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=U(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){N(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){N(12)}},Ee={};M(je,(function(e,t){Ee[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Ee.deleteProperty=function(e,t){return je.deleteProperty.call(this,e[0],t)},Ee.set=function(e,t,r){return je.set.call(this,e[0],t,r,e[0])};var xe=new(function(){function e(e){var t=this;this.g=be,this.F=!0,this.produce=function(e,r,n){if("function"==typeof e&&"function"!=typeof r){var o=r;r=e;var i=t;return function(e){var t=this;void 0===e&&(e=o);for(var n=arguments.length,u=Array(n>1?n-1:0),c=1;c<n;c++)u[c-1]=arguments[c];return i.produce(e,(function(e){var n;return(n=r).call.apply(n,[t,e].concat(u))}))}}var u;if("function"!=typeof r&&N(6),void 0!==n&&"function"!=typeof n&&N(7),D(e)){var c=G(t),a=ce(t,e,void 0),f=!0;try{u=r(a),f=!1}finally{f?J(c):Y(c)}return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(e){return H(c,n),Z(e,c)}),(function(e){throw J(c),e})):(H(c,n),Z(u,c))}if(!e||"object"!=typeof e){if((u=r(e))===he)return;return void 0===u&&(u=e),t.F&&K(u,!0),u}N(21,e)},this.produceWithPatches=function(e,r){return"function"==typeof e?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return t.produceWithPatches(r,(function(t){return e.apply(void 0,[t].concat(o))}))}:[t.produce(e,r,(function(e,t){n=e,o=t})),n,o];var n,o},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){D(e)||N(8),C(e)&&(e=ae(e));var t=G(this),r=ce(this,e,void 0);return r[ge].C=!0,Y(t),r},t.finishDraft=function(e,t){var r=(e&&e[ge]).A;return H(r,t),Z(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!be&&N(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}var o=V("Patches").$;return C(e)?o(e,t):this.produce(e,(function(e){return o(e,t.slice(r+1))}))},e}()),_e=xe.produce,Ae=(xe.produceWithPatches.bind(xe),xe.setAutoFreeze.bind(xe),xe.setUseProxies.bind(xe),xe.applyPatches.bind(xe),xe.createDraft.bind(xe),xe.finishDraft.bind(xe),_e);function Ne(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var Ce=Ne();Ce.withExtraArgument=Ne;var De=Ce,Me=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),ke=function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Te=Object.defineProperty,Ie=Object.prototype.hasOwnProperty,Re=Object.getOwnPropertySymbols,Le=Object.prototype.propertyIsEnumerable,$e=function(e,t,r){return t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},Fe=function(e,t){for(var r in t||(t={}))Ie.call(t,r)&&$e(e,r,t[r]);if(Re)for(var n=0,o=Re(t);n<o.length;n++){r=o[n];Le.call(t,r)&&$e(e,r,t[r])}return e},Ue="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?j:j.apply(null,arguments)};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function ze(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}var Ke=function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Me(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,ke([void 0],e[0].concat(this)))):new(t.bind.apply(t,ke([void 0],e.concat(this))))},t}(Array);function qe(){return function(e){return function(e){void 0===e&&(e={});var t=e.thunk,r=void 0===t||t,n=(e.immutableCheck,e.serializableCheck,new Ke);r&&(!function(e){return"boolean"===typeof e}(r)?n.push(De.withExtraArgument(r.extraArgument)):n.push(De));0;return n}(e)}}function We(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var o=t.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return Fe(Fe({type:e,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}function Ve(e){var t,r={},n=[],o={addCase:function(e,t){var n="string"===typeof e?e:e.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=t,o},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),o},addDefaultCase:function(e){return t=e,o}};return e(o),[r,n,t]}function Xe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function He(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(r),!0).forEach((function(t){Xe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Je={isLoading:!1,errorDetails:{},isError:!1,message:"",errorMessage:""},Ye=function(e){var t=e.name,r=e.initialState;if(!t)throw new Error("`name` is a required option for createSlice");var n=e.reducers||{},o="function"===typeof e.extraReducers?Ve(e.extraReducers):[e.extraReducers],i=o[0],u=void 0===i?{}:i,c=o[1],a=void 0===c?[]:c,f=o[2],s=void 0===f?void 0:f,l=Object.keys(n),p={},d={},y={};l.forEach((function(e){var r,o,i=n[e],u=t+"/"+e;"reducer"in i?(r=i.reducer,o=i.prepare):r=i,p[e]=r,d[u]=r,y[e]=o?We(u,o):We(u)}));var v=function(e,t,r,n){void 0===r&&(r=[]),se();var o="function"===typeof t?Ve(t):[t,r,n],i=o[0],u=o[1],c=o[2],a=Ae(e,(function(){}));return function(e,t){void 0===e&&(e=a);var r=ke([i[t.type]],u.filter((function(e){return(0,e.matcher)(t)})).map((function(e){return e.reducer})));return 0===r.filter((function(e){return!!e})).length&&(r=[c]),r.reduce((function(e,r){if(r){var n;if(C(e))return"undefined"===typeof(n=r(e,t))?e:n;if(D(e))return Ae(e,(function(e){return r(e,t)}));if("undefined"===typeof(n=r(e,t))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e}),e)}}(r,Fe(Fe({},u),d),a,s);return{name:t,reducer:v,actions:y,caseReducers:p}}({name:"api",initialState:Je,reducers:{initReq:function(e){return He(He({},e),{},{isLoading:!0,isError:!1})},setLoading:function(e,t){var r=t.payload.isLoading;return He(He({},e),{},{isLoading:r})},resetState:function(e){return He({},Je)},updateErrorDetails:function(e,t){var r=t.payload,n=He({},e);return null!==r&&void 0!==r&&r.errorMessage&&(n.errorMessage=r.errorMessage),n.errorDetails=r,n.isError=!0,n},updateSuccessMessage:function(e,t){var r=t.payload;return He(He({},e),{},{message:r.details.message||""})}},extraReducers:function(e){}}),Ge=(He({},Ye.actions),function(e){var t,r=qe(),n=e||{},o=n.reducer,i=void 0===o?void 0:o,u=n.middleware,c=void 0===u?r():u,a=n.devTools,f=void 0===a||a,s=n.preloadedState,l=void 0===s?void 0:s,p=n.enhancers,d=void 0===p?void 0:p;if("function"===typeof i)t=i;else{if(!ze(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=S(i)}var y=c;"function"===typeof y&&(y=y(r));var v=E.apply(void 0,y),b=j;f&&(b=Ue(Fe({trace:!1},"object"===typeof f&&f)));var h=[v];return Array.isArray(d)?h=ke([v],d):"function"===typeof d&&(h=d(h)),P(t,l,b.apply(void 0,h))}({reducer:S({api:Ye.reducer}),devTools:!1}));function Qe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ze(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(a){o=!0,i=a}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return Qe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Qe(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var et=r("YFqc"),tt=r.n(et),rt=n.createElement,nt=function(){var e=Ze(n.useState(!1),2),t=e[0],r=e[1];return rt("div",{className:"flex items-center justify-between p-4 md:p-16 sm:p-8 md:items-end "},rt("div",{className:"z-50 space-y-2 text-white md:space-y-4 md:flex-1 "},rt(tt.a,{href:"/"},rt("h1",{className:"text-2xl font-semibold cursor-pointer md:text-4xl"},"BINH TAN")),rt("div",{className:"w-16 md:w-24 md:h-2 h-1.5 rounded-full bg-sandal-500"})),rt("div",{className:"z-50 md:hidden",onClick:function(){return r(!t)}},rt("svg",{width:"40",height:"40",viewBox:"0 0 36 22",xmlns:"http://www.w3.org/2000/svg",className:"burger",onClick:function(e){e.currentTarget.classList.toggle("active")}},rt("g",{transform:"matrix(1,0,0,1,-419.5,-274.131)"},rt("g",{id:"arrow_rocket"},rt("path",{id:"top",d:"M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"}),rt("g",{transform:"matrix(1,-1.22465e-16,-1.22465e-16,-1,0,569.277)"},rt("path",{id:"bottom",d:"M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"})),rt("g",{transform:"matrix(1,0,0,1,0,-0.0234189)"},rt("path",{id:"middle",d:"M420,284.646L450,284.646"})))))),rt("div",{className:"fixed top-0 left-0 z-40 w-full h-full p-4 md:flex-1 pt-32 md:pt-0 bg-opacity-75 bg-shark-600 md:bg-shark-500 transform duration-300 md:translate-x-0 md:static ".concat(t?"translate-x-0":"translate-x-full ")},rt("ul",{className:"text-2xl  text-bombay-500 md:flex md:justify-end opacity-0 md:opacity-100 md:space-x-16 ".concat(t?"fade-in":"")},rt("li",{className:"py-8 duration-300 border-b-2 cursor-pointer md:py-2 hover:text-white border-bombay-500 hover:border-white md:border-none"},"About"),rt("li",{className:"py-8 duration-300 border-b-2 cursor-pointer md:py-2 hover:text-white border-bombay-500 hover:border-white md:border-none"},rt("a",{href:"/contact"},"Contact")),rt("li",{className:"py-8 duration-300 border-b-2 cursor-pointer md:py-2 hover:text-white border-bombay-500 hover:border-white md:border-none"},rt("a",{href:"#server"},"Services")),rt("li",{className:"py-8 duration-300 cursor-pointer md:py-2 hover:text-white"},rt("a",{href:"https://github.com/tantruong2303",target:"__blank"},"Projects")))))},ot=n.createElement,it=function(){return ot("div",{className:"p-4 text-center text-white opacity-60"},ot("p",null,"Truong Binh Tan \xa9 ",(new Date).getFullYear()))},ut=o.a.createElement;t.default=function(e){var t=e.Component,r=e.pageProps;return ut(l,{store:Ge},ut("div",{className:"flex flex-col min-h-screen bg-shark-500"},ut(nt,null),ut(t,r),ut(it,null)))}},qT12:function(e,t,r){"use strict";var n="function"===typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,c=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,f=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,v=n?Symbol.for("react.suspense_list"):60120,b=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,w=n?Symbol.for("react.responder"):60118,O=n?Symbol.for("react.scope"):60119;function P(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case l:case p:case u:case a:case c:case y:return e;default:switch(e=e&&e.$$typeof){case s:case d:case h:case b:case f:return e;default:return t}}case i:return t}}}function S(e){return P(e)===p}t.AsyncMode=l,t.ConcurrentMode=p,t.ContextConsumer=s,t.ContextProvider=f,t.Element=o,t.ForwardRef=d,t.Fragment=u,t.Lazy=h,t.Memo=b,t.Portal=i,t.Profiler=a,t.StrictMode=c,t.Suspense=y,t.isAsyncMode=function(e){return S(e)||P(e)===l},t.isConcurrentMode=S,t.isContextConsumer=function(e){return P(e)===s},t.isContextProvider=function(e){return P(e)===f},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return P(e)===d},t.isFragment=function(e){return P(e)===u},t.isLazy=function(e){return P(e)===h},t.isMemo=function(e){return P(e)===b},t.isPortal=function(e){return P(e)===i},t.isProfiler=function(e){return P(e)===a},t.isStrictMode=function(e){return P(e)===c},t.isSuspense=function(e){return P(e)===y},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===p||e===a||e===c||e===y||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===b||e.$$typeof===f||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||e.$$typeof===w||e.$$typeof===O||e.$$typeof===m)},t.typeOf=P},vNVm:function(e,t,r){"use strict";var n=r("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!u,a=(0,o.useRef)(),f=(0,o.useState)(!1),s=n(f,2),l=s[0],p=s[1],d=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),r||l||e&&e.tagName&&(a.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,u=n.elements;return u.set(e,t),i.observe(e),function(){u.delete(e),i.unobserve(e),0===u.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,l]);return(0,o.useEffect)((function(){if(!u&&!l){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[l]),[d,l]};var o=r("q1tI"),i=r("0G5g"),u="undefined"!==typeof IntersectionObserver;var c=new Map}},[[0,0,1,3]]]);