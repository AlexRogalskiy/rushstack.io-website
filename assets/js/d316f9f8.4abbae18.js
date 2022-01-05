"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[28019],{50158:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61995:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var n=t(74834),o=t(28265),a=(t(46393),t(50158)),i=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/node-core-library.istringbufferoutputoptions.normalizespecialcharacters",id:"api/node-core-library.istringbufferoutputoptions.normalizespecialcharacters",isDocsHomePage:!1,title:"node-core-library.istringbufferoutputoptions.normalizespecialcharacters",description:"Home &gt; @rushstack/node-core-library &gt; IStringBufferOutputOptions &gt; normalizeSpecialCharacters",source:"@site/docs/api/node-core-library.istringbufferoutputoptions.normalizespecialcharacters.md",sourceDirName:"api",slug:"/api/node-core-library.istringbufferoutputoptions.normalizespecialcharacters",permalink:"/pages/api/node-core-library.istringbufferoutputoptions.normalizespecialcharacters",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"IStringBufferOutputOptions.normalizeSpecialCharacters property",id:"istringbufferoutputoptionsnormalizespecialcharacters-property",children:[],level:2}],s={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.istringbufferoutputoptions"},"IStringBufferOutputOptions")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.istringbufferoutputoptions.normalizespecialcharacters"},"normalizeSpecialCharacters")),(0,a.kt)("h2",{id:"istringbufferoutputoptionsnormalizespecialcharacters-property"},"IStringBufferOutputOptions.normalizeSpecialCharacters property"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"If set to true, special characters like ","\\"," n, ","\\"," r, and the ","\\"," u001b character in color control tokens will get normalized to ","[","-n-","]",", ","[","-r-","]",", and ","[","-x-","]"," respectively"),(0,a.kt)("p",null,"This option defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"normalizeSpecialCharacters: boolean;\n")))}f.isMDXComponent=!0}}]);