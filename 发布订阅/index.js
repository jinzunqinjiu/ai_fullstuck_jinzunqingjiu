class EventEmitter {
    constructor() {
        this.handles = {}
    }
    on(eventName, cb) {
        if (!this.handles[eventName]) {
            this.handles[eventName] = []
        }
        this.handles[eventName].push(cb)
    }
    emit(eventName) {
        if (this.handles[eventName]) {
            const handles = this.handles[eventName]
            handles.forEach(cb => {
                cb()
            });
        }
    }
    Off(eventName, cb) {

    }
    once(eventName, cb) {
        const wrap = () => {
            cb()
            this.Off(eventName, wrap)
        }
        this.on(eventName, wrap)
    }
}

const emiter = new EventEmitter()


emiter.on('onSell', () => {
    console.log('万总去买房');
})

emiter.on('onSell', () => {
    console.log('吴总去买房');
})
emiter.on('onCar', () => {
    console.log('吴总去买房');
})
emiter.emit('onSell')

