"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[28822],{50158:function(e,t,r){r.d(t,{Zo:function(){return g},kt:function(){return u}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=a,y=s["".concat(c,".").concat(u)]||s[u]||f[u]||i;return r?n.createElement(y,o(o({ref:t},g),{},{components:r})):n.createElement(y,o({ref:t},g))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},77897:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return g},default:function(){return s}});var n=r(61731),a=r(70396),i=(r(46393),r(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,p={unversionedId:"api/rig-package.rigconfig.tryresolveconfigfilepathasync",id:"api/rig-package.rigconfig.tryresolveconfigfilepathasync",title:"rig-package.rigconfig.tryresolveconfigfilepathasync",description:"Home &gt; @rushstack/rig-package &gt; RigConfig &gt; tryResolveConfigFilePathAsync",source:"@site/docs/api/rig-package.rigconfig.tryresolveconfigfilepathasync.md",sourceDirName:"api",slug:"/api/rig-package.rigconfig.tryresolveconfigfilepathasync",permalink:"/pages/api/rig-package.rigconfig.tryresolveconfigfilepathasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},g=[{value:"RigConfig.tryResolveConfigFilePathAsync() method",id:"rigconfigtryresolveconfigfilepathasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],f={toc:g};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rig-package"},"@rushstack/rig-package")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rig-package.rigconfig"},"RigConfig")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rig-package.rigconfig.tryresolveconfigfilepathasync"},"tryResolveConfigFilePathAsync")),(0,i.kt)("h2",{id:"rigconfigtryresolveconfigfilepathasync-method"},"RigConfig.tryResolveConfigFilePathAsync() method"),(0,i.kt)("p",null,"An async variant of ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rig-package.rigconfig.tryresolveconfigfilepath"},"RigConfig.tryResolveConfigFilePath()")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"tryResolveConfigFilePathAsync(configFileRelativePath: string): Promise<string | undefined>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"configFileRelativePath"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<","string ","|"," undefined",">"))}s.isMDXComponent=!0}}]);