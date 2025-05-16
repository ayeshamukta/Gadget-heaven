import React, { useEffect, useState } from 'react';
import { TabPanel, Tabs } from 'react-tabs';
import { getCartData, getWishList, } from '../Utility/Utility';
import { useLoaderData } from 'react-router';
import CartProduct from '../CartProduct/CartProduct';
import WishProduct from '../WishProduct/WishProduct';

const Dashboard = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [cart_list, setCartList] = useState([]);


    const allProducts = useLoaderData();
    useEffect(() => {
        const cartList = getCartData();
        setCartList(cartList);

    }, [])


    const wishList = getWishList()
    console.log(wishList);
    let totalPrice = 0;



    let cartListData = allProducts.filter(product => cart_list.includes(product.product_id))
    const wishListData = allProducts.filter(product => wishList.includes(product.product_id))

    const handlePurchase = () => {
   
       localStorage.removeItem('cart-list')
       setCartList([])

    }



    cartListData.forEach(item => {

        totalPrice = totalPrice + item.price
    });



    return (
        <div>
            <div className='text-white text-center   bg-[#9538E2]'>
                <h1 className='font-bold text-4xl pt-10 py-5'>Product Details</h1>
                <p className='text-sm lg:w-[600px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className='flex gap-5 justify-center py-8'>
                    <button onClick={() => { setTabIndex(0) }} className={`${tabIndex === 0 ? 'bg-[#9538E2] text-white' : ''} btn rounded-full text-[#9538E2] px-10 font-bold`}>Cart</button>
                    <button onClick={() => { setTabIndex(1) }} className={`${tabIndex === 1 ? 'bg-[#9538E2] text-white' : ''} btn rounded-full px-10 text-[#9538E2] font-bold`}>WishList</button>
                </div>
            </div>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                
                <TabPanel>
                    <div className='flex justify-between font-bold text-xl mt-8 items-center'>
                        <h1 className=''>Cart</h1>
                        <div className='flex gap-5 items-center'>
                            <h2>Total Cost : ${totalPrice}</h2>
                            <button className='btn rounded-full border border-[#8332C5] text-lg text-[#9538E2] font-bold '>Sort bt Price</button>
                            <button onClick={handlePurchase} className='btn rounded-full border text-lg border-[#8332C5] text-[#9538E2] font-bold'>Purchase</button>
                        </div>
                    </div>
                    <div className='flex flex-col py-10 gap-8'>
                        {
                            cartListData.map(item => <CartProduct setCartList={setCartList} item={item}></CartProduct>)
                        }
                    </div>
                </TabPanel>


                <TabPanel>
                    <h1 className='font-bold text-xl mt-10'>Wishlist</h1>
                    <div className='flex flex-col py-5 gap-8'>
                        {
                            wishListData.map(item => <WishProduct setCartList={setCartList} item={item}></WishProduct>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;