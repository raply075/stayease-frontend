import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact StayEase</h1>

          <p className="text-xl max-w-3xl mx-auto leading-9">
            Kami siap membantu Anda kapan saja. Hubungi tim StayEase jika
            memiliki pertanyaan, membutuhkan bantuan reservasi, atau ingin
            bekerja sama dengan kami.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="max-w-6xl mx-auto py-20 px-5 grid md:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <FaEnvelope className="text-3xl text-blue-600 mt-1" />

              <div>
                <h3 className="font-bold text-xl">Email</h3>

                <p className="text-gray-600">support@stayease.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FaPhoneAlt className="text-3xl text-green-600 mt-1" />

              <div>
                <h3 className="font-bold text-xl">Phone</h3>

                <p className="text-gray-600">+62 877-2259-0815</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FaMapMarkerAlt className="text-3xl text-red-500 mt-1" />

              <div>
                <h3 className="font-bold text-xl">Office</h3>

                <p className="text-gray-600">
                  Wonogiri, Central Java, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <FaClock className="text-3xl text-yellow-500 mt-1" />

              <div>
                <h3 className="font-bold text-xl">Working Hours</h3>

                <p className="text-gray-600">Monday - Friday</p>

                <p className="text-gray-600">08.00 - 17.00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              placeholder="Write your message..."
              rows={5}
              className="w-full border rounded-lg p-3"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-10">Why Contact StayEase?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-xl p-8">
              <h3 className="font-bold text-2xl mb-3">Fast Response</h3>

              <p className="text-gray-600">
                Tim kami siap merespons pertanyaan Anda dengan cepat dan
                profesional.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-8">
              <h3 className="font-bold text-2xl mb-3">Friendly Support</h3>

              <p className="text-gray-600">
                Kami selalu memberikan pelayanan yang ramah dan membantu.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-8">
              <h3 className="font-bold text-2xl mb-3">Trusted Service</h3>

              <p className="text-gray-600">
                StayEase berkomitmen memberikan pengalaman booking hotel yang
                aman dan nyaman.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
