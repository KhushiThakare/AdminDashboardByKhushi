// OrdersComponent.js

import React from 'react';

const OrdersComponent = ({ orders }) => {
  return (
    <div style={styles.ordersContainer}>
      <h2>Orders</h2>
      <div style={styles.ordersList}>
        {orders.map((order, index) => (
          <div key={index} style={styles.order}>
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Product:</strong> {order.product}</p>
            <p><strong>Price:</strong> ${order.price}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  ordersContainer: {
    margin: '20px',
  },
  ordersList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  order: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default OrdersComponent;
