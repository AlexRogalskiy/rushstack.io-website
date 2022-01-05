"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[6245],{50158:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(46393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,d=s["".concat(i,".").concat(f)]||s[f]||y[f]||c;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=s;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<c;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3657:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=t(74834),a=t(28265),c=(t(46393),t(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"api/node-core-library.legacycallback",id:"api/node-core-library.legacycallback",isDocsHomePage:!1,title:"node-core-library.legacycallback",description:"Home &gt; @rushstack/node-core-library &gt; LegacyCallback",source:"@site/docs/api/node-core-library.legacycallback.md",sourceDirName:"api",slug:"/api/node-core-library.legacycallback",permalink:"/pages/api/node-core-library.legacycallback",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"LegacyCallback type",id:"legacycallback-type",children:[],level:2}],y={toc:u};function s(e){var r=e.components,t=(0,a.Z)(e,l);return(0,c.kt)("wrapper",(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,c.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.legacycallback"},"LegacyCallback")),(0,c.kt)("h2",{id:"legacycallback-type"},"LegacyCallback type"),(0,c.kt)("p",null,"Callback used by ",(0,c.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.legacyadapters"},"LegacyAdapters")," ."),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type LegacyCallback<TResult, TError> = (error: TError | null | undefined, result: TResult) => void;\n")))}s.isMDXComponent=!0}}]);