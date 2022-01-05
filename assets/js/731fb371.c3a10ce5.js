"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[60124],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)r=p[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,k=f["".concat(c,".").concat(d)]||f[d]||s[d]||p;return r?o.createElement(k,a(a({ref:t},u),{},{components:r})):o.createElement(k,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,a=new Array(p);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<p;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46504:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var o=r(61731),n=r(70396),p=(r(46393),r(50158)),a=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",id:"api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",title:"api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",description:"Home &gt; @microsoft/api-extractor &gt; IExtractorConfigPrepareOptions &gt; projectFolderLookupToken",source:"@site/docs/api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken.md",sourceDirName:"api",slug:"/api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",permalink:"/pages/api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"IExtractorConfigPrepareOptions.projectFolderLookupToken property",id:"iextractorconfigprepareoptionsprojectfolderlookuptoken-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,p.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iextractorconfigprepareoptions"},"IExtractorConfigPrepareOptions")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/pages/api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken"},"projectFolderLookupToken")),(0,p.kt)("h2",{id:"iextractorconfigprepareoptionsprojectfolderlookuptoken-property"},"IExtractorConfigPrepareOptions.projectFolderLookupToken property"),(0,p.kt)("p",null,"The default value for the ",(0,p.kt)("inlineCode",{parentName:"p"},"projectFolder")," setting is the ",(0,p.kt)("inlineCode",{parentName:"p"},"<lookup>")," token, which uses a heuristic to guess an appropriate project folder. Use ",(0,p.kt)("inlineCode",{parentName:"p"},"projectFolderLookupValue")," to manually specify the ",(0,p.kt)("inlineCode",{parentName:"p"},"<lookup>")," token value instead."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"projectFolderLookupToken?: string;\n")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"If the ",(0,p.kt)("inlineCode",{parentName:"p"},"projectFolder")," setting is explicitly specified in api-extractor.json file, it should take precedence over a value specified via the API. Thus the ",(0,p.kt)("inlineCode",{parentName:"p"},"projectFolderLookupToken")," option provides a way to override the default value for ",(0,p.kt)("inlineCode",{parentName:"p"},"projectFolder")," setting while still honoring a manually specified value."))}f.isMDXComponent=!0}}]);