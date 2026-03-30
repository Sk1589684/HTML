function normalFunction() {
    console.log("1. Normal Function Executed");
}

console.log("Start of Script");

normalFunction();

setTimeout(() => {
    console.log("4. setTimeout Callback Executed");
}, 0);

const promiseExample = new Promise((resolve, reject) => {
    console.log("2. Promise Executor Executed");
    resolve();
});

promiseExample.then(() => {
    console.log("3. Promise .then() Executed");
});

console.log("End of Script");