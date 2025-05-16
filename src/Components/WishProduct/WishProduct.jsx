import React from 'react';

const WishProduct = ({ item }) => {
    const { product_title, product_image, category, price, description, specification, availability, rating } = item;
    return (
        <div className="min-h shadow-2xl rounded-2xl">
            <div className=" flex gap-5 flex-col rounded-2xl lg:flex-row">
                <img
                    src={product_image}
                    className="w-48 h-32 p-4 rounded-2xl "
                />
                <div className='my-auto lg:w-screen items-center'>
                    <h1 className="text-2xl mb-3 font-bold">{product_title}</h1>
                    {/* <div className='flex justify-between'>
                        
                        
                    </div> */}
                    <p className="text-gray-500 text-lg">
                        {description}
                    </p>
                    <p className='font-semibold text-lg'>Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default WishProduct;