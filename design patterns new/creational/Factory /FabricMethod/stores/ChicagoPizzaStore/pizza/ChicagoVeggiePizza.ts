import Pizza from "../../../types/Pizza";

class ChicagoVeggiePizza implements Pizza {
    name: string = 'Chicago veggie'
    ingredients: string[] = ['parmesan', 'tomatoes', 'mushrooms']

    prepare = () => {}
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default ChicagoVeggiePizza
