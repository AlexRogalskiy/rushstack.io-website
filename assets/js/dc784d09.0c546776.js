"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[89937],{50158:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),k=r,y=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},79651:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=a(61731),r=a(70396),l=(a(46393),a(50158)),i=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,d={unversionedId:"api/node-core-library.filesystem",id:"api/node-core-library.filesystem",title:"node-core-library.filesystem",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem",source:"@site/docs/api/node-core-library.filesystem.md",sourceDirName:"api",slug:"/api/node-core-library.filesystem",permalink:"/pages/api/node-core-library.filesystem",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"FileSystem class",id:"filesystem-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],c={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/pages/api/node-core-library.filesystem"},"FileSystem")),(0,l.kt)("h2",{id:"filesystem-class"},"FileSystem class"),(0,l.kt)("p",null,"The FileSystem API provides a complete set of recommended operations for interacting with the file system."),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class FileSystem \n")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"We recommend to use this instead of the native ",(0,l.kt)("inlineCode",{parentName:"p"},"fs")," API, because ",(0,l.kt)("inlineCode",{parentName:"p"},"fs"),' is a minimal set of low-level primitives that must be mapped for each supported operating system. The FileSystem API takes a philosophical approach of providing "one obvious way" to do each operation. We also prefer synchronous operations except in cases where there would be a clear performance benefit for using async, since synchronous code is much easier to read and debug. Also, indiscriminate parallelism has been seen to actually worsen performance, versus improving it.'),(0,l.kt)("p",null,'Note that in the documentation, we refer to "filesystem objects", this can be a file, folder, symbolic link, hard link, directory junction, etc.'),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.appendtofile"},"appendToFile(filePath, contents, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Writes a text string to a file on disk, appending to the file if it already exists. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.appendFileSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.appendtofileasync"},"appendToFileAsync(filePath, contents, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.appendtofile"},"FileSystem.appendToFile()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.changeposixmodebits"},"changePosixModeBits(path, mode)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Changes the permissions (i.e. file mode bits) for a filesystem object. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.chmodSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.changeposixmodebitsasync"},"changePosixModeBitsAsync(path, mode)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.changeposixmodebits"},"FileSystem.changePosixModeBits()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.copyfile"},"copyFile(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Copies a single file from one location to another. By default, destinationPath is overwritten if it already exists.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.copyfileasync"},"copyFileAsync(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.copyfile"},"FileSystem.copyFile()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.copyfiles"},"copyFiles(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Copies a file or folder from one location to another, recursively copying any folder contents. By default, destinationPath is overwritten if it already exists.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.copyfilesasync"},"copyFilesAsync(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.copyfiles"},"FileSystem.copyFiles()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createhardlink"},"createHardLink(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a hard link. The link target must be a file, not a folder. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.linkSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createhardlinkasync"},"createHardLinkAsync(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createhardlink"},"FileSystem.createHardLink()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createsymboliclinkfile"},"createSymbolicLinkFile(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a symbolic link to a file. On Windows operating systems, this may require administrator elevation. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.symlinkSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createsymboliclinkfileasync"},"createSymbolicLinkFileAsync(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createsymboliclinkfile"},"FileSystem.createSymbolicLinkFile()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createsymboliclinkfolder"},"createSymbolicLinkFolder(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a symbolic link to a folder. On Windows operating systems, this may require administrator elevation. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.symlinkSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createsymboliclinkfolderasync"},"createSymbolicLinkFolderAsync(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createsymboliclinkfolder"},"FileSystem.createSymbolicLinkFolder()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createsymboliclinkjunction"},"createSymbolicLinkJunction(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},'Creates an NTFS "directory junction" on Windows operating systems; for other operating systems, it creates a regular symbolic link. The link target must be a folder, not a file. Behind the scenes it uses ',(0,l.kt)("code",null,"fs.symlinkSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createsymboliclinkjunctionasync"},"createSymbolicLinkJunctionAsync(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.createsymboliclinkjunction"},"FileSystem.createSymbolicLinkJunction()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.deletefile"},"deleteFile(filePath, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a file. Can optionally throw if the file doesn't exist. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.unlinkSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.deletefileasync"},"deleteFileAsync(filePath, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.deletefile"},"FileSystem.deleteFile()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.deletefolder"},"deleteFolder(folderPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes a folder, including all of its contents. Behind the scenes is uses ",(0,l.kt)("code",null,"fs-extra.removeSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.deletefolderasync"},"deleteFolderAsync(folderPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.deletefolder"},"FileSystem.deleteFolder()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.ensureemptyfolder"},"ensureEmptyFolder(folderPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Deletes the content of a folder, but not the folder itself. Also ensures the folder exists. Behind the scenes it uses ",(0,l.kt)("code",null,"fs-extra.emptyDirSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.ensureemptyfolderasync"},"ensureEmptyFolderAsync(folderPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.ensureemptyfolder"},"FileSystem.ensureEmptyFolder()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.ensurefolder"},"ensureFolder(folderPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Recursively creates a folder at a given path. Behind the scenes is uses ",(0,l.kt)("code",null,"fs-extra.ensureDirSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.ensurefolderasync"},"ensureFolderAsync(folderPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.ensurefolder"},"FileSystem.ensureFolder()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.exists"},"exists(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the path exists on disk. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.existsSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.existsasync"},"existsAsync(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.exists"},"FileSystem.exists()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.formatposixmodebits"},"formatPosixModeBits(modeBits)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},'Returns a 10-character string representation of a PosixModeBits value similar to what would be displayed by a command such as "ls -l" on a POSIX-like operating system.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getlinkstatistics"},"getLinkStatistics(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the statistics of a filesystem object. Does NOT follow the link to its target. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.lstatSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getlinkstatisticsasync"},"getLinkStatisticsAsync(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getlinkstatistics"},"FileSystem.getLinkStatistics()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getposixmodebits"},"getPosixModeBits(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Retrieves the permissions (i.e. file mode bits) for a filesystem object. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.chmodSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getposixmodebitsasync"},"getPosixModeBitsAsync(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getposixmodebits"},"FileSystem.getPosixModeBits()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getrealpath"},"getRealPath(linkPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Follows a link to its destination and returns the absolute path to the final target of the link. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.realpathSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getrealpathasync"},"getRealPathAsync(linkPath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getrealpath"},"FileSystem.getRealPath()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getstatistics"},"getStatistics(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Gets the statistics for a particular filesystem object. If the path is a link, this function follows the link and returns statistics about the link target. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.statSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getstatisticsasync"},"getStatisticsAsync(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.getstatistics"},"FileSystem.getStatistics()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.iserrnoexception"},"isErrnoException(error)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Detects if the provided error object is a ",(0,l.kt)("code",null,"NodeJS.ErrnoException"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.isexisterror"},"isExistError(error)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the error object indicates the file or folder already exists (",(0,l.kt)("code",null,"EEXIST"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.isfiledoesnotexisterror"},"isFileDoesNotExistError(error)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the error object indicates the file does not exist (",(0,l.kt)("code",null,"ENOENT"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.isfolderdoesnotexisterror"},"isFolderDoesNotExistError(error)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the error object indicates the folder does not exist (",(0,l.kt)("code",null,"ENOTDIR"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.isnotexisterror"},"isNotExistError(error)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the error object indicates the file or folder does not exist (",(0,l.kt)("code",null,"ENOENT")," or ",(0,l.kt)("code",null,"ENOTDIR"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.isunlinknotpermittederror"},"isUnlinkNotPermittedError(error)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns true if the error object indicates that the ",(0,l.kt)("code",null,"unlink")," system call failed due to a permissions issue (",(0,l.kt)("code",null,"EPERM"),").")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.move"},"move(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Moves a file. The folder must exist, unless the ",(0,l.kt)("code",null,"ensureFolderExists")," option is provided. Behind the scenes it uses ",(0,l.kt)("code",null,"fs-extra.moveSync()"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.moveasync"},"moveAsync(options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.move"},"FileSystem.move()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readfile"},"readFile(filePath, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Reads the contents of a file into a string. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.readFileSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readfileasync"},"readFileAsync(filePath, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readfile"},"FileSystem.readFile()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readfiletobuffer"},"readFileToBuffer(filePath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Reads the contents of a file into a buffer. Behind the scenes is uses ",(0,l.kt)("code",null,"fs.readFileSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readfiletobufferasync"},"readFileToBufferAsync(filePath)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readfiletobuffer"},"FileSystem.readFileToBuffer()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readfolder"},"readFolder(folderPath, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},'Reads the contents of the folder, not including "." or "..". Behind the scenes it uses ',(0,l.kt)("code",null,"fs.readdirSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readfolderasync"},"readFolderAsync(folderPath, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readfolder"},"FileSystem.readFolder()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readlink"},"readLink(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"If ",(0,l.kt)("code",null,"path")," refers to a symbolic link, this returns the path of the link target, which may be an absolute or relative path.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readlinkasync"},"readLinkAsync(path)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.readlink"},"FileSystem.readLink()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.updatetimes"},"updateTimes(path, times)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Updates the accessed and modified timestamps of the filesystem object referenced by path. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.utimesSync()"),". The caller should specify both times in the ",(0,l.kt)("code",null,"times")," parameter.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.updatetimesasync"},"updateTimesAsync(path, times)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.updatetimes"},"FileSystem.updateTimes()")," .")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.writefile"},"writeFile(filePath, contents, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"Writes a text string to a file on disk, overwriting the file if it already exists. Behind the scenes it uses ",(0,l.kt)("code",null,"fs.writeFileSync()"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.writefileasync"},"writeFileAsync(filePath, contents, options)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"static")),(0,l.kt)("td",{parentName:"tr",align:null},"An async version of ",(0,l.kt)("a",{parentName:"td",href:"/pages/api/node-core-library.filesystem.writefile"},"FileSystem.writeFile()")," .")))))}m.isMDXComponent=!0}}]);