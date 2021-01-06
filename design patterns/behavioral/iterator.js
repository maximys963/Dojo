class IteratorPattern {
    constructor(data){
        this.data = data;
        this.index = 0;
    }

    [Symbol.iterator](){
        return {
            next: () => {
                if(this.index < this.data.length){
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        value: void 0,
                        done: true,
                    }
                }
            }
        }
    }
}

const iterator = new IteratorPattern(['sdf', 'sdfs', 'werb2']);

for(const val of iterator){
    console.log('value: ', val);
}
