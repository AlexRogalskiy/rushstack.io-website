"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[74268],{50158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},61178:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return s}});var r=n(74834),a=n(28265),i=(n(46393),n(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,m={unversionedId:"api/ts-command-line.commandlineparser.trygetaction",id:"api/ts-command-line.commandlineparser.trygetaction",isDocsHomePage:!1,title:"ts-command-line.commandlineparser.trygetaction",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParser &gt; tryGetAction",source:"@site/docs/api/ts-command-line.commandlineparser.trygetaction.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlineparser.trygetaction",permalink:"/pages/api/ts-command-line.commandlineparser.trygetaction",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"CommandLineParser.tryGetAction() method",id:"commandlineparsertrygetaction-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineparser"},"CommandLineParser")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineparser.trygetaction"},"tryGetAction")),(0,i.kt)("h2",{id:"commandlineparsertrygetaction-method"},"CommandLineParser.tryGetAction() method"),(0,i.kt)("p",null,"Retrieves the action with the specified name. If no matching action is found, undefined is returned."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"tryGetAction(actionName: string): CommandLineAction | undefined;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"actionName"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.commandlineaction"},"CommandLineAction")," ","|"," undefined"))}s.isMDXComponent=!0}}]);