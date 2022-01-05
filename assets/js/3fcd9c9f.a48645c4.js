"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[76675],{50158:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,h=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return t?n.createElement(h,a(a({ref:r},u),{},{components:t})):n.createElement(h,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},62137:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=t(74834),o=t(28265),i=(t(46393),t(50158)),a=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/rush-lib.versionpolicy.exemptfromrushchange",id:"api/rush-lib.versionpolicy.exemptfromrushchange",isDocsHomePage:!1,title:"rush-lib.versionpolicy.exemptfromrushchange",description:"Home &gt; @microsoft/rush-lib &gt; VersionPolicy &gt; exemptFromRushChange",source:"@site/docs/api/rush-lib.versionpolicy.exemptfromrushchange.md",sourceDirName:"api",slug:"/api/rush-lib.versionpolicy.exemptfromrushchange",permalink:"/pages/api/rush-lib.versionpolicy.exemptfromrushchange",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"VersionPolicy.exemptFromRushChange property",id:"versionpolicyexemptfromrushchange-property",children:[],level:2}],s={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.versionpolicy"},"VersionPolicy")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.versionpolicy.exemptfromrushchange"},"exemptFromRushChange")),(0,i.kt)("h2",{id:"versionpolicyexemptfromrushchange-property"},"VersionPolicy.exemptFromRushChange property"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"Determines if a version policy wants to opt out of changelog files."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get exemptFromRushChange(): boolean;\n")))}m.isMDXComponent=!0}}]);