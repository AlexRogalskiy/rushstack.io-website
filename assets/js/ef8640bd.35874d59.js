"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[19340],{50158:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2228:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(74834),a=t(28265),o=(t(46393),t(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"api/node-core-library.jsonnull",id:"api/node-core-library.jsonnull",isDocsHomePage:!1,title:"node-core-library.jsonnull",description:"Home &gt; @rushstack/node-core-library &gt; JsonNull",source:"@site/docs/api/node-core-library.jsonnull.md",sourceDirName:"api",slug:"/api/node-core-library.jsonnull",permalink:"/pages/api/node-core-library.jsonnull",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"JsonNull type",id:"jsonnull-type",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.jsonnull"},"JsonNull")),(0,o.kt)("h2",{id:"jsonnull-type"},"JsonNull type"),(0,o.kt)("p",null,"The Rush Stack lint rules discourage usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," . However, JSON parsers always return JavaScript's ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," to keep the two syntaxes consistent. When creating interfaces that describe JSON structures, use ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonNull")," to avoid triggering the lint rule. Do not use ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonNull")," for any other purpose."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type JsonNull = null;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If you are designing a new JSON file format, it's a good idea to avoid ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," entirely. In most cases there are better representations that convey more information about an item that is unknown, omitted, or disabled."),(0,o.kt)("p",null,"To understand why ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," is deprecated, please see the ",(0,o.kt)("inlineCode",{parentName:"p"},"@rushstack/eslint-plugin")," documentation here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/eslint-plugin#rushstackno-null"},"https://www.npmjs.com/package/@rushstack/eslint-plugin","#","rushstackno-null")))}d.isMDXComponent=!0}}]);