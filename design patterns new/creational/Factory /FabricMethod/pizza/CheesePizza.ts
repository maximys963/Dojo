import Pizza from "../types/Pizza";

class CheesePizza implements Pizza {
    name: string = 'cheese'
    ingredients: string[] = ['parmesan', 'cheddar', 'brie']

    prepare = () => {} // Could I say that there are fabric methods ?
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default CheesePizza
