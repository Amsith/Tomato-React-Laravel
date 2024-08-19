import React, { useEffect, useState } from 'react';
import './AdminTable.css'; // Import the CSS file for styling
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminTable = () => {
  const [show, setShow] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://127.0.0.1:8000/api/foods')
      .then(res => {
        setShow(res.data.fire);
        setFilteredData(res.data.fire);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/foods/${id}`)
      .then(() => {
        fetchData();
      });
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchBTN = () => {
    const filtered = show.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categories.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toString().includes(searchQuery)
    );
    setFilteredData(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchBTN();
    }
  };

  const calculateCategoryCounts = () => {
    const counts = {
      Rolls: 0,
      Desert: 0,
      "Sand-Wich": 0,
      Cake: 0,
    };
    show.forEach(product => {
      if (counts.hasOwnProperty(product.categories)) {
        counts[product.categories]++;
      }
    });
    return counts;
  };

  const categoryCounts = calculateCategoryCounts();

  return (
    <div className="admin-table-container">
      <div className='head-serachbox'>
        <h2 className="form-h2">Table Products</h2>
        <div className='admin-search-and-btn-div'>
          <input
            className='admin-serach-input'
            onKeyDown={handleKeyDown}
            value={searchQuery}
            onChange={handleSearchInput}
            type="text"
            placeholder="Search by name, category or price"
          />
          <button className='admin-serach-input-btn' onClick={handleSearchBTN}>Search</button>
        </div>
      </div>
      <div className='showing-counts'>
        <h3 className="form-h2">Total products: {show.length}</h3>
        <h3 className="form-h2">Rolls: {categoryCounts.Rolls || 0}</h3>
        <h3 className="form-h2">Desert: {categoryCounts.Desert || 0}</h3>
        <h3 className="form-h2">Sand-Wich: {categoryCounts["Sand-Wich"] || 0}</h3>
        <h3 className="form-h2">Cake: {categoryCounts.Cake || 0}</h3>
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
          {filteredData.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><img width={100} src={`http://127.0.0.1:8000/products/${product.prodimage}`} alt="Food" /></td>
              <td>{product.name}</td>
              <td>{product.categories}</td>
              <td>{product.shortdesc}</td>
              <td>{product.about}</td>
              <td>${product.price}</td>
              <td>
                <div className='table-btn'>
                  <Link to={'/admin/edit/' + product.id}>
                    <button><FaRegEdit /></button>
                  </Link>
                  <button onClick={() => handleDelete(product.id)}><MdDeleteForever /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
