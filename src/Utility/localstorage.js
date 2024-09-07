const getStoredProduct =()=>{
    const storedProduct=localStorage.getItem('items');
    if(storedProduct){
        return JSON.parse(storedProduct);
    }
    return [];
}
const saveProduct =(id)=>{
   
    const storedProduct = getStoredProduct();
    const exits = storedProduct.find(productId => productId === id);
    
    if(!exits){
        storedProduct.push(parseInt(id));
        localStorage.setItem("items",JSON.stringify(storedProduct));
    }
}

export {getStoredProduct,saveProduct}