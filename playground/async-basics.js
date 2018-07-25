// Async Codd

console.log("Starting up");

setTimeout(() => {
  console.log("Inside of callback");
}, 2000);

setTimeout(() => {
  console.log("Inside of callback without delay");
}, 0);

console.log("Finishing up");
