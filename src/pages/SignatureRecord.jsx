import React, { useState, useEffect } from 'react';
import { FileText, Users, Calendar, Phone, Mail, MapPin, User, Clock, Star, Search, CheckCircle } from 'lucide-react';
import SignatureNavbar from '../components/signature/SignatureNavbar';
import { BACKEND_URL } from '../utils/backendUrl';

const SignatureRecord = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/lander4/get-orders`);
            const result = await response.json();

            if (result.success) {
                setOrders(result.data);
            } else {
                setError('Failed to fetch signature orders');
            }
        } catch (err) {
            setError('Error fetching signature orders: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    const formatDateTime = (dateTimeString) => {
        return new Date(dateTimeString).toLocaleString();
    };

    const filteredOrders = orders.filter(order =>
        order.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.orderId?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
                <SignatureNavbar />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
                        <p className="text-gray-600 font-primary">Loading your signature design records...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
                <SignatureNavbar />
                <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                        <div className="text-4xl mb-4">✍️</div>
                        <p className="text-red-600 font-primary">{error}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
            <SignatureNavbar />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Signature Design Records
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        View all your signature design orders and their current status
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by name, email, or order ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Orders Table */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-gray-800 to-black text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Order ID</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Phone</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Gender</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">DOB</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Place of Birth</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Additional Products</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Order Date</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {filteredOrders.map((order, index) => (
                                    <tr key={order._id} className={`hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <td className="px-6 py-4 text-sm font-mono text-gray-800">{order.orderId}</td>
                                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">{order.fullName}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{order.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{order.phoneNumber}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600 capitalize">{order.gender}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{formatDate(order.dob)}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{order.placeOfBirth}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {order.additionalProducts ? order.additionalProducts.join(", ") : "Signature Design"}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-800">₹{order.amount}</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{formatDateTime(order.orderDate)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    {filteredOrders.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-4xl mb-4">✍️</div>
                            <p className="text-gray-500">
                                {searchTerm ? 'No orders found matching your search.' : 'No signature design orders found.'}
                            </p>
                        </div>
                    )}
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center">
                                <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-800">{filteredOrders.length}</p>
                                <p className="text-sm text-gray-600">Total Orders</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-800">
                                    ₹{filteredOrders.reduce((sum, order) => sum + order.amount, 0)}
                                </p>
                                <p className="text-sm text-gray-600">Total Revenue</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                                <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-800">
                                    {new Set(filteredOrders.map(order => order.email)).size}
                                </p>
                                <p className="text-sm text-gray-600">Unique Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignatureRecord; 