"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[38456],{50158:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return s}});var n=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),d=l(r),s=o,h=d["".concat(u,".").concat(s)]||d[s]||p[s]||i;return r?n.createElement(h,a(a({ref:t},f),{},{components:r})):n.createElement(h,a({ref:t},f))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56484:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return f},default:function(){return d}});var n=r(74834),o=r(28265),i=(r(46393),r(50158)),a=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,l={unversionedId:"api/heft.heftconfiguration.buildcachefolder",id:"api/heft.heftconfiguration.buildcachefolder",isDocsHomePage:!1,title:"heft.heftconfiguration.buildcachefolder",description:"Home &gt; @rushstack/heft &gt; HeftConfiguration &gt; buildCacheFolder",source:"@site/docs/api/heft.heftconfiguration.buildcachefolder.md",sourceDirName:"api",slug:"/api/heft.heftconfiguration.buildcachefolder",permalink:"/pages/api/heft.heftconfiguration.buildcachefolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},f=[{value:"HeftConfiguration.buildCacheFolder property",id:"heftconfigurationbuildcachefolder-property",children:[],level:2}],p={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/heft"},"@rushstack/heft")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/heft.heftconfiguration"},"HeftConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/heft.heftconfiguration.buildcachefolder"},"buildCacheFolder")),(0,i.kt)("h2",{id:"heftconfigurationbuildcachefolder-property"},"HeftConfiguration.buildCacheFolder property"),(0,i.kt)("p",null,"The project's build cache folder."),(0,i.kt)("p",null,"This folder exists at ","<"," project root ",">"," /.heft/build-cache. TypeScript's output goes into this folder and then is either copied or linked to the final output folder"),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get buildCacheFolder(): string;\n")))}d.isMDXComponent=!0}}]);