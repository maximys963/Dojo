import Pizza from "../../../types/Pizza";

class NYVeggiePizza implements Pizza {
    name: string = 'Chicago veggie'
    ingredients: string[] = ['parmesan', 'tomatoes', 'mushrooms']

    prepare = () => {}
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default NYVeggiePizza
