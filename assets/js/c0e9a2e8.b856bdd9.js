"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[69365],{50158:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(46393);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,h=f["".concat(u,".").concat(m)]||f[m]||s[m]||a;return n?t.createElement(h,i(i({ref:r},p),{},{components:n})):t.createElement(h,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90994:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var t=n(61731),o=n(70396),a=(n(46393),n(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,c={unversionedId:"api/rush-lib.rushconfiguration.npmcachefolder",id:"api/rush-lib.rushconfiguration.npmcachefolder",title:"rush-lib.rushconfiguration.npmcachefolder",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; npmCacheFolder",source:"@site/docs/api/rush-lib.rushconfiguration.npmcachefolder.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.npmcachefolder",permalink:"/pages/api/rush-lib.rushconfiguration.npmcachefolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"RushConfiguration.npmCacheFolder property",id:"rushconfigurationnpmcachefolder-property",children:[],level:2}],s={toc:p};function f(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration.npmcachefolder"},"npmCacheFolder")),(0,a.kt)("h2",{id:"rushconfigurationnpmcachefolder-property"},"RushConfiguration.npmCacheFolder property"),(0,a.kt)("p",null,"The local folder that will store the NPM package cache. Rush does not rely on the npm's default global cache folder, because npm's caching implementation does not reliably handle multiple processes. (For example, if a build box is running \"rush install\" simultaneously for two different working folders, it may fail randomly.)"),(0,a.kt)("p",null,"Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\temp\\npm-cache")),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"get npmCacheFolder(): string;\n")))}f.isMDXComponent=!0}}]);