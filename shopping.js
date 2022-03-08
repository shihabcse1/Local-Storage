const displayLocalStorageCart = () => {
    const cart = getCart();
    // apply for every name
    for (const name in cart){
        displayProduct(name);
    }
}

const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;

    // if name field is empty then it won't execut the rest part
    if (!name){
        return;
    }

    // display in UL
    displayProduct(name);

    addProductToCart(name);
    // add to local storage

    nameField.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    console.log(cart);
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCart();
    cart[name] = 1; // just added 1 as a sample value
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// we need to initiaze getCart first
displayLocalStorageCart();