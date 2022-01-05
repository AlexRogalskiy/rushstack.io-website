"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[53358],{50158:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(46393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(y,l(l({ref:r},s),{},{components:t})):n.createElement(y,l({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78097:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=t(74834),a=t(28265),o=(t(46393),t(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/node-core-library.alreadyreportederror",id:"api/node-core-library.alreadyreportederror",isDocsHomePage:!1,title:"node-core-library.alreadyreportederror",description:"Home &gt; @rushstack/node-core-library &gt; AlreadyReportedError",source:"@site/docs/api/node-core-library.alreadyreportederror.md",sourceDirName:"api",slug:"/api/node-core-library.alreadyreportederror",permalink:"/pages/api/node-core-library.alreadyreportederror",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"AlreadyReportedError class",id:"alreadyreportederror-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],d={toc:s};function u(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.alreadyreportederror"},"AlreadyReportedError")),(0,o.kt)("h2",{id:"alreadyreportederror-class"},"AlreadyReportedError class"),(0,o.kt)("p",null,"This exception can be thrown to indicate that an operation failed and an error message has already been reported appropriately. Thus, the catch handler does not have responsibility for reporting the error."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class AlreadyReportedError extends Error \n")),(0,o.kt)("b",null,"Extends:")," Error",(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"For example, suppose a tool writes interactive output to ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," . When an exception is thrown, the ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," handler will typically provide simplistic reporting such as this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'catch (error) {\n  console.log("ERROR: " + error.message);\n}\n')),(0,o.kt)("p",null,"Suppose that the code performing the operation normally prints rich output to the console. It may be able to present an error message more nicely (for example, as part of a table, or structured log format). Throwing ",(0,o.kt)("inlineCode",{parentName:"p"},"AlreadyReportedError")," provides a way to use exception handling to abort the operation, but instruct the ",(0,o.kt)("inlineCode",{parentName:"p"},"catch")," handler not to print an error a second time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'catch (error) {\n  if (error instanceof AlreadyReportedError) {\n    return;\n  }\n  console.log("ERROR: " + error.message);\n}\n')),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.alreadyreportederror._constructor_"},"(constructor)()")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,o.kt)("code",null,"AlreadyReportedError")," class")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.alreadyreportederror._symbol.hasinstance_"},"[","Symbol.hasInstance","]","(instance)")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"static")),(0,o.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);