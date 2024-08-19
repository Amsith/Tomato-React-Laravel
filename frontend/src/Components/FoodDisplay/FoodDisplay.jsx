import React, { useEffect, useState } from 'react'
import './FoodDisplay.css'
import { Link } from 'react-router-dom';

// Star Icon
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import axios from 'axios'

//Menu list
import menu_list1 from '../../assets/frontend_assets/menu_1.png';
import menu_list2 from '../../assets/frontend_assets/menu_2.png';
import menu_list3 from '../../assets/frontend_assets/menu_3.png';
import menu_list4 from '../../assets/frontend_assets/menu_4.png';
import menu_list5 from '../../assets/frontend_assets/menu_5.png';
import LatestProduct from '../LatestProduct/LatestProduct';


const FoodDisplay = () => {

    // Backend Code
    const [display, setDisplay] = useState([])

    const foodDisplay = () => {
        axios.get('http://127.0.0.1:8000/api/foods')
            .then(res => setDisplay(res.data.fire))
    }

    useEffect(() => {
        foodDisplay()
    }, [])
    // Backend Code


    // Filter Function
    const [filter, setFilter] = useState('');

    const filteredPosts = filter
        ? display.filter(p => p.categories.toLowerCase().includes(filter.toLowerCase()))
        : display;
    // Filter Function

    return (
        <div className='food-display'>

          


            <div className='explore-menu'>
                <h1>Explore Our Menu</h1>
                <p>Choose from adiverse menu featuring a delectable array of dishes. Our mission to satisfy your
                    carvings and elevate dishing experince. one delicius meal t a time
                </p>
            </div>

            <div className='menu-list'>

                <button onClick={() => setFilter('')} >
                    <img src={menu_list1} alt="" className={filter === '' ? 'active' : ''} />
                    <p>All</p>
                </button>
                <button onClick={() => setFilter('Rolls')}  >
                    <img src={menu_list2} alt="" className={filter === 'Rolls' ? 'active' : ''} />
                    <p>Rolls</p>
                </button>
                <button onClick={() => setFilter('Desert')}  >
                    <img src={menu_list3} alt="" className={filter === 'Desert' ? 'active' : ''} />
                    <p>Desert</p>
                </button>
                <button onClick={() => setFilter('Sand-wich')} >
                    <img src={menu_list4} alt="" className={filter === 'Sand-wich' ? 'active' : ''} />
                    <p>Sand-Wich</p>
                </button>
                <button onClick={() => setFilter('Cake')} >
                    <img src={menu_list5} alt="" className={filter === 'Cake' ? 'active' : ''} />
                    <p>Cake</p>
                </button>

            </div>

            <hr />
            {/* Showing Dishes */}
            <div className='dishes-main'>

                {filteredPosts.map((product, index) => (

                    <div key={index} className='disehs-div'>
                        <div className='dishes'>
                            <img src={`http://127.0.0.1:8000/products/${product.prodimage}`} alt="" />
                            <div className='name-star'>
                                <Link to={`/about/${product.id}`}>
                                    <div>{product.name}</div>
                                </Link>
                                <div className='dishes-star'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStarHalf /></div>
                            </div>
                            <p className='dishes-category'>{product.categories}</p>
                            <p className='dishes-small-about'>{product.shortdesc}</p>
                            <p className='dishes-price'>${product.price}</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default FoodDisplay