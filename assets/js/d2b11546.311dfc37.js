"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[29814],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,y=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30278:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(74834),a=r(28265),o=(r(46393),r(50158)),l=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,s={unversionedId:"api/node-core-library.sort.sortmapkeys",id:"api/node-core-library.sort.sortmapkeys",isDocsHomePage:!1,title:"node-core-library.sort.sortmapkeys",description:"Home &gt; @rushstack/node-core-library &gt; Sort &gt; sortMapKeys",source:"@site/docs/api/node-core-library.sort.sortmapkeys.md",sourceDirName:"api",slug:"/api/node-core-library.sort.sortmapkeys",permalink:"/pages/api/node-core-library.sort.sortmapkeys",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"Sort.sortMapKeys() method",id:"sortsortmapkeys-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.sort"},"Sort")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.sort.sortmapkeys"},"sortMapKeys")),(0,o.kt)("h2",{id:"sortsortmapkeys-method"},"Sort.sortMapKeys() method"),(0,o.kt)("p",null,"Sorts the entries in a Map object according to the map keys. The result is guaranteed to be a stable sort."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static sortMapKeys<K, V>(map: Map<K, V>, keyComparer?: (x: K, y: K) => number): void;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"map"),(0,o.kt)("td",{parentName:"tr",align:null},"Map","<","K, V",">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"keyComparer"),(0,o.kt)("td",{parentName:"tr",align:null},"(x: K, y: K) =",">"," number"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"void"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let map: Map<string, number> = new Map<string, number>();\nmap.set('zebra', 1);\nmap.set('goose', 2);\nmap.set('aardvark', 3);\nSort.sortMapKeys(map);\nconsole.log(JSON.stringify(Array.from(map.keys()))); // [\"aardvark\",\"goose\",\"zebra\"]\n")))}m.isMDXComponent=!0}}]);