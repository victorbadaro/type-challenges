export type Expect<T extends true> = T;
export type Equal<X, Y> =
	(<T>() => T extends X ? 1 : 2) extends
	(<T>() => T extends Y ? 1 : 2) ? true : false;
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;
export type IsAny<T> = 0 extends (1 & T) ? true : false;
export type NotAny<T> = true extends IsAny<T> ? false : true;
