"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[4474],{50158:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return h}});var r=n(46393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),s=l(n),h=i,y=s["".concat(c,".").concat(h)]||s[h]||u[h]||o;return n?r.createElement(y,a(a({ref:t},f),{},{components:n})):r.createElement(y,a({ref:t},f))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return f},default:function(){return s}});var r=n(61731),i=n(70396),o=(n(46393),n(50158)),a=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/heft-config-file.ipropertiesinheritance",id:"api/heft-config-file.ipropertiesinheritance",title:"heft-config-file.ipropertiesinheritance",description:"Home &gt; @rushstack/heft-config-file &gt; IPropertiesInheritance",source:"@site/docs/api/heft-config-file.ipropertiesinheritance.md",sourceDirName:"api",slug:"/api/heft-config-file.ipropertiesinheritance",permalink:"/pages/api/heft-config-file.ipropertiesinheritance",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},f=[{value:"IPropertiesInheritance type",id:"ipropertiesinheritance-type",children:[],level:2}],u={toc:f};function s(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/heft-config-file"},"@rushstack/heft-config-file")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/heft-config-file.ipropertiesinheritance"},"IPropertiesInheritance")),(0,o.kt)("h2",{id:"ipropertiesinheritance-type"},"IPropertiesInheritance type"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type IPropertiesInheritance<TConfigurationFile> = {\n    [propertyName in keyof TConfigurationFile]?: IPropertyInheritance<InheritanceType.append | InheritanceType.replace> | ICustomPropertyInheritance<TConfigurationFile[propertyName]>;\n};\n")),(0,o.kt)("b",null,"References:")," [IPropertyInheritance](/pages/api/heft-config-file.ipropertyinheritance) , [InheritanceType.append](./heft-config-file.inheritancetype.append.md) , [InheritanceType.replace](./heft-config-file.inheritancetype.replace.md) , [ICustomPropertyInheritance](/pages/api/heft-config-file.icustompropertyinheritance)")}s.isMDXComponent=!0}}]);