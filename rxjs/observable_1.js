const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise é Massa!')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Observer')
    subscriber.next('é')
    setTimeout(() => {
        subscriber.next('Massa!')
        subscriber.complete()
    }, 1000);
})

obs.subscribe(console.log)
obs.subscribe(texto => console.log(texto.toUpperCase()))