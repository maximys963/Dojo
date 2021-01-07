const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


class Subject{
    constructor() {
        this.observers = []
    }

    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(observer){
        this.observers = this.observers.filter((obs) => obs !== observer)
    }

    emit(changes){
        this.observers.forEach((observer) => {
            observer.update(changes)
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state;
        this.initialState = state;
    }

    update(changes) {
        switch (changes.type){
            case INCREMENT:
                this.state = this.state + 1
                break;
            case DECREMENT:
                this.state = --this.state
                break;
            default: this.state = this.initialState
        }
    }
}

const stream$ = new Subject();

const obs1 = new Observer(9);
const obs2 = new Observer(7);

console.log(obs1.state);
console.log(obs2.state)

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.emit({ type: INCREMENT});

console.log(obs1.state);
console.log(obs2.state)



