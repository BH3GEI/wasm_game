import init, { World } from "wasm_game";

init().then(() => {
    const CELL_SIZE = 20;

    const world = World.new();
    const worldWidth = world.width();

    const canvas = document.getElementById("snake-world");
    const context = canvas.getContext("2d");

    canvas.width = worldWidth * CELL_SIZE;
    canvas.height = worldWidth * CELL_SIZE;

    function drawWorld() {
        context.beginPath();

        for (let x = 0; x < worldWidth; x++) {
            for (let y = 0; y < worldWidth; y++) {
                const cell = world.get_cell(x, y);
                context.fillStyle = cell === 1 ? "#000000" : "#ffffff";
                context.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }
    }

    console.log("ok");
});