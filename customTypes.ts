// How do you create and name your own types?
// Create a Type Alias with the "type" keyword

// Create Primitive type
type PrimitiveType = string;

const primitive: PrimitiveType = 'value';

// Example: CommonTypes.ts


// --------------------------
// Create Union type
type UnionType = string | null | undefined;

let union: UnionType = 'value';

union = null;
union = undefined;
union = 1;


// --------------------------
// Literal Types
type LiteralString = 'can be 1' | 'can be 2';

let literalString: LiteralString = 'can be 1';

literalString = 'can be 2';
literalString = 'cannot be 3';

// Example: ResourceType in StaticResource.ts


// --------------------------
// ... The pattern continues for Array and Function types


// --------------------------
// There are two ways to create an Object type. These two syntaxes are almost identical except for just a few differences:

// A Type Alias
type ObjectTypeAlias1 = {
	field1: string;
	field2: number;
	optionalField?: string;
};

// An Interface
interface InterfaceType1 {
	field1: string;
	field2: number;
	optionalField?: string;
}


// --------------------------
// Difference: Combine Object Types

// Type Intersection
type IntersectionType = ObjectTypeAlias1 & {
	field3: boolean;
};

// Used to have an example in the Classroom app but not anymore

// Interface
interface InterfaceType2 extends InterfaceType1 {
	field3: boolean;
}

// Example: SaveBookmarkArgs in api.ts


// --------------------------
// The differences between Interfaces and Object Type Alias

type ObjectTypeAlias2 = {
	field3: boolean;
};

// Combining more than two Type Aliases is easy with Type Intersection whereas
// it is impossible to extend multiple interfaces
type ObjectTypeAlias3 = ObjectTypeAlias1 & ObjectTypeAlias2 & {
	field4: Symbol
};

// However, Interfaces can be openend agumented after their definition
interface InterfaceType2 {
	field4: string;
}