"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[59649],{50158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},64195:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(61731),a=n(70396),i=(n(46393),n(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"api/terminal.iterminalchunk",id:"api/terminal.iterminalchunk",title:"terminal.iterminalchunk",description:"Home &gt; @rushstack/terminal &gt; ITerminalChunk",source:"@site/docs/api/terminal.iterminalchunk.md",sourceDirName:"api",slug:"/api/terminal.iterminalchunk",permalink:"/pages/api/terminal.iterminalchunk",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"ITerminalChunk interface",id:"iterminalchunk-interface",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],m={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/terminal.iterminalchunk"},"ITerminalChunk")),(0,i.kt)("h2",{id:"iterminalchunk-interface"},"ITerminalChunk interface"),(0,i.kt)("p",null,"Represents a chunk of output that will ultimately be written to a ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/terminal.terminalwritable"},"TerminalWritable")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ITerminalChunk \n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Today ",(0,i.kt)("inlineCode",{parentName:"p"},"ITerminalChunk")," represents the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stderr")," text streams. In the future, we plan to expand it to include other console UI elements such as instructions for displaying an interactive progress bar. We may also add other metadata, for example tracking whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," string is known to contain color codes or not."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ITerminalChunk")," object should be considered to be immutable once it is created. For example, ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/terminal.splittertransform"},"SplitterTransform")," may pass the same chunk to multiple destinations."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/terminal.iterminalchunk.kind"},"kind")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/terminal.terminalchunkkind"},"TerminalChunkKind")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates the kind of information stored in this chunk.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/terminal.iterminalchunk.text"},"text")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The next chunk of text from the ",(0,i.kt)("code",null,"stderr")," or ",(0,i.kt)("code",null,"stdout")," stream.")))))}s.isMDXComponent=!0}}]);