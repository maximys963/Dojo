import Pizza from "../../../types/Pizza";

class NYClamPizza implements Pizza {
    name: string = 'Chicago clam'
    ingredients: string[] = ['parmesan', 'clam']

    prepare = () => {}
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default NYClamPizza
