import React from 'react';
import { useLoaderData } from 'react-router';


const ExploreCutting = () => {

    const loadedData = useLoaderData();
    console.log(loadedData);
    
    return (
        <div>
            <h1>Explore Cutting-Edge Gadgets</h1>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default ExploreCutting;