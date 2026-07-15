import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import DashboardLayout from "../components/layout/DashboardLayout";
import EditHotel from "./EditHotel";
import PageTransition from "../components/common/PageTransition";
import NotFound from "../components/ui/NotFound";

/* ================= LAZY IMPORT ================= */

const Home = lazy(() => import("../pages/Home/Home"));
const Hotels = lazy(() => import("../pages/Hotels/Hotels"));
const HotelDetail = lazy(() => import("../pages/HotelDetail/HotelDetail"));

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const AdminDashboard = lazy(() => import("../pages/Admin/AdminDashboard"));
const ManageHotels = lazy(() => import("../pages/Admin/ManageHotels"));

const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));
const Booking = lazy(() => import("../pages/Booking/Booking"));
const BookingDetail = lazy(() => import("../pages/Booking/BookingDetail"));
const Favorites = lazy(() => import("../pages/Favorite/Favorites"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const MyBooking = lazy(() => import("../pages/MyBooking/Mybooking"));
const Settings = lazy(() => import("../pages/Settings/Settings"));
const CreateHotel = lazy(() => import("../pages/Admin/CreateHotel"));
const ManageBookings = lazy(() => import("../pages/Admin/ManageBookings"));
const ManageUsers = lazy(() => import("../pages/Admin/ManageUsers"));
const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen text-2xl font-bold">
          Loading...
        </div>
      }
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* PUBLIC */}

          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/hotels"
            element={
              <PageTransition>
                <Hotels />
              </PageTransition>
            }
          />

          <Route
            path="/hotel/:id"
            element={
              <PageTransition>
                <HotelDetail />
              </PageTransition>
            }
          />

          <Route
            path="/booking"
            element={
              <PageTransition>
                <Booking />
              </PageTransition>
            }
          />

          <Route
            path="/login"
            element={
              <PageTransition>
                <Login />
              </PageTransition>
            }
          />

          <Route
            path="/register"
            element={
              <PageTransition>
                <Register />
              </PageTransition>
            }
          />

          <Route
            path="/favorites"
            element={
              <PageTransition>
                <Favorites />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />

          {/* USER */}

          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="/dashboard"
              element={
                <PageTransition>
                  <Dashboard />
                </PageTransition>
              }
            />

            <Route
              path="/profile"
              element={
                <PageTransition>
                  <Profile />
                </PageTransition>
              }
            />

            <Route
              path="/my-booking"
              element={
                <PageTransition>
                  <MyBooking />
                </PageTransition>
              }
            />

            <Route
              path="/booking-detail/:id"
              element={
                <PageTransition>
                  <BookingDetail />
                </PageTransition>
              }
            />

            <Route
              path="/settings"
              element={
                <PageTransition>
                  <Settings />
                </PageTransition>
              }
            />
          </Route>

          {/* ADMIN */}

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <DashboardLayout />
                </AdminRoute>
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <PageTransition>
                  <AdminDashboard />
                </PageTransition>
              }
            />

            <Route
              path="hotels"
              element={
                <PageTransition>
                  <ManageHotels />
                </PageTransition>
              }
            />

            <Route
              path="hotels/create"
              element={
                <PageTransition>
                  <CreateHotel />
                </PageTransition>
              }
            />

            <Route
              path="hotels/edit/:id"
              element={
                <PageTransition>
                  <EditHotel />
                </PageTransition>
              }
            />

            <Route
              path="bookings"
              element={
                <PageTransition>
                  <ManageBookings />
                </PageTransition>
              }
            />

            <Route
              path="users"
              element={
                <PageTransition>
                  <ManageUsers />
                </PageTransition>
              }
            />

            <Route
              path="settings"
              element={
                <PageTransition>
                  <Settings />
                </PageTransition>
              }
            />
          </Route>

          {/* 404 */}

          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default AppRoutes;
