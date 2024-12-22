import React, {useState} from 'react'
import InputField from '../component/InputField';

export const Register = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-200 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left side - Sign in form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign up</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <InputField
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <InputField
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Sign up
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/login" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  Sign in
                </a>
              </p>
            </div>
          </form>
          <div className="mt-8 text-center">
            <div className="text-xs text-gray-500 space-x-4">
              <a href="#" className="hover:text-gray-700">Terms & Conditions</a>
              <span>•</span>
              <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block md:w-1/2 bg-yellow-50 p-8">
          <div className="h-full flex flex-col items-center justify-center">
            <img
              src="/Images/login.JPG"
              alt="travel agancy"
              className="w-full max-w-md"
            />
            <div className="text-center mt-8">
              <h2 className="text-2xl font-bold text-gray-800">Join Our Community</h2>
              <p className="text-gray-600 mt-2">
              Create an account to access exclusive deals and special offers on our premium package.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-yellow-500 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
