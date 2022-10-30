import Pizza from "../types/Pizza";

class CheesePizza implements Pizza {
    name: string = 'cheese'
    ingredients: string[] = ['parmesan', 'cheddar', 'brie']

    prepare = () => {}
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default CheesePizza
