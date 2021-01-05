class Human {
    constructor(name) {
       this.name = name
       this.isSuperhero = false
    }

    greeting(){
        console.log(`Hello my name is ${name}`)
    }

    work(){
        console.log('I am just working')
    }

}

function superHeroDecorator(human) {
    human.isSuperHero = true
    human.activateSuperPower = function(){
        console.log('...super power stuff');
    }

    return human
}

const superMan = superHeroDecorator(new Human('John'));

console.log(superMan.activateSuperPower());

