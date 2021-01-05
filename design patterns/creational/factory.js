class Gladiator {
    constructor(name) {
        this.name = name;
    }

    tripleSonicSlash() {
        console.log('physical damage 210 points')
    }

    attack(){
        this.tripleSonicSlash()
    }
}

class TreasureHunter {
    constructor(name) {
        this.name = name;
    }

    deadlyBlow() {
        console.log('physical damage with critical attack  470 points')
    }

    attack(){
        this.deadlyBlow()
    }
}

class SpellHowler {
    constructor(name) {
        this.name = name;
    }

    hurricane(){
        console.log('magical damage 150 points')
    }

    attack(){
        this.hurricane()
    }
}

class CharacterFactory{

    static characterTypes = {
        glad: Gladiator,
        th: TreasureHunter,
        sh: SpellHowler
    }

    create(type, name){
        const Character = CharacterFactory.characterTypes[type] || CharacterFactory.characterTypes.glad
        const userCharacter = new Character(name);

        return userCharacter
    }
}

const factory = new CharacterFactory();

const gameParty = [
    factory.create('sh', 'elMonster'),
    factory.create('th', 'FirstAvenger'),
    factory.create('glad', 'MasterDiego')
]

gameParty.forEach((character) => character.attack());


