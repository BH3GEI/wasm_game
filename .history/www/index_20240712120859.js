import init, { World } from "wasm_game";

init().then(() => {
    const CELL_SIZE = 20;

    const world = World.new(16);
    const worldWidth = world.width();

    const canvas = document.getElementById("snake-world");
    const context = canvas.getContext("2d");

    canvas.width = worldWidth * CELL_SIZE;
    canvas.height = worldWidth * CELL_SIZE;

    function drawWorld() {
        context.beginPath();
        for (let x = 0; x < worldWidth + 1; x++) {
            context.moveTo(x * CELL_SIZE, 0);
            context.lineTo(x * CELL_SIZE, worldWidth * CELL_SIZE);
        }
        for (let y = 0; y < worldWidth + 1; y++) {
            context.moveTo(0, y * CELL_SIZE);
            context.lineTo(CELL_SIZE * worldWidth, y * CELL_SIZE);
        }
    }
    drawWorld();
});