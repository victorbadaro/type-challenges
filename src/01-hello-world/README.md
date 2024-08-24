<!--info-header-start--><h1>Hello World <img src="https://img.shields.io/badge/-warm--up-teal" alt="warm-up"/> </h1><blockquote><p>by Anthony Fu <a href="https://github.com/antfu" target="_blank">@antfu</a></p></blockquote><!--info-header-end-->

Hello, World!

In Type Challenges, we use the type system itself to do the assertion.

For this challenge, you will need to change the following code to make the tests pass (no type check errors).

```ts
// expected to be string
type HelloWorld = any
```

```ts
// you should make this work
type test = Expect<Equal<HelloWorld, string>>
```

<!--info-footer-start--><br><a href="https://tsch.js.org/13/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a><!--info-footer-end-->
