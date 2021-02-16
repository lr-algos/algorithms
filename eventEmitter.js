/**
 * Implement event emitter
 * https://medium.com/better-programming/how-to-create-your-own-event-emitter-in-javascript-fbd5db2447c4
 */

class MyEventEmitter {
    constructor() {
        this.events = {}
    }

    addEventListener(name, cb) {
        if(!this.events[name]) {
            this.events[name] = [];
        }
        this.events[name].push(cb)
    }

    emit(name, data) {
        if (!this.events[name]) {
            throw new Error(`Event ${name} doesn't exits.`);
          }
        this.events[name].forEach(cb => cb(data))
    }

    removeEventListener(name, cbToRemove) {
        if (!this.events[name]) {
            throw new Error(`Event ${name} doesn't exits.`);
          }
          this.events[name] = this.events[name].filter(cb => cb !== cbToRemove);
    }

}

const myEventEmitter = new MyEventEmitter();

const callback = (data) => {
    console.log('Was fired', data);
}

myEventEmitter.addEventListener('testFire', callback); // Was fired Hola

console.log(myEventEmitter.emit('testFire', 'Hola')); // 
//console.log(myEventEmitter.emit('newFire', 'Try')) // error

myEventEmitter.removeEventListener('testFire', callback);
console.log(myEventEmitter.emit('testFire', 'Hola')); 