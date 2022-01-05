"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[41706],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,g=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11650:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(74834),a=r(28265),o=(r(46393),r(50158)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"api/api-extractor.extractorconfig.bundledpackages",id:"api/api-extractor.extractorconfig.bundledpackages",isDocsHomePage:!1,title:"api-extractor.extractorconfig.bundledpackages",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorConfig &gt; bundledPackages",source:"@site/docs/api/api-extractor.extractorconfig.bundledpackages.md",sourceDirName:"api",slug:"/api/api-extractor.extractorconfig.bundledpackages",permalink:"/pages/api/api-extractor.extractorconfig.bundledpackages",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"ExtractorConfig.bundledPackages property",id:"extractorconfigbundledpackages-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractorconfig"},"ExtractorConfig")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractorconfig.bundledpackages"},"bundledPackages")),(0,o.kt)("h2",{id:"extractorconfigbundledpackages-property"},"ExtractorConfig.bundledPackages property"),(0,o.kt)("p",null,"A list of NPM package names whose exports should be treated as part of this package."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly bundledPackages: string[];\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"For example, suppose that Webpack is used to generate a distributed bundle for the project ",(0,o.kt)("inlineCode",{parentName:"p"},"library1")," , and another NPM package ",(0,o.kt)("inlineCode",{parentName:"p"},"library2")," is embedded in this bundle. Some types from ",(0,o.kt)("inlineCode",{parentName:"p"},"library2")," may become part of the exported API for ",(0,o.kt)("inlineCode",{parentName:"p"},"library1")," , but by default API Extractor would generate a .d.ts rollup that explicitly imports ",(0,o.kt)("inlineCode",{parentName:"p"},"library2")," . To avoid this, we can specify:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'  "bundledPackages": [ "library2" ],\n')),(0,o.kt)("p",null,"This would direct API Extractor to embed those types directly in the .d.ts rollup, as if they had been local files for ",(0,o.kt)("inlineCode",{parentName:"p"},"library1")," ."))}d.isMDXComponent=!0}}]);