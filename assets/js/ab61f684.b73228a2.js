"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[9383],{50158:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(46393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23093:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var r=n(61731),o=n(70396),i=(n(46393),n(50158)),a=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"api/ts-command-line.commandlinechoicelistparameter.completions",id:"api/ts-command-line.commandlinechoicelistparameter.completions",title:"ts-command-line.commandlinechoicelistparameter.completions",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineChoiceListParameter &gt; completions",source:"@site/docs/api/ts-command-line.commandlinechoicelistparameter.completions.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlinechoicelistparameter.completions",permalink:"/pages/api/ts-command-line.commandlinechoicelistparameter.completions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"CommandLineChoiceListParameter.completions property",id:"commandlinechoicelistparametercompletions-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlinechoicelistparameter"},"CommandLineChoiceListParameter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlinechoicelistparameter.completions"},"completions")),(0,i.kt)("h2",{id:"commandlinechoicelistparametercompletions-property"},"CommandLineChoiceListParameter.completions property"),(0,i.kt)("p",null,"An optional callback that provides a list of custom choices for tab completion."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly completions: (() => Promise<string[]>) | undefined;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This option is only used when ",(0,i.kt)("inlineCode",{parentName:"p"},"ICommandLineParserOptions.enableTabCompletionAction")," is enabled."))}u.isMDXComponent=!0}}]);