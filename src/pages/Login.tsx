const Login = () => {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login to Fundnest
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your username or email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-teal-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-700 transition-colors cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-teal-500 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>

        <p className="text-xs text-center text-gray-400 mt-6">
          © 2025 Fundnest. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
