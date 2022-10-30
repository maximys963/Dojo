import Pizza from "../types/Pizza";

class ClamPizza implements Pizza {
    name: string = 'clam'
    ingredients: string[] = ['parmesan', 'clam']

    prepare = () => {}
    bake = () => {}
    cut = () => {}
    box = () => {}
}

export default ClamPizza
