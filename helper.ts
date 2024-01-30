// a utility type that takes an object type and makes the hover overlay more readable
// ref: https://www.totaltypescript.com/concepts/the-prettify-helper
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
