"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[12766],{50158:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return h}});var n=a(46393);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=s(a),h=r,k=d["".concat(o,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(k,l(l({ref:e},u),{},{components:a})):n.createElement(k,l({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16836:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=a(61731),r=a(70396),i=(a(46393),a(50158)),l=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,s={unversionedId:"api/rush-lib",id:"api/rush-lib",title:"rush-lib",description:"Home &gt; @microsoft/rush-lib",source:"@site/docs/api/rush-lib.md",sourceDirName:"api",slug:"/api/rush-lib",permalink:"/pages/api/rush-lib",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"rush-lib package",id:"rush-lib-package",children:[],level:2},{value:"Classes",id:"classes",children:[],level:2},{value:"Enumerations",id:"enumerations",children:[],level:2},{value:"Interfaces",id:"interfaces",children:[],level:2},{value:"Type Aliases",id:"type-aliases",children:[],level:2}],m={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/pages/api/"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/pages/api/rush-lib"},"@microsoft/rush-lib")),(0,i.kt)("h2",{id:"rush-lib-package"},"rush-lib package"),(0,i.kt)("p",null,"A library for writing scripts that interact with the ",(0,i.kt)("a",{parentName:"p",href:"https://rushjs.io/"},"Rush")," tool."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.approvedpackagesconfiguration"},"ApprovedPackagesConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null},'This represents the JSON file specified via the "approvedPackagesFile" option in rush.json.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.approvedpackagesitem"},"ApprovedPackagesItem")),(0,i.kt)("td",{parentName:"tr",align:null},"An item returned by ApprovedPackagesConfiguration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.approvedpackagespolicy"},"ApprovedPackagesPolicy")),(0,i.kt)("td",{parentName:"tr",align:null},'This is a helper object for RushConfiguration. It exposes the "approvedPackagesPolicy" feature from rush.json.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.changemanager"},"ChangeManager")),(0,i.kt)("td",{parentName:"tr",align:null},"A class that helps with programmatically interacting with Rush's change files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.commonversionsconfiguration"},"CommonVersionsConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null},'Use this class to load and save the "common/config/rush/common-versions.json" config file. This config file stores dependency version information that affects all projects in the repo.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.eventhooks"},"EventHooks")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This class represents Rush event hooks configured for this repo. Hooks are customized script actions that Rush executes when specific events occur. The actions are expressed as a command-line that is executed using the operating system shell.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.experimentsconfiguration"},"ExperimentsConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")),' Use this class to load the "common/config/rush/experiments.json" config file. This file allows repo maintainers to enable and disable experimental Rush features.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.individualversionpolicy"},"IndividualVersionPolicy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This policy indicates all related projects get version bump driven by their own changes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.lockstepversionpolicy"},"LockStepVersionPolicy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This policy indicates all related projects should use the same version.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.npmoptionsconfiguration"},"NpmOptionsConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null},"Options that are only used when the NPM package manager is selected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.packagejsondependency"},"PackageJsonDependency")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.packagejsoneditor"},"PackageJsonEditor")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.packagemanager"},"PackageManager")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," An abstraction for controlling the supported package managers: PNPM, NPM, and Yarn.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.packagemanageroptionsconfigurationbase"},"PackageManagerOptionsConfigurationBase")),(0,i.kt)("td",{parentName:"tr",align:null},"Options that all package managers share.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.pnpmoptionsconfiguration"},"PnpmOptionsConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null},"Options that are only used when the PNPM package manager is selected.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.projectchangeanalyzer"},"ProjectChangeAnalyzer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.repostatefile"},"RepoStateFile")),(0,i.kt)("td",{parentName:"tr",align:null},"This file is used to track the state of various Rush-related features. It is generated and updated by Rush.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rush"},"Rush")),(0,i.kt)("td",{parentName:"tr",align:null},"General operations for the Rush engine.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null},'This represents the Rush configuration for a repository, based on the "rush.json" configuration file.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")),(0,i.kt)("td",{parentName:"tr",align:null},"This represents the configuration of a project that is built by Rush, based on the Rush.json configuration file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicy"},"VersionPolicy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This is the base class for version policy which controls how versions get bumped.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicyconfiguration"},"VersionPolicyConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")),' Use this class to load and save the "common/config/rush/version-policies.json" config file. This config file configures how different groups of projects will be published by Rush, and how their version numbers will be determined.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.yarnoptionsconfiguration"},"YarnOptionsConfiguration")),(0,i.kt)("td",{parentName:"tr",align:null},"Options that are only used when the yarn package manager is selected.")))),(0,i.kt)("h2",{id:"enumerations"},"Enumerations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Enumeration"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.bumptype"},"BumpType")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Type of version bumps")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.dependencytype"},"DependencyType")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.environmentvariablenames"},"EnvironmentVariableNames")),(0,i.kt)("td",{parentName:"tr",align:null},"Names of environment variables used by Rush.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.event"},"Event")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Events happen during Rush runs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.versionpolicydefinitionname"},"VersionPolicyDefinitionName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Version policy base type names")))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.iconfigurationenvironment"},"IConfigurationEnvironment")),(0,i.kt)("td",{parentName:"tr",align:null},"A collection of environment variables")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.iconfigurationenvironmentvariable"},"IConfigurationEnvironmentVariable")),(0,i.kt)("td",{parentName:"tr",align:null},"Represents the value of an environment variable, and if the value should be overridden if the variable is set in the parent environment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.iexperimentsjson"},"IExperimentsJson")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," This interface represents the raw experiments.json file which allows repo maintainers to enable and disable experimental Rush features.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.igetchangedprojectsoptions"},"IGetChangedProjectsOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.ilaunchoptions"},"ILaunchOptions")),(0,i.kt)("td",{parentName:"tr",align:null},'Options to pass to the rush "launch" functions.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.ipackagemanageroptionsjsonbase"},"IPackageManagerOptionsJsonBase")),(0,i.kt)("td",{parentName:"tr",align:null},"Options for the package manager.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.itryfindrushjsonlocationoptions"},"ITryFindRushJsonLocationOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Options for ",(0,i.kt)("code",null,"RushConfiguration.tryFindRushJsonLocation"),".")))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type Alias"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.packagemanagername"},"PackageManagerName")),(0,i.kt)("td",{parentName:"tr",align:null},"This represents the available Package Manager tools as a string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/pages/api/rush-lib.pnpmstoreoptions"},"PnpmStoreOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"This represents the available PNPM store options")))))}d.isMDXComponent=!0}}]);