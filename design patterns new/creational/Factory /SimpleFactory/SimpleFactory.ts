import CheesePizza from "./pizza/CheesePizza";
import PepperoniPizza from "./pizza/PepperoniPizza";
import ClamPizza from "./pizza/ClamPizza";
import VeggiePizza from "./pizza/VeggiePizza";

import PizzaTypes from "./enums/PizzaTypes";

class SimpleFactory {
    public createPizza = (type: PizzaTypes) => {
        if(type === PizzaTypes.Cheese){
            return new CheesePizza()
        } else if(type === PizzaTypes.Pepperoni){
            return new PepperoniPizza()
        } else if(type === PizzaTypes.Clam){
            return new ClamPizza()
        } else if(type === PizzaTypes.Veggie){
            return new VeggiePizza()
        }

        return new ClamPizza()
    }
}

export default SimpleFactory
