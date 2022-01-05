"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[73512],{50158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},65536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(74834),a=n(28265),i=(n(46393),n(50158)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"api/api-documenter.ifeaturedefinition",id:"api/api-documenter.ifeaturedefinition",isDocsHomePage:!1,title:"api-documenter.ifeaturedefinition",description:"Home &gt; @microsoft/api-documenter &gt; IFeatureDefinition",source:"@site/docs/api/api-documenter.ifeaturedefinition.md",sourceDirName:"api",slug:"/api/api-documenter.ifeaturedefinition",permalink:"/pages/api/api-documenter.ifeaturedefinition",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"IFeatureDefinition interface",id:"ifeaturedefinition-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],f={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-documenter"},"@microsoft/api-documenter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/api-documenter.ifeaturedefinition"},"IFeatureDefinition")),(0,i.kt)("h2",{id:"ifeaturedefinition-interface"},"IFeatureDefinition interface"),(0,i.kt)("p",null,'Defines a "feature" that is provided by an API Documenter plugin. A feature is a user-defined module that customizes the behavior of API Documenter.'),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IFeatureDefinition \n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.ifeaturedefinition.featurename"},"featureName")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of this feature, as it will appear in the config file. The name should consist of one or more words separated by hyphens. Each word should consist of lower case letters and numbers. Example: ",(0,i.kt)("code",null,"my-feature"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.ifeaturedefinition.kind"},"kind")),(0,i.kt)("td",{parentName:"tr",align:null},"'MarkdownDocumenterFeature'"),(0,i.kt)("td",{parentName:"tr",align:null},"Determines the kind of feature. The specified value is the name of the base class that ",(0,i.kt)("code",null,"subclass")," inherits from.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.ifeaturedefinition.subclass"},"subclass")),(0,i.kt)("td",{parentName:"tr",align:null},"{ new (initialization: ",(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.pluginfeatureinitialization"},"PluginFeatureInitialization")," ): ",(0,i.kt)("a",{parentName:"td",href:"/pages/api/api-documenter.markdowndocumenterfeature"},"MarkdownDocumenterFeature")," ; }"),(0,i.kt)("td",{parentName:"tr",align:null},"Your subclass that extends from the base class.")))))}s.isMDXComponent=!0}}]);