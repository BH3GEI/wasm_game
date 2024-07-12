import init, { hello } from "wasm_game";

init().then(() => {
    hello();
    console.log("hello");
});