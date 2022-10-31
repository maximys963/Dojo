// Test drive
import PizzaTypes from "./enums/PizzaTypes";

import NYStylesPizzaStore from "./stores/NYStylesPizzaStore/NYStylesPizzaStore";
import ChicagoStylesPizzaStore from "./stores/ChicagoPizzaStore/ChicagoStylesPizzaStore";

const nyStore = new NYStylesPizzaStore()
const chicagoStore = new ChicagoStylesPizzaStore()

const chicagoCheese = chicagoStore.createPizza(PizzaTypes.Cheese)
const nyCheese = nyStore.createPizza(PizzaTypes.Cheese)

console.log('chicagoCheese', chicagoCheese)
console.log('nyCheese', nyCheese)


