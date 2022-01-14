"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[36162],{50158:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(46393);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=s(t),m=a,f=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=h;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},10092:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var r=t(61731),a=t(70396),i=(t(46393),t(50158)),p=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,s={unversionedId:"pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",id:"pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",title:"rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",description:"Home &gt; @microsoft/rush-lib &gt; PnpmOptionsConfiguration &gt; preventManualShrinkwrapChanges",source:"@site/docs/pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges.md",sourceDirName:"pages/api",slug:"/pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",permalink:"/pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"PnpmOptionsConfiguration.preventManualShrinkwrapChanges property",id:"pnpmoptionsconfigurationpreventmanualshrinkwrapchanges-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:u};function h(e){var n=e.components,t=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.pnpmoptionsconfiguration"},"PnpmOptionsConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.pnpmoptionsconfiguration.preventmanualshrinkwrapchanges"},"preventManualShrinkwrapChanges")),(0,i.kt)("h2",{id:"pnpmoptionsconfigurationpreventmanualshrinkwrapchanges-property"},"PnpmOptionsConfiguration.preventManualShrinkwrapChanges property"),(0,i.kt)("p",null,"If true, then ",(0,i.kt)("inlineCode",{parentName:"p"},"rush install")," will report an error if manual modifications were made to the PNPM shrinkwrap file without running ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," afterwards."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly preventManualShrinkwrapChanges: boolean;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This feature protects against accidental inconsistencies that may be introduced if the PNPM shrinkwrap file (",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," ) is manually edited. When this feature is enabled, ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," will write a hash of the shrinkwrap contents to repo-state.json, and then ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rush install")," will validate the hash. Note that this does not prohibit manual modifications, but merely requires ",(0,i.kt)("inlineCode",{parentName:"p"},"rush update")," be run afterwards, ensuring that PNPM can report or repair any potential inconsistencies."),(0,i.kt)("p",null,"To temporarily disable this validation when invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"rush install")," , use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--bypass-policy")," command-line parameter."),(0,i.kt)("p",null,"The default value is false."))}h.isMDXComponent=!0}}]);