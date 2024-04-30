import EventEmitter from 'events';


//creating instance
const customEmitter = new EventEmitter()


//1. on: listen /register for an event
customEmitter.on('response', (name, id) => {
    console.log(`user: ${name} id: ${id}`);
})

customEmitter.emit('response', 'pathum', 23)
customEmitter.emit('response', 'nayomi', 27)
customEmitter.emit('response', 'layuki', 2)

//2. once: listen/ register for an event => only one
//3. emit: emit/call an event


