import { Equal, Expect } from "../helpers/type-utils";

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type First<T extends any[]> = T extends [] ? never : T[0];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

type cases = [
	Expect<Equal<First<['a', 'b', 'c']>, 'a'>>,
	Expect<Equal<First<arr2>, 3>>,
	Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
	Expect<Equal<First<[]>, never>>,
	Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
	// @ts-expect-error
	First<'notArray'>,

	// @ts-expect-error
	First<{ 0: 'arrayLike' }>,
];
