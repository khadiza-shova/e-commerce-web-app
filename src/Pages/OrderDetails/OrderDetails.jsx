
import { useContext } from "react";
import { AddedProductContext } from "../../Provider/AddedProvider";
import EmptyImg from '../../assets/Images/empty-cart.jpg'


const OrderDetails = () => {

    const { addedProduct, totalPrice, removeProduct } = useContext(AddedProductContext);

    // Remove Cart 

    const handleRemoveProduct = (id) => {
        removeProduct(id);

    }
    console.log(typeof (addedProduct.length));

    return (
        <div className='grid grid-cols-4 gap-5'>

            {
                addedProduct.length === 0 ?
                 
                    // Empty Image 
                 <div className="w-[1000px] flex justify-center items-center">
                    <img className="w-[900px] " src={EmptyImg} alt="" />
                </div>
                :
                <>
                {/* SHow Cart  */}
                <div className='col-span-3 order'>
                   <h2>An Overview of your Order</h2>
   
                   <div className="">
                       {
                           addedProduct?.map(product =>
                               <div key={product.id} className="border  p-3  my-5">
                                   <div className="flex justify-between p-2">
                                       <div className="flex space-x-2">
                                           <div className="quantity_box border space-x-1">
                                               <button>-</button>
                                               <span className="quantity">1</span>
                                               <button>+</button>
                                           </div>
   
                                           <div style={{ backgroundColor: "#DEDEDE", width: "90px", borderRadius: "5px" }}>
                                               <img src={product.Image} alt="" />
                                           </div>
   
                                           <div>
                                               <h2 style={{ color: "#434343", fontSize: "18px", fontWeight: "600" }}>{product.title}</h2>
                                           </div>
                                       </div>
                                       <div>
                                           <button onClick={() => handleRemoveProduct(`${product.id}`)} style={{ color: "#434343", fontSize: "20px", fontWeight: "600" }}>X</button>
                                       </div>
                                   </div>
   
                                   <div className="text-end">
                                       <h3 className="detailsPrice">{product.offer_price}</h3>
                                   </div>
   
                               </div>
                           )
                       }
                   </div>
   
   
               </div>

               {/* Order Details  */}
               <div className='col-span-1 order_details'>
                   <h1>Order Details</h1>
   
                   <div className="border p-3 my-3 space-y-2">
                       <div className="flex justify-between ">
                           <h2>Subtotal</h2>
                           <p>€{totalPrice}</p>
                       </div>
                       <div className="flex justify-between">
                           <h2>Shipping</h2>
                           <p>Free</p>
                       </div>
                       <div className="flex justify-between">
                           <h2>Eastimated Tax</h2>
                           <p>€ -</p>
                       </div>
   
                       <div className="flex justify-between">
                           <h2>Total</h2>
                           <p>€{totalPrice}</p>
                       </div>
   
                   </div>
   
                   <button className='barlow-medium2 cartBtn mt-4 '>GO TO CHECKOUT</button>
               </div>
              </>
                
            }
         
        </div>
    );
};

export default OrderDetails;