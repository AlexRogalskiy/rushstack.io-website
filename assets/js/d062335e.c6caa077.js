"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[58771],{50158:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var r=t(46393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),k=o,d=f["".concat(p,".").concat(k)]||f[k]||u[k]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},25426:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=t(74834),o=t(28265),a=(t(46393),t(50158)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"api/node-core-library.packagejsonlookup.instance",id:"api/node-core-library.packagejsonlookup.instance",isDocsHomePage:!1,title:"node-core-library.packagejsonlookup.instance",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; instance",source:"@site/docs/api/node-core-library.packagejsonlookup.instance.md",sourceDirName:"api",slug:"/api/node-core-library.packagejsonlookup.instance",permalink:"/pages/api/node-core-library.packagejsonlookup.instance",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"PackageJsonLookup.instance property",id:"packagejsonlookupinstance-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.packagejsonlookup.instance"},"instance")),(0,a.kt)("h2",{id:"packagejsonlookupinstance-property"},"PackageJsonLookup.instance property"),(0,a.kt)("p",null,"A singleton instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"PackageJsonLookup")," , which is useful for short-lived processes that can reasonably assume that the file system will not be modified after the cache is populated."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static get instance(): PackageJsonLookup;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"For long-running processes that need to clear the cache at appropriate times, it is recommended to create your own instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"PackageJsonLookup")," instead of relying on this instance."))}f.isMDXComponent=!0}}]);