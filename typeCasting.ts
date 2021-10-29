// Changing one type into another type is known as "casting".
// Most commonly you will be casting from "any" or "unknown" to a specific type

let notKnownButIsAString: unknown = 'is actually a string';
let canBeAnythingButIsAString: any = 'is actually a string';

// TypeScript will automatically cast the type if you do a Run Time check against it
if (typeof notKnownButIsAString === 'string') {
	// Is automatically cast to a "string"
	const stringValue: string = notKnownButIsAString;
}

if (typeof canBeAnythingButIsAString === 'symbol') {
	// Is automatically cast to a "symbol"
	const symbolValue: symbol = canBeAnythingButIsAString;
}

const stringValue = notKnownButIsAString as string;
const symbolValue = canBeAnythingButIsAString as symbol;

// Example: Constructor of TopicStepsFactory in TopicSteps.ts