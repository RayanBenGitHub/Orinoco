const order = JSON.parse(localStorage.getItem("order")) || [];
const date = JSON.parse(localStorage.getItem("date")) || [];


const informations = document.getElementById("contact");
informations.innerHTML += `
    <p class="fs-5"><span class="fw-bold text-capitalize">${order.contact.firstName}</span>, merci pour votre achat sur notre site !</p>
    <p class="fs-5"> Votre commande passée le <span class="fw-bold">${date[0].date}</span> à <span class="fw-bold">${date[0].hours}</span> d'un montant total de <span class="fw-bold">${convertPrice(displayTotalcart())}</span> a été validée.</p>
    <p class="fs-5">Elle porte la référence <span class="fw-bold">${order.orderId}</span>.</p>
    <p class="fs-5">Votre facture va vous être transmise par mail à : <span class="fw-bold">${order.contact.email}</span>.</p>
    <p class="fs-5">Votre commande sera envoyée à l'adresse suivante :
    <div class=" fs-5 text-center fw-bold">
        <p class="text-capitalize">${order.contact.firstName} ${order.contact.lastName}</p>
        <p class="text-capitalize">${order.contact.address}</p>
        <p class="text-capitalize">${order.contact.city}</p>
    </div>
    `;


for (product of cart) {
    displayProductListTable(product);
}
const deletedItem = document.getElementsByClassName("rounded");
for(element of deletedItem){
    element.classList.add("d-none");
}


totalPrice();


const print = document.getElementById("print");
print.addEventListener("click", (e) => {
    e.preventDefault;
    window.print();
});


const clickHome = document.getElementById("accueil");
clickHome.addEventListener("click", () => {
    clearcart();
});

const clickcart = document.getElementById("cartPreview");
clickcart.addEventListener("click", () => {
    clearcart();
});