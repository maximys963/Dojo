import Mediator from "./Mediator";

import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Input from "./components/Input";

class UIMediator implements Mediator {
    btn: Button
    checkbox: Checkbox
    input: Input

    constructor(button, checkbox, input) {
        this.btn = new Button('simpleButton', this)
        this.checkbox = new Checkbox('checkbox', this)
        this.input = new Input('input', this)
    }

    notify = (name: string, event: string) => {
        if(name === 'simpleButton' && event === 'click'){

        }
    }
}

export default UIMediator
