import HeroSection from "./website/HeroSection";
import InvesetSection from "./website/InvestSection";
import MarketingSection from "./website/MarketingSection";
import SignalSection from "./website/SignalSection";
import WalletSection from "./website/WalletSection";

const HomePage = () => {
  return (
    <div className="w-full h-auto space-y-56 mb-8 max-sm:space-y-32 max-sm:overflow-x-hidden container">
      <HeroSection />
      <InvesetSection />
      <SignalSection />
      <WalletSection />
      <MarketingSection />
    </div>
  );
};

export default HomePage;
