import { ProductService, Product } from './Product.js';

// Function to create a product card
const createProductElement = (product) => {
  const parent = document.getElementById('each_event');
  if (!parent) {
    console.error('Parent element #each_event not found');
    return;
  }

  const eventCard = document.createElement('div');
  eventCard.classList.add('event-card');

  eventCard.innerHTML = `
    <img src="${product.image}" alt="Product Image">
    <h4>${product.title}</h4>
    <p>${product.description} -<br>PRICE: $${product.price}</p>
    <a href="view-details.html?id=${product.id}" class="view-details">View Details</a>
  `;

  parent.appendChild(eventCard);
};

const createElementBasedOnProduct = async () => {
  try {
    const productService = new ProductService();
    const productsData = await productService.getProducts();

    console.log('Fetched Products:', productsData);

    productsData.forEach((productData) => {
      const product = new Product(productData);
      createProductElement(product);
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

createElementBasedOnProduct();
