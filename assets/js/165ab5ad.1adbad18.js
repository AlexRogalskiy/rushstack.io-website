"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[17077],{50158:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(46393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=i,d=c["".concat(p,".").concat(f)]||c[f]||s[f]||o;return r?n.createElement(d,a(a({ref:t},m),{},{components:r})):n.createElement(d,a({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},56189:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return c}});var n=r(74834),i=r(28265),o=(r(46393),r(50158)),a=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"api/module-minifier-plugin.iworkerpoolminifieroptions",id:"api/module-minifier-plugin.iworkerpoolminifieroptions",isDocsHomePage:!1,title:"module-minifier-plugin.iworkerpoolminifieroptions",description:"Home &gt; @rushstack/module-minifier-plugin &gt; IWorkerPoolMinifierOptions",source:"@site/docs/api/module-minifier-plugin.iworkerpoolminifieroptions.md",sourceDirName:"api",slug:"/api/module-minifier-plugin.iworkerpoolminifieroptions",permalink:"/pages/api/module-minifier-plugin.iworkerpoolminifieroptions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"IWorkerPoolMinifierOptions interface",id:"iworkerpoolminifieroptions-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],s={toc:m};function c(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/module-minifier-plugin.iworkerpoolminifieroptions"},"IWorkerPoolMinifierOptions")),(0,o.kt)("h2",{id:"iworkerpoolminifieroptions-interface"},"IWorkerPoolMinifierOptions interface"),(0,o.kt)("p",null,"Options for configuring the WorkerPoolMinifier"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IWorkerPoolMinifierOptions \n")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/module-minifier-plugin.iworkerpoolminifieroptions.maxthreads"},"maxThreads?")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," Maximum number of worker threads to use. Will never use more than there are modules to process. Defaults to os.cpus().length")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/module-minifier-plugin.iworkerpoolminifieroptions.terseroptions"},"terserOptions?")),(0,o.kt)("td",{parentName:"tr",align:null},"MinifyOptions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," The options to forward to Terser. ",(0,o.kt)("code",null,"output.comments")," is currently not configurable and will always extract license comments to a separate file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/module-minifier-plugin.iworkerpoolminifieroptions.verbose"},"verbose?")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("i",null,"(Optional)")," If true, log to the console about the minification results.")))))}c.isMDXComponent=!0}}]);