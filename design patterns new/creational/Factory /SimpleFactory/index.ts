import PizzaStore from "./PizzaStore";
import SimpleFactory from "./SimpleFactory";
import PizzaTypes from "./enums/PizzaTypes";

const pizzaStore = new PizzaStore(new SimpleFactory())

const cheesePizza = pizzaStore.orderPizza(PizzaTypes.Cheese)
console.log('cheesePizza', cheesePizza)
