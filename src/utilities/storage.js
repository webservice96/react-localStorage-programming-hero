const getDB = () => {
    return localStorage.getItem('shopping_cart');
}

const updateDB = (jsonData) => {
    localStorage.setItem('shopping_cart', JSON.stringify(jsonData));
}

let shopingCart = {};

const addToDB = id => {
    const exists = getDB();
    if (!exists) {
        shopingCart[id] = 1;
    } else {
        shopingCart = JSON.parse(exists);
        if (shopingCart[id]) {
            const newCount = shopingCart[id] + 1;
            shopingCart[id] = newCount;
        } else {
            shopingCart[id] = 1;
        }
    }
    updateDB(shopingCart);
}

const deleteItemFromDB = (id) => {
    const existsItem = getDB();
    if (!existsItem) {
        console.log('Cart is empty!');
    } else {
        shopingCart = JSON.parse(existsItem);
        delete shopingCart[id];
        updateDB(shopingCart);
    }
}

export { addToDB, deleteItemFromDB }