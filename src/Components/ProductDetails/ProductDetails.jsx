import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { CiStar, CiShoppingCart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { addToCart, addToWishList } from '../Utility/Utility';

const ProductDetails = () => {
    const data = useLoaderData();

    const [buttonDisable,setButtonDisable] = useState(false)

    const paramId = useParams();
    console.log(data);
    console.log(typeof (paramId.productId));





    const details = data.find(product => product.product_id === paramId.productId)
    console.log(details);
    const { product_title, product_image, category, price, description, specification, availability, rating } = details;



    return (
        <div className='text-center w-full mb-10 lg:h-screen relative'>
            <div className='text-white  lg:h-[463px] bg-[#9538E2]'>
                <h1 className='font-bold text-4xl pt-10 py-5'>Product Details</h1>
                <p className='text-sm lg:w-[600px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='absolute top-[30%] right-40 mb-24'>
                <div className="hero bg-base-200 rounded-3xl lg:max-w-[70vw] mx-auto ">
                    <div className="hero-content flex-col gap-6 lg:flex-row">
                        <img
                            src={product_image}
                            className=" w-[300px] h-[400px]   object-fill rounded-lg shadow-2xl"
                        />
                        {/* <img src={product_image} className='w-[424px] h-[500px] p-5 rounded-2xl shadow-2xl object-cover' alt="" /> */}
                        <div className='text-start w-full'>
                            <h1 className="text-2xl font-bold">{product_title}</h1>
                            <p>Price: $ {price}</p>
                            <div className="badge badge-md border border-[#309C08] rounded-full text-[#309C08]  backdrop-blur  bg-[#309C08]/10"><p>{availability?'In stock':'Stock out'}</p></div>
                            <p className="py-2 w-[650px]">
                                {description}
                            </p>
                            <h1 className='font-bold'>Specification:</h1>
                            <div className='pl-4 my-4'>
                                
                                <ol className='list list-decimal'>
                                        {
                                            specification.map((item,index)=><li key={index}>{item}</li>)
                                        }
                                </ol>
                                    
                               
                            </div>
                            <h1 className='font-bold flex gap-2 items-center'>Rating <CiStar className='text-xl text-yellow-400'/></h1>
                            
                            <div className='flex gap-1.5 items-center py-2'>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <FaStar className='text-yellow-400'/>
                                <button className='badge bg-base-300 rounded-full border shadow-2xl bg-base-400'>{rating}</button>
                            </div>
                            <div className='flex gap-3'>
                                <button onClick={()=>addToCart(paramId.productId)} className="btn font-bold text-white rounded-full bg-[#9538E2] items-center">Add to Cart <CiShoppingCart className='font-bold text-xl'/></button>
                                <button disabled={buttonDisable} onClick={()=>addToWishList(paramId.productId,setButtonDisable)} className={`${buttonDisable?'disabled:opacity-50 disabled:cursor-not-allowed pointer-events-none':'' } `}><GiSelfLove  className='btn bg-base-300 rounded-full p-2' /></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;