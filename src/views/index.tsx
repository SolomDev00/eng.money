import Footer from "../components/footer";
import AchievementSection from "./website/AchievementSection";
import LandingSection from "./website/LandingSection";
import InvesetSection from "./website/InvestSection";
import MarketingSection from "./website/MarketingSection";
import SignalSection from "./website/SignalSection";
import WalletSection from "./website/WalletSection";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-auto space-y-56 mb-8 max-sm:space-y-56 max-sm:overflow-x-hidden container">
        <LandingSection />
        <InvesetSection />
        <SignalSection />
        <WalletSection />
        <MarketingSection />
        <AchievementSection />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
