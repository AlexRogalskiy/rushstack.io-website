"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[2213],{50158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,f=d["".concat(u,".").concat(s)]||d[s]||p[s]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3726:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return c},default:function(){return d}});var r=n(74834),a=n(28265),i=(n(46393),n(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,m={unversionedId:"api/ts-command-line.commandlineintegerparameter.defaultvalue",id:"api/ts-command-line.commandlineintegerparameter.defaultvalue",isDocsHomePage:!1,title:"ts-command-line.commandlineintegerparameter.defaultvalue",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineIntegerParameter &gt; defaultValue",source:"@site/docs/api/ts-command-line.commandlineintegerparameter.defaultvalue.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlineintegerparameter.defaultvalue",permalink:"/pages/api/ts-command-line.commandlineintegerparameter.defaultvalue",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"CommandLineIntegerParameter.defaultValue property",id:"commandlineintegerparameterdefaultvalue-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineintegerparameter"},"CommandLineIntegerParameter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineintegerparameter.defaultvalue"},"defaultValue")),(0,i.kt)("h2",{id:"commandlineintegerparameterdefaultvalue-property"},"CommandLineIntegerParameter.defaultValue property"),(0,i.kt)("p",null,"The default value which will be used if the parameter is omitted from the command line."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly defaultValue: number | undefined;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"If a default value is specified, then ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.ibasecommandlinedefinition.required"},"IBaseCommandLineDefinition.required")," must not be true. Instead, a custom error message should be used to report cases where a default value was not available."))}d.isMDXComponent=!0}}]);