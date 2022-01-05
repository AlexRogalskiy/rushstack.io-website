"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[93759],{50158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(46393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),u=o,h=f["".concat(l,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16367:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=n(61731),o=n(70396),i=(n(46393),n(50158)),a=["components"],s={title:'"delete-globs" task'},l=void 0,c={unversionedId:"heft_tasks/delete-globs",id:"heft_tasks/delete-globs",title:'"delete-globs" task',description:'This task implements the "actionKind": "deleteGlobs" action kind that is used when specifying',source:"@site/docs/heft_tasks/delete-globs.md",sourceDirName:"heft_tasks",slug:"/heft_tasks/delete-globs",permalink:"/pages/heft_tasks/delete-globs",editUrl:"https://github.com/microsoft/rushstack-websites/docs/heft_tasks/delete-globs.md",tags:[],version:"current",frontMatter:{title:'"delete-globs" task'},sidebar:"docsSidebar",previous:{title:'"copy-static-assets" task',permalink:"/pages/heft_tasks/copy-static-assets"},next:{title:'"eslint" task',permalink:"/pages/heft_tasks/eslint"}},p=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Config files",id:"config-files",children:[],level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This task implements the ",(0,i.kt)("inlineCode",{parentName:"p"},'"actionKind": "deleteGlobs"')," action kind that is used when specifying\n",(0,i.kt)("inlineCode",{parentName:"p"},'"eventActions"')," in the ",(0,i.kt)("a",{parentName:"p",href:"../heft_configs/heft_json"},"heft.json")," config file."),(0,i.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,i.kt)("p",null,"The most common usage is to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"heft clean")," action that deletes build output folders\nsuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"lib"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"temp"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"dist"),"."),(0,i.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,i.kt)("p",null,"None - this feature is implemented internally by Heft."),(0,i.kt)("h2",{id:"config-files"},"Config files"),(0,i.kt)("p",null,"Event actions are registered in the ",(0,i.kt)("a",{parentName:"p",href:"../heft_configs/heft_json"},"heft.json")," config file.  For example:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"<","project folder",">","/config/heft.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n  . . .\n\n  "eventActions": [\n    {\n      /**\n       * (Required) The kind of built-in operation that should be performed.\n       * The "deleteGlobs" action deletes files or folders that match the specified glob patterns.\n       */\n      "actionKind": "deleteGlobs",\n\n      /**\n       * (Required) The Heft stage when this action should be performed.  Note that heft.json event actions\n       * are scheduled after any plugin tasks have processed the event.  For example, a "compile" event action\n       * will be performed after the TypeScript compiler has been invoked.\n       *\n       * Options: "clean", "pre-compile", "compile", "bundle", "post-build"\n       */\n      "heftEvent": "clean",\n\n      /**\n       * (Required) A user-defined tag whose purpose is to allow configs to replace/delete handlers that\n       * were added by other configs.\n       */\n      "actionId": "my-example-action",\n\n      /**\n       * (Required) Glob patterns to be deleted. The paths are resolved relative to the project folder.\n       * Documentation for supported glob syntaxes: https://www.npmjs.com/package/fast-glob\n       */\n      "globsToDelete": [\n        "dist",\n        "lib",\n        "lib-esnext",\n        "temp"\n      ]\n    }\n  ],\n\n  . . .\n}\n')))}f.isMDXComponent=!0}}]);