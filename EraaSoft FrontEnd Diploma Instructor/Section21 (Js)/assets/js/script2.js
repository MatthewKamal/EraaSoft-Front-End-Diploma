const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = Number(urlParams.get("id"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

fetch(`https://dummyjson.com/products/${productId}`)
  .then((res) => res.json())
  .then((product) => {
    const inCart = cart.includes(productId);
    const inWishlist = wishlist.includes(productId);

    document.body.innerHTML = `
    <div class="product-container fade-in">

      <div class="product-card">

        <div class="product-images">
          <div class="img-zoom-container">
            <img id="mainImage" src="${product.thumbnail}" class="main-image">
          </div>

          <div class="thumbnail-row">
            ${product.images
              .map(
                (img) => `
              <img src="${img}" onclick="changeImage('${img}')">
            `
              )
              .join("")}
          </div>
        </div>

        <div class="product-info">
          <small class="category">ELECTRONICS / SMARTPHONES</small>
          <h1>${product.title}</h1>

          <div class="rating">
            ⭐ ${product.rating} <span>(${product.stock} in stock)</span>
          </div>

          <div class="price-row">
            <span class="new-price">$${product.price}</span>
            <span class="old-price">$${Math.round(
              product.price + (product.price * product.discountPercentage) / 100
            )}</span>
            <span class="discount">${Math.round(
              product.discountPercentage
            )}% OFF</span>
          </div>

          <p class="description">${product.description}</p>

          <ul class="feature-list">
            <li>📱 Brand: ${product.brand}</li>
            <li>⚡ Category: ${product.category}</li>
            <li>⭐ Rating: ${product.rating}</li>
            <li>📦 Stock: ${product.stock}</li>
            <li>🚚 Free Shipping</li>
          </ul>

          <div class="action-buttons">
            <button class="btn-cart" onclick="toggleCart()">
              ${inCart ? "Remove from Cart" : "🛒 Add to Cart"}
            </button>

            <button class="btn-wishlist" onclick="toggleWishlist()">
              ${inWishlist ? "❤️" : "🤍"}
            </button>
          </div>

          <div class="sku">
            SKU: SP-${product.id}<br>
            Availability: In Stock<br>
            Shipping: Free shipping on orders over $50
          </div>

        </div>

      </div>

    </div>
    `;
  });

function changeImage(img) {
  document.getElementById("mainImage").src = img;
}

function toggleCart() {
  const index = cart.indexOf(productId);
  if (index === -1) {
    cart.push(productId);
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function toggleWishlist() {
  const index = wishlist.indexOf(productId);
  if (index === -1) {
    wishlist.push(productId);
  } else {
    wishlist.splice(index, 1);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  location.reload();
}
