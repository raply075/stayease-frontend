import Container from "../layout/Container";
import {
  FaHotel,
  FaShieldAlt,
  FaMoneyBillWave,
  FaHeadset,
} from "react-icons/fa";

const Feature = () => {
  const features = [
    {
      icon: <FaHotel size={40} />,
      title: "500+ Hotels",
      desc: "Choose from hundreds of premium hotels.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Secure Booking",
      desc: "Your payment is always protected.",
    },
    {
      icon: <FaMoneyBillWave size={40} />,
      title: "Best Price",
      desc: "Guaranteed best prices every day.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      desc: "Customer service anytime you need.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose StayEase?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">{item.title}</h3>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Feature;
