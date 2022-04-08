---
layout: page
navigation_source: api_nav
improve_this_button: false
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/api-extractor-model](./api-extractor-model.md) &gt; [ApiProperty](./api-extractor-model.apiproperty.md)

## ApiProperty class

Represents a TypeScript property declaration that belongs to an `ApiClass`<!-- -->.

<b>Signature:</b>

```typescript
export declare class ApiProperty extends ApiProperty_base 
```
<b>Extends:</b> ApiProperty\_base

## Remarks

This is part of the [ApiModel](./api-extractor-model.apimodel.md) hierarchy of classes, which are serializable representations of API declarations.

`ApiProperty` represents a TypeScript declaration such as the `width` and `height` members in this example:

```ts
export class Widget {
  public width: number = 100;

  public get height(): number {
    if (this.isSquashed()) {
      return 0;
    } else {
      return this.clientArea.height;
    }
  }
}

```
Note that member variables are also considered to be properties.

If the property has both a getter function and setter function, they will be represented by a single `ApiProperty` and must have a single documentation comment.

Compare with [ApiPropertySignature](./api-extractor-model.apipropertysignature.md)<!-- -->, which represents a property belonging to an interface. For example, a class property can be `static` but an interface property cannot.

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(options)](./api-extractor-model.apiproperty._constructor_.md) |  | Constructs a new instance of the <code>ApiProperty</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [containerKey](./api-extractor-model.apiproperty.containerkey.md) |  | string |  |
|  [kind](./api-extractor-model.apiproperty.kind.md) |  | [ApiItemKind](./api-extractor-model.apiitemkind.md) |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [buildCanonicalReference()](./api-extractor-model.apiproperty.buildcanonicalreference.md) |  | <b><i>(BETA)</i></b> |
|  [getContainerKey(name, isStatic)](./api-extractor-model.apiproperty.getcontainerkey.md) | <code>static</code> |  |
