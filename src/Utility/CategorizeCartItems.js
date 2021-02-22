export var categorizeCartItems = (existingProducts, upcomingProduct) =>{
    var exists = existingProducts.some((existingProduct) => 
    existingProduct.id === upcomingProduct.id
    );
    if(exists){
        return existingProducts.map((existingProduct) => {
        if(existingProduct.id === upcomingProduct.id){
            return {
                ...existingProduct,
                quantity: existingProduct.quantity + 1,
            }
        }
        else{
            return existingProduct;
        }
    }
        )
    }
    else{
        return [...existingProducts, {...upcomingProduct, quantity: 1}]
    }

}