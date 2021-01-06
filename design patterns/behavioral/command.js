class Ninja {
    constructor(name = ''){
        this.name = name
    }

    protect(){
        return `${this.name} protect this area`
    }

    hide(){
        return `${this.name} is shadow`
    }
}

class Command {
    constructor(subject) {
        this.subject = subject
        this.commandsExecuted = []
    }

    execute(command){
        this.commandsExecuted.push(command)
        return this.subject[command]()
    }
}

const ninjaCommands = new Command( new Ninja('Lee'));

console.log(ninjaCommands.execute('hide'))
console.log(ninjaCommands.execute('protect'));

console.log(ninjaCommands.commandsExecuted);




