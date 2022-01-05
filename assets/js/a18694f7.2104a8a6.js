"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[93535],{50158:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87668:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=t(74834),o=t(28265),a=(t(46393),t(50158)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,s={unversionedId:"api/node-core-library.ijsonschemavalidateoptions.customerrorheader",id:"api/node-core-library.ijsonschemavalidateoptions.customerrorheader",isDocsHomePage:!1,title:"node-core-library.ijsonschemavalidateoptions.customerrorheader",description:"Home &gt; @rushstack/node-core-library &gt; IJsonSchemaValidateOptions &gt; customErrorHeader",source:"@site/docs/api/node-core-library.ijsonschemavalidateoptions.customerrorheader.md",sourceDirName:"api",slug:"/api/node-core-library.ijsonschemavalidateoptions.customerrorheader",permalink:"/pages/api/node-core-library.ijsonschemavalidateoptions.customerrorheader",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"IJsonSchemaValidateOptions.customErrorHeader property",id:"ijsonschemavalidateoptionscustomerrorheader-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.ijsonschemavalidateoptions"},"IJsonSchemaValidateOptions")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.ijsonschemavalidateoptions.customerrorheader"},"customErrorHeader")),(0,a.kt)("h2",{id:"ijsonschemavalidateoptionscustomerrorheader-property"},"IJsonSchemaValidateOptions.customErrorHeader property"),(0,a.kt)("p",null,"A custom header that will be used to report schema errors."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"customErrorHeader?: string;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,'If omitted, the default header is "JSON validation failed:". The error message starts with the header, followed by the full input filename, followed by the z-schema error tree. If you wish to customize all aspects of the error message, use JsonFile.loadAndValidateWithCallback() or JsonSchema.validateObjectWithCallback().'))}d.isMDXComponent=!0}}]);