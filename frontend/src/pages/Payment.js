import React, { useState } from 'react';

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || !cardNumber || !expiryDate || !cvv || !name) {
            setError('Please fill in all fields');
            return;
        }

        // Simulate successful payment
        alert('Payment Successful!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-2xl space-y-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Payment Information</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Amount Field */}
                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
                            Amount
                        </label>
                        <input
                            type="text"
                            id="amount"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                            placeholder="$100.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    {/* Card Number Field */}
                    <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                            placeholder="1234 5678 9876 5432"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                    </div>

                    {/* Expiry Date Field */}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-600">
                                Expiry Date
                            </label>
                            <input
                                type="text"
                                id="expiryDate"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                                placeholder="MM/YY"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                            />
                        </div>

                        {/* CVV Field */}
                        <div className="w-1/2">
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-600">
                                CVV
                            </label>
                            <input
                                type="password"
                                id="cvv"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                                placeholder="123"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Cardholder Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Cardholder Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-semibold p-3 rounded-lg hover:bg-indigo-700 focus:outline-none disabled:bg-gray-300"
                        >
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Payment;
