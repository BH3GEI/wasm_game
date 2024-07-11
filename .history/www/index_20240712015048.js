async function run() {
    const response = await fetch("test.wasm");
    const buffer = await response.arrayBuffer();
    const wasm = await WebAssembly.instantiate(buffer);

    const addTwo = wasm.instance.exports.addTwo;
    const result = addTwo(10, 2);

    console.log(result);
}

run();