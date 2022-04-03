import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center items-center mx-auto bg-slate-300 h-20 mt-0'>
            <Link className='mr-5 text-xl hover:text-orange-500' to='/'>Home</Link>
            <Link className='mr-5 text-xl hover:text-orange-500' to='/reviews'>Reviews</Link>
            <Link className='mr-5 text-xl hover:text-orange-500' to='/dashboard'>Dashboard</Link>
            <Link className='mr-5 text-xl hover:text-orange-500' to='/blogs'>Blogs</Link>
            <Link className='mr-5 text-xl hover:text-orange-500' to='/about'>About</Link>
        </div>
    );
};

export default Header;