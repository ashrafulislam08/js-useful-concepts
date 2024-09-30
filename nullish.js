// ?? Nullish Coalescing Operator

const name = null;
const greet = `Salam, ${name ?? "Ashraful"}`;
console.log(greet);

const value = undefined;
console.log(value ?? "You are fool, define a value to it");
