class Meuble {
    constructor(meubleData){
        // this.nom = undefined;
        // this.materiaux = undefined;
        // this.prix = undefined;
        // this.disponnible = disponnible;
        this.stock = 1;
        const monBtn = document.getElementById('monBtn');
        monBtn.addEventListener('click', this.display.bind(this));
        Object.assign(this,meubleData);

    }    
    estDisponnible(){
        console.log("Il nous reste "+ this.stock + " pieces");
        return this.stock > 0;

    }
    display(){
        const container = document.getElementById('meubles');
        const div = document.createElement("div");
        div.classList.add("col", "col-8", "col-md-4", "col-lg-3", "mt-5");
        /*div.style.height = '350px';*/
        const h3 = document.createElement('h3');
        h3.innerText = this.nom;
        const img = document.createElement('img');
        img.src = `./images/${this.image}`;
        img.style.width = '100%';
        const p = document.createElement('p');
        p.innerHTML = "Matière: " + this.materiaux + "</br>" + "Stock disponnible: " + this.stock + "</br>" + "Prix: " + this.prix + "€";
        container.appendChild(div);
        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(p); 
        
    }

    estAffiché() {
        console.log(this.display());
    }
} 

/*const apiData = [
    {
        nom:"Tabourêt vintage", 
        materiaux: "Chêne",
        prix: 59,
        stock: 75, 
        image: "oak_1.jpg",
    },
    {
        nom:"Table vintage", 
        materiaux: "Chêne",
        prix: 370,
        image: "oak_2.jpg",
    },
    {
        nom:"Table extensible", 
        materiaux: "Chêne",
        prix: 689,
        stock: 542,
        image: "oak_3.jpg",
    },
    {
        nom:"Planche", 
        materiaux: "Chêne",
        prix: 70,
        image: "oak_4.jpg",
    },
    {
        nom:"Chaise", 
        materiaux: "Chêne",
        prix: 120,
        image: "oak_5.jpg",
    },
];

const tabouret = new Meuble(apiData[0]);
console.log(tabouret.estDisponnible());
const table = new Meuble(apiData[1]);
const tableExtensible = new Meuble(apiData[2]);
const planche = new Meuble(apiData[3]);
const chaise = new Meuble(apiData[4]);
const produits = [tabouret, table, tableExtensible, planche, chaise];



serveur local à faire*/

fetch("http://localhost:3000/api/furniture");
/*utiliser la méthode THEN*/

