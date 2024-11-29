import { ProductService, Product } from './Product.js';

// Function to display product details
const showProductDetails = async () => {
  const container = document.getElementById('product-details-container');
  if (!container) {
    console.error('Container #product-details-container not found');
    return;
  }

  // Get the product ID from the URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  if (!productId) {
    container.innerHTML = '<p>Product ID not provided.</p>';
    return;
  }

  try {
    const productService = new ProductService();
    const productsData = await productService.getProducts(); // Assuming all products are fetched
    const selectedProduct = productsData.find((p) => String(p.id) === productId);

    if (selectedProduct) {
      const product = new Product(selectedProduct);
      container.innerHTML = `
        <div class="details-card">
          <img src="${product.image}" alt="Product Image">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <a href="index.html" class="back-link">Back to Products</a>
        </div>
      `;
    } else {
      container.innerHTML = '<p>Product not found.</p>';
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
    container.innerHTML = '<p>Unable to fetch product details.</p>';
  }
};

showProductDetails();
