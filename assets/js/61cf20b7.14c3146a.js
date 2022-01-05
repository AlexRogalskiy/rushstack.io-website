"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[1259],{50158:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(46393);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),f=i,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||r;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64740:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var n=a(74834),i=a(28265),r=(a(46393),a(50158)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"api/api-extractor-model.apistaticmixin.isbaseclassof",id:"api/api-extractor-model.apistaticmixin.isbaseclassof",isDocsHomePage:!1,title:"api-extractor-model.apistaticmixin.isbaseclassof",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiStaticMixin &gt; isBaseClassOf",source:"@site/docs/api/api-extractor-model.apistaticmixin.isbaseclassof.md",sourceDirName:"api",slug:"/api/api-extractor-model.apistaticmixin.isbaseclassof",permalink:"/pages/api/api-extractor-model.apistaticmixin.isbaseclassof",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"ApiStaticMixin.isBaseClassOf() function",id:"apistaticmixinisbaseclassof-function",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apistaticmixin"},"ApiStaticMixin")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apistaticmixin.isbaseclassof"},"isBaseClassOf")),(0,r.kt)("h2",{id:"apistaticmixinisbaseclassof-function"},"ApiStaticMixin.isBaseClassOf() function"),(0,r.kt)("p",null,"A type guard that tests whether the specified ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiItem")," subclass extends the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiStaticMixin")," mixin."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function isBaseClassOf(apiItem: ApiItem): apiItem is ApiStaticMixin;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apiItem"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/api/api-extractor-model.apiitem"},"ApiItem")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("b",null,"Returns:"),(0,r.kt)("p",null,"apiItem is ",(0,r.kt)("a",{parentName:"p",href:"/pages/api/api-extractor-model.apistaticmixin"},"ApiStaticMixin")),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The JavaScript ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceof")," operator cannot be used to test for mixin inheritance, because each invocation of the mixin function produces a different subclass. (This could be mitigated by ",(0,r.kt)("inlineCode",{parentName:"p"},"Symbol.hasInstance")," , however the TypeScript type system cannot invoke a runtime test.)"))}m.isMDXComponent=!0}}]);