cartPreview();

const orderForm = document.getElementById("orderForm");
const emptycart = document.getElementById("emptycart");

// indique que le panier est vide
if (cart.length < 1) {
    orderForm.classList.add("d-none");
    // sinon affiche le tableau avec les produits
} else {
    orderForm.classList.add("d-none");
    emptycart.classList.add("d-none");
    const fullcart = document.getElementById("cart");
    fullcart.classList.toggle("d-none");
    for (product of cart) {
        displayProductListTable(product);
    }

    // ajouter produit
    function addProduct(event) {
        const index = event.target.getAttribute("data-index");
        cart[index].quantity++;
        localStorage.setItem("cameras", JSON.stringify(cart));
        location.reload();
    }

    const buttonAdd = document.getElementsByClassName("plus");
    for (add of buttonAdd) {
        add.addEventListener("click", addProduct);
    }

    //supprimer un produit
    function minusProduct(event) {
        const index = event.target.getAttribute("data-index");
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
        localStorage.setItem("cameras", JSON.stringify(cart));
        location.reload();
    }

    const buttonMinus = document.getElementsByClassName("minus");
    for (minus of buttonMinus) {
        minus.addEventListener("click", minusProduct);
    }

    //affiche le prix total
    totalPrice();

    //affiche le formulaire et cache les boutons valider/supprimer panier
    const validationcart = document.getElementById("validationcart");
    const cacheButton = document.getElementById("cacheButton");
    validationcart.addEventListener("click", () => {
        orderForm.classList.toggle("d-none");
        cacheButton.classList.add("d-none");
    });

    //vide le panier
    const buttonClearcart = document.getElementById("clearcart");
    buttonClearcart.addEventListener("click", () => {
        clearcart();
        location.reload();
    });

    //validation du formulaire et envoie en POST
    const order = document.getElementById("order");
    const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
    const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
    const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
    const checkBox = document.getElementById("invalidCheck2");

    order.addEventListener("click", (event) => {
        // on prépare les infos pour l'envoie en POST
        let contact = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            address: document.getElementById("address").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
        };
        // on valide que le formulaire soit correctement rempli
        if (
            (regexMail.test(contact.email) == true) &
            (regexName.test(contact.firstName) == true) &
            (regexName.test(contact.lastName) == true) &
            (regexCity.test(contact.city) == true) &
            (regexAddress.test(contact.address) == true) &
            (checkBox.checked == true)
        ) {
            event.preventDefault();

            // on stocke l'heure et la date de la commande
            const todayDate = new Date();
            let nowadays = todayDate.getDate();
            let month = todayDate.getMonth() + 1;
            let todayHours = todayDate.getHours();
            let todayMinutes = todayDate.getMinutes();

            if (nowadays < 10) {
                nowadays = "0" + nowadays;
            }

            if (month < 10) {
                month = "0" + month;
            }

            if (todayHours < 10) {
                todayHours = "0" + todayHours;
            }

            if (todayMinutes < 10) {
                todayMinutes = "0" + todayMinutes;
            }

            const date = nowadays + "-" + month + "-" + todayDate.getFullYear();
            const hours = todayHours + ":" + todayMinutes;
            const fullDate = { date, hours };
            const infoOrder = JSON.parse(localStorage.getItem("date")) || [];
            infoOrder.push(fullDate);
            localStorage.setItem("date", JSON.stringify(infoOrder));

            let products = [];
            for (listId of cart) {
                products.push(listId.id);
            }

            // on envoie en POST
            fetch("https://teddies-api.herokuapp.com/api/cameras/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ contact, products }),
            })
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem("order", JSON.stringify(data));
                    document.location.href = "order.html";
                })
                .catch((erreur) => console.log("erreur : " + erreur));
        } else {
            alert(
                "Veuillez correctement renseigner l'entièreté du formulaire pour valider votre commande."
            );
        }
    });
}
// ex objet littéral
const monObjet = {
    monId1 : {
        //monObjet1 (qtt , prix, etc..)
    },
    monId2 : {
        // pareil
    }
};
const monObjet1 = monObjet ["monId1"]
//