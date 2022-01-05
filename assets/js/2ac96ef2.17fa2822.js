"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[77259],{50158:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),c=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,f=s["".concat(m,".").concat(d)]||s[d]||u[d]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},694:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=t(74834),a=t(28265),l=(t(46393),t(50158)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},m=void 0,c={unversionedId:"api/ts-command-line.commandlineflagparameter.value",id:"api/ts-command-line.commandlineflagparameter.value",isDocsHomePage:!1,title:"ts-command-line.commandlineflagparameter.value",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineFlagParameter &gt; value",source:"@site/docs/api/ts-command-line.commandlineflagparameter.value.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlineflagparameter.value",permalink:"/pages/api/ts-command-line.commandlineflagparameter.value",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"CommandLineFlagParameter.value property",id:"commandlineflagparametervalue-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineflagparameter"},"CommandLineFlagParameter")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineflagparameter.value"},"value")),(0,l.kt)("h2",{id:"commandlineflagparametervalue-property"},"CommandLineFlagParameter.value property"),(0,l.kt)("p",null,"Returns a boolean indicating whether the parameter was included in the command line."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"get value(): boolean;\n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The return value will be false if the command-line has not been parsed yet, or if the flag was not used."))}s.isMDXComponent=!0}}]);