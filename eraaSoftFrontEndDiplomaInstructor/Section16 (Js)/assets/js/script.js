const products = [
  {
    id: 1,
    slug: "galaxy-s24-ultra",
    title: "Samsung Galaxy S24 Ultra",
    description: "6.8-inch AMOLED display, Snapdragon 8 Gen 3, 200MP camera.",
    image: "./assets/Images/galaxy-s24-ultra.jpg",
    old_price: 1499,
    price_after_sale: 1299,
    currency: "USD",
  },
  {
    id: 2,
    slug: "iphone-15-pro-max",
    title: "Apple iPhone 15 Pro Max",
    description:
      "A17 Pro chip, titanium design, 48MP camera, long battery life.",
    image: "./assets/Images/iphone-15-pro-max.jpg",
    old_price: 1599,
    price_after_sale: 1499,
    currency: "USD",
  },
  {
    id: 3,
    slug: "macbook-air-m3",
    title: "MacBook Air M3",
    description: "13-inch Retina display, M3 chip, 8GB RAM, 256GB SSD.",
    image: "./assets/Images/macbook-air-m3.jpg",
    old_price: 1399,
    price_after_sale: 1249,
    currency: "USD",
  },
  {
    id: 4,
    slug: "lenovo-legion-7",
    title: "Lenovo Legion 7",
    description:
      "AMD Ryzen 9, RTX 4070, 16GB RAM, 1TB SSD, 16-inch QHD display.",
    image: "./assets/Images/lenovo-legion-7.jpg",
    old_price: 2199,
    price_after_sale: 1999,
    currency: "USD",
  },
  {
    id: 5,
    slug: "anker-powercore-20000",
    title: "Anker PowerCore 20000mAh Power Bank",
    description: "High-capacity portable charger with fast charging.",
    image: "./assets/Images/anker-powercore-20000.jpg",
    old_price: 69,
    price_after_sale: 49,
    currency: "USD",
  },
  {
    id: 6,
    slug: "sony-wh-1000xm5",
    title: "Sony WH-1000XM5 Headphones",
    description: "Industry-leading noise-canceling wireless headphones.",
    image: "./assets/Images/sony-wh-1000xm5.jpg",
    old_price: 399,
    price_after_sale: 349,
    currency: "USD",
  },
  {
    id: 7,
    slug: "logitech-mx-master-3s",
    title: "Logitech MX Master 3S Mouse",
    description:
      "Ergonomic wireless mouse with precision tracking and fast scrolling.",
    image: "./assets/Images/logitech-mx-master-3s.jpg",
    old_price: 119,
    price_after_sale: 99,
    currency: "USD",
  },
  {
    id: 8,
    slug: "apple-airpods-pro-2",
    title: "Apple AirPods Pro (2nd Gen)",
    description:
      "Active noise cancellation, personalized spatial audio, USB-C case.",
    image: "./assets/Images/apple-airpods-pro-2.jpg",
    old_price: 299,
    price_after_sale: 269,
    currency: "USD",
  },
];

const productsContainer = document.getElementById("productsContainer");

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  const card = `
    <div class="items cards col-12 col-sm-6 col-md-3 border border-secondary">
      <img src="${product.image}" alt="${product.slug}" />
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <h4>${product.price_after_sale}${product.currency} <span>${product.old_price}${product.currency}</span></h4>
    </div>
  `;

  productsContainer.innerHTML += card;
}

const searchInput = document.getElementById("searchInput");
const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const filtered_input = searchInput.value.toLowerCase().trim();
  const minPrice = minInput.value ? Number(minInput.value) : 0;
  const maxPrice = maxInput.value ? Number(maxInput.value) : Infinity;
  const cards = document.querySelectorAll(".cards");
  for (let counter = 0; counter < cards.length; counter++) {
    const product = products[counter];
    const matchText = product.title.toLowerCase().includes(filtered_input);
    const price = product.price_after_sale;
    let matchPrice;
    if (price >= minPrice && price <= maxPrice) {
      matchPrice = 1;
    } else {
      matchPrice = 0;
    }

    if (matchText && matchPrice) {
      cards[counter].style.display = "block";
    } else {
      cards[counter].style.display = "none";
    }
  }
});
