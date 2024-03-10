import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../views";
import RootLayout from "../views/Layout";
import LoginPage from "../views/auth/Login";
import ProtectedRoute from "../views/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorRouteHandler";
import PageNotFound from "../views/PageNotFound";
import RegisterPage from "../views/auth/Register";
import ResetPasswordPage from "../views/auth/ResetPassword";
import Cookies from "universal-cookie";
import AboutUsPage from "../views/pages/AboutUs";
import FaqPage from "../views/pages/Faq";
import ContactUsPage from "../views/pages/ContactUs";
import InvestmentPage from "../views/pages/services/Investment";

const cookie = new Cookies();
const token = cookie.get("userLogged");
const isLoggedIn = token ? true : false;
const userData = isLoggedIn ? { token } : null;

const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="investment" element={<InvestmentPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redircetPath="/"
              data={userData}
            >
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redircetPath="/"
              data={userData}
            >
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="reset-password"
          element={
            <ProtectedRoute
              isAllowed={!isLoggedIn}
              redircetPath="/"
              data={userData}
            >
              <ResetPasswordPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default routers;
