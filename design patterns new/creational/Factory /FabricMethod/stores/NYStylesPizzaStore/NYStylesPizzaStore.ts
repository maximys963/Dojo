import PizzaTypes from "../../enums/PizzaTypes";
import Pizza from "../../types/Pizza";

import PizzaStore from "../PizzaStore";
import NYCheesePizza from "./pizza/NYCheesePizza";
import NYPepperoniPizza from "./pizza/NYPepperoniPizza";
import NYClamPizza from "./pizza/NYClamPizza";
import NYVeggiePizza from "./pizza/NYVeggiePizza";

class NYStylesPizzaStore extends PizzaStore {

    createPizza = ( type: PizzaTypes): Pizza => {
        if(type === PizzaTypes.Cheese){
            return new NYCheesePizza()
        } else if(type === PizzaTypes.Pepperoni){
            return new NYPepperoniPizza()
        } else if(type === PizzaTypes.Clam){
            return new NYClamPizza()
        } else if(type === PizzaTypes.Veggie){
            return new NYVeggiePizza()
        }

        return new NYCheesePizza()
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

export default NYStylesPizzaStore
