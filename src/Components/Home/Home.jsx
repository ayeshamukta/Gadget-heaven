import React from 'react';
import Banner from '../Banner/Banner';
import ExploreCutting from '../ExploreCutting/ExploreCutting';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className=''>
            <Helmet><title>Gadget Heaven | Home</title></Helmet>
            <Banner></Banner>
            <ExploreCutting></ExploreCutting>
        </div>
    );
};

export default Home;