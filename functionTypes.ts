function aTraditionalFunction1(arg1: number, arg2: string): void {}
function aTraditionalFunction2(arg1: boolean, arg2?: string): string { return 'value'; }

const anArrowFunction1: (arg1: number, arg2: string) => void = (arg1, arg2) => { return; };
const anArrowFunction2: (arg1: boolean, arg2?: string) => string = (arg1, arg2) => 'value';

async function anAsyncTraditionalFunction(): Promise<string> { return 'value'; };
const anAsyncArrowFunction: () => Promise<string> = async () => 'value';


// --------------------------
// Type inference
function anInferredTraditionalFunction(arg1: number, arg2?: string) { return; }
const anInferredArrowFunction = (arg1: number, arg2?: string) => 'value';