import React from 'react';

const Card = ({ review }) => {
    const { profile, name, ratings } = review
    return (
        <div className='col-span-4  singleReview mx-5 my-5 p-5'>
            <img className='photo my-5 mx-auto' src={profile} alt="" />
            <h1 className='text-2xl text-blue-800'>Name: {name}</h1>
            <p className='text-xl text-slate-700'><span className=' text text-amber-500'>Review</span>: {review.comment}</p>
            <p>Ratings:<span className='text-orange-500'> {ratings} </span></p>
        </div>

    );
};

export default Card;