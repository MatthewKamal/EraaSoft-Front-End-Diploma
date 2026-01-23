const products = [
  {
    id: 1,
    title: "Samsung Galaxy S24 Ultra",
    description: "6.8-inch AMOLED",
    image: "./assets/Images/galaxy-s24-ultra.jpg",
    old_price: 1499,
    price_after_sale: 1299,
    currency: "USD",
  },
  {
    id: 2,
    title: "Apple iPhone 15 Pro Max",
    description: "A17 Pro chip",
    image: "./assets/Images/iphone-15-pro-max.jpg",
    old_price: 1599,
    price_after_sale: 1499,
    currency: "USD",
  },
  {
    id: 3,
    title: "MacBook Air M3",
    description: "M3 chip",
    image: "./assets/Images/macbook-air-m3.jpg",
    old_price: 1399,
    price_after_sale: 1249,
    currency: "USD",
  },
  {
    id: 4,
    title: "Lenovo Legion 7",
    description: "RTX 4070",
    image: "./assets/Images/lenovo-legion-7.jpg",
    old_price: 2199,
    price_after_sale: 1999,
    currency: "USD",
  },
  {
    id: 5,
    title: "Anker PowerCore 20000",
    description: "Fast charging",
    image: "./assets/Images/anker-powercore-20000.jpg",
    old_price: 69,
    price_after_sale: 49,
    currency: "USD",
  },
  {
    id: 6,
    title: "Sony WH-1000XM5",
    description: "Noise cancelling",
    image: "./assets/Images/sony-wh-1000xm5.jpg",
    old_price: 399,
    price_after_sale: 349,
    currency: "USD",
  },
  {
    id: 7,
    title: "Logitech MX Master 3S",
    description: "Wireless mouse",
    image: "./assets/Images/logitech-mx-master-3s.jpg",
    old_price: 119,
    price_after_sale: 99,
    currency: "USD",
  },
  {
    id: 8,
    title: "Apple AirPods Pro 2",
    description: "ANC",
    image: "./assets/Images/apple-airpods-pro-2.jpg",
    old_price: 299,
    price_after_sale: 269,
    currency: "USD",
  },
];

const productsContainer = document.getElementById("productsContainer");
const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");

const cartProducts = [];
const wishlistProducts = [];

function renderProducts() {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const inCart = cartProducts.includes(product.id);
    const inWishlist = wishlistProducts.includes(product.id);

    productsContainer.innerHTML += `
      <div class="col-12 col-sm-6 col-md-3">
        <div class="cards border p-3 h-100 position-relative">
          <span 
            class="position-absolute top-0 start-0 m-2 fs-4"
            style="cursor:pointer"
            onclick="toggleWishlist(${product.id})"
          >
            ${inWishlist ? "❤️" : "🤍"}
          </span>

          <img src="${product.image}" class="img-fluid mb-2" alt="${
      product.title
    }">

          <h3>${product.title}</h3>
          <p>${product.description}</p>

          <h4>
            ${product.price_after_sale} ${product.currency}
            <span>
              ${product.old_price} ${product.currency}
            </span>
          </h4>

          <button
            class="btn ${inCart ? "btn-danger" : "btn-primary"} w-100 mt-2"
            onclick="${
              inCart
                ? `removeFromCart(${product.id})`
                : `addToCart(${product.id})`
            }"
          >
            ${inCart ? "Remove Cart" : " 🛒  Add to Cart"}
          </button>
        </div>
      </div>
    `;
  });
}

function addToCart(id) {
  if (!cartProducts.includes(id)) {
    cartProducts.push(id);
    updateUI();
  }
}

function removeFromCart(id) {
  const index = cartProducts.indexOf(id);
  if (index !== -1) {
    cartProducts.splice(index, 1);
    updateUI();
  }
}

function toggleWishlist(id) {
  const index = wishlistProducts.indexOf(id);

  if (index === -1) {
    wishlistProducts.push(id);
  } else {
    wishlistProducts.splice(index, 1);
  }

  updateUI();
}

function updateUI() {
  cartCount.textContent = cartProducts.length;
  wishlistCount.textContent = wishlistProducts.length;
  renderProducts();
}

const searchInput = document.getElementById("searchInput");
const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const text = searchInput.value.toLowerCase();
  const min = minInput.value ? Number(minInput.value) : 0;
  const max = maxInput.value ? Number(maxInput.value) : Infinity;

  document.querySelectorAll(".cards").forEach((card, index) => {
    const p = products[index];
    const matchText = p.title.toLowerCase().includes(text);
    const matchPrice = p.price_after_sale >= min && p.price_after_sale <= max;
    card.parentElement.style.display =
      matchText && matchPrice ? "block" : "none";
  });
});

renderProducts();
