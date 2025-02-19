use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;

#[global_allocator]
static ALLOC: WeeAlloc = WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn hello(name: &str)  {
    alert(name);
}

#[wasm_bindgen]

struct SnakeCell(usize);

#[wasm_bindgen]
pub struct Snake {
    cells: Vec<SnakeCell>,
}

impl Snake{
    fn new(spawn_index: usize) -> Self {
        Self {
            body: vec![SnakeCell(spawn_index)],
        }
    }
}

#[wasm_bindgen]
struct World{
    width: usize,
    size: usize,
}

#[wasm_bindgen]
impl World {
    pub fn new(width: usize) -> Self {
        Self {
            width,
            size: width * width,
        }
    }
    pub fn width(&self) -> usize {
        self.width
    }
}