import countries from "world-countries";

const Signup = () => {
  const countryList = countries.map((country) => ({
    name: country.name.common,
    code: country.cca2,
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 py-20 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              FullName <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter Phone number"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country <span className="text-red-600">*</span>
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Choose Country</option>
              {countryList.map((country: { name: string; code: string }) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div></div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-700 transition cursor-pointer"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-teal-500 hover:underline font-medium"
          >
            Login
          </a>
        </p>

        <p className="mt-6 text-center text-xs text-gray-400">
          © Copyright 2025&nbsp;
          <span className="font-semibold text-gray-600">Fundnest</span>
          &nbsp;All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Signup;
