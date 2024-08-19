import React from 'react'
import './Home.css'
import FoodDisplay from '../FoodDisplay/FoodDisplay'
import LatestProduct from '../LatestProduct/LatestProduct'


const Home = () => {
    return (
        <div className='home-div'>
            <div className='div-img'>
                <div className='home-about'>
                    <h1>Order your </h1>
                    <h1>favourite food here</h1>
                    <h3>Freshness is one of the most important qualities of any food. It directly
                        what we eat. Fresh ingredients have vibran. They are also more nutritious, as they retain more vitamins, minerals, and antioxidants compared
                        .</h3>
                    <button>View More</button>
                </div>
            </div>

            <div className='latest-food'>
                <h1>Latest Foods</h1>
                <p>Modern food is the food that produced this modern era where the foods are applied with advanced food science principles usually or sometimes through the continuous experimental food- making
                </p>
            </div>
            <LatestProduct/>
            <FoodDisplay/>
        </div>
    )
}

export default Home