import Container from "../layout/Container";

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-24">
      <Container>
        <h1 className="text-5xl font-bold mb-4">Find Your Dream Hotel</h1>

        <p className="text-xl">
          Discover thousands of hotels at the best prices.
        </p>
      </Container>
    </section>
  );
};

export default Hero;
