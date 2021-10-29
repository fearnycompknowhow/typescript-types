const anArrayOfStrings: string[] = ['must', 'contain', 'only', 'strings'];
const anArrayOfNumbers: number[] = [1, 2, 3];

const alsoAnArrayOfStrings: Array<string> = ['must', 'contain', 'only', 'strings'];
const alsoAnArrayOfNumbers: Array<number> = [1, 2, 3];


// --------------------------
// Arrays of Arrays
// string[string[]] doesn't work.
const anArrayOfArrays1: (string[])[] = [['one', 'two'], ['three', 'four']];
const anArrayOfArrays2: string[][] = [['one', 'two'], ['three', 'four']];
const anArrayOfArrays3: Array<string[]> = [['one', 'two'], ['three', 'four']];


// --------------------------
// number | string[] | null doesn't work
const aUnionArray1: (number | string | null)[] = ['can', 1, null, 'contain numbers', 0, 'or', 'strings or null', null];
const aUnionArray2: Array<number | string | null> = ['can', 1, null, 'contain numbers', 0, 'or', 'strings or null', null];


// --------------------------
const aTuple: [number, string, boolean, number] = [123, 'index 1 must be a string', true, 321];


// --------------------------
// Type inference
const anInferredArrayOfNumbers = [123];
const anInferredArrayOfStrings = ['value'];


// Will be inferred as a Union and not as a Tuple
const anInferredUnionArray = ['value', 123, null];