"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[6506],{50158:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50173:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(74834),a=n(28265),l=(n(46393),n(50158)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"api/rush-lib.versionpolicy",id:"api/rush-lib.versionpolicy",isDocsHomePage:!1,title:"rush-lib.versionpolicy",description:"Home &gt; @microsoft/rush-lib &gt; VersionPolicy",source:"@site/docs/api/rush-lib.versionpolicy.md",sourceDirName:"api",slug:"/api/rush-lib.versionpolicy",permalink:"/pages/api/rush-lib.versionpolicy",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"VersionPolicy class",id:"versionpolicy-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/rush-lib.versionpolicy"},"VersionPolicy")),(0,l.kt)("h2",{id:"versionpolicy-class"},"VersionPolicy class"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,l.kt)("p",null,"This is the base class for version policy which controls how versions get bumped."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class VersionPolicy \n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,l.kt)("inlineCode",{parentName:"p"},"VersionPolicy")," class."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.definitionname"},"definitionName")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicydefinitionname"},"VersionPolicyDefinitionName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Version policy definition name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.exemptfromrushchange"},"exemptFromRushChange")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Determines if a version policy wants to opt out of changelog files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.includeemailinchangefile"},"includeEmailInChangeFile")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Determines if a version policy wants to opt in to including email.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.islockstepped"},"isLockstepped")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Whether it is a lockstepped version policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.policyname"},"policyName")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Version policy name")))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.bump"},"bump(bumpType, identifier)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Bumps version based on the policy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.ensure"},"ensure(project, force)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Returns an updated package json that satisfies the policy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.setdependenciesbeforecommit"},"setDependenciesBeforeCommit(packageName, configuration)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Tells the version policy to modify any dependencies in the target package to values used for checked-in source.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.setdependenciesbeforepublish"},"setDependenciesBeforePublish(packageName, configuration)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Tells the version policy to modify any dependencies in the target package to values used for publishing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy.validate"},"validate(versionString, packageName)")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,(0,l.kt)("i",null,"(BETA)"))," Validates the specified version and throws if the version does not satisfy the policy.")))))}d.isMDXComponent=!0}}]);