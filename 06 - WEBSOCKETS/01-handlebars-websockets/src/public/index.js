const socket = io();

socket.on('saludoDesdeBack', (message)=>{
    console.log(message);
    socket.emit('respuestaDesdeFront', 'Muchas gracias')
})

const form = document.getElementById('form')
const inputName = document.getElementById('name')
const inputPrice = document.getElementById('price')
const products = document.getElementById('products')

form.onsubmit = (e) =>{
    e.preventDefault()
    const name = inputName.value
    const price = inputPrice.value
    socket.emit('newProd', { name, price })
}

socket.on('products', (array) =>{
    let infoProducts = ''
    array.forEach((p)=>{
        infoProducts += `${p.name} - $${p.price} </br>`
    })
    products.innerHTML = infoProducts
})