import { ProductService, Product } from './Product.js';


const createProductElement = (product) => {
  const parent = document.getElementById('each_event');

  const eventCard = document.createElement('div');
  eventCard.classList.add('event-card');

  
  eventCard.innerHTML = `
    <img src="${product.image}" alt="">
    <h4>${product.title}</h4>
    <p>${product.description} -<br>PRICE: $${product.price}</p>
    <a href="#">View Details</a>
  `;

  parent.appendChild(eventCard);
};


const createElementBasedOnProduct = async () => {
    const productService = new ProductService();
  
    
      const productsData = await productService.getProducts();
  
      productsData.slice(0, 3).forEach((productData) => {
        const product = new Product(productData);
        createProductElement(product);
      });


    
  };
  
  
  createElementBasedOnProduct();
  