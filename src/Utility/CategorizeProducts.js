// Categorize All Fetched Products
export var categorizeProducts = (products) =>{
    var categories = [];
  //   var categories = [ 
  //     {
  //     category: "men",
  //     products: [{}, {}, {}],
  //   },
  //   {
  //     category: "women",
  //     products: [{}, {}, {}],
  //   },
  //   {
  //     category: "shoes",
  //     products: [{}, {}, {}],
  //   },
  // ]
      for(var product of products){
        var ProductCategory = product.category;
        var availablility = categories.some((cat) => cat.category === ProductCategory);
       if(availablility){
        // Category Already Exits
          categories = categories.map((categoryObj) => {
            if(categoryObj.category === ProductCategory){
              categoryObj.products.push(product);
              return categoryObj;
            }
            else{
              return categoryObj;
            }
          })
       }
       else{
        //  Category Does Not Exist
        var NewCategory = {
          category: product.category,
          products: [product],
        }
        categories.push(NewCategory);
       }
      }
      return categories;
  }