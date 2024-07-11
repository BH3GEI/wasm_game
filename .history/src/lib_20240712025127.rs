use wasm_bindgen::prelude::*;



#[wasm_bindgen]
pub fn hello(name: &str)  {
    alert(name);
}