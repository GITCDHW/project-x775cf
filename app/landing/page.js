import HeroSection from '../../components/HeroSection';
import FeaturesSection from '../../components/FeaturesSection';
import CallToActionSection from '../../components/CallToActionSection';
import Footer from '../../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}