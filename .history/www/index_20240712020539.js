async function run() {
    const importObject = {
        console: {
            log: () => {
                console.log("log info");
            },
            error: () => {
                console.log("error info");
            }
        }
    }



    const response = await fetch("test2.wasm");
    const buffer = await response.arrayBuffer();
    debugger;
    const wasm = await WebAssembly.instantiate(buffer, importObject);

    const addTwo = wasm.instance.exports.addTwo;
    const result = addTwo(10, 2);

    console.log(result);
}

run();