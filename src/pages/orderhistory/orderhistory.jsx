import React, { useState } from 'react';
import './orderhistory.css';

export const OrderHistory = () => {
  const [orders, setOrders] = useState([
    { id: 1, date: '2023-06-01', price: 99.99 },
    { id: 2, date: '2023-06-05', price: 49.99 },
    { id: 3, date: '2023-06-03', price: 79.99 },
    // Add more sample orders as needed
  ]);

  const [sortOption, setSortOption] = useState('');

  const handleSort = (option) => {
    setSortOption(option);
    const sortedOrders = [...orders];

    if (option === 'price') {
      sortedOrders.sort((a, b) => a.price - b.price);
    } else if (option === 'date') {
      sortedOrders.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    setOrders(sortedOrders);
  };

  return (
    <div className="order-history-container">
      <h2>Order History</h2>

      <div className="sort-options">
        <label>Sort by:</label>
        <select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
          <option value="">Select</option>
          <option value="price">Price</option>
          <option value="date">Date</option>
        </select>
      </div>

      <table className="order-history-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>${order.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


