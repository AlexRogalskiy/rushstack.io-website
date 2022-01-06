"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[69821],{50158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(46393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),u=r,h=f["".concat(l,".").concat(u)]||f[u]||d[u]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53903:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var o=n(61731),r=n(70396),a=(n(46393),n(50158)),s=["components"],i={title:"heft.json"},l=void 0,c={unversionedId:"pages/heft_configs/heft_json",id:"pages/heft_configs/heft_json",title:"heft.json",description:"| | |",source:"@site/docs/pages/heft_configs/heft_json.md",sourceDirName:"pages/heft_configs",slug:"/pages/heft_configs/heft_json",permalink:"/pages/heft_configs/heft_json",editUrl:"https://github.com/microsoft/rushstack-websites/docs/pages/heft_configs/heft_json.md",tags:[],version:"current",frontMatter:{title:"heft.json"},sidebar:"docsSidebar",previous:{title:"api-extractor-task.json",permalink:"/pages/heft_configs/api-extractor-task_json"},next:{title:"node-service.json",permalink:"/pages/heft_configs/node-service_json"}},p=[{value:"Template",id:"template",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"File path:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"<","project folder",">","/config/heft.json"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages/heft/rig_packages"},(0,a.kt)("strong",{parentName:"a"},"Riggable?"))),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/CopyFilesPlugin.ts"},"CopyFilesPlugin"),", ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/DeleteGlobsPlugin.ts"},"DeleteGlobsPlugin"))))),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Defines configuration used by core Heft.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/heft.schema.json",\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/heft.json",\n\n  "eventActions": [\n    // {\n    //   /**\n    //    * (Required) The kind of built-in operation that should be performed.\n    //    * The "deleteGlobs" action deletes files or folders that match the specified glob patterns.\n    //    */\n    //   "actionKind": "deleteGlobs",\n    //\n    //   /**\n    //    * (Required) The Heft stage when this action should be performed.  Note that heft.json event actions\n    //    * are scheduled after any plugin tasks have processed the event.  For example, a "compile" event action\n    //    * will be performed after the TypeScript compiler has been invoked.\n    //    *\n    //    * Options: "clean", "pre-compile", "compile", "bundle", "post-build"\n    //    */\n    //   "heftEvent": "clean",\n    //\n    //   /**\n    //    * (Required) A user-defined tag whose purpose is to allow configs to replace/delete handlers that\n    //    * were added by other configs.\n    //    */\n    //   "actionId": "my-example-action",\n    //\n    //   /**\n    //    * (Required) Glob patterns to be deleted. The paths are resolved relative to the project folder.\n    //    * Documentation for supported glob syntaxes: https://www.npmjs.com/package/fast-glob\n    //    */\n    //   "globsToDelete": [\n    //     "dist",\n    //     "lib",\n    //     "lib-esnext",\n    //     "temp"\n    //   ]\n    // },\n    //\n    // {\n    //   /**\n    //    * (Required) The kind of built-in operation that should be performed.\n    //    * The "copyFiles" action copies files that match the specified patterns.\n    //    */\n    //   "actionKind": "copyFiles",\n    //\n    //   /**\n    //    * (Required) The Heft stage when this action should be performed.  Note that heft.json event actions\n    //    * are scheduled after any plugin tasks have processed the event.  For example, a "compile" event action\n    //    * will be performed after the TypeScript compiler has been invoked.\n    //    *\n    //    * Options: "pre-compile", "compile", "bundle", "post-build"\n    //    */\n    //   "heftEvent": "pre-compile",\n    //\n    //   /**\n    //    * (Required) A user-defined tag whose purpose is to allow configs to replace/delete handlers that\n    //    * were added by other configs.\n    //    */\n    //   "actionId": "my-example-action",\n    //\n    //   /**\n    //    * (Required) An array of copy operations to run perform during the specified Heft event.\n    //    */\n    //   "copyOperations": [\n    //     {\n    //       /**\n    //        * (Required) The base folder that files will be copied from, relative to the project root.\n    //        * Settings such as "includeGlobs" and "excludeGlobs" will be resolved relative\n    //        * to this folder.\n    //        * NOTE: Assigning "sourceFolder" does not by itself select any files to be copied.\n    //        */\n    //       "sourceFolder": "src",\n    //\n    //       /**\n    //        * (Required) One or more folders that files will be copied into, relative to the project root.\n    //        * If you specify more than one destination folder, Heft will read the input files only once, using\n    //        * streams to efficiently write multiple outputs.\n    //        */\n    //       "destinationFolders": ["dist/assets"],\n    //\n    //       /**\n    //        * If specified, this option recursively scans all folders under "sourceFolder" and includes any files\n    //        * that match the specified extensions.  (If "fileExtensions" and "includeGlobs" are both\n    //        * specified, their selections are added together.)\n    //        */\n    //       "fileExtensions": [".jpg", ".png"],\n    //\n    //       /**\n    //        * A list of glob patterns that select files to be copied.  The paths are resolved relative\n    //        * to "sourceFolder".\n    //        * Documentation for supported glob syntaxes: https://www.npmjs.com/package/fast-glob\n    //        */\n    //       "includeGlobs": ["assets/*.md"],\n    //\n    //       /**\n    //        * A list of glob patterns that exclude files/folders from being copied.  The paths are resolved relative\n    //        * to "sourceFolder".  These exclusions eliminate items that were selected by the "includeGlobs"\n    //        * or "fileExtensions" setting.\n    //        */\n    //       "excludeGlobs": [],\n    //\n    //       /**\n    //        * Normally, when files are selected under a child folder, a corresponding folder will be created in\n    //        * the destination folder.  Specify flatten=true to discard the source path and copy all matching files\n    //        * to the same folder.  If two files have the same name an error will be reported.\n    //        * The default value is false.\n    //        */\n    //       "flatten": false,\n    //\n    //       /**\n    //        * If true, filesystem hard links will be created instead of copying the file.  Depending on the\n    //        * operating system, this may be faster. (But note that it may cause unexpected behavior if a tool\n    //        * modifies the link.)  The default value is false.\n    //        */\n    //       "hardlink": false\n    //     }\n    //   ]\n    // }\n  ],\n\n  /**\n   * The list of Heft plugins to be loaded.\n   */\n  "heftPlugins": [\n    // {\n    //  /**\n    //   * The path to the plugin package.\n    //   */\n    //  "plugin": "path/to/my-plugin",\n    //\n    //  /**\n    //   * An optional object that provides additional settings that may be defined by the plugin.\n    //   */\n    //  // "options": { }\n    // }\n  ]\n}\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pages/heft_tasks/copy-files"},"copy-files")," task"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pages/heft_tasks/delete-globs"},"delete-globs")," task")))}f.isMDXComponent=!0}}]);