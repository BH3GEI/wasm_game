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
struct World{
    width: usize,
    height: usize,
}

#[wasm_bindgen]
impl World {
    pub fn new(width: usize) -> Self {
        Self {
            width,
            size: width * width,
        }
    }
}