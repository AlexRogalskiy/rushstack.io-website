"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[73714],{50158:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return s}});var t=n(46393);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),s=i,d=m["".concat(l,".").concat(s)]||m[s]||f[s]||a;return n?t.createElement(d,o(o({ref:r},c),{},{components:n})):t.createElement(d,o({ref:r},c))}));function s(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39903:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var t=n(61731),i=n(70396),a=(n(46393),n(50158)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"api/module-minifier-plugin.module_wrapper_suffix",id:"api/module-minifier-plugin.module_wrapper_suffix",title:"module-minifier-plugin.module_wrapper_suffix",description:"Home &gt; @rushstack/module-minifier-plugin &gt; MODULE\\WRAPPER\\SUFFIX",source:"@site/docs/api/module-minifier-plugin.module_wrapper_suffix.md",sourceDirName:"api",slug:"/api/module-minifier-plugin.module_wrapper_suffix",permalink:"/pages/api/module-minifier-plugin.module_wrapper_suffix",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"MODULE_WRAPPER_SUFFIX variable",id:"module_wrapper_suffix-variable",children:[],level:2}],f={toc:c};function m(e){var r=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin.module_wrapper_suffix"},"MODULE","_","WRAPPER","_","SUFFIX")),(0,a.kt)("h2",{id:"module_wrapper_suffix-variable"},"MODULE","_","WRAPPER","_","SUFFIX variable"),(0,a.kt)("p",null,"Suffix to wrap ",(0,a.kt)("inlineCode",{parentName:"p"},"function (module, __webpack_exports__, __webpack_require__) { ... }")," so that the minifier doesn't delete it. Public because alternate Minifier implementations may wish to know about it."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"MODULE_WRAPPER_SUFFIX: ');'\n")))}m.isMDXComponent=!0}}]);