// Case I have flooding device in my bathroom
// It can indicate flood add throw warning with status

// Smart home have several devices that track this warning and should make some actions due to "incident"

class FloodSensor {
    private isFlood = false
    public floodEvent: FloodEventManager

    constructor() {
        this.floodEvent = new FloodEventManager()
        this.checkFloodStatus()
    }

    checkFloodStatus = () => {
        this.isFlood = true

        this.notify()
        return setTimeout(() => {
            this.checkFloodStatus()
        }, 5000)
    }

    notify = () => {
        this.floodEvent.notify(this.isFlood)
    }
}

interface Subscriber {
    update: (isFlood: boolean) => void
}

class FloodEventManager {
    private listeners: Subscriber[] = []

    public subscribe = (instance: Subscriber) => {
        this.listeners.push(instance)
    }

    public unsubscribe = (instance: Subscriber) => {
        this.listeners = this.listeners.filter((subscriber) => subscriber !== instance)
    }

    public notify = (isFlood: boolean) => {
        this.listeners.forEach((listener) => {
            listener.update(isFlood)
        })
    }
}

class SmartLatch {
    private isOpened = true

    update = (isFlood: boolean) => {
        if (isFlood) {
            console.log('SmartLatch: Oh no ... I am locking watter connection')
            this.isOpened = false
        }
    }
}


class SmsNotifier {
    sendWarning = () => {
        console.log('SmsNotifier: Flood is identified in your flat')
    }

    update = (isFlood: boolean) => {
        if (isFlood) {
            this.sendWarning()
        }
    }
}

const smartLatch = new SmartLatch()
const smsNotifier = new SmsNotifier()

const floodSensor = new FloodSensor()

floodSensor.floodEvent.subscribe(smartLatch)
floodSensor.floodEvent.subscribe(smsNotifier)


