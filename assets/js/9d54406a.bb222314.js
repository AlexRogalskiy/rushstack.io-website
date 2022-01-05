"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[52474],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,h=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63396:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(61731),o=r(70396),a=(r(46393),r(50158)),i=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"api/heft.compilesubstagehooks.afterrecompile",id:"api/heft.compilesubstagehooks.afterrecompile",title:"heft.compilesubstagehooks.afterrecompile",description:"Home &gt; @rushstack/heft &gt; CompileSubstageHooks &gt; afterRecompile",source:"@site/docs/api/heft.compilesubstagehooks.afterrecompile.md",sourceDirName:"api",slug:"/api/heft.compilesubstagehooks.afterrecompile",permalink:"/pages/api/heft.compilesubstagehooks.afterrecompile",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"CompileSubstageHooks.afterRecompile property",id:"compilesubstagehooksafterrecompile-property",children:[],level:2}],u={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/heft"},"@rushstack/heft")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/heft.compilesubstagehooks"},"CompileSubstageHooks")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/heft.compilesubstagehooks.afterrecompile"},"afterRecompile")),(0,a.kt)("h2",{id:"compilesubstagehooksafterrecompile-property"},"CompileSubstageHooks.afterRecompile property"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"afterRecompile")," event is only used in watch mode. It fires whenever the compiler's outputs have been rebuilt. The initial compilation fires the ",(0,a.kt)("inlineCode",{parentName:"p"},"afterCompile")," event only, and then all subsequent iterations fire the ",(0,a.kt)("inlineCode",{parentName:"p"},"afterRecompile")," event only. Heft does not wait for the ",(0,a.kt)("inlineCode",{parentName:"p"},"afterRecompile")," promises to resolve."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly afterRecompile: AsyncParallelHook;\n")))}f.isMDXComponent=!0}}]);