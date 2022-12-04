import React from 'react';
import bannerImg from "../../assets/banner.png"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="md:w-4/5 w-5/6">
                        <h1 className="mb-5 md:text-6xl text-4xl font-bold">Awesome apartment Villa</h1>
                        <hr className='w-24 border-2 border-orange-600 mx-auto' />
                        <p className="my-5 font-semibold">No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!</p>
                        <button className="btn bg-orange-600">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;