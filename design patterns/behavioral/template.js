class Ninja {
    constructor(name, mission) {
        this.name = name;
        this.mission = mission
    }

    getSkills() {}

    getName(){
        return `my name is ${this.name}`
    }
}

class Jonin extends Ninja{
    constructor(name, mission) {
        super(name, mission)
    }

    getSkills() {
        return `I am use djutsu and genjutsu on mission ${this.mission} grade`
    }
}

class Genin extends Ninja {
    constructor(name, mission) {
        super(name, mission)
    }

    getSkills() {
        return `I am use djutsu on mission ${this.mission} grade`
    }
}

const kai = new Genin('Kai', 'C');
console.log(kai.getSkills());

const lee = new Jonin('Lee', 'A');
console.log(lee.getSkills());
