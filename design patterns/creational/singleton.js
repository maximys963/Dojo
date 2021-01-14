class Star {
    constructor(name) {
        if(Star.isExists) {
            return Star.instance
        }

        Star.instance = this
        Star.isExists = true
        this.name = name
    }
}

const sun = new Star('Sun');

const somethingElse = new Star('Sirius');
