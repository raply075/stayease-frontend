import {
  FaHotel,
  FaShieldAlt,
  FaHeadset,
  FaMapMarkedAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-5xl font-bold mb-6">About StayEase</h1>

          <p className="text-xl max-w-3xl mx-auto leading-9">
            StayEase adalah platform pemesanan hotel modern yang dirancang untuk
            memberikan pengalaman reservasi yang cepat, aman, dan nyaman. Kami
            membantu wisatawan maupun pebisnis menemukan hotel terbaik dengan
            harga yang kompetitif.
          </p>
        </div>
      </section>

      {/* Tentang */}
      <section className="max-w-6xl mx-auto py-20 px-5 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Mengapa StayEase?</h2>

          <p className="text-gray-600 leading-8 mb-5">
            StayEase hadir untuk mempermudah proses pencarian dan pemesanan
            hotel. Dengan tampilan yang sederhana, pencarian yang cepat, serta
            informasi hotel yang lengkap, pengguna dapat melakukan reservasi
            hanya dalam beberapa langkah.
          </p>

          <p className="text-gray-600 leading-8">
            Kami percaya bahwa setiap perjalanan dimulai dari tempat menginap
            yang nyaman. Oleh karena itu, kami terus meningkatkan kualitas
            layanan agar setiap pengguna mendapatkan pengalaman terbaik.
          </p>
        </div>

        <img
          src="/src/assets/images/hotel1.jpg"
          alt="Hotel"
          className="rounded-2xl shadow-xl"
        />
      </section>

      {/* Visi Misi */}
      <section className="bg-white dark:bg-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10">
          <div className="shadow-lg rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-blue-600 mb-5">Visi</h3>

            <p className="text-gray-600 leading-8">
              Menjadi platform reservasi hotel terpercaya yang memberikan
              kemudahan, keamanan, dan kenyamanan bagi seluruh pengguna.
            </p>
          </div>

          <div className="shadow-lg rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-blue-600 mb-5">Misi</h3>

            <ul className="space-y-3 text-gray-600">
              <li>✓ Memberikan pengalaman booking yang mudah.</li>
              <li>✓ Menyediakan informasi hotel yang lengkap.</li>
              <li>✓ Menjamin keamanan transaksi pengguna.</li>
              <li>✓ Memberikan pelayanan terbaik 24/7.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="max-w-6xl mx-auto py-20 px-5">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose StayEase?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8 text-center">
            <FaHotel className="text-5xl text-blue-600 mx-auto mb-5" />
            <h3 className="font-bold text-xl mb-3">Best Hotels</h3>
            <p className="text-gray-500">
              Ratusan hotel berkualitas tersedia untuk berbagai kebutuhan.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8 text-center">
            <FaShieldAlt className="text-5xl text-green-600 mx-auto mb-5" />
            <h3 className="font-bold text-xl mb-3">Secure Booking</h3>
            <p className="text-gray-500">
              Data dan transaksi pengguna terlindungi dengan aman.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8 text-center">
            <FaHeadset className="text-5xl text-red-500 mx-auto mb-5" />
            <h3 className="font-bold text-xl mb-3">24/7 Support</h3>
            <p className="text-gray-500">
              Tim kami siap membantu kapan saja dibutuhkan.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8 text-center">
            <FaMapMarkedAlt className="text-5xl text-yellow-500 mx-auto mb-5" />
            <h3 className="font-bold text-xl mb-3">Many Destinations</h3>
            <p className="text-gray-500">
              Temukan hotel di berbagai kota favorit di Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h2 className="text-5xl font-bold">500+</h2>
            <p className="mt-3">Hotels</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">20K+</h2>
            <p className="mt-3">Happy Customers</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">150+</h2>
            <p className="mt-3">Destinations</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">24/7</h2>
            <p className="mt-3">Customer Support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center max-w-4xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          Temukan hotel impian Anda dengan mudah bersama StayEase dan nikmati
          pengalaman menginap terbaik di berbagai destinasi.
        </p>

        <a
          href="/hotels"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg"
        >
          Explore Hotels
        </a>
      </section>
    </div>
  );
};

export default About;
