"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[56394],{50158:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return s}});var r=t(46393);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),s=i,f=d["".concat(u,".").concat(s)]||d[s]||p[s]||a;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function s(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47183:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var r=t(74834),i=t(28265),a=(t(46393),t(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,c={unversionedId:"api/ts-command-line.icommandlinestringdefinition.defaultvalue",id:"api/ts-command-line.icommandlinestringdefinition.defaultvalue",isDocsHomePage:!1,title:"ts-command-line.icommandlinestringdefinition.defaultvalue",description:"Home &gt; @rushstack/ts-command-line &gt; ICommandLineStringDefinition &gt; defaultValue",source:"@site/docs/api/ts-command-line.icommandlinestringdefinition.defaultvalue.md",sourceDirName:"api",slug:"/api/ts-command-line.icommandlinestringdefinition.defaultvalue",permalink:"/pages/api/ts-command-line.icommandlinestringdefinition.defaultvalue",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"ICommandLineStringDefinition.defaultValue property",id:"icommandlinestringdefinitiondefaultvalue-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],p={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.icommandlinestringdefinition"},"ICommandLineStringDefinition")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.icommandlinestringdefinition.defaultvalue"},"defaultValue")),(0,a.kt)("h2",{id:"icommandlinestringdefinitiondefaultvalue-property"},"ICommandLineStringDefinition.defaultValue property"),(0,a.kt)("p",null,"The default value which will be used if the parameter is omitted from the command line."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"defaultValue?: string;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If a default value is specified, then ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.ibasecommandlinedefinition.required"},"IBaseCommandLineDefinition.required")," must not be true. Instead, a custom error message should be used to report cases where a default value was not available."))}d.isMDXComponent=!0}}]);