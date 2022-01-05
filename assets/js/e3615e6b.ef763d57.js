"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[22384],{50158:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return m}});var n=t(46393);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return t?n.createElement(f,o(o({ref:a},d),{},{components:t})):n.createElement(f,o({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8572:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=t(74834),r=t(28265),l=(t(46393),t(50158)),o=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,p={unversionedId:"api/node-core-library.jsonfile.loadandvalidatewithcallbackasync",id:"api/node-core-library.jsonfile.loadandvalidatewithcallbackasync",isDocsHomePage:!1,title:"node-core-library.jsonfile.loadandvalidatewithcallbackasync",description:"Home &gt; @rushstack/node-core-library &gt; JsonFile &gt; loadAndValidateWithCallbackAsync",source:"@site/docs/api/node-core-library.jsonfile.loadandvalidatewithcallbackasync.md",sourceDirName:"api",slug:"/api/node-core-library.jsonfile.loadandvalidatewithcallbackasync",permalink:"/pages/api/node-core-library.jsonfile.loadandvalidatewithcallbackasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},d=[{value:"JsonFile.loadAndValidateWithCallbackAsync() method",id:"jsonfileloadandvalidatewithcallbackasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],s={toc:d};function u(e){var a=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.jsonfile"},"JsonFile")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.jsonfile.loadandvalidatewithcallbackasync"},"loadAndValidateWithCallbackAsync")),(0,l.kt)("h2",{id:"jsonfileloadandvalidatewithcallbackasync-method"},"JsonFile.loadAndValidateWithCallbackAsync() method"),(0,l.kt)("p",null,"An async version of ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.jsonfile.loadandvalidatewithcallback"},"JsonFile.loadAndValidateWithCallback()")," ."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static loadAndValidateWithCallbackAsync(jsonFilename: string, jsonSchema: JsonSchema, errorCallback: (errorInfo: IJsonSchemaErrorInfo) => void): Promise<JsonObject>;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonFilename"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonSchema"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.jsonschema"},"JsonSchema")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errorCallback"),(0,l.kt)("td",{parentName:"tr",align:null},"(errorInfo: ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.ijsonschemaerrorinfo"},"IJsonSchemaErrorInfo")," ) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,"Promise","<",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.jsonobject"},"JsonObject")," ",">"))}u.isMDXComponent=!0}}]);