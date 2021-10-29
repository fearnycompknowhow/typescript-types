const aGenericObject: object = {};

const aSpecificObject: {
	numberField: number;
	stringField: string;
	boleanField: boolean;
	optionalField?: number;
	notOptionalField: string | undefined;
} = {
	numberField: 123,
	stringField: 'a string',
	boleanField: true,
	notOptionalField: undefined
};

// --------------------------
// Using bracket syntax on this object won't work unless TypeScript can statically determine
// which field you are accessing:
let someDynamicKey = 'could be anything';

aSpecificObject[someDynamicKey];
aSpecificObject['numberField'];

let aLiteralKey: 'numberField' | 'stringField' = 'numberField';

aSpecificObject[aLiteralKey];


// --------------------------
const aMapLikeObject: { [key: string]: number } = {
	anyKeyWillWork: 1,
	'thisKeyWillAlsoWork': 321.123
};

aMapLikeObject[someDynamicKey];

const aMapLikeObject2: { [key: number]: string } = {
	1: 'any string will work',
	321.123: 'this sting will also work',
	[-1]: ''
};


// --------------------------
const aMixedMapLikeObject: {
	explicitField1: number;
	explicitField2: number;
	[key: string]: number;
} = {
	explicitField1: 1,
	explicitField2: 2
};

aMixedMapLikeObject.explicitField1;
aMixedMapLikeObject[someDynamicKey];


// Example: StepMap in TopicSteps


// --------------------------
// Type inference
const anInferredStaticObject = {
	inferredNumberField: 1,
	inferredStringFIeld: 'string'
};