"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[80491],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45682:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(74834),o=r(28265),a=(r(46393),r(50158)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"api/rush-lib.rushconfigurationproject.downstreamdependencyprojects",id:"api/rush-lib.rushconfigurationproject.downstreamdependencyprojects",isDocsHomePage:!1,title:"rush-lib.rushconfigurationproject.downstreamdependencyprojects",description:"Home &gt; @microsoft/rush-lib &gt; RushConfigurationProject &gt; downstreamDependencyProjects",source:"@site/docs/api/rush-lib.rushconfigurationproject.downstreamdependencyprojects.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfigurationproject.downstreamdependencyprojects",permalink:"/pages/api/rush-lib.rushconfigurationproject.downstreamdependencyprojects",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"RushConfigurationProject.downstreamDependencyProjects property",id:"rushconfigurationprojectdownstreamdependencyprojects-property",children:[],level:2}],l={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfigurationproject.downstreamdependencyprojects"},"downstreamDependencyProjects")),(0,a.kt)("h2",{id:"rushconfigurationprojectdownstreamdependencyprojects-property"},"RushConfigurationProject.downstreamDependencyProjects property"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,a.kt)("p",{parentName:"blockquote"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"consumingProjectNames")," instead, as it has Set semantics, which better reflect the nature of the data.")),(0,a.kt)("p",null,"An array of projects within the Rush configuration which directly depend on this package."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"get downstreamDependencyProjects(): string[];\n")))}d.isMDXComponent=!0}}]);