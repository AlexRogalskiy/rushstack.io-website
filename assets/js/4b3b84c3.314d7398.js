"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[60653],{50158:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(t),d=a,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||i;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94462:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=t(61731),a=t(70396),i=(t(46393),t(50158)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"api/rush-lib.ilaunchoptions.ismanaged",id:"api/rush-lib.ilaunchoptions.ismanaged",title:"rush-lib.ilaunchoptions.ismanaged",description:"Home &gt; @microsoft/rush-lib &gt; ILaunchOptions &gt; isManaged",source:"@site/docs/api/rush-lib.ilaunchoptions.ismanaged.md",sourceDirName:"api",slug:"/api/rush-lib.ilaunchoptions.ismanaged",permalink:"/pages/api/rush-lib.ilaunchoptions.ismanaged",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ILaunchOptions.isManaged property",id:"ilaunchoptionsismanaged-property",children:[],level:2}],c={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.ilaunchoptions"},"ILaunchOptions")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.ilaunchoptions.ismanaged"},"isManaged")),(0,i.kt)("h2",{id:"ilaunchoptionsismanaged-property"},"ILaunchOptions.isManaged property"),(0,i.kt)("p",null,'True if the tool was invoked from within a project with a rush.json file, otherwise false. We consider a project without a rush.json to be "unmanaged" and we\'ll print that to the command line when the tool is executed. This is mainly used for debugging purposes.'),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"isManaged: boolean;\n")))}f.isMDXComponent=!0}}]);