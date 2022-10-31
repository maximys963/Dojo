import Pizza from "../../../types/Pizza";

class ChicagoPepperoni implements Pizza {
    name: string = 'Chicago pepperoni'
    ingredients: string[] = ['parmesan', 'cheddar', 'brie']

    prepare = () => {}
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default ChicagoPepperoni
