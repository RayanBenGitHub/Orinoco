const url = `https://teddies-api.herokuapp.com/api/cameras`;
const cart = JSON.parse(localStorage.getItem("cameras")) || [];


function convertPrice(productPrice) {
    let price = `${productPrice}`;
    price = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(price / 100);
    return price;
}


class Product {
    constructor(id, name, description, price, option, quantity, imgurl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = +price;
        this.option = option;
        this.quantity = +quantity;
        this.imgurl = imgurl;
    }
}


function displayTotalcart() {
    let totalcart = 0;
    cart.forEach((camera) => {
        totalcart = totalcart + camera.price * camera.quantity;
    });
    return totalcart;
}


function displayProductListTable(product) {
    const indexProduct = cart.indexOf(product);
    const productList = document.getElementById("productscart");
    productList.innerHTML += `
    <tr class="text-center">
        <td class="w-25">
            <img src="${product.imgurl}" class="img-fluid img-thumbnail" alt="${product.name}">
        </td>
        <td class="align-middle">
            <span>${product.name}</span>
        </td>
        <td class="align-middle">
            <span>${product.option}</span>
        </td>
        <td class="align-middle productQuantity">
            <button type="button" class="rounded minus data-toggle="modal" data-target="#exampleModal" data-index="${indexProduct}"><span class="fas fa-minus-square text-danger" data-index="${indexProduct}"></span></button>
            <span class="mx-0 mx-lg-3"> ${product.quantity}</span>
            <button type="button" class="rounded plus" data-toggle="modal" data-target="#exampleModal" data-index="${indexProduct}"><span class="fas fa-plus-square text-success" data-index="${indexProduct}"></span></button>
        </td>
        <td class="align-middle">
            <span>${convertPrice(product.price)}</span>
        </td>
        <td class="align-middle bg-light">
            <span>${convertPrice(product.quantity * product.price)}</span>
        </td>
    </tr>`;
}


function totalPrice() {
    const totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML += `${convertPrice(displayTotalcart())}`;
}


function cartPreview() {
    if (cart.length == 0) {
    } else {
        let addcartPreview = document.getElementById("cartPreview");
        let calculcartPreview = 0;
        for (product of cart) {
            calculcartPreview += product.quantity;
        }
        addcartPreview.innerHTML = `Panier <span class="badge rounded-pill bg-secondary align-middle my-auto">${calculcartPreview}</span>`;
    }
}


function clearcart() {
    localStorage.clear();
}