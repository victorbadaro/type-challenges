import { Equal, Expect } from "../helpers/type-utils";

type Tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type SpaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

type Length<T extends readonly string[]> = T['length'];

type teslaLength = Length<Tesla>; // expected 4
type spaceXLength = Length<SpaceX>; // expected 5

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const;

type cases = [
	Expect<Equal<Length<Tesla>, 4>>,
	Expect<Equal<Length<SpaceX>, 5>>,

	Expect<Equal<teslaLength, 4>>,
	Expect<Equal<spaceXLength, 5>>,

	Expect<Equal<Length<typeof tesla>, 4>>,
	Expect<Equal<Length<typeof spaceX>, 5>>,

	// @ts-expect-error
	Length<5>,

	// @ts-expect-error
	Length<'hello world'>
];
