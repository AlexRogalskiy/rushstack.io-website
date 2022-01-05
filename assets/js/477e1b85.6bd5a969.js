"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[97700],{50158:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return m}});var n=t(46393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},f=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return t?n.createElement(y,l(l({ref:r},f),{},{components:t})):n.createElement(y,l({ref:r},f))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58235:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return f},default:function(){return p}});var n=t(61731),a=t(70396),i=(t(46393),t(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,u={unversionedId:"api/node-core-library.filesystem.readfiletobufferasync",id:"api/node-core-library.filesystem.readfiletobufferasync",title:"node-core-library.filesystem.readfiletobufferasync",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem &gt; readFileToBufferAsync",source:"@site/docs/api/node-core-library.filesystem.readfiletobufferasync.md",sourceDirName:"api",slug:"/api/node-core-library.filesystem.readfiletobufferasync",permalink:"/pages/api/node-core-library.filesystem.readfiletobufferasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},f=[{value:"FileSystem.readFileToBufferAsync() method",id:"filesystemreadfiletobufferasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],s={toc:f};function p(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem"},"FileSystem")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem.readfiletobufferasync"},"readFileToBufferAsync")),(0,i.kt)("h2",{id:"filesystemreadfiletobufferasync-method"},"FileSystem.readFileToBufferAsync() method"),(0,i.kt)("p",null,"An async version of ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem.readfiletobuffer"},"FileSystem.readFileToBuffer()")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static readFileToBufferAsync(filePath: string): Promise<Buffer>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filePath"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","Buffer",">"))}p.isMDXComponent=!0}}]);