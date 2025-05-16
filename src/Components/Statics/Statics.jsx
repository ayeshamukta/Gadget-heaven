import React from 'react';
import { useLoaderData } from 'react-router';
import { BarChart, Bar,Area, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';

const Statics = () => {

    const data = useLoaderData()
    const datalist = data.map(item => ({
        name: item.product_title,
        price: item.price
    }))
    console.log(datalist);

    return (
        <div>
            <div className='text-white  text-center py-10 space-y-4 bg-[#9538E2]'>
                <h1 className='font-bold text-4xl  '>Product Details</h1>
                <p className='text-sm lg:w-[600px] mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='mt-10'>
                <h3 className='font-bold text-xl pb-5'>Statistics</h3>

                <ComposedChart data={datalist} width={1200} height={350} >
                    <XAxis dataKey='name' ></XAxis>
                    <YAxis></YAxis>
                    {/* <Tooltip /> */}
                    <Legend />
                    <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="price" barSize={20} fill="#413ea0" activeBar={<Rectangle fill="#9538E2" stroke="black" />} />
                    
                </ComposedChart>

            </div>
        </div>
    );
};

export default Statics;