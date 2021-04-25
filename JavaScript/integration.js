cartPreview();
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        addcarts(data);
    })
    .catch((erreur) => console.log("erreur : " + erreur + ":("));


function addcarts(data) {
    for (produit of data) {
        const cart = document.getElementById("liste");
        const price = convertPrice(produit.price);
        cart.innerHTML += `
      <div class="col-sm-12 col-md-6 col-lg-6 pb-3  ">
          <div class="cart border bg-light shadow p-3 mb-5 bg-body rounded">
              <div class="cart-body">
                  <div class="row">
                      <a href="./produits.html?_id=${produit._id}"><img src="${produit.imageUrl}" class="img-fluid img-thumbnail p-1" alt="${produit.name}"></a>
                      <div class="col-6 col-sm-7 mt-3" >
                          <h5 class="cart-title">${produit.name}</h5>
                      </div>
                      <div class="col-6 col-sm-5 text-end mt-3">
                          <h5 class="cart-title">${price}</h5>
                      </div>
                  </div>
                  <p class="cart-text text-truncate">${produit.description}</p>
                  <a href="./produits.html?_id=${produit._id}" class="btn btn-secondary">Acheter ce produit</a>
              </div>
          </div>
      </div>`;
    }
}