// Pattern:
// const|let variableName: type = value


const aBoolean: boolean = true;
const aString: string = 'is a string';

const aNumber: number = 123;
const aBigInteger: bigint = 100n; // Big Integers are an ES2020 feature

const aSymbol: symbol = Symbol();


// --------------------------
let aUnionType: string | null | undefined = 'can be a string or null or undefined'; // Notice the single Vertical Bar

aUnionType = null;
aUnionType = undefined;
aUnionType = 10;


// --------------------------
let aLiteralString: 'must be equal to this' | 'or to this' = 'must be equal to this';

aLiteralString = 'or to this';
aLiteralString = 'cannot be this';


// --------------------------
let aLiteralNumber: -321 | 0 | 123 = 0;

aLiteralNumber = 123;
aLiteralNumber = -321;


// --------------------------
let aTemplateLiteral: `template ${number} literal ${boolean}` = `template ${1} literal ${true}`;

aTemplateLiteral = `template ${1} - literal ${true}`;
aTemplateLiteral = `template ${false} literal ${true}`;


// --------------------------
// Catch-all type: any
// Every type can be assigned FROM "any":
let canBeAnything: any = 'this could be a string';

canBeAnything = 2;
canBeAnything = { orAnObject: true };
canBeAnything = ['or maybe an array of strings'];

// And "any" can be assigned TO every type:
let definitelyANumber: number = canBeAnything;
let definitelyAString: string = canBeAnything;


// --------------------------
// unknown - Useful for when you are receiving data from the outside world and cannot garauntee
// as to what it's form will be (e.g. an API that receives data from client)

// Every type can be assigned TO "unknown":
let notKnown: unknown = 'this could be a string';

notKnown = 2;
notKnown = { orAnObject: true };
notKnown = ['or maybe an array of strings'];

// However, ONLY "any" and other "unknown" types can be assigned to "unknown":
definitelyANumber = notKnown;
definitelyAString = notKnown;
canBeAnything = notKnown;


// --------------------------
// Type inference
let anInferredNumber = 123;
let anInferredString = 'value';


// TypeScript Types != JavaScript Primitive Wrapper Objects
// number != Number
Number()
// string != String
String()
// boolean != Boolean
Boolean()
// symbol != Symbol
Symbol()
// object != Object
Object()