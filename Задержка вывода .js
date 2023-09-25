function runInOrder(functions, delays) {
  for (let i = 0; i < functions.length; i++) {
    setTimeout(functions[i], delays[i]);
  }
}

const functions = [() => console.log("first"), () => console.log("second"), () => console.log("third")];
const delays = [2000, 1000, 3000];

runInOrder(functions, delays); 