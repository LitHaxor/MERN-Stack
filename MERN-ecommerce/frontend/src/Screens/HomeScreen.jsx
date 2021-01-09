import React from 'react';
import data from '../data';
import Product from '../Components/Product';

const HomeScreen = () =>
{
   return(
    <div className="row center">
        {/* Iterates Products and Renders it */}          
            {
            data.products.map((product) =>(
                <Product key={product._id} product= {product}/>
            ))
            }   

    </div>
   )
}

export default HomeScreen;