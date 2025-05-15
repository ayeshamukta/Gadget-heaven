import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
    console.log(product);

    const {product_title,price,product_image,product_id} = product

    return (
        <div className="card bg-base-100   shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body px-10   text-start">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}</p>
                <div className="card-actions">
                    
                    <Link to={`/explore/${product_id}`} className='btn border-[#9538E2] font-bold text-[#9538E2] rounded-full'>View details</Link>
                    {/* <button className="btn border-[#9538E2] font-bold text-[#9538E2] rounded-full">View details</button> */}
                </div>
            </div>
        </div>
    );
};

export default Product;