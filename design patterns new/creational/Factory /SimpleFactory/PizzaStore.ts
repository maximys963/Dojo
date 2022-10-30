import Pizza from "./types/Pizza";
import PizzaTypes from "./enums/PizzaTypes";
import SimpleFactory from "./SimpleFactory";

class PizzaStore {
    private factory: SimpleFactory

    constructor(factory: SimpleFactory) {
        this.factory = factory
    }

    orderPizza = (type: PizzaTypes): Pizza => {
        const pizza = this.factory.createPizza(type)

        pizza.prepare()
        pizza.prepare()
        pizza.cut()
        pizza.box()

        return pizza
    }
}

export default PizzaStore
