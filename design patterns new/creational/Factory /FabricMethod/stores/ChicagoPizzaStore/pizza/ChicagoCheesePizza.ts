import Pizza from "../../../types/Pizza";

class ChicagoCheesePizza implements Pizza {
    name: string = 'Chicago cheese'
    ingredients: string[] = ['parmesan', 'cheddar', 'brie']

    prepare = () => {} // Could I say that there are fabric methods ?
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default ChicagoCheesePizza
