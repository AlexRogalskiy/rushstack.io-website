"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[23291],{50158:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(46393);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),u=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=n,y=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return t?a.createElement(y,o(o({ref:r},c),{},{components:t})):a.createElement(y,o({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},65428:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var a=t(61731),n=t(70396),l=(t(46393),t(50158)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"pages/api/node-core-library.sort.comparebyvalue",id:"pages/api/node-core-library.sort.comparebyvalue",title:"node-core-library.sort.comparebyvalue",description:"Home &gt; @rushstack/node-core-library &gt; Sort &gt; compareByValue",source:"@site/docs/pages/api/node-core-library.sort.comparebyvalue.md",sourceDirName:"pages/api",slug:"/pages/api/node-core-library.sort.comparebyvalue",permalink:"/pages/api/node-core-library.sort.comparebyvalue",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"Sort.compareByValue() method",id:"sortcomparebyvalue-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],m={toc:c};function s(e){var r=e.components,t=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.sort"},"Sort")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.sort.comparebyvalue"},"compareByValue")),(0,l.kt)("h2",{id:"sortcomparebyvalue-method"},"Sort.compareByValue() method"),(0,l.kt)("p",null,"Compares ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," using the JavaScript ",(0,l.kt)("inlineCode",{parentName:"p"},">")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"<")," operators. This function is suitable for usage as the callback for ",(0,l.kt)("inlineCode",{parentName:"p"},"array.sort()")," ."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static compareByValue(x: any, y: any): number;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,"number"),(0,l.kt)("p",null,"-1 if ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is smaller than ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," , 1 if ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is greater than ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," , or 0 if the values are equal."),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The JavaScript ordering is generalized so that ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","<"," ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," ","<"," all other values."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let array: number[] = [3, 6, 2];\narray.sort(Sort.compareByValue);  // [2, 3, 6]\n")))}s.isMDXComponent=!0}}]);