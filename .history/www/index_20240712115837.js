import init, { World } from "wasm_game";

init().then(() => {
    const world = World.new();
    const worldWidth = world.width();

    const canvas = document.getElementById("snake-world");

    console.log("ok");
});