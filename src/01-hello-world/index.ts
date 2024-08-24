import { Equal, Expect } from "../helpers/type-utils";

type HelloWorld = string;
type test = Expect<Equal<HelloWorld, string>>;
