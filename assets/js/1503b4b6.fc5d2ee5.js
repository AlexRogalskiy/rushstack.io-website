"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[81604],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),h=s(r),d=a,m=h["".concat(o,".").concat(d)]||h[d]||c[d]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},89226:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var n=r(74834),a=r(28265),l=(r(46393),r(50158)),i=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,s={unversionedId:"api/rush-lib.rush.launch",id:"api/rush-lib.rush.launch",isDocsHomePage:!1,title:"rush-lib.rush.launch",description:"Home &gt; @microsoft/rush-lib &gt; Rush &gt; launch",source:"@site/docs/api/rush-lib.rush.launch.md",sourceDirName:"api",slug:"/api/rush-lib.rush.launch",permalink:"/pages/api/rush-lib.rush.launch",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"Rush.launch() method",id:"rushlaunch-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rush"},"Rush")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rush.launch"},"launch")),(0,l.kt)("h2",{id:"rushlaunch-method"},"Rush.launch() method"),(0,l.kt)("p",null,"This API is used by the ",(0,l.kt)("inlineCode",{parentName:"p"},"@microsoft/rush"),' front end to launch the "rush" command-line. Third-party tools should not use this API. Instead, they should execute the "rush" binary and start a new Node.js process.'),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static launch(launcherVersion: string, arg: ILaunchOptions): void;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"launcherVersion"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The version of the ",(0,l.kt)("code",null,"@microsoft/rush")," wrapper used to call invoke the CLI.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"arg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.ilaunchoptions"},"ILaunchOptions")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,"void"),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"Earlier versions of the rush frontend used a different API contract. In the old contract, the second argument was the ",(0,l.kt)("inlineCode",{parentName:"p"},"isManaged")," value of the ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.ilaunchoptions"},"ILaunchOptions")," object."),(0,l.kt)("p",null,"Even though this API isn't documented, it is still supported for legacy compatibility."))}h.isMDXComponent=!0}}]);