import { MdEmail, MdLocationOn } from "react-icons/md";

const ContactUs = () => {
  return (
    <section className="py-16 px-4 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-4">
          LET'S TALK
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Having troubles, suggestions or information you’d like to share? Drop
          us a message.
        </p>

        <div className="flex flex-col md:flex-row gap-10 mb-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-start gap-4">
              <MdEmail size={28} className="text-teal-700" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Email Us
                </h3>
                <p className="text-gray-600">support@fundnest.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdLocationOn size={28} className="text-teal-700" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Location
                </h3>
                <p className="text-gray-600">
                  St Martins Tower, Level 27/44 St Georges Terrace,
                  <br />
                  Perth WA 6000, Australia
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex-1 bg-teal-50 p-6 rounded-lg shadow-md space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-800 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
