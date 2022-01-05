"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[76932],{50158:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),p=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=a,f=s["".concat(m,".").concat(d)]||s[d]||c[d]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},87784:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=t(74834),a=t(28265),i=(t(46393),t(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},m=void 0,p={unversionedId:"api/ts-command-line.commandlinestringparameter.value",id:"api/ts-command-line.commandlinestringparameter.value",isDocsHomePage:!1,title:"ts-command-line.commandlinestringparameter.value",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineStringParameter &gt; value",source:"@site/docs/api/ts-command-line.commandlinestringparameter.value.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlinestringparameter.value",permalink:"/pages/api/ts-command-line.commandlinestringparameter.value",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"CommandLineStringParameter.value property",id:"commandlinestringparametervalue-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:u};function s(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlinestringparameter"},"CommandLineStringParameter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlinestringparameter.value"},"value")),(0,i.kt)("h2",{id:"commandlinestringparametervalue-property"},"CommandLineStringParameter.value property"),(0,i.kt)("p",null,"Returns the argument value for a string parameter that was parsed from the command line."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get value(): string | undefined;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The return value will be undefined if the command-line has not been parsed yet, or if the parameter was omitted and has no default value."))}s.isMDXComponent=!0}}]);