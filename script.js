"use strict";

const STORE_BASE_URL = "https://fakestoreapi.com";
const CONTAINER = document.querySelector(".container");

// Don't touch this function please
const autorun = async () => {
  const products = await fetchProducts();
  renderProducts(products);
};

// Don't touch this function please
const constructUrl = (path) => {
  return `${STORE_BASE_URL}/${path}`;
};

// Don't touch this function please. This function is to fetch one product.
const fetchProduct = async (productId) => {
  const url = constructUrl(`products/${productId}`);
  const res = await fetch(url);
  return res.json();
};

///////////////////////////////////////////

// This function is to fetch products. You may need to add it or change some part in it in order to apply some of the features.
const fetchProducts = async () => {
  const url = constructUrl(`products`);
  const res = await fetch(url);
  return res.json();
};

// You may need to add to this function, definitely don't delete it.
const productDetails = async (product) => {
  const res = await fetchProduct(product.id);
  renderProduct(res);
};

// You'll need to play with this function in order to add features and enhance the style.

const renderProducts = (products) => {
  const productRow = document.createElement('div'); // Create a row container
  productRow.className = 'row'; // Assign Bootstrap row class

  products.map((product) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'col-sm-4'; // Assign Bootstrap column class
    productDiv.innerHTML = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <img class="card-img-top" src="${product.image}" alt="${product.title} poster">
          <h3 class="card-title">${product.title}</h3>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;

    productDiv.addEventListener('click', () => {
      productDetails(product);
    });

    productRow.appendChild(productDiv); // Append product to the row
  });

  CONTAINER.appendChild(productRow); // Append the entire row to the container
};



// You'll need to play with this function in order to add features and enhance the style.
const renderProduct = (product) => {
  CONTAINER.innerHTML = `
      <div class="row">
          ${product.title}
      </div>`;
};

document.addEventListener("DOMContentLoaded", autorun);
////////////
const navBar = () => {
  CONTAINER.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fake Store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" id="all">All</a></li>
            <li><a class="dropdown-item" href="#" id="electronics">Electronics</a></li>
            <li><a class="dropdown-item" href="#" id="jewelery">Jewelery</a></li>
            <li><a class="dropdown-item" href="#" id="men">Men's clothing</a></li>
            <li><a class="dropdown-item" href="#" id="women">Women's clothing</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <a class="cart" href="/card"><i class="bi bi-cart3"></i></a>
    </div>
  </div>
</nav>`;
};

navBar();
// navBar


