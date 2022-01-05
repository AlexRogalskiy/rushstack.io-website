"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2294],{50158:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,d=m["".concat(c,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72681:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(74834),a=n(28265),o=(n(46393),n(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,p={unversionedId:"api/node-core-library.async.mapasync",id:"api/node-core-library.async.mapasync",isDocsHomePage:!1,title:"node-core-library.async.mapasync",description:"Home &gt; @rushstack/node-core-library &gt; Async &gt; mapAsync",source:"@site/docs/api/node-core-library.async.mapasync.md",sourceDirName:"api",slug:"/api/node-core-library.async.mapasync",permalink:"/pages/api/node-core-library.async.mapasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"Async.mapAsync() method",id:"asyncmapasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.async"},"Async")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.async.mapasync"},"mapAsync")),(0,o.kt)("h2",{id:"asyncmapasync-method"},"Async.mapAsync() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Given an input array and a ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," function, invoke the callback to start a promise for each element in the array. Returns an array containing the results."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static mapAsync<TEntry, TRetVal>(iterable: Iterable<TEntry> | AsyncIterable<TEntry>, callback: (entry: TEntry, arrayIndex: number) => Promise<TRetVal>, options?: IAsyncParallelismOptions | undefined): Promise<TRetVal[]>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"iterable"),(0,o.kt)("td",{parentName:"tr",align:null},"Iterable","<","TEntry",">"," ","|"," AsyncIterable","<","TEntry",">"),(0,o.kt)("td",{parentName:"tr",align:null},"the array of inputs for the callback function")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"callback"),(0,o.kt)("td",{parentName:"tr",align:null},"(entry: TEntry, arrayIndex: number) =",">"," Promise","<","TRetVal",">"),(0,o.kt)("td",{parentName:"tr",align:null},"a function that starts an asynchronous promise for an element from the array")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.iasyncparallelismoptions"},"IAsyncParallelismOptions")," ","|"," undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"options for customizing the control flow")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","TRetVal","[","]",">"),(0,o.kt)("p",null,"an array containing the result for each callback, in the same order as the original input ",(0,o.kt)("inlineCode",{parentName:"p"},"array")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This API is similar to the system ",(0,o.kt)("inlineCode",{parentName:"p"},"Array#map")," , except that the loop is asynchronous, and the maximum number of concurrent promises can be throttled using ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.iasyncparallelismoptions.concurrency"},"IAsyncParallelismOptions.concurrency")," ."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," throws a synchronous exception, or if it returns a promise that rejects, then the loop stops immediately. Any remaining array items will be skipped, and overall operation will reject with the first error that was encountered."))}m.isMDXComponent=!0}}]);