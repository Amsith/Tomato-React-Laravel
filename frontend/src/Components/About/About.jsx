import React, { useEffect, useState } from 'react';
import './About.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const About = () => {
    const [about, setAbout] = useState();

    const fetchAbout = () => {
        axios.get(`http://127.0.0.1:8000/api/foods/${id}`)
            .then((res) => setAbout(res.data.aboutfire))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchAbout();
    }, []);

   

    return (
        <div className='about-main-div'>
            <div className='about-img'>
                <img src={`http://127.0.0.1:8000/products/${about.prodimage}`} width={100} alt={about.name} />
            </div>
            <div className='about-about'>
                <div>{about.name}</div>
                <div>{about.categories}</div>
                <div>{about.shortdesc}</div>
                <div>{about.description}</div>
                <div>${about.price}</div>
            </div>
        </div>
    );
};

export default About;
