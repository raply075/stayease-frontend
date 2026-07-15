import { FaHotel } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <FaHotel className="text-3xl text-blue-600" />
            <h1 className="text-3xl font-bold text-blue-600">StayEase</h1>
          </Link>

          {/* Menu */}
          <nav>
            <ul className="hidden md:flex gap-10 text-lg font-medium">
              <li>
                <Link to="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/hotels" className="hover:text-blue-600">
                  Hotels
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Button */}
          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-5 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Register
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
