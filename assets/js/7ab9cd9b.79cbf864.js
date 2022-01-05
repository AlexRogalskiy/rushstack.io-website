"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[17882],{50158:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return s}});var n=t(46393);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=n.createContext({}),p=function(e){var r=n.useContext(m),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(m.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),s=a,f=u["".concat(m,".").concat(s)]||u[s]||c[s]||i;return t?n.createElement(f,o(o({ref:r},d),{},{components:t})):n.createElement(f,o({ref:r},d))}));function s(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var m in r)hasOwnProperty.call(r,m)&&(l[m]=r[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65301:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=t(74834),a=t(28265),i=(t(46393),t(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},m=void 0,p={unversionedId:"api/ts-command-line.commandlineparameterprovider.defineflagparameter",id:"api/ts-command-line.commandlineparameterprovider.defineflagparameter",isDocsHomePage:!1,title:"ts-command-line.commandlineparameterprovider.defineflagparameter",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider &gt; defineFlagParameter",source:"@site/docs/api/ts-command-line.commandlineparameterprovider.defineflagparameter.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlineparameterprovider.defineflagparameter",permalink:"/pages/api/ts-command-line.commandlineparameterprovider.defineflagparameter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},d=[{value:"CommandLineParameterProvider.defineFlagParameter() method",id:"commandlineparameterproviderdefineflagparameter-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineparameterprovider.defineflagparameter"},"defineFlagParameter")),(0,i.kt)("h2",{id:"commandlineparameterproviderdefineflagparameter-method"},"CommandLineParameterProvider.defineFlagParameter() method"),(0,i.kt)("p",null,"Defines a command-line switch whose boolean value is true if the switch is provided, and false otherwise."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"defineFlagParameter(definition: ICommandLineFlagDefinition): CommandLineFlagParameter;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"definition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/ts-command-line.icommandlineflagdefinition"},"ICommandLineFlagDefinition")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineflagparameter"},"CommandLineFlagParameter")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Example usage of a flag parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"example-tool --debug\n")))}u.isMDXComponent=!0}}]);