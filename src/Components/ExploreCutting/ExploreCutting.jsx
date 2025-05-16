import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Product from '../Product/Product';


const ExploreCutting = () => {

    const [data,setData] = useState([])
    const [currentBtn,setCurrentButton] = useState('AllProducts')

    // function handleButton()
    // {
    //     setCurrentButton()
    // }

    const loadedData = useLoaderData();
    useEffect(()=>
        {
            setData(loadedData)
        },[])
    
    const handleProducts= (category)=>
    {
        const filteredData = loadedData.filter(item=>item.category === category)
        setData(filteredData)
        
    }
    function handleAllProducts ()
    {
        setData(loadedData)
    }
    
    return (
        <div className='text-center lg:w-[70vw]  mx-auto'>
            <h1 className='text-4xl font-bold mb-10'>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-4 gap-5'>
                <div className='shadow-2xl flex flex-col p-8 h-min gap-5  rounded-2xl'>
                    <button onClick={()=>{handleAllProducts(),setCurrentButton('AllProducts')}} className={`btn rounded-full ${currentBtn ==='AllProducts'?'bg-[#9538E2] text-white font-bold':``}`}>All Products</button>
                    <button onClick={()=>{handleProducts('Laptops'), setCurrentButton('Laptops')}} className={`btn rounded-full ${currentBtn ==='Laptops'?'bg-[#9538E2] text-white font-bold':``}`}>Laptops</button>
                    <button onClick={()=>{handleProducts('Accessories'),setCurrentButton('Accessories')}} className={`btn rounded-full ${currentBtn ==='Accessories'?'bg-[#9538E2] text-white font-bold':``}`}>Accessories</button>
                    <button onClick={()=>{handleProducts('SmartWatches'), setCurrentButton('SmartWatches')}} className={`btn rounded-full ${currentBtn==='SmartWatches'?'bg-[#9538E2] text-white font-bold':``}`}>Smart Watches</button>
                    <button onClick={()=>{handleProducts('MacBook'),setCurrentButton(MacBook)}} className={`btn rounded-full ${currentBtn==='MacBook'?'bg-[#9538E2] text-white font-bold':``}`}>MacBook</button>
                    <button onClick={()=>{handleProducts('Iphone'),setCurrentButton('Iphone')}} className={`btn rounded-full ${currentBtn==='Iphone'?'bg-[#9538E2] text-white font-bold':``}`}>Iphone</button>
                </div>
                <div className='col-span-3 grid gap-5 grid-cols-3'>
                    {
                        data.map(product=><Product product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ExploreCutting;