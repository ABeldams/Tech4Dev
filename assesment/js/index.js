
import {ProductService,Product} from './Product.js'


const fetchData=async () => {

    const newProduct=new ProductService();

    try{

        const products=await newProduct.getProducts()
        console.log("All Product : ",products );
    }catch(error){

        console.log(error,message)
    }


}
fetchData()