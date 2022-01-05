"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[23365],{50158:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(46393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43e3:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=r(74834),i=r(28265),l=(r(46393),r(50158)),o=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"api/node-core-library.ifilesystemdeletefileoptions",id:"api/node-core-library.ifilesystemdeletefileoptions",isDocsHomePage:!1,title:"node-core-library.ifilesystemdeletefileoptions",description:"Home &gt; @rushstack/node-core-library &gt; IFileSystemDeleteFileOptions",source:"@site/docs/api/node-core-library.ifilesystemdeletefileoptions.md",sourceDirName:"api",slug:"/api/node-core-library.ifilesystemdeletefileoptions",permalink:"/pages/api/node-core-library.ifilesystemdeletefileoptions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"IFileSystemDeleteFileOptions interface",id:"ifilesystemdeletefileoptions-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],u={toc:c};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.ifilesystemdeletefileoptions"},"IFileSystemDeleteFileOptions")),(0,l.kt)("h2",{id:"ifilesystemdeletefileoptions-interface"},"IFileSystemDeleteFileOptions interface"),(0,l.kt)("p",null,"The options for ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem.deletefile"},"FileSystem.deleteFile()")),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IFileSystemDeleteFileOptions \n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.ifilesystemdeletefileoptions.throwifnotexists"},"throwIfNotExists?")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",null,"(Optional)")," If true, will throw an exception if the file did not exist before ",(0,l.kt)("code",null,"deleteFile()")," was called.")))))}f.isMDXComponent=!0}}]);