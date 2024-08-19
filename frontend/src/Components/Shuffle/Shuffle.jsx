import React, { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shuffle = () => {
  const [shuf, setShuffle] = useState([]);

  const fetchData = () => {
    axios.get('http://127.0.0.1:8000/api/foods')
      .then(res => {
        setShuffle(res.data.shuffled);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-table-container">
      <div className='head-searchbox'>
        <h2 className="form-h2">Table Products</h2>
        <div className='admin-search-and-btn-div'>
        </div>
      </div>
     
      <table className="admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Short Desc</th>
            <th>About</th>
            <th>$</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shuf.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td><img width={100} src={`http://127.0.0.1:8000/products/${product.prodimage}`} alt="Food" /></td>
              <td>{product.name}</td>
              <td>{product.categories}</td>
              <td>{product.shortdesc}</td>
              <td>{product.about}</td>
              <td>${product.price}</td>
              <td>
                <div className='table-btn'>
                  <Link to={'/admin/edit/' + product.id}><button><FaRegEdit /></button></Link>
                  <button><MdDeleteForever /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shuffle;
