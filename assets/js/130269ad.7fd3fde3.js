"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[95286],{50158:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return h}});var n=t(46393);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(t),h=i,m=f["".concat(s,".").concat(h)]||f[h]||c[h]||o;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},98340:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=t(61731),i=t(70396),o=(t(46393),t(50158)),a=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"api/rush-lib.rush.version",id:"api/rush-lib.rush.version",title:"rush-lib.rush.version",description:"Home &gt; @microsoft/rush-lib &gt; Rush &gt; version",source:"@site/docs/api/rush-lib.rush.version.md",sourceDirName:"api",slug:"/api/rush-lib.rush.version",permalink:"/pages/api/rush-lib.rush.version",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"Rush.version property",id:"rushversion-property",children:[],level:2}],c={toc:p};function f(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rush"},"Rush")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rush.version"},"version")),(0,o.kt)("h2",{id:"rushversion-property"},"Rush.version property"),(0,o.kt)("p",null,'The currently executing version of the "rush-lib" library. This is the same as the Rush tool version for that release.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static get version(): string;\n")))}f.isMDXComponent=!0}}]);