// Generics can be thought of as function parameters only for types; they are like type parameters

function aGenericFunction<T>(arg: T): T {
	return arg;
}

aGenericFunction<number>(123);
aGenericFunction<string>('value');
aGenericFunction<number>('value');

// --------------------------
type AGenericObject<T> = {
	[key: string]: T
}

// Example: Dictionary and Index in CommonTypes.ts

const genericObject: AGenericObject<number> = {
	'the keys can be any string': 123,
}

genericObject['but the values must be a number'] = 321;


// --------------------------
// Generics are how JavaScript's built-in data structures provide typing for their methods.
// Remember this syntax from earlier?
const genericArray: Array<number> = [1, 2, 3];


// --------------------------
// ES6 Maps support the same syntax:
const genericMap = new Map<symbol, string>();

genericMap.set(Symbol(), 'must be a string');
genericMap.set(1, 'must be a string');
genericMap.set(Symbol(), null);


// --------------------------
// Type inference
// Often a Generic's type can be inferred
aGenericFunction(null);
aGenericFunction([1]);


// Generic types can often get complex
// Example: findValue.ts