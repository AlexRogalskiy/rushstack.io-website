"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[93057],{50158:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var a=n(46393);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(m,o(o({ref:e},s),{},{components:n})):a.createElement(m,o({ref:e},s))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74917:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(61731),i=n(70396),r=(n(46393),n(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/localization-plugin.ilocalizationstatsoptions",id:"api/localization-plugin.ilocalizationstatsoptions",title:"localization-plugin.ilocalizationstatsoptions",description:"Home &gt; @rushstack/localization-plugin &gt; ILocalizationStatsOptions",source:"@site/docs/api/localization-plugin.ilocalizationstatsoptions.md",sourceDirName:"api",slug:"/api/localization-plugin.ilocalizationstatsoptions",permalink:"/pages/api/localization-plugin.ilocalizationstatsoptions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ILocalizationStatsOptions interface",id:"ilocalizationstatsoptions-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],u={toc:s};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/api/localization-plugin"},"@rushstack/localization-plugin")," ",">"," ",(0,r.kt)("a",{parentName:"p",href:"/pages/api/localization-plugin.ilocalizationstatsoptions"},"ILocalizationStatsOptions")),(0,r.kt)("h2",{id:"ilocalizationstatsoptions-interface"},"ILocalizationStatsOptions interface"),(0,r.kt)("p",null,"Options for how localization stats data should be produced."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ILocalizationStatsOptions \n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/api/localization-plugin.ilocalizationstatsoptions.callback"},"callback?")),(0,r.kt)("td",{parentName:"tr",align:null},"(stats: ",(0,r.kt)("a",{parentName:"td",href:"/pages/api/localization-plugin.ilocalizationstats"},"ILocalizationStats")," ) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," This option is used to specify a callback to be called with the stats data that would be dropped at ",(0,r.kt)("code",null,"localizationStats.dropPath")," after compilation completes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/pages/api/localization-plugin.ilocalizationstatsoptions.droppath"},"dropPath?")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("i",null,"(Optional)")," This option is used to designate a path at which a JSON file describing the localized assets produced should be written.")))))}d.isMDXComponent=!0}}]);