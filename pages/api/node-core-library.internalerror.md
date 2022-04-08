---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@rushstack/node-core-library](./node-core-library.md) &gt; [InternalError](./node-core-library.internalerror.md)

## InternalError class

An `Error` subclass that should be thrown to report an unexpected state that may indicate a software defect. An application may handle this error by instructing the end user to report an issue to the application maintainers.

<b>Signature:</b>

```typescript
export declare class InternalError extends Error 
```
<b>Extends:</b> Error

## Remarks

Do not use this class unless you intend to solicit bug reports from end users.

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(message)](./node-core-library.internalerror._constructor_.md) |  | Constructs a new instance of the [InternalError](./node-core-library.internalerror.md) class. |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [breakInDebugger](./node-core-library.internalerror.breakindebugger.md) | <code>static</code> | boolean | If true, a JavScript <code>debugger;</code> statement will be invoked whenever the <code>InternalError</code> constructor is called. |
|  [unformattedMessage](./node-core-library.internalerror.unformattedmessage.md) |  | string | The underlying error message, without the additional boilerplate for an <code>InternalError</code>. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [toString()](./node-core-library.internalerror.tostring.md) |  |  |
