class Character {
    showAttack(){
        return `my attack in ${this.attack} points`
    }
}

class AbyssWalker extends Character{
    constructor() {
        super();
        this.attack = 120
    }
}

class SpellSigner extends Character{
    constructor() {
        super();
        this.attack = 110
    }
}

class BladeDancer extends Character{
    constructor() {
        super();
        this.attack = 80
    }
}

class StatDiscover {
    discoverAttack(character){
        return character.showAttack()
    }
}

const discoverer = new StatDiscover();

const awAttack = discoverer.discoverAttack(new AbyssWalker())
const ssAttack = discoverer.discoverAttack(new SpellSigner())
const bdAttack = discoverer.discoverAttack(new BladeDancer())


console.log('awAttack', awAttack);
console.log('ssAttack', ssAttack);
console.log('bdAttack', bdAttack);
