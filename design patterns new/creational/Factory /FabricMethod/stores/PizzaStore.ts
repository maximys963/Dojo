import PizzaTypes from "../enums/PizzaTypes";

import Pizza from "../types/Pizza";

abstract class PizzaStore {
    createPizza = (type: PizzaTypes): Pizza => {
        return {
            ingredients: [''],
            name: '',
            prepare: () => {},
            bake: () => {},
            cut: () => {},
            box: () => {}
        }
    }
}

export default PizzaStore
