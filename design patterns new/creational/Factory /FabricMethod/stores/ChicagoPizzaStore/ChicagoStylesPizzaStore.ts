import PizzaTypes from "../../enums/PizzaTypes";
import Pizza from "../../types/Pizza";

import PizzaStore from "../PizzaStore";
import ChicagoCheesePizza from "./pizza/ChicagoCheesePizza";
import ChicagoPepperoni from "./pizza/ChicagoPepperoniPizza";
import ChicagoClamPizza from "./pizza/ChicagoClamPizza";
import ChicagoVeggiePizza from "./pizza/ChicagoVeggiePizza";

class ChicagoStylesPizzaStore extends PizzaStore {

    createPizza = ( type: PizzaTypes): Pizza => {
        if(type === PizzaTypes.Cheese){
            return new ChicagoCheesePizza()
        } else if(type === PizzaTypes.Pepperoni){
            return new ChicagoPepperoni()
        } else if(type === PizzaTypes.Clam){
            return new ChicagoClamPizza()
        } else if(type === PizzaTypes.Veggie){
            return new ChicagoVeggiePizza()
        }

        return new ChicagoCheesePizza()
    }

    orderPizza = (type: PizzaTypes): Pizza => {
        const pizza = this.createPizza(type)

        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()

        return pizza
    }
}

export default ChicagoStylesPizzaStore
