"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[44198],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6027:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=r(74834),n=r(28265),o=(r(46393),r(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/api-extractor-model.releasetag",id:"api/api-extractor-model.releasetag",isDocsHomePage:!1,title:"api-extractor-model.releasetag",description:"Home &gt; @microsoft/api-extractor-model &gt; ReleaseTag",source:"@site/docs/api/api-extractor-model.releasetag.md",sourceDirName:"api",slug:"/api/api-extractor-model.releasetag",permalink:"/pages/api/api-extractor-model.releasetag",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"ReleaseTag namespace",id:"releasetag-namespace",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2}],s={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.releasetag"},"ReleaseTag")),(0,o.kt)("h2",{id:"releasetag-namespace"},"ReleaseTag namespace"),(0,o.kt)("p",null,"Helper functions for working with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReleaseTag")," enum."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare namespace ReleaseTag \n")),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Function"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.releasetag.compare"},"compare(a, b)")),(0,o.kt)("td",{parentName:"tr",align:null},"Compares two ",(0,o.kt)("code",null,"ReleaseTag")," values. Their values must not be ",(0,o.kt)("code",null,"ReleaseTag.None"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.releasetag.gettagname"},"getTagName(releaseTag)")),(0,o.kt)("td",{parentName:"tr",align:null},"Returns the TSDoc tag name for a ",(0,o.kt)("code",null,"ReleaseTag")," value.")))))}m.isMDXComponent=!0}}]);