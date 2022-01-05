"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[42900],{50158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(74834),a=n(28265),i=(n(46393),n(50158)),o=["components"],s={title:'"typescript" task'},p=void 0,l={unversionedId:"heft_tasks/typescript",id:"heft_tasks/typescript",isDocsHomePage:!1,title:'"typescript" task',description:"This task invokes the compiler for the TypeScript programming language.",source:"@site/docs/heft_tasks/typescript.md",sourceDirName:"heft_tasks",slug:"/heft_tasks/typescript",permalink:"/pages/heft_tasks/typescript",editUrl:"https://github.com/microsoft/rushstack-websites/docs/heft_tasks/typescript.md",tags:[],version:"current",frontMatter:{title:'"typescript" task'},sidebar:"docsSidebar",previous:{title:'"tslint" task',permalink:"/pages/heft_tasks/tslint"},next:{title:'"webpack" task',permalink:"/pages/heft_tasks/webpack"}},c=[{value:"When to use it",id:"when-to-use-it",children:[],level:2},{value:"package.json dependencies",id:"packagejson-dependencies",children:[],level:2},{value:"Config files",id:"config-files",children:[],level:2}],u={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This task invokes the compiler for the ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," programming language."),(0,i.kt)("h2",{id:"when-to-use-it"},"When to use it"),(0,i.kt)("p",null,'TypeScript is the standard programming language for Rush Stack.  There are many benefits to having one "lingua franca" across all coding investments, rather than having to maintain different expertise and libraries for different languages.'),(0,i.kt)("p",null,"We recommend TypeScript for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Application development:")," It's even a good choice for prototypes and small experiments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tooling infrastructure:")," A great developer experience multiplies everyone's productivity, so build tools should be treated as first-class software projects with their own designs, documentation, and tests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Device apps:")," Where possible, TypeScript can also be used for native development via runtime hosts such as ",(0,i.kt)("a",{parentName:"li",href:"https://reactnative.dev/"},"React Native"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Desktop apps:")," There are also runtime hosts such as ",(0,i.kt)("a",{parentName:"li",href:"https://www.electronjs.org/"},"Electron")," for making desktop apps.")),(0,i.kt)("p",null,"Obviously certain components may inevitably require Java, C++, Swift, etc.  But ideally developers should not be required to install native SDKs unless they're working on those components.  The ",(0,i.kt)("a",{parentName:"p",href:"https://expo.io/features"},"Expo client")," takes this concept to an extreme, enabling you to compile and run a phone app without installing native tools at all.  This ideal isn't always feasible in practice, of course.  It's a mentality, not a dogma.  The main point is that there are significant benefits to normalizing the code base so that any engineer can easily contribute to any project, and any project can load any library."),(0,i.kt)("h2",{id:"packagejson-dependencies"},"package.json dependencies"),(0,i.kt)("p",null,"You will need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"typescript")," package to your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rush add --package typescript --dev\n")),(0,i.kt)("p",null,'Alternatively, you can avoid this dependency by loading it from a "rig package", as described in the ',(0,i.kt)("a",{parentName:"p",href:"../heft_tutorials/heft_and_rush"},"Interfacing with Rush")," article."),(0,i.kt)("p",null,"If your ",(0,i.kt)("strong",{parentName:"p"},"tsconfig.json")," enables ",(0,i.kt)("inlineCode",{parentName:"p"},'"importHelpers": true')," for more efficient transpiler output, you may also need a dependency on ",(0,i.kt)("strong",{parentName:"p"},"tslib"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rush add --package tslib\n")),(0,i.kt)("h2",{id:"config-files"},"Config files"),(0,i.kt)("p",null,"The primary configuration comes from TypeScript's ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"tsconfig.json")," file."),(0,i.kt)("p",null,"For advanced scenarios, Heft also provides an optional ",(0,i.kt)("a",{parentName:"p",href:"../heft_configs/typescript_json"},"typescript.json")," config file that can be used to configure toolchain features such as multiple emit targets for the TypeScript compiler."))}f.isMDXComponent=!0}}]);