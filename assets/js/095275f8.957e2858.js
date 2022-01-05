"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[97919],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,d=m["".concat(p,".").concat(g)]||m[g]||s[g]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71500:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(74834),a=r(28265),l=(r(46393),r(50158)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/api-extractor.extractorloglevel",id:"api/api-extractor.extractorloglevel",isDocsHomePage:!1,title:"api-extractor.extractorloglevel",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorLogLevel",source:"@site/docs/api/api-extractor.extractorloglevel.md",sourceDirName:"api",slug:"/api/api-extractor.extractorloglevel",permalink:"/pages/api/api-extractor.extractorloglevel",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"ExtractorLogLevel enum",id:"extractorloglevel-enum",children:[],level:2},{value:"Enumeration Members",id:"enumeration-members",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.extractorloglevel"},"ExtractorLogLevel")),(0,l.kt)("h2",{id:"extractorloglevel-enum"},"ExtractorLogLevel enum"),(0,l.kt)("p",null,"Used with ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iconfigmessagereportingrule.loglevel"},"IConfigMessageReportingRule.logLevel")," and ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iextractorinvokeoptions.messagecallback"},"IExtractorInvokeOptions.messageCallback")," ."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum ExtractorLogLevel \n")),(0,l.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Member"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"',"error",'"')),(0,l.kt)("td",{parentName:"tr",align:null},"The message will be displayed as an error.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Info"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"',"info",'"')),(0,l.kt)("td",{parentName:"tr",align:null},"The message will be displayed as an informational message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"',"none",'"')),(0,l.kt)("td",{parentName:"tr",align:null},"The message will be discarded entirely.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Verbose"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"',"verbose",'"')),(0,l.kt)("td",{parentName:"tr",align:null},'The message will be displayed only when "verbose" output is requested, e.g. using the ',(0,l.kt)("code",null,"--verbose")," command line option.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warning"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"',"warning",'"')),(0,l.kt)("td",{parentName:"tr",align:null},"The message will be displayed as an warning.")))),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"This is part of the ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iconfigfile"},"IConfigFile")," structure."))}m.isMDXComponent=!0}}]);