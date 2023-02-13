import UIMediator from "./UIMediator";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";

const btn = new Button('simpleButton', this)
const checkbox = new Checkbox('checkbox', this)
this.input = new Input('input', this)

new UIMediator()

