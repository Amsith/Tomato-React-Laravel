import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const AdminEdit = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [categories, setCategories] = useState('')
    const [shortdesc, setShortdesc] = useState('')
    const [about, setAbout] = useState('')
    const [price, setPrice] = useState('')
    const [prodimage, setProdimage] = useState(null)

    const [message, setMessage] = useState('')


    useEffect(() => {

        axios.get(`http://127.0.0.1:8000/api/foods/${id}/edit`)
            .then(res => {
                setName(res.data.fire.name)
                setCategories(res.data.fire.categories)
                setShortdesc(res.data.fire.shortdesc)
                setAbout(res.data.fire.about)
                setPrice(res.data.fire.price)
                setProdimage(res.data.fire.prodimage)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id])





    const submit = (e) => {
        e.preventDefault()

        const form = new FormData();
        form.append('name', name);
        form.append('categories', categories);
        form.append('shortdesc', shortdesc);
        form.append('about', about);
        form.append('price', price);
        form.append('prodimage', prodimage);

        axios.put(`http://127.0.0.1:8000/api/foods/${id}`, form, {
            headers: { "Content-Type": 'multipart/form-data', },
        })
            .then((res) => {
                setMessage(res.data.message)
                navigate('/admin/table')

            })
            .catch(error => {
                console.error('Error:', error);
                // Set error message

            });

    }

    return (
        <div>
            <h2 className='form-h2'>Edit Products</h2>
            <form onSubmit={submit}>
                <div className='name-div'>
                    <label htmlFor="">Name</label> <br />
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Product Name' />
                </div>
                <div>
                    <label htmlFor="">Select Category</label> <br />
                    <select name="categories" value={categories} onChange={(e) => setCategories(e.target.value)}>
                        <option value="" disabled>Categories</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Desert">Desert</option>
                        <option value="Sand-wich">Sand-Wich</option>
                        <option value="Cake">Cake</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Short Description</label> <br />
                    <textarea name="shortdesc" value={shortdesc} rows={5} onChange={(e) => setShortdesc(e.target.value)} placeholder='Short Description 50 characters'></textarea>
                </div>
                <div>
                    <label htmlFor="">About</label> <br />
                    <textarea name="about" value={about} rows={10} onChange={(e) => setAbout(e.target.value)} placeholder='About'></textarea>
                </div>
                <div>
                    <label htmlFor="">Price</label> <br />
                    <input name='price' value={price} type="number" onChange={(e) => setPrice(e.target.value)} placeholder='$' />
                </div>
                <div>
                    <label htmlFor="">Prouduct Image</label> <br />
                    {/* <img
                        src={`http://127.0.0.1:8000/products/${prodimage}`}
                        alt="Current Product"
                        width={100} />
                    */}
                    <input name='prodimage' type="file" onChange={(e) => setProdimage(e.target.files[0])} />
                </div>
                <div className='admin-btn'>
                    <button type='submit'>Update</button>
                </div>
            </form>

            {message && <div><p className='message-show'>{message}</p></div>}

        </div>
    )
}

export default AdminEdit


