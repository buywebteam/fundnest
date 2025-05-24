const PasswordResetCard = () => {
  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Password Reset</h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 "
              placeholder="name@example.com"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-700 transition-colors cursor-pointer"
          >
            Email Password Reset Link
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Repeat login?{" "}
          <a href="/login" className="text-teal-500 hover:underline">
            Login
          </a>
        </p>

        <p className="text-xs text-center text-gray-400 mt-6">
          © 2025 Fundnest. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default PasswordResetCard;
