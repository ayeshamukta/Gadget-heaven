import React from 'react';
import { useLoaderData } from 'react-router';
import Product from '../Product/Product';


const ExploreCutting = () => {

    const loadedData = useLoaderData();
    // console.log(loadedData);
    
    return (
        <div>
            <h1>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-4 gap-5'>
                <div className='shadow-2xl flex flex-col p-8 h-min gap-5  rounded-2xl'>
                    <button className="btn rounded-full">All Products</button>
                    <button className="btn rounded-full">Laptops</button>
                    <button className="btn rounded-full">Accessories</button>
                    <button className="btn rounded-full">Smart Watches</button>
                    <button className="btn rounded-full">MacBook</button>
                    <button className="btn rounded-full">Iphone</button>
                </div>
                <div className='col-span-3 grid gap-5 grid-cols-3'>
                    {
                        loadedData.map(product=><Product product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExploreCutting;