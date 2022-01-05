"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[56047],{50158:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67667:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=r(74834),a=r(28265),o=(r(46393),r(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"api/terminal.discardstdouttransform",id:"api/terminal.discardstdouttransform",isDocsHomePage:!1,title:"terminal.discardstdouttransform",description:"Home &gt; @rushstack/terminal &gt; DiscardStdoutTransform",source:"@site/docs/api/terminal.discardstdouttransform.md",sourceDirName:"api",slug:"/api/terminal.discardstdouttransform",permalink:"/pages/api/terminal.discardstdouttransform",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"DiscardStdoutTransform class",id:"discardstdouttransform-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],d={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/terminal.discardstdouttransform"},"DiscardStdoutTransform")),(0,o.kt)("h2",{id:"discardstdouttransform-class"},"DiscardStdoutTransform class"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DiscardStdoutTransform")," discards ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," chunks while fixing up malformed ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," lines."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class DiscardStdoutTransform extends TerminalTransform \n")),(0,o.kt)("b",null,"Extends:")," [TerminalTransform](/pages/api/terminal.terminaltransform)",(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Suppose that a poorly behaved process produces output like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"process.stdout.write('Starting operation...\\n');\nprocess.stderr.write('An error occurred');\nprocess.stdout.write('\\nFinishing up\\n');\nprocess.stderr.write('The process completed with errors\\n');\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," are combined on the console, the mistake in the output would not be noticeable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Starting operation...\nAn error occurred\nFinishing up\nThe process completed with errors\n")),(0,o.kt)("p",null,"However, if we discard ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," , then ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," is missing a newline:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"An error occurredThe process completed with errors\n")),(0,o.kt)("p",null,"Tooling scripts can introduce these sorts of problems via edge cases that are difficult to find and fix. ",(0,o.kt)("inlineCode",{parentName:"p"},"DiscardStdoutTransform")," can discard the ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," stream and fix up ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"An error occurred\nThe process completed with errors\n")),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/terminal.discardstdouttransform._constructor_"},"(constructor)(options)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)"))," Constructs a new instance of the ",(0,o.kt)("code",null,"DiscardStdoutTransform")," class")))),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Method"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/pages/api/terminal.discardstdouttransform.onwritechunk"},"onWriteChunk(chunk)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("b",null,(0,o.kt)("i",null,"(BETA)")))))))}u.isMDXComponent=!0}}]);