import React from 'react';
import useReview from '../../Hooks/useReview';
import Card from '../Card/Card';

const Review = () => {
    const [reviews, setReviews] = useReview([])
    return (
        <div>
            <h1 className='mx-auto py-5 w-1/3 bg-gray-700 text-yellow-300 rounded-lg text-center text-3xl my-10 '>What Our Coustomer Says</h1>

            <div className='border-solid justify-center  rounded-xl mx-auto grid grid-cols-12 mt-14 '>
                {
                    reviews.map(review => <Card key={review.id} review={review}></Card>)
                }
            </div>
        </div>
    );
};

export default Review;