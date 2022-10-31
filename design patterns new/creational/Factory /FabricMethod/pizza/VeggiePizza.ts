import Pizza from "../types/Pizza";

class VeggiePizza implements Pizza {
    name: string = 'veggie'
    ingredients: string[] = ['parmesan', 'tomatoes', 'mushrooms']

    prepare = () => {}
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default VeggiePizza
