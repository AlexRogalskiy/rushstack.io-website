"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[79553],{50158:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return g}});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=p(t),g=o,h=f["".concat(u,".").concat(g)]||f[g]||l[g]||i;return t?n.createElement(h,c(c({ref:r},s),{},{components:t})):n.createElement(h,c({ref:r},s))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24778:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=t(74834),o=t(28265),i=(t(46393),t(50158)),c=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,p={unversionedId:"api/rush-lib.rushconfigurationproject.consumingprojects",id:"api/rush-lib.rushconfigurationproject.consumingprojects",isDocsHomePage:!1,title:"rush-lib.rushconfigurationproject.consumingprojects",description:"Home &gt; @microsoft/rush-lib &gt; RushConfigurationProject &gt; consumingProjects",source:"@site/docs/api/rush-lib.rushconfigurationproject.consumingprojects.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfigurationproject.consumingprojects",permalink:"/pages/api/rush-lib.rushconfigurationproject.consumingprojects",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"RushConfigurationProject.consumingProjects property",id:"rushconfigurationprojectconsumingprojects-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],l={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfigurationproject.consumingprojects"},"consumingProjects")),(0,i.kt)("h2",{id:"rushconfigurationprojectconsumingprojects-property"},"RushConfigurationProject.consumingProjects property"),(0,i.kt)("p",null,"The set of projects within the Rush configuration which declare this project as a dependency. Excludes those that declare this project as a ",(0,i.kt)("inlineCode",{parentName:"p"},"cyclicDependencyProject")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get consumingProjects(): ReadonlySet<RushConfigurationProject>;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This field is the counterpart to ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencyProjects")," , and can be used recursively to walk the project dependency graph to find all projects which will be impacted by changes to this project."))}f.isMDXComponent=!0}}]);