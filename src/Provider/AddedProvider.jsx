import { createContext, useEffect, useState } from "react";
import { getStoredProduct } from "../Utility/localstorage";
import allProduct from '../assets/productData.json'

export const AddedProductContext = createContext(null);

const AddedProvider = ({ children }) => {

    const storedProduct = getStoredProduct();
    const [addedProduct, setAddedProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    // const [existsCartIte, setExistsCartIte] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    let storedProductid = getStoredProduct();
    useEffect(() => {


        if (allProduct.length > 0) {

            let filterProduct = allProduct.filter(product => storedProductid.includes(product.id));

            setAddedProduct(filterProduct);

            let totalPrice = filterProduct.reduce((accumalator, item) => {
                const numericPrice = parseInt(item.offer_price.replace('€', ''));
                return accumalator + numericPrice;
            }, 0)

            setTotalPrice(totalPrice);

        }
    }, [])

    // Fetch items from localStorage when the component mounts

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('items')) || [];
        setCartItems(storedCart);
    }, []);



    // Remove Product in the Cart 
    const removeProduct = (id) => {

        const updatedCart = cartItems.filter(item => item != id)
        setCartItems(updatedCart);
        localStorage.setItem('items', JSON.stringify(updatedCart));
        window.location.reload();
    }




    const productInfo = { storedProduct, addedProduct, totalPrice, removeProduct, cartItems }

    return (
        <AddedProductContext.Provider value={productInfo}>
            {children}
        </AddedProductContext.Provider>
    );
};

export default AddedProvider;