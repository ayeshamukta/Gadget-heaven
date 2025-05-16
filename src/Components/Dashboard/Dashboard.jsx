import React, { useState } from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import { getCartData } from '../Utility/Utility';
import { useLoaderData } from 'react-router';
import CartProduct from '../CartProduct/CartProduct';

const Dashboard = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const allProducts = useLoaderData();
    
    const cartList = getCartData();
    console.log(cartList);

    const cartListData = allProducts.filter(product=> cartList.includes(product.product_id))
    console.log(cartListData);
    
    
    return (
        <div>
            <div className='text-white text-center   bg-[#9538E2]'>
                <h1 className='font-bold text-4xl pt-10 py-5'>Product Details</h1>
                <p className='text-sm lg:w-[600px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex gap-5 justify-center py-8'>
                    <button onClick={() => setTabIndex(0)} className="btn rounded-full px-10">Cart</button>
                    <button onClick={() => setTabIndex(1)} className="btn rounded-full px-10">WishList</button>
                </div>
            </div>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                {/* tab1 */}
                <TabPanel>
                    <div className='flex justify-between font-bold items-center'>
                        <h1>Cart</h1>
                        <div className='flex gap-5 items-center'>
                            <h2>Total Cost :$</h2>
                            <button className='btn'>Sort bt Price</button>
                            <button className='btn'>Purchase</button>
                        </div>
                    </div>
                    <div className='flex flex-col py-10 gap-8'>
                        {
                            cartListData.map(item=><CartProduct item={item}></CartProduct>)
                        }
                    </div>
                </TabPanel>


                <TabPanel>hi tab 2</TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;