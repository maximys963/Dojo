class IPhone4s{
    charge(pin){
        switch(pin){
            case '1a': return true
            case '1b': return true
            case '4c': return false
            default: return undefined
        }
    }
}

class IPhone10 {
    charge(pin){
        const pinMap = {
            '1a': false,
            '1b': false,
            '4c': true
        }

        return pinMap[pin]
    }
}

class IphoneChargeAdapter {
    constructor() {
        this.iphoneTen = new IPhone10()
    }

    charge(pin){
        switch(pin){
            case '1a': return this.iphoneTen.charge(pin)
            case '1b': return this.iphoneTen.charge(pin)
            case '4c': return this.iphoneTen.charge(pin)
            default: return undefined
        }
    }
}

const iphoneCharge = new IphoneChargeAdapter();
console.log(iphoneCharge.charge('1a'))

