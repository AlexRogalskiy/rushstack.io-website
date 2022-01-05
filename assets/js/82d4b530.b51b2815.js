"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[52231],{50158:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var a=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,g=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return t?a.createElement(g,p(p({ref:r},u),{},{components:t})):a.createElement(g,p({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=t[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56602:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=t(74834),n=t(28265),o=(t(46393),t(50158)),p=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"api/node-core-library.packagename.tryparse",id:"api/node-core-library.packagename.tryparse",isDocsHomePage:!1,title:"node-core-library.packagename.tryparse",description:"Home &gt; @rushstack/node-core-library &gt; PackageName &gt; tryParse",source:"@site/docs/api/node-core-library.packagename.tryparse.md",sourceDirName:"api",slug:"/api/node-core-library.packagename.tryparse",permalink:"/pages/api/node-core-library.packagename.tryparse",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"PackageName.tryParse() method",id:"packagenametryparse-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:u};function m(e){var r=e.components,t=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.packagename"},"PackageName")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.packagename.tryparse"},"tryParse")),(0,o.kt)("h2",{id:"packagenametryparse-method"},"PackageName.tryParse() method"),(0,o.kt)("p",null,"This attempts to parse a package name that may include a scope component. The packageName must not be an empty string."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static tryParse(packageName: string): IParsedPackageNameOrError;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"packageName"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iparsedpackagenameorerror"},"IParsedPackageNameOrError")),(0,o.kt)("p",null,"an ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iparsedpackagenameorerror"},"IParsedPackageNameOrError")," structure whose ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," property will be nonempty if the string could not be parsed."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This function will not throw an exception."))}m.isMDXComponent=!0}}]);