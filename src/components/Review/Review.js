import React from 'react';
import useReview from '../../Hooks/useReview';

const Review = () => {
    const [reviews, setReviews] = useReview([])
    return (
        <div>
            <h1 className='mx-auto py-5 w-1/3 bg-gray-700 text-yellow-300 rounded-lg text-center text-3xl my-10 '>What Our Coustomer Says</h1>

            <div className='border-solid justify-center  rounded-xl mx-auto grid grid-cols-12 mt-14 '>
                {
                    reviews.map(review =>
                        <div key={review.id} className='col-span-4  singleReview mx-5 my-5 p-5'>
                            <img className='photo my-5 mx-auto' src={review.profile} alt="" />
                            <h1 className='text-2xl text-blue-800'>Name: {review.name}</h1>
                            <p className='text-xl text-slate-700'><span className=' text text-amber-500'>Review</span>: {review.comment}</p>
                            <p>Ratings:<span className='text-orange-500'> {review.ratings} </span></p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Review;