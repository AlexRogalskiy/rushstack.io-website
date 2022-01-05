"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[43560],{50158:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return b}});var t=n(46393);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,g=d["".concat(p,".").concat(b)]||d[b]||s[b]||o;return n?t.createElement(g,i(i({ref:r},u),{},{components:n})):t.createElement(g,i({ref:r},u))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96898:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var t=n(74834),a=n(28265),o=(n(46393),n(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/node-core-library.internalerror.breakindebugger",id:"api/node-core-library.internalerror.breakindebugger",isDocsHomePage:!1,title:"node-core-library.internalerror.breakindebugger",description:"Home &gt; @rushstack/node-core-library &gt; InternalError &gt; breakInDebugger",source:"@site/docs/api/node-core-library.internalerror.breakindebugger.md",sourceDirName:"api",slug:"/api/node-core-library.internalerror.breakindebugger",permalink:"/pages/api/node-core-library.internalerror.breakindebugger",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"InternalError.breakInDebugger property",id:"internalerrorbreakindebugger-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:u};function d(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.internalerror"},"InternalError")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.internalerror.breakindebugger"},"breakInDebugger")),(0,o.kt)("h2",{id:"internalerrorbreakindebugger-property"},"InternalError.breakInDebugger property"),(0,o.kt)("p",null,"If true, a JavScript ",(0,o.kt)("inlineCode",{parentName:"p"},"debugger;")," statement will be invoked whenever the ",(0,o.kt)("inlineCode",{parentName:"p"},"InternalError")," constructor is called."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static breakInDebugger: boolean;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Generally applications should not be catching and ignoring an ",(0,o.kt)("inlineCode",{parentName:"p"},"InternalError")," . Instead, the error should be reported and typically the application will terminate. Thus, if ",(0,o.kt)("inlineCode",{parentName:"p"},"InternalError")," is constructed, it's almost always something we want to examine in a debugger."))}d.isMDXComponent=!0}}]);