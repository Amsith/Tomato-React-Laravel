import React, { useState } from 'react';
import './AdminCreate.css';
import axios from 'axios';

const AdminCreate = () => {
  const [name, setName] = useState('');
  const [categories, setCategories] = useState('');
  const [shortdesc, setShortdesc] = useState('');
  const [about, setAbout] = useState('');
  const [price, setPrice] = useState('');
  const [prodimage, setProdimage] = useState(null);


  const [message, setMessage] = useState('');

// Valdiation state
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!categories) newErrors.categories = 'Category is required';

    if (!shortdesc) {
      newErrors.shortdesc = 'Short Description is required';
    } else if (shortdesc.length > 60) {
      newErrors.shortdesc = 'Short Description cannot exceed 50 characters';
    }
    if (!about) newErrors.about = 'About is required';
    if (!price || isNaN(price) || price < 0) newErrors.price = 'Price must be a positive number';
    if (!prodimage) newErrors.prodimage = 'Product Image is required';
    else if (!prodimage.name.match(/\.(jpg|jpeg|png)$/)) newErrors.prodimage = 'Invalid image type. Only jpg, jpeg, and png are allowed';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // Backedn Code for create
  const submit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const form = new FormData();
    form.append('name', name);
    form.append('categories', categories);
    form.append('shortdesc', shortdesc);
    form.append('about', about);
    form.append('price', price);
    form.append('prodimage', prodimage);

    axios.post('http://127.0.0.1:8000/api/foods', form, {
      headers: { "Content-Type": 'multipart/form-data' },
    })
      .then((res) => {setMessage(res.data.message);
        
        setName('');
        setCategories('');
        setShortdesc('');
        setAbout('');
        setPrice('');
        setProdimage(null);
        e.target.reset();
        setErrors({});
        setTimeout(() => {
          setMessage('')
        }, 3000);
      })
     
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2 className='form-h2'>Create Products</h2>
      <form onSubmit={submit}>
        <div className='name-div'>
          <label htmlFor="">Name</label> <br />
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Product Name' />
          {errors.name && <p className='error-message'>{errors.name}</p>}
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
          {errors.categories && <p className='error-message'>{errors.categories}</p>}
        </div>
        <div>
          <label htmlFor="">Short Description</label> <br />
          <textarea name="shortdesc" value={shortdesc} rows={5} onChange={(e) => setShortdesc(e.target.value)} placeholder='Short Description 50 characters'></textarea>
          {errors.shortdesc && <p className='error-message'>{errors.shortdesc}</p>}
        </div>
        <div>
          <label htmlFor="">About</label> <br />
          <textarea name="about" value={about} rows={10} onChange={(e) => setAbout(e.target.value)} placeholder='About'></textarea>
          {errors.about && <p className='error-message'>{errors.about}</p>}
        </div>
        <div>
          <label htmlFor="">Price</label> <br />
          <input name='price' value={price} type="number" onChange={(e) => setPrice(e.target.value)} placeholder='$' />
          {errors.price && <p className='error-message'>{errors.price}</p>}
        </div>
        <div>
          <label htmlFor="">Product Image</label> <br />
          <input name='prodimage' type="file" onChange={(e) => setProdimage(e.target.files[0])} />
          {errors.prodimage && <p className='error-message'>{errors.prodimage}</p>}
        </div>
        <div className='admin-btn'>
          <button type='submit'>Create</button>
        </div>
      </form>

      {message && <div>
        <p className='message-show'>{message}</p>
      </div>}
    </div>
  );
};

export default AdminCreate;
