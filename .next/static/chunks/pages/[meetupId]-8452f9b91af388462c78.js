_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,c=void 0!==i&&i;return n||a&&c}},"0GHO":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[meetupId]",function(){return n("kqZg")}])},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),o=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var d=f[u];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var l=a.props[d],p=r[d]||new Set;"name"===d&&c||!p.has(l)?(p.add(l),r[d]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(o.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},A3pG:function(e,t,n){e.exports={list:"MeetupList_list__1iafn"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u}));var r=n("nKUr"),a=n("aRus"),i=n("q1tI"),c=n("g4pe"),o=n.n(c);var u=!0;t.default=function(e){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:"Meetup List"}),Object(r.jsx)("meta",{name:"description",content:"List of Meetups"})]}),Object(r.jsx)(a.a,{meetups:e.meetups})]})}},RPSF:function(e,t,n){e.exports={item:"MeetupItem_item__3siMU",image:"MeetupItem_image__13rAP",content:"MeetupItem_content__3uEkT",actions:"MeetupItem_actions__LvT9B"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),o=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){c(n,e);var t=s(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},YEck:function(e,t,n){e.exports={detail:"MeetupDetail_detail__C_8IT"}},aRus:function(e,t,n){"use strict";var r=n("nKUr"),a=n("leqP"),i=n("RPSF"),c=n.n(i),o=n("20a2");var u=function(e){var t=Object(o.useRouter)();return Object(r.jsx)("li",{className:c.a.item,children:Object(r.jsxs)(a.a,{children:[Object(r.jsx)("div",{className:c.a.image,children:Object(r.jsx)("img",{src:e.image,alt:e.title})}),Object(r.jsxs)("div",{className:c.a.content,children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("address",{children:e.address})]}),Object(r.jsx)("div",{className:c.a.actions,children:Object(r.jsx)("button",{onClick:function(n){n.preventDefault(),t.push("/"+e.id)},children:"Show Details"})})]})})},s=n("A3pG"),d=n.n(s);t.a=function(e){return Object(r.jsx)("ul",{className:d.a.list,children:e.meetups.map((function(e){return Object(r.jsx)(u,{id:e.id,image:e.image,title:e.title,address:e.address},e.id)}))})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},kqZg:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return d}));var r=n("nKUr"),a=(n("RNiq"),n("YEck")),i=n.n(a);var c=function(e){return Object(r.jsxs)("section",{className:i.a.detail,children:[Object(r.jsx)("img",{src:e.image,alt:e.title}),Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("address",{children:e.address}),Object(r.jsx)("p",{children:e.description})]})},o=n("q1tI"),u=n("g4pe"),s=n.n(u);var d=!0;t.default=function(e){return Object(r.jsxs)(o.Fragment,{children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:e.meetup.title}),Object(r.jsx)("meta",{name:"description",content:e.meetup.description})]}),Object(r.jsx)(c,{image:e.meetup.image,title:e.meetup.title,address:e.meetup.address,description:e.meetup.description})]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},leqP:function(e,t,n){"use strict";var r=n("nKUr"),a=n("rQAc"),i=n.n(a);t.a=function(e){return Object(r.jsx)("div",{className:i.a.card,children:e.children})}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},rQAc:function(e,t,n){e.exports={card:"Card_card__3KSLO"}}},[["0GHO",0,2,1]]]);