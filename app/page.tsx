import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { FeatureCards } from "@/components/landing/feature-cards";
import { TrustedClients } from "@/components/landing/trusted-clients";
import { OurFeatures } from "@/components/landing/our-features";
import { WhyLearn } from "@/components/landing/why-learn";
import { ConsistentLearning } from "@/components/landing/consistent-learning";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8 animate-page-fade-in">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Main Container with gradient background */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #f5f0e8 0%, #e8ddd0 20%, #f0e8dc 40%, #e5d8f0 60%, #d4c8e8 80%, #c8bce0 100%)",
        }}
      >
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated gradient blob */}
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-morph pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-40 left-10 w-80 h-80 bg-gradient-to-r from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl animate-morph pointer-events-none"
          style={{ animationDelay: "-4s" }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header Section */}
          <div className="px-4 md:px-8 lg:px-12 pt-6">
            <Header />
          </div>

          {/* Hero Section */}
          <div className="px-4 md:px-8 lg:px-12">
            <HeroSection />
          </div>

          {/* Feature Cards */}
          <div className="px-4 md:px-8 lg:px-12">
            <FeatureCards />
          </div>

          {/* Trusted Clients */}
          <div className="px-4 md:px-8 lg:px-12 bg-white/60 backdrop-blur-sm">
            <TrustedClients />
          </div>

          {/* Our Features */}
          <div className="px-4 md:px-8 lg:px-12 bg-white/40">
            <OurFeatures />
          </div>

          {/* Why Learn */}
          <div className="px-4 md:px-8 lg:px-12 bg-white/30">
            <WhyLearn />
          </div>

          {/* Consistent Learning */}
          <div className="px-4 md:px-8 lg:px-12 bg-white/40">
            <ConsistentLearning />
          </div>

          {/* CTA Section */}
          <div className="px-4 md:px-8 lg:px-12 bg-white/50">
            <CTASection />
          </div>

          {/* Footer */}
          <div className="px-4 md:px-8 lg:px-12 bg-card">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
