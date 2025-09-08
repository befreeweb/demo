import React, { useState } from 'react';
import { CreditCard, Shield, Check, X } from 'lucide-react';

export default function BuyWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState('1');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    walletAddress: ''
  });

  const tokenPrice = 1000;
  const numQuantity = parseInt(quantity) || 1;
  const totalPrice = numQuantity * tokenPrice;

  const handleQuantityChange = (value: string) => {
    // Only allow numbers and limit to reasonable range
    const numValue = parseInt(value) || 0;
    if (numValue >= 1 && numValue <= 100) {
      setQuantity(value);
    } else if (value === '') {
      setQuantity('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your payment processor
    alert('Purchase functionality would be integrated with your payment processor');
  };

  return (
    <>
      {/* Buy Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-yellow-400 to-pink-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
      >
        Buy Founding Member Token - $1,000
      </button>

      {/* Buy Widget Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[95vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Buy Founding Member Token
                  </h2>
                  <p className="text-gray-600 mt-1">Secure your lifetime premium membership</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Token Details */}
              <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-2xl p-6 mb-8 border border-purple-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Token Price:</span>
                  <span className="font-bold text-gray-900 text-lg">${tokenPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 font-medium">Quantity:</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleQuantityChange(String(Math.max(1, numQuantity - 1)))}
                      className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-purple-300 hover:bg-purple-50 transition-all font-bold text-gray-600"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(e.target.value)}
                      className="w-16 h-10 text-center font-bold text-gray-900 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                      placeholder="1"
                    />
                    <button
                      onClick={() => handleQuantityChange(String(Math.min(100, numQuantity + 1)))}
                      className="w-10 h-10 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-purple-300 hover:bg-purple-50 transition-all font-bold text-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="border-t border-purple-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 text-right">
                    {numQuantity} token{numQuantity !== 1 ? 's' : ''} × ${tokenPrice.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 rounded-xl border-2 flex items-center justify-center space-x-3 transition-all ${
                      paymentMethod === 'card' 
                        ? 'border-purple-500 bg-purple-50 shadow-md' 
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                    }`}
                  >
                    <CreditCard className="w-6 h-6" />
                    <span className="font-semibold">Credit Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('crypto')}
                    className={`p-4 rounded-xl border-2 flex items-center justify-center space-x-3 transition-all ${
                      paymentMethod === 'crypto' 
                        ? 'border-purple-500 bg-purple-50 shadow-md' 
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                    }`}
                  >
                    <span className="text-xl">₿</span>
                    <span className="font-semibold">Cryptocurrency</span>
                  </button>
                </div>
              </div>

              {/* Purchase Form */}
              <form onSubmit={handlePurchase} className="space-y-6">
                {/* Basic Info */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 focus:border-purple-400 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 focus:border-purple-400 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Payment Fields */}
                {paymentMethod === 'card' ? (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 focus:border-purple-400 outline-none transition-all"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 focus:border-purple-400 outline-none transition-all"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 focus:border-purple-400 outline-none transition-all"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      name="walletAddress"
                      value={formData.walletAddress}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-100 focus:border-purple-400 outline-none transition-all"
                      placeholder="0x..."
                    />
                  </div>
                )}

                {/* Security Notice */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-green-800 font-medium">Secure Payment</span>
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    Your payment information is encrypted and secure
                  </p>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the <span className="text-purple-600 underline cursor-pointer">terms and conditions</span> and understand that all sales are final
                  </label>
                </div>

                {/* Purchase Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Complete Purchase - ${totalPrice.toLocaleString()}
                </button>
              </form>

              {/* Benefits Reminder */}
              <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h4 className="font-bold text-purple-800 mb-4 text-lg">Your Benefits Include:</h4>
                <ul className="space-y-1 text-sm text-purple-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4" />
                    <span>Lifetime premium access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4" />
                    <span>Reduced transaction fees</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4" />
                    <span>Exclusive founders club membership</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4" />
                    <span>Priority access to new features</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}