import React, {useState} from 'react'



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in:', { email, password });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-200 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left side - Sign in form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Sign in</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-yellow-600 hover:text-yellow-700">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Sign in
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/signup" className="text-yellow-600 hover:text-orange-700 font-semibold">
                  Sign up
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
              <h2 className="text-2xl font-bold text-gray-800">Best Travel Agancy in Sri Lanka</h2>
              <p className="text-gray-600 mt-2">
                We have a great deal for our dear customers. You can see the detailed
                brand of our package in Sri Lanka.
              </p>
              <button className="mt-6 px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-yellow-500 transition duration-300">
                Get More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login