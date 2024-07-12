import init, { World } from "wasm_game";

init().then(() => {
    const world = World.new();
    console.log("ok");
});