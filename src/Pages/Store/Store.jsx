

import { useContext } from 'react';
import allProduct from '../../assets/productData.json'
import { saveProduct } from '../../Utility/localstorage';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { IoCartOutline } from 'react-icons/io5';

const Store = () => {

    const { user } = useContext(AuthContext);
    // Added Item in LocalStorage 

    const handleClick = (id) => {

        if (!user) {
            window.location.replace('/login');
        }
        else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product Added Sucessfully in your Cart",
                showConfirmButton: false,
                timer: 1500
            });
            window.location.replace('/orderDetails');
            const idRe = parseInt(id);
            saveProduct(idRe);
        }
    }
   
    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-1 border space-y-3 pt-5'>
                <button className='barlow-medium2 side_btn active'>Rocking Chair</button>
                <button className='barlow-medium2 side_btn'>Rocking Chair</button>
                <button className='barlow-medium2 side_btn'>Rocking Chair</button>
            </div>
            <div className='col-span-4 border ml-8'>
                <div className='grid grid-cols-3 gap-3 pt-3'>
                    {
                        allProduct.map(product =>
                            <div key={product.id} className="card bg-base-100 shadow-xl pt-4">
                                <div className="w-full">
                                    <img style={{ backgroundColor: "#DEDEDE" }}
                                        src={product.Image}
                                        alt="Shoes"
                                        className="rounded-xl border storeImage w-10/12 mx-auto" />
                                </div>
                                <div className="mt-1 p-4">
                                    <h1 className='barlow-semibold'>{product.title}</h1>

                                    <h2 className='item_price barlow-semibold'><span className='mr-3'>{product.offer_price}</span><span className='mr-3 line-through'>{product.prev_price}</span><span className='text-red-500 '>{product.discount}</span></h2>

                                    <p className='cardPara'>It {product.subtitle}</p>

                                    <button onClick={() => handleClick(`${product.id}`)} className='barlow-medium2 cartBtn mt-4'>
                                    <div className='flex justify-center items-center ml-2'>
                                        <span> <IoCartOutline /></span>
                                        <span className='ml-2'> Add to Cart</span>
                                    </div>
                                   
                                    </button>
                                </div>
                            </div>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Store;