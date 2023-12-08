let imgSelected = " ";
    const modal = document.querySelector('.modal');
    const btnCloseModal = document.getElementById('close-modal');
    const btnCreate = document.getElementById('btnCreate');
    const newId = document.getElementById('new-id');
    const newProduct = document.getElementById('new-product');
    const newPrice = document.getElementById('new-price');
    const newDescrip = document.getElementById('new-description');
    const newCategory = document.getElementById('new-category');
    const newStock = document.getElementById('new-stock');
    const newImage = document.getElementById('new-image');
    const btnNewProduct = document.getElementById('btn-new-create');

    btnCreate.addEventListener('click', showModal);
    btnCloseModal.addEventListener('click', hideModal);

    function showModal() {
        modal.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    btnNewProduct.addEventListener('click', createNewProduct);

    function createNewProduct() {
        const idProduct = newId.value;
        const productName = newProduct.value;
        const price = newPrice.value;
        const description = newDescrip.value;
        const category = newCategory.value;
        const stock = newStock.value;

        const newProductObject = {
            id: idProduct,
            name: productName,
            price: price,
            description: description,
            category: category,
            image: imgSelected,
            stock: stock,
        };
        products.push(newProductObject);
        makeCard(newProductObject);
        // Agrega aquí la lógica para hacer algo con el nuevo producto, por ejemplo, mostrarlo en la página
        console.log(newProductObject);

        modal.style.display = 'none';
        // Limpia los valores del formulario
        newId.value = '';
        newProduct.value = '';
        newPrice.value = '';
        newDescrip.value = '';
        newCategory.value = '';
        newStock.value = '';
        newImage.value = '';
    }
// ...

function makeCard(product) {
    const listCard = document.querySelector('.listCard');

    // Crear el elemento de la tarjeta
    const card = document.createElement('div');
    card.classList.add('card');

    // Contenido de la tarjeta
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.classList.add('size-img');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const title = document.createElement('h3');
    title.textContent = product.name;

    const description = document.createElement('p');
    description.textContent = product.description;

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;

    // Botón de agregar al carrito
    const addButton = document.createElement('button');
    addButton.classList.add('addCart');

    const cartImage = document.createElement('img');
    cartImage.classList.add('imgsize');
    cartImage.src = 'image/carrito-de-compras.png';

    addButton.appendChild(cartImage);

    // Añadir elementos al DOM
    cardInfo.appendChild(title);
    cardInfo.appendChild(description);
    cardInfo.appendChild(price);

    card.appendChild(img);
    card.appendChild(cardInfo);
    card.appendChild(addButton);

    // Agregar la tarjeta al contenedor
    listCard.appendChild(card);
}


    function importImg(event) {
        const currentImg = event.target.files[0];
        const objectURL = URL.createObjectURL(currentImg);
        imgSelected = objectURL;
    }