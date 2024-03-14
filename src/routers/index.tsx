import {
  Route,
  // createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../views";
import RootLayout from "../views/Layout";
import ErrorHandler from "../components/errors/ErrorRouteHandler";
import PageNotFound from "../views/PageNotFound";
import AboutUsPage from "../views/pages/AboutUs";
import FaqPage from "../views/pages/Faq";
import ContactUsPage from "../views/pages/ContactUs";
import WalletPage from "../views/pages/services/Wallet";
import SignalPage from "../views/pages/services/Signals";
import MarketingPage from "../views/pages/services/Marketing";
import InvestmentPage from "../views/pages/services/Investment";
import AchievementPage from "../views/pages/Achievements";

const routers = createHashRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="signal" element={<SignalPage />} />
        <Route path="marketing" element={<MarketingPage />} />
        <Route path="investment" element={<InvestmentPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact-us" element={<ContactUsPage />} />
        <Route path="achievements" element={<AchievementPage />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default routers;
