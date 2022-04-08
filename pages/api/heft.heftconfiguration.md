---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/heft](./heft.md) &gt; [HeftConfiguration](./heft.heftconfiguration.md)

## HeftConfiguration class


<b>Signature:</b>

```typescript
export declare class HeftConfiguration 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [buildCacheFolder](./heft.heftconfiguration.buildcachefolder.md) |  | string | The project's build cache folder.<!-- -->This folder exists at &lt;<!-- -->project root<!-- -->&gt;<!-- -->/.heft/build-cache. TypeScript's output goes into this folder and then is either copied or linked to the final output folder |
|  [buildFolder](./heft.heftconfiguration.buildfolder.md) |  | string | Project build folder. This is the folder containing the project's package.json file. |
|  [globalTerminal](./heft.heftconfiguration.globalterminal.md) |  | [Terminal](./node-core-library.terminal.md) | Terminal instance to facilitate logging. |
|  [heftPackageJson](./heft.heftconfiguration.heftpackagejson.md) |  | [IPackageJson](./node-core-library.ipackagejson.md) | The Heft tool's package.json |
|  [projectConfigFolder](./heft.heftconfiguration.projectconfigfolder.md) |  | string | The path to the project's "config" folder. |
|  [projectHeftDataFolder](./heft.heftconfiguration.projectheftdatafolder.md) |  | string | The path to the project's ".heft" folder. |
|  [projectPackageJson](./heft.heftconfiguration.projectpackagejson.md) |  | [IPackageJson](./node-core-library.ipackagejson.md) | The package.json of the project being built |
|  [rigConfig](./heft.heftconfiguration.rigconfig.md) |  | [RigConfig](./rig-package.rigconfig.md) | The rig.json configuration for this project, if present. |
|  [terminalProvider](./heft.heftconfiguration.terminalprovider.md) |  | [ITerminalProvider](./node-core-library.iterminalprovider.md) | Terminal provider for the provided terminal. |
