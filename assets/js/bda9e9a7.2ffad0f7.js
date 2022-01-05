"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[71532],{50158:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(46393);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?t.createElement(f,p(p({ref:r},s),{},{components:n})):t.createElement(f,p({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33930:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var t=n(74834),a=n(28265),o=(n(46393),n(50158)),p=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/node-core-library.iparsedpackagename.scope",id:"api/node-core-library.iparsedpackagename.scope",isDocsHomePage:!1,title:"node-core-library.iparsedpackagename.scope",description:"Home &gt; @rushstack/node-core-library &gt; IParsedPackageName &gt; scope",source:"@site/docs/api/node-core-library.iparsedpackagename.scope.md",sourceDirName:"api",slug:"/api/node-core-library.iparsedpackagename.scope",permalink:"/pages/api/node-core-library.iparsedpackagename.scope",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"IParsedPackageName.scope property",id:"iparsedpackagenamescope-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function d(e){var r=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iparsedpackagename"},"IParsedPackageName")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iparsedpackagename.scope"},"scope")),(0,o.kt)("h2",{id:"iparsedpackagenamescope-property"},"IParsedPackageName.scope property"),(0,o.kt)("p",null,"The parsed NPM scope, or an empty string if there was no scope. The scope value will always include the at-sign."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"scope: string;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,'For example, if the parsed input was " @ scope/example", then scope would be " @ scope".'))}d.isMDXComponent=!0}}]);