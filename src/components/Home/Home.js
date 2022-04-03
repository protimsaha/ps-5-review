import React from 'react';
import useReview from '../../Hooks/useReview';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReview([])
    const threeReview = reviews.slice(0, 3)
    return (
        <div>
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
            <div className='border-solid  rounded-xl mx-auto justify-center mt-24 '>
                {threeReview.map(review =>
                    <div key={review.id} className='col-span-3 singleReview mx-auto justify-center p-5'>
                        <h1 className='text-2xl text-blue-800'>Name: {review.name}</h1>
                        <p className='text-xl text-slate-700'>Review: {review.comment}</p>
                        <p>Ratings{review.ratings}</p>
                    </div>)}
            </div>
        </div>
    );
};

export default Home;