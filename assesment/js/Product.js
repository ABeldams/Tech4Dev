class ProductService {
    //#url = 'https://fakestoreapi.com/products'; 
    #fetchData = async (url, options = {}) => {
      
      
      const response = await fetch("https://fakestoreapi.com/products",options);
      if (!response.ok) {
        throw new Error(` error! Status: ${response.status}`);
      }
      return response.json();
    }; 



    
  
    // Get all products
    async getProducts() {
      return await this.#fetchData();
    }
  
    // Get product by ID
    async getProductById(id) {
      return await this.#fetchData(id);
    }
  
    // Delete product by ID
    async deleteProductById(id) {
      return await this.#fetchData(id, {
        method: 'DELETE',
      });
    }

    
  }
  
  class Product {
    constructor({id, category, description, image, price, rating, title}) {
      this.id = id;
      this.category = category;
      this.description = description;
      this.image = image;
      this.price = price;
      this.rating = rating;
      this.title = title;
    }
  }
  
  


  export  {ProductService,Product};
  
  