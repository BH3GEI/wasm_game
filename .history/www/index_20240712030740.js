import init, { hello } from "wasm_game";

init().then(() => {
    hello("fuck");
    console.log("not ok");
});