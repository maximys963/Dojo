import Pizza from "../../../types/Pizza";

class ChicagoClamPizza implements Pizza {
    name: string = 'Chicago clam'
    ingredients: string[] = ['parmesan', 'clam']

    prepare = () => {}
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default ChicagoClamPizza
