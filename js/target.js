
const openShopping = document.querySelector(".shopping"),
closeShopping = document.querySelector(".closeShopping"),
body = document.querySelector("body"),
list = document.querySelector(".listCard"),
listCard = document.querySelector(".listCard"),
total = document.querySelector(".total"),
quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
body.classList.remove("active");
});

const products = [
    { id: "product-01", product: "Delineador", price: 25000, image: "./image/delineador.jpg", "data-category": "Producto de ojos",quantity:10 },
    { id: "product-02", product: "Base", price: 200000, image: "./image/base 2.png", "data-category": "Base y correctores",quantity:9 },
    { id: "product-03", product: "Brocha ovalada", price: 15499, image: "./image/brocha ovalada.jpg", "data-category": "Brochas y herramientas",quantity:12  },
    { id: "product-04", product: "Combo 4", price: 29499, image: "./image/nunu.webp", "data-category": "Brochas y herramientas",quantity:5},
    { id: "product-05", product: "Base lik", price: 25499, image: "./image/contorno.jpg", "data-category": "Base y correctores",quantity:9  },
    { id: "product-06", product: "Corrector", price: 10000, image: "./image/corrector.webp", "data-category": "Base y correctores" ,quantity:7 },
    { id: "product-07", product: "Brochas", price: 46499, image: "./image/brochas.jpg", "data-category": "Brochas y herramientas",quantity:3},
    { id: "product-08", product: "Fijador", price: 80000, image: "./image/fijador.jpg", "data-category": "Brochas y herramientas",quantity:8},
    { id: "product-09", product: "Pestañina", price: 30000, image: "./image/pestañina.png", "data-category": "Producto de ojos",quantity:7},
    { id: "product-10", product: "Combo 3", price: 100000, image: "./image/combo 3.png", "data-category": "Base y correctores",quantity:4},
    { id: "product-11", product: "Delineador de Labios", price: 20000, image: "./image/delineadores de labios.jpg", "data-category": "Labios",quantity:14},
    { id: "product-12", product: "Pomada ceja", price: 9800, image: "./image/pomada ceja.jpg", "data-category": "Producto de ojos",quantity:3},
    { id: "product-13", product: "Sombras Nude", price: 70499, image: "./image/sombras nut.jpg", "data-category": "Producto de ojos",quantity:20 },
    { id: "product-14", product: "Sombras", price: 50000, image: "./image/sombras.jpg", "data-category": "Producto de ojos",quantity:3},
    { id: "product-15", product: "Tinta", price: 5000, image: "./image/tinta.jpg", "data-category": "Labios" ,quantity:10},
    { id: "product-16", product: "Paleta", price: 90000, image: "./image/palee.jpg", "data-category": "Producto de ojos",quantity:11 },
    { id: "product-17", product: "Espoja", price: 40000, image: "./image/esponjas.jpg", "data-category": "Brochas y herramientas" ,quantity:8},
    { id: "product-18", product: "kit brochas", price: 150000, image: "./image/kit brochas.jpg", "data-category": "Brochas y herramientas",quantity:4 },
    { id: "product-19", product: "Cepillo cejas", price: 20000, image: "./image/cepillo cejas.jpg", "data-category": "Brochas y herramientas",quantity:4 },
    { id: "product-20", product: "Paleta colores", price: 150000, image: "./image/paleta colores.webp", "data-category": "Producto de ojos",quantity:9},
    { id: "product-21", product: "combo", price: 70000, image: "./image/combo 3.png", "data-category": "Brochas y herramientas",quantity:2 },
    { id: "product-22", product: "Sombra individual", price: 15000, image: "./image/sombra 3.jpg", "data-category": "Producto de ojos",quantity:8 },
    { id: "product-23", product: "Sombra inviduall Color", price: 15000, image: "./image/sombra 2.jpg", "data-category": "Producto de ojos",quantity:5 },
    { id: "product-24", product: "Brocha", price: 12000, image: "./image/brocha.jpg", "data-category": "Brochas y herramientas",quantity:7},
    { id: "product-25", product: "Gloss", price: 28000, image: "./image/glos.webp", "data-category": "Labios" ,quantity:4},
    { id: "product-26", product: "tten brochas", price: 100000, image: "./image/brochas.jpg", "data-category": "Brochas y herramientas",quantity:8 },
    { id: "product-27", product: "Encrespador", price: 20000, image: "./image/encrespador.avif", "data-category": "Brochas y herramientas",quantity:23},
    { id: "product-28", product: "Iluminador", price: 50000, image: "./image/iluminador.avif", "data-category": "Brochas y herramientas" ,quantity:7},
    { id: "product-29", product: "labial muak", price: 30000, image: "./image/labial.jpg", "data-category": "Labios" },
    { id: "product-30", product: "Base tinta", price: 100000, image: "./image/base tinta.webp", "data-category": "Base y correctores" ,quantity:6},

];


let listCards = [];

const initApp = () => {
products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.setAttribute("data-category", value['data-category']);

    let boxDiv = document.createElement("div");
    boxDiv.classList.add("box");

    let cardImgDiv = document.createElement("div");
    cardImgDiv.classList.add("card-img");
    let img = document.createElement("img");
    img.classList.add("img3");
    img.src = value.image
    img.alt = value.product
    cardImgDiv.appendChild(img);

    let cardInfoDiv = document.createElement("div");
    cardInfoDiv.classList.add("card-info");
    let titleP = document.createElement("p");
    titleP.classList.add("text-title");
    titleP.textContent = value.product;
    let descriptionP = document.createElement("p");
    descriptionP.classList.add("text-body");
    descriptionP.textContent = "Product description and details";
    cardInfoDiv.appendChild(titleP);
    cardInfoDiv.appendChild(descriptionP);

    let cardFooterDiv = document.createElement("div");
    cardFooterDiv.classList.add("card-footer");

    let carddDiv = document.createElement("div");
    carddDiv.classList.add("cardd");
    let priceSpan = document.createElement("span");
    priceSpan.classList.add("text-title");
    priceSpan.textContent = "$" + value.price.toLocaleString() + " COP";
    let cardButtonDiv = document.createElement("div");
    cardButtonDiv.classList.add("card-button");
    let button = document.createElement("button");
    button.classList.add("addCart");
    let imgButton = document.createElement("img");
    imgButton.classList.add("imgsize");
    imgButton.src = "image/carrito-de-compras.png";
    button.appendChild(imgButton);
    cardButtonDiv.appendChild(button);
    carddDiv.appendChild(priceSpan);
    carddDiv.appendChild(cardButtonDiv);

    let cDiv = document.createElement("div");
    cDiv.classList.add("c");
    let sizeP = document.createElement("p");
    sizeP.id = "size";
    sizeP.textContent = "Disponible: " + (value.quantity - (listCards[key]?.quantity || 0));
    let spanAvailable = document.createElement("span");
    spanAvailable.classList.add("disponibles");
    spanAvailable.setAttribute("data-id", value.id);
    let sizeCategoryDiv = document.createElement("div");
    sizeCategoryDiv.classList.add("sizeCategory");
    sizeCategoryDiv.textContent = "Category: " + value['data-category'];
    sizeP.appendChild(spanAvailable);
    cDiv.appendChild(sizeP);
    cDiv.appendChild(sizeCategoryDiv);

    newDiv.appendChild(boxDiv);
    boxDiv.appendChild(cardImgDiv);
    boxDiv.appendChild(cardInfoDiv);
    boxDiv.appendChild(cardFooterDiv);
    cardFooterDiv.appendChild(carddDiv);
    cardFooterDiv.appendChild(document.createElement("br"));
    cardFooterDiv.appendChild(document.createElement("br"));
    cardFooterDiv.appendChild(cDiv);


  newDiv.addEventListener("click", () => addToCart(key)); // Agregar evento de clic para agregar al carrito

  list.appendChild(newDiv);
});
};
const updateAvailability = () => {
    document.querySelectorAll('.card').forEach((card, key) => {
        const productId = card.querySelector('.disponibles').getAttribute('data-id');
        const availableSpan = card.querySelector('.disponibles');
        availableSpan.textContent = "Disponible: " + (products[key].quantity - (listCards[key]?.quantity || 0));
    });
};

const addToCart = key => {
    const productId = products[key].id;
    const cartIndex = listCards.findIndex(product => product && product.id === productId);

    if (cartIndex === -1) {
        // Si el producto no está en el carrito, agréguelo con una cantidad de 1
        listCards.push({
            ...JSON.parse(JSON.stringify(products[key])),
            quantity: 1
        });
    } else {
        const selectedQuantity = listCards[cartIndex].quantity + 1;

        if (selectedQuantity <= products[key].quantity) {
            listCards[cartIndex].quantity = selectedQuantity;

            // Restar del stock disponible
            products[key].quantity -= selectedQuantity - listCards[cartIndex].quantity;

            // Actualizar el contador del carrito
            const cartQuantity = document.getElementById("cartQuantity");
            cartQuantity.textContent = parseInt(cartQuantity.textContent) + 1;
        } else {
            alert("¡No hay suficiente stock!");
            return; // Salir de la función si no hay suficiente stock
        }
    }

    reloadCard();
    updateAvailability();
};
 

function displayProducts(productArray) {
    const container = document.getElementById("products-container");
  
    // Limpiar el contenedor actual
    container.innerHTML = "";

    productArray.forEach(product => {
        const card = createCard(product);
        container.appendChild(card);
    });
}
function sortProducts(order) {
    const sortedProducts = products.slice().sort((a, b) => {
        return order === 'desc' ? b.price - a.price : a.price - b.price;
    });

    displayProducts(sortedProducts);
}


const reloadCard = () => {
    const listCard = document.getElementById("listCard");
  
    // Limpiar el contenido actual de listCard
    listCard.innerHTML = "";
  
    // Actualizar listCard con los productos seleccionados
    listCards.forEach((product, key) => {
        const listItem = document.createElement("li");
        listItem.classList.add("listItem");
        listItem.innerHTML = `
          <img class="img3" src="${product.image}" alt="${product.product}">
          <div class="text-title">${product.product}</div>
          <div class="text-title" quantity="${product.quantity}">${product.price.toLocaleString()} COP</div>
          <div>
            <button style="background-color:#4a0b0c;" class="cardButton" onclick="changeQuantity(${key}, ${product.quantity - 1})">-</button>
            <div class="count">${product.quantity}</div>
            <button style="background-color:#4a0b0c;" class="cardButton" onclick="changeQuantity(${key}, ${product.quantity + 1})">+</button>
          </div>
        `;
      
        listCard.appendChild(listItem);
    });
  
    // Actualizar la cantidad y el total en el carrito de compras
    const cartQuantity = document.getElementById("cartQuantity");
    cartQuantity.textContent = listCards.length;
  
    const cartTotal = listCards.reduce((total, product) => total + product.price, 0);
    const totalElement = document.querySelector(".total");
    totalElement.textContent = "$" + cartTotal.toLocaleString() + " COP";
  };
  

const changeQuantity = (key, quantity) => {
    const product = listCards[key];
    const originalQuantity = products[key].quantity;

    // Verificar si la nueva cantidad está dentro del stock disponible y la cantidad original
    if (quantity >= 0 && quantity <= originalQuantity) {
        // Restar del stock disponible la diferencia entre la nueva cantidad y la cantidad original
        products[key].quantity -= quantity - listCards[key].quantity;

        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;

        // Actualizar el modal y el carrito
        reloadCard();

        // Actualizar el contador del carrito
        const cartQuantity = document.getElementById("cartQuantity");
        cartQuantity.textContent = listCards.length;
    } else {
        alert(`La cantidad debe estar entre 0 y ${originalQuantity}`);
    }
};



initApp();