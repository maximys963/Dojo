import Pizza from "../../../types/Pizza";

class NYCheesePizza implements Pizza {
    name: string = 'NY cheese'
    ingredients: string[] = ['parmesan', 'cheddar', 'brie']

    prepare = () => {} // Could I say that there are fabric methods ?
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default NYCheesePizza
