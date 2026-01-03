import React, { useState, useEffect } from 'react'
import { BACKEND_URL } from '../utils/backendUrl'

const Record = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/lander21/get-orders`)
      const result = await response.json()

      if (result.success) {
        setOrders(result.data)
      } else {
        setError('Failed to fetch orders')
      }
    } catch (err) {
      setError('Error fetching orders: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString()
  }

  const formatDateTime = (dateTimeString) => {
    return new Date(dateTimeString).toLocaleString()
  }

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>
  }

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>{error}</div>
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Order Records</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f5f5f5' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Order ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Phone</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Gender</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>DOB</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Place of Birth</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Preferred Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Additional Products</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Amount</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.orderId}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.fullName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.email}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.phoneNumber}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.gender}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formatDate(order.dob)}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.placeOfBirth}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formatDateTime(order.prefferedDateAndTime)}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.additionalProducts.join(", ")}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>₹{order.amount}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formatDateTime(order.orderDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Record
