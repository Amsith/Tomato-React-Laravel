import './LatestProduct.css'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// star
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const LatestProduct = () => {

    const [latest, setLatest] = useState([])

    const latestProduct = () => [
        axios.get('http://127.0.0.1:8000/api/foods')
            .then((res) => { setLatest(res.data.latest) })
    ]

    useEffect(() => {
        latestProduct()
    }, [])

    return (
        <div className='swipper-div'>
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                centeredSlides={false}

                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 640px
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    // when window width is >= 768px
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    // when window width is >= 1024px
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    // when window width is >= 1200px
                    1050: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                
                <div>
                    
                {latest.map((latest,index)=>(
                    <SwiperSlide>
                        

                        <div key={index} className='dishes'>
                            <img src={`http://127.0.0.1:8000/products/${latest.prodimage}`} alt="" />
                            <div className='name-star'>
                                <div>{latest.name}</div>
                                <div className='dishes-star'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div>
                            </div>
                            <p className='dishes-category'>{latest.categories}</p>
                            <p className='dishes-small-about'>{latest.shortdesc}</p>
                            <p className='dishes-price'>${latest.price}</p>
                        </div>

                    </SwiperSlide>
                        ))}



                    
                </div>
            </Swiper>
        </div>
    )
}

export default LatestProduct;
