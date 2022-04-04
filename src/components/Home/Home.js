import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReview([])
    const threeReview = reviews.slice(0, 3)
    const navigate = useNavigate()

    return (
        <div>
            <div className='mt-10 grid grid-cols-12'>
                <div className="description mx-5 col-span-6">
                    <h1 className='text-7xl font-bold text-orange-500'>Buy A PS5 &&</h1>
                    <br />
                    <h1 className='text-7xl font-bold text-gray-600'>Forget The World</h1>
                    <p className='rounded-lg bg-slate-500 text-xl p-5 my-4 text-white'>The latest Sony PlayStation was introduced in November 2020. Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon GPU, They have two models: with or without 4k, supporting 120 Hz refresh</p>
                </div>
                <div className=" col-span-6 mx-5 my-5">
                    <img className='rounded-lg' src="https://imageio.forbes.com/specials-images/imageserve/5fc1935c89e8a9adad774b62/0x0.jpg?format=jpg&width=1200" alt="" />
                </div>
            </div>
            <h2 className='rounded bg-orange-300 text-3xl text-center my-10 w-1/3 py-5 mx-auto'>Our Coustomer Reviews</h2>

            {/* First Reviews*/}

            <div className='border-solid justify-center  rounded-xl mx-auto grid grid-cols-12 mt-24 '>
                {threeReview.map(review =>
                    <div key={review.id} className='col-span-4  singleReview mx-5  p-5'>
                        <img className='photo my-5 mx-auto' src={review.profile} alt="" />
                        <h1 className='text-2xl text-blue-800'>Name: {review.name}</h1>
                        <p className='text-xl text-slate-700'><span className=' text text-amber-500'>Review</span>: {review.comment}</p>
                        <p>Ratings:<span className='text-orange-500'> {review.ratings}</span></p>
                    </div>)}
            </div>
            {/* Go to review page button */}
            <div>
                <button onClick={() => navigate('/reviews')} className=' mx-auto btn border-none my-16 bg-red-300 w-1/3 text-2xl rounded-lg py-5'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;