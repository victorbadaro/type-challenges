import { Equal, Expect } from "../helpers/type-utils";

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly string[]> = {
	[P in T[number]]: P;
};

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type test = Expect<Equal<result, {
	tesla: 'tesla',
	'model 3': 'model 3',
	'model X': 'model X',
	'model Y': 'model Y'
}>>;
