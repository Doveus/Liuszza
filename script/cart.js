let names = document.querySelectorAll('.product-detail h1')
let prices = document.querySelectorAll('.product-detail h2')
let by = document.querySelectorAll('.product-detail h3')
function addToCart(idx){
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    let item = {
        'name': names[idx].innerHTML,
        'price': prices[idx].innerHTML, 
        'by': by[idx].innerHTML
    }
    cart.push(item)
    
    localStorage.setItem("cart", JSON.stringify(cart));
}

function showCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    console.log(cart)

    let body = document.querySelector('body')

    cart.forEach(element => {
        const temp = document.createElement('h1')
        temp.textContent = `Product: ${element['name']}, Price: ${element['price']}, Product: ${element['by']},
        `
        body.appendChild(temp)
    });
}