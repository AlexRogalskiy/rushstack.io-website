"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[94061],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,y=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94677:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(61731),o=r(70396),i=(r(46393),r(50158)),a=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"api/node-core-library.iimportresolveoptions.includesystemmodules",id:"api/node-core-library.iimportresolveoptions.includesystemmodules",title:"node-core-library.iimportresolveoptions.includesystemmodules",description:"Home &gt; @rushstack/node-core-library &gt; IImportResolveOptions &gt; includeSystemModules",source:"@site/docs/api/node-core-library.iimportresolveoptions.includesystemmodules.md",sourceDirName:"api",slug:"/api/node-core-library.iimportresolveoptions.includesystemmodules",permalink:"/pages/api/node-core-library.iimportresolveoptions.includesystemmodules",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"IImportResolveOptions.includeSystemModules property",id:"iimportresolveoptionsincludesystemmodules-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iimportresolveoptions"},"IImportResolveOptions")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iimportresolveoptions.includesystemmodules"},"includeSystemModules")),(0,i.kt)("h2",{id:"iimportresolveoptionsincludesystemmodules-property"},"IImportResolveOptions.includeSystemModules property"),(0,i.kt)("p",null,"If true, if the package name matches a Node.js system module, then the return value will be the package name without any path."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"includeSystemModules?: boolean;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This will take precedence over an installed NPM package of the same name."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Returns the string "fs" indicating the Node.js system module\nImport.resolveModulePath({\n  resolvePath: "fs",\n  basePath: process.cwd()\n})\n')))}m.isMDXComponent=!0}}]);