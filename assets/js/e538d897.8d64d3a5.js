"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[8535],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(46393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54961:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(74834),i=r(28265),a=(r(46393),r(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"api/node-core-library.filesystem.isunlinknotpermittederror",id:"api/node-core-library.filesystem.isunlinknotpermittederror",isDocsHomePage:!1,title:"node-core-library.filesystem.isunlinknotpermittederror",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem &gt; isUnlinkNotPermittedError",source:"@site/docs/api/node-core-library.filesystem.isunlinknotpermittederror.md",sourceDirName:"api",slug:"/api/node-core-library.filesystem.isunlinknotpermittederror",permalink:"/pages/api/node-core-library.filesystem.isunlinknotpermittederror",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"FileSystem.isUnlinkNotPermittedError() method",id:"filesystemisunlinknotpermittederror-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem"},"FileSystem")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem.isunlinknotpermittederror"},"isUnlinkNotPermittedError")),(0,a.kt)("h2",{id:"filesystemisunlinknotpermittederror-method"},"FileSystem.isUnlinkNotPermittedError() method"),(0,a.kt)("p",null,"Returns true if the error object indicates that the ",(0,a.kt)("inlineCode",{parentName:"p"},"unlink")," system call failed due to a permissions issue (",(0,a.kt)("inlineCode",{parentName:"p"},"EPERM")," )."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static isUnlinkNotPermittedError(error: Error): boolean;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"error"),(0,a.kt)("td",{parentName:"tr",align:null},"Error"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"boolean"))}m.isMDXComponent=!0}}]);