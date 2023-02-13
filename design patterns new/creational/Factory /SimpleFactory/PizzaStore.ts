import Pizza from "./types/Pizza";
import PizzaTypes from "./enums/PizzaTypes";
import SimpleFactory from "./SimpleFactory";

class PizzaStore {
    constructor(private factory: SimpleFactory) {}

    orderPizza = (type: PizzaTypes): Pizza => {
        const pizza = this.factory.createPizza(type)

        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()

        return pizza
    }
}

export default PizzaStore
