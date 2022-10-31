import Pizza from "../types/Pizza";

class Pepperoni implements Pizza {
    name: string = 'pepperoni'
    ingredients: string[] = ['parmesan', 'cheddar', 'brie']

    prepare = () => {}
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default Pepperoni
