"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[93415],{50158:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(46393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,h=f["".concat(u,".").concat(m)]||f[m]||c[m]||i;return t?r.createElement(h,a(a({ref:n},l),{},{components:t})):r.createElement(h,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},39066:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=t(74834),o=t(28265),i=(t(46393),t(50158)),a=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,s={unversionedId:"api/rush-lib.rushconfiguration.pnpmoptions",id:"api/rush-lib.rushconfiguration.pnpmoptions",isDocsHomePage:!1,title:"rush-lib.rushconfiguration.pnpmoptions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; pnpmOptions",source:"@site/docs/api/rush-lib.rushconfiguration.pnpmoptions.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.pnpmoptions",permalink:"/pages/api/rush-lib.rushconfiguration.pnpmoptions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"RushConfiguration.pnpmOptions property",id:"rushconfigurationpnpmoptions-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:l};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.rushconfiguration.pnpmoptions"},"pnpmOptions")),(0,i.kt)("h2",{id:"rushconfigurationpnpmoptions-property"},"RushConfiguration.pnpmOptions property"),(0,i.kt)("p",null,"Options that are only used when the PNPM package manager is selected."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get pnpmOptions(): PnpmOptionsConfiguration;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"It is valid to define these options in rush.json even if the PNPM package manager is not being used."),(0,i.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"PnpmOptionsConfiguration")," class."))}f.isMDXComponent=!0}}]);