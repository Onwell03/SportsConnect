import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <nav className='relative container mx-auto p-6'>
            <div className='flex items-center justify-between'>
                <div className='pt-2'>
                    <img src='src/assets/h5.png' width={'100px'}/>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="/">Home</Link>
                    <Link to="/create">Create Post</Link>
                </div>
            </div> 
        </nav>
    )
}; 

export default Navigation; 
