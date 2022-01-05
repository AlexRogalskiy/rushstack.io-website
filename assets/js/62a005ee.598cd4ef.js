"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[12863],{50158:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(46393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=f(n),s=i,d=g["".concat(c,".").concat(s)]||g[s]||p[s]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var f=2;f<a;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},59650:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return f},toc:function(){return u},default:function(){return g}});var r=n(74834),i=n(28265),a=(n(46393),n(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,f={unversionedId:"api/heft-config-file.configurationfile.loadconfigurationfileforprojectasync",id:"api/heft-config-file.configurationfile.loadconfigurationfileforprojectasync",isDocsHomePage:!1,title:"heft-config-file.configurationfile.loadconfigurationfileforprojectasync",description:"Home &gt; @rushstack/heft-config-file &gt; ConfigurationFile &gt; loadConfigurationFileForProjectAsync",source:"@site/docs/api/heft-config-file.configurationfile.loadconfigurationfileforprojectasync.md",sourceDirName:"api",slug:"/api/heft-config-file.configurationfile.loadconfigurationfileforprojectasync",permalink:"/pages/api/heft-config-file.configurationfile.loadconfigurationfileforprojectasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"ConfigurationFile.loadConfigurationFileForProjectAsync() method",id:"configurationfileloadconfigurationfileforprojectasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:u};function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/heft-config-file"},"@rushstack/heft-config-file")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/heft-config-file.configurationfile"},"ConfigurationFile")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/pages/api/heft-config-file.configurationfile.loadconfigurationfileforprojectasync"},"loadConfigurationFileForProjectAsync")),(0,a.kt)("h2",{id:"configurationfileloadconfigurationfileforprojectasync-method"},"ConfigurationFile.loadConfigurationFileForProjectAsync() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Find and return a configuration file for the specified project, automatically resolving ",(0,a.kt)("inlineCode",{parentName:"p"},"extends")," properties and handling rigged configuration files. Will throw an error if a configuration file cannot be found in the rig or project config folder."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"loadConfigurationFileForProjectAsync(terminal: ITerminal, projectPath: string, rigConfig?: RigConfig): Promise<TConfigurationFile>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"terminal"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.iterminal"},"ITerminal")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"projectPath"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rigConfig"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/api/rig-package.rigconfig"},"RigConfig")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","TConfigurationFile",">"))}g.isMDXComponent=!0}}]);