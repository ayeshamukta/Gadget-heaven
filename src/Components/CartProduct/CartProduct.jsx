import React from 'react';
import { RxCross1 } from "react-icons/rx";

const CartProduct = ({item}) => {
    const { product_title, product_image, category, price, description, specification, availability, rating } = item;
    
    return (
        
            <div className="min-h shadow-2xl rounded-2xl">
                <div className=" flex gap-5 flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="w-48 h-32 p-2 rounded-2xl "
                    />
                    <div className='my-auto lg:w-screen items-center'>
                        <div className='flex justify-between'>
                            <h1 className="text-2xl mb-3 font-bold">{product_title}</h1>
                            <div className='btn p-3 rounded-full shadow-2xl mr-5'><RxCross1 className=' text-red-700 text-lg'/></div>
                        </div>
                        <p className="text-gray-500 text-lg">
                            {description}
                        </p>
                        <p className='font-semibold text-lg'>Price: ${price}</p>
                </div>
            </div>
            </div>
        
    );
};

export default CartProduct;