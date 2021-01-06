class User {
    constructor(name) {
        this.name = name;
        this.room = null
    }

    send( message, to) {
        this.room.send(this, message, to )
    }

    receive(from, message) {
     console.log(` ${from.name} -> ${this.name} message: ${message}`);
    }
}

class Room {
    constructor() {
        this.users = {}
    }

    register(user){
        this.users[user.name] = user;
    }

    send(from, message, to){
        if(to){
            to.receive(from, message)
        }else {
            Object.keys(this.users).forEach((key) => {
                if(this.users[key] !== from){
                    this.users[key].receive(from, message)
                }
            })
        }
    }
}

const dk = new User('dk');
const susan = new User('susan');
const alex = new User('alex');

const room = new Room();

room.register(dk);
room.register(susan);
room.register(alex);

room.send(dk, 'hello all');
room.send(susan, 'please off your mic', alex);
