"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[57826],{50158:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var i=n(46393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,c=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return n?i.createElement(c,a(a({ref:t},m),{},{components:n})):i.createElement(c,a({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},83712:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var i=n(61731),r=n(70396),o=(n(46393),n(50158)),a=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"api/module-minifier-plugin.imoduleminifierpluginhooks",id:"api/module-minifier-plugin.imoduleminifierpluginhooks",title:"module-minifier-plugin.imoduleminifierpluginhooks",description:"Home &gt; @rushstack/module-minifier-plugin &gt; IModuleMinifierPluginHooks",source:"@site/docs/api/module-minifier-plugin.imoduleminifierpluginhooks.md",sourceDirName:"api",slug:"/api/module-minifier-plugin.imoduleminifierpluginhooks",permalink:"/pages/api/module-minifier-plugin.imoduleminifierpluginhooks",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"IModuleMinifierPluginHooks interface",id:"imoduleminifierpluginhooks-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],d={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin.imoduleminifierpluginhooks"},"IModuleMinifierPluginHooks")),(0,o.kt)("h2",{id:"imoduleminifierpluginhooks-interface"},"IModuleMinifierPluginHooks interface"),(0,o.kt)("p",null,"Hooks provided by the ModuleMinifierPlugin"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IModuleMinifierPluginHooks \n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/module-minifier-plugin.imoduleminifierpluginhooks.finalmoduleid"},"finalModuleId")),(0,o.kt)("td",{parentName:"tr",align:null},"SyncWaterfallHook","<","string ","|"," number ","|"," undefined",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Hook invoked on a module id to get the final rendered id.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/module-minifier-plugin.imoduleminifierpluginhooks.postprocesscodefragment"},"postProcessCodeFragment")),(0,o.kt)("td",{parentName:"tr",align:null},"SyncWaterfallHook","<","ReplaceSource, string",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Hook invoked on code after it has been returned from the minifier.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/module-minifier-plugin.imoduleminifierpluginhooks.rehydrateassets"},"rehydrateAssets")),(0,o.kt)("td",{parentName:"tr",align:null},"AsyncSeriesWaterfallHook","<",(0,o.kt)("a",{parentName:"td",href:"/pages/api/module-minifier-plugin.idehydratedassets"},"IDehydratedAssets")," , webpack.compilation.Compilation",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Hook invoked at the start of optimizeChunkAssets to rehydrate the minified boilerplate and runtime into chunk assets.")))))}s.isMDXComponent=!0}}]);