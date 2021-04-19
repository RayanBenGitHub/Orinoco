cartPreview();

const searchParams = new URLSearchParams(location.search);
const newId = searchParams.get("_id");


const newUrl = `https://teddies-api.herokuapp.com/api/cameras/${newId}`;

fetch(newUrl)
    .then((response) => response.json())
    .then((data) => {
        const product = data;
        addCard(data);

        
        function addCard(product) {

            
            const selectionProductImage = document.getElementById("productImage");
            selectionProductImage.innerHTML += `
        <img src="${product.imageUrl}" class="img-fluid img-thumbnail" alt="${product.name}">
        `;
            const selectionProductName = document.getElementById("productName");
            selectionProductName.innerHTML += `
        <h5 class="card-title">${product.name}</h5>
        `;
            const selectionProductPrice = document.getElementById("productPrice");
            selectionProductPrice.innerHTML += `
         <h5 class="card-title">${convertPrice(product.price)}</h5>
        `;
            const selectionProductDescription = document.getElementById("productDescription");
            selectionProductDescription.innerHTML += `
        <p class="card-text">${product.description}</p>
        `;
            addLenses(product);
        }

        function addLenses(product) {
            const versionChoice = document.getElementById("option");
            for (let lenses of product.lenses) {
                versionChoice.innerHTML += `<option value="${lenses}">${lenses}</option>`;
            }
        }

        const btnAddcart = document.getElementById("btnAddcart");
        btnAddcart.addEventListener("click", (e) => {
            e.preventDefault();
            const list = document.getElementById("option");
            const quantity = document.getElementById("quantity");

           
            let objectProduct = new Product(
                newId,
                product.name,
                product.description,
                product.price,
                list.value,
                quantity.value,
                product.imageUrl
            );
            
            let isAlreadyPresent = false;
            let indexModification;
            for (products of cart) {
                switch (products.option) {
                    case objectProduct.option:
                        isAlreadyPresent = true;
                        indexModification = cart.indexOf(products);
                }
            }

            
            if (isAlreadyPresent) {
                cart[indexModification].quantity =
                    +cart[indexModification].quantity + +objectProduct.quantity;
                localStorage.setItem("cameras", JSON.stringify(cart));
                
            } else {
                cart.push(objectProduct);
                localStorage.setItem("cameras", JSON.stringify(cart));
            }
        });
    });