"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[25531],{50158:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),d=p(r),s=n,g=d["".concat(l,".").concat(s)]||d[s]||u[s]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51934:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=r(74834),n=r(28265),i=(r(46393),r(50158)),o=["components"],m={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"api/ts-command-line.commandlineparameterprovider.getflagparameter",id:"api/ts-command-line.commandlineparameterprovider.getflagparameter",isDocsHomePage:!1,title:"ts-command-line.commandlineparameterprovider.getflagparameter",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider &gt; getFlagParameter",source:"@site/docs/api/ts-command-line.commandlineparameterprovider.getflagparameter.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlineparameterprovider.getflagparameter",permalink:"/pages/api/ts-command-line.commandlineparameterprovider.getflagparameter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"CommandLineParameterProvider.getFlagParameter() method",id:"commandlineparameterprovidergetflagparameter-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineparameterprovider.getflagparameter"},"getFlagParameter")),(0,i.kt)("h2",{id:"commandlineparameterprovidergetflagparameter-method"},"CommandLineParameterProvider.getFlagParameter() method"),(0,i.kt)("p",null,"Returns the CommandLineFlagParameter with the specified long name."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getFlagParameter(parameterLongName: string): CommandLineFlagParameter;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"parameterLongName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineflagparameter"},"CommandLineFlagParameter")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This method throws an exception if the parameter is not defined."))}d.isMDXComponent=!0}}]);