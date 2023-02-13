import Mediator from "../Mediator";

class Checkbox {
    name: string
    mediator: Mediator

    constructor(name, mediator) {
        this.name = name
        this.mediator = mediator
    }

    click = () => {
        this.mediator.notify(this.name, 'click')
    }
}

export default Checkbox
