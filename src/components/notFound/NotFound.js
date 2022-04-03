import React from 'react';

const NotFound = () => {
    return (
        <div className='contain grid grid-cols-12 mt-10'>
            <div className="text col-span-6 mx-12">
                <h1 className='text-5xl font-mono'>Your Searched Page Not Found</h1>
                <br />
                <h1 className='text-8xl text-red-600'>404</h1>
            </div>
            <div className="photo col-span-6 mx-12">
                <img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
            </div>
        </div>
    );
};

export default NotFound;