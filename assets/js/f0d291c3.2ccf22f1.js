"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[94208],{50158:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return g}});var t=r(46393);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),g=a,m=f["".concat(u,".").concat(g)]||f[g]||s[g]||o;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99665:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var t=r(74834),a=r(28265),o=(r(46393),r(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"api/rush-lib.rushconfiguration.packagemanagertoolfilename",id:"api/rush-lib.rushconfiguration.packagemanagertoolfilename",isDocsHomePage:!1,title:"rush-lib.rushconfiguration.packagemanagertoolfilename",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; packageManagerToolFilename",source:"@site/docs/api/rush-lib.rushconfiguration.packagemanagertoolfilename.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.packagemanagertoolfilename",permalink:"/pages/api/rush-lib.rushconfiguration.packagemanagertoolfilename",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"RushConfiguration.packageManagerToolFilename property",id:"rushconfigurationpackagemanagertoolfilename-property",children:[],level:2}],s={toc:c};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration.packagemanagertoolfilename"},"packageManagerToolFilename")),(0,o.kt)("h2",{id:"rushconfigurationpackagemanagertoolfilename-property"},"RushConfiguration.packageManagerToolFilename property"),(0,o.kt)("p",null,'The absolute path to the locally installed NPM tool. If "rush install" has not been run, then this file may not exist yet. Example: ',(0,o.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\temp\\npm-local\\node_modules\\.bin\\npm")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"get packageManagerToolFilename(): string;\n")))}f.isMDXComponent=!0}}]);