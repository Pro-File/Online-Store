// Remove Items From the Cart
export var RemoveCartItems = (existingProducts,upcomingProduct) =>{
    // console.log(existingProducts,upcomingProduct);
    var product = existingProducts.find((existingProduct) => existingProduct.id === upcomingProduct.id);
    if(product){
        if(product.quantity>0){
            return existingProducts.map((existingProduct) =>{
                   if(existingProduct.id === upcomingProduct.id){
                    return {
                        ...existingProduct,
                        quantity: existingProduct.quantity - 1,
                    } 
                   }
                   else{
                    return existingProduct;
                    }
               })
    }
    else{
        return existingProducts.filter((existingProduct) => existingProduct.id !== upcomingProduct.id)
    }
    }
    else{
        return existingProducts;
    }
    
}