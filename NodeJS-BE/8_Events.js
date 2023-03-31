const { EventEmitter } = require('events');
const myEventEmitter = new EventEmitter();

console.log(myEventEmitter);

const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah di buat!`);
}

// mendaftarkan fungsi makeCoffee sebagai list event coffe-order
myEventEmitter.on('coffee-order', makeCoffee);

// membangkitkan event
myEventEmitter.emit('coffee-order', { name: 'Hitam putih' });

// console.log(myEventEmitter);


const makeACOffee = ({ name, price }) => {
    console.log(`Kopi ${name} telah dibuat \nBill yang harus di bayar adalah ${price}`);
}

myEventEmitter.on('orderACoffee', makeACOffee);
myEventEmitter.emit('orderACoffee', { name: 'Kapal Api', price: 2500 });