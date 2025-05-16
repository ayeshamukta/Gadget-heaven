import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='text-center mt-24 mb-18 lg:w-4/6 mx-auto'> 
            <div className='mb-10'>
                <h1 className='font-bold text-2xl mb-2'>Gadget Heaven</h1>
                <p  className='text-gray-500 text-sm'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='flex justify-around'>
                
                    <nav className='flex flex-col '>
                        <h6 className="font-bold text-lg text-black mb-3">Services</h6>
                        <a className="link link-hover">Product Support</a>
                        <a className="link link-hover">Order Tracking</a>
                        <a className="link link-hover">Shipping & Delivery</a>
                        <a className="link link-hover">Returns</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="font-bold text-lg text-black mb-3">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Contact</a>
                        
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="font-bold text-lg text-black mb-3">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
               
                
                    
                   
                
            </div>
        </div>
    );
};

export default Footer;