import React from 'react';

const Home = () => {
    return (
        <div className='mt-10 grid grid-cols-12'>
            <div className="description mx-5 col-span-6">
                <h1 className='text-7xl font-bold text-orange-500'>Buy A PS5 &&</h1>
                <br />
                <h1 className='text-7xl font-bold text-gray-600'>Forget The World</h1>
            </div>
            <div className="photo col-span-6 mx-5 ">
                <img className='rounded-lg' src="https://imageio.forbes.com/specials-images/imageserve/5fc1935c89e8a9adad774b62/0x0.jpg?format=jpg&width=1200" alt="" />
            </div>
        </div>
    );
};

export default Home;