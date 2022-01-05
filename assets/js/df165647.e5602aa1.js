"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[31106],{50158:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return k}});var r=t(46393);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),c=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return r.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),k=n,g=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return t?r.createElement(g,l(l({ref:a},s),{},{components:t})):r.createElement(g,l({ref:a},s))}));function k(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9215:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(74834),n=t(28265),o=(t(46393),t(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/node-core-library.packagejsonlookup.loadpackagejson",id:"api/node-core-library.packagejsonlookup.loadpackagejson",isDocsHomePage:!1,title:"node-core-library.packagejsonlookup.loadpackagejson",description:"Home &gt; @rushstack/node-core-library &gt; PackageJsonLookup &gt; loadPackageJson",source:"@site/docs/api/node-core-library.packagejsonlookup.loadpackagejson.md",sourceDirName:"api",slug:"/api/node-core-library.packagejsonlookup.loadpackagejson",permalink:"/pages/api/node-core-library.packagejsonlookup.loadpackagejson",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"PackageJsonLookup.loadPackageJson() method",id:"packagejsonlookuploadpackagejson-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function d(e){var a=e.components,t=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.packagejsonlookup"},"PackageJsonLookup")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.packagejsonlookup.loadpackagejson"},"loadPackageJson")),(0,o.kt)("h2",{id:"packagejsonlookuploadpackagejson-method"},"PackageJsonLookup.loadPackageJson() method"),(0,o.kt)("p",null,"Loads the specified package.json file, if it is not already present in the cache."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"loadPackageJson(jsonFilename: string): IPackageJson;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jsonFilename"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"a relative or absolute path to a package.json file")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.ipackagejson"},"IPackageJson")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Unless ",(0,o.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.ipackagejsonlookupparameters.loadextrafields"},"IPackageJsonLookupParameters.loadExtraFields")," was specified, the returned IPackageJson object will contain a subset of essential fields. The returned object should be considered to be immutable; the caller must never modify it."))}d.isMDXComponent=!0}}]);