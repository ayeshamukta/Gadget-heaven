import React from 'react';
// import {banner} from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='relative  h-[800px]'>
            <div className="hero rounded-b-2xl bg-[#9538E2]   mx-auto text-white">
                <div className=" pt-12  lg:w-[1122px] lg:h-[500px] mx-auto text-center">
                    <div className="lg:w-[796px]   mx-auto">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn bg-white border  border-white font-bold text-[#9538E2] px-6 rounded-full">Shop Now</button>
                    </div>


                </div>

                
            </div>
            <div className=' absolute top-80 lg:right-20 rounded-2xl  mx-auto'>

                    <img src="/banner.jpg" className='lg:w-[80vw] rounded-4xl lg:h-[400px] object-cover' alt="" />
            </div>

        </div>
    );
};

export default Banner;