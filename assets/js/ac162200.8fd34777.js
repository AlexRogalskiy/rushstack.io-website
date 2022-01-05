"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[24399],{50158:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(46393);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,f=u["".concat(m,".").concat(d)]||u[d]||c[d]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},43730:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=t(74834),i=t(28265),a=(t(46393),t(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},m=void 0,s={unversionedId:"api/ts-command-line.ibasecommandlinedefinition.environmentvariable",id:"api/ts-command-line.ibasecommandlinedefinition.environmentvariable",isDocsHomePage:!1,title:"ts-command-line.ibasecommandlinedefinition.environmentvariable",description:"Home &gt; @rushstack/ts-command-line &gt; IBaseCommandLineDefinition &gt; environmentVariable",source:"@site/docs/api/ts-command-line.ibasecommandlinedefinition.environmentvariable.md",sourceDirName:"api",slug:"/api/ts-command-line.ibasecommandlinedefinition.environmentvariable",permalink:"/pages/api/ts-command-line.ibasecommandlinedefinition.environmentvariable",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"IBaseCommandLineDefinition.environmentVariable property",id:"ibasecommandlinedefinitionenvironmentvariable-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.ibasecommandlinedefinition"},"IBaseCommandLineDefinition")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.ibasecommandlinedefinition.environmentvariable"},"environmentVariable")),(0,a.kt)("h2",{id:"ibasecommandlinedefinitionenvironmentvariable-property"},"IBaseCommandLineDefinition.environmentVariable property"),(0,a.kt)("p",null,"The name of an environment variable that the parameter value will be read from, if it was omitted from the command-line. An error will be reported if the environment value cannot be parsed."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"environmentVariable?: string;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"The environment variable name must consist only of upper-case letters, numbers, and underscores. It may not start with a number."),(0,a.kt)("p",null,"This feature cannot be used when ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/ts-command-line.ibasecommandlinedefinition.required"},"IBaseCommandLineDefinition.required")," is true, because in that case the environmentVariable would never be used."),(0,a.kt)("p",null,"Syntax notes for environment variable values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choice Parameter: The value must match one of the defined choices, otherwise a validation error is reported. An empty string causes the environment variable to be ignored.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Flag Parameter: The value must be ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," for true, or ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," for false, otherwise a validation error is reported. An empty string causes the environment variable to be ignored.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Integer Parameter: The value must be an integer number, otherwise a validation error is reported. An empty string causes the environment variable to be ignored.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"String Parameter: Any value is accepted, including an empty string.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"String List Parameter: If the string starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"[")," (ignoring whitespace) then it will be parsed as a JSON array, whose elements must be strings, numbers, or boolean values. If the string does not start with ",(0,a.kt)("inlineCode",{parentName:"p"},"[")," , then it behaves like an ordinary String Parameter: Any value is accepted, including an empty string."))))}u.isMDXComponent=!0}}]);