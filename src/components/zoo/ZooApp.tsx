import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { WelcomeSection } from "./WelcomeSection";
import { InfoBanner } from "./InfoBanner";
import { FeaturedAnimals } from "./FeaturedAnimals";
import { AnimalGallery } from "./AnimalGallery";
import { Footer } from "./Footer";

export const ZooApp: React.FC = () => {
  // Info banner data
  const infoItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/40a73d7699678b2a673ad657538a6d56ee0d18f9?placeholderIfAbsent=true",
      text: "9AM - 6PM",
      alt: "Opening Hours"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/6588ed7f32a3dc0291c39eae5597c6eeea06b5f0?placeholderIfAbsent=true",
      text: "RS -50",
      alt: "Ticket Price"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/9d83ad9c547fb791ccee76422cd97da231bc93c1?placeholderIfAbsent=true",
      text: "Direction",
      alt: "Directions"
    }
  ];

  // Featured animals data
  const featuredImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/2039f4351b228d1ed94737ee7e4e599b30e0a0c7?placeholderIfAbsent=true", alt: "Featured Animal 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/2209d0e8c90180ee3d1d51da32fc8948f6f4aa22?placeholderIfAbsent=true", alt: "Featured Animal 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/dab8305389c8e2a3086e19fb000f028f9853dcd1?placeholderIfAbsent=true", alt: "Featured Animal 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/dc89c1f46fc9dd5c641baa1afacc9ed44d6e6eed?placeholderIfAbsent=true", alt: "Featured Animal 4" }
  ];

  // Animal gallery data
  const animals = [
    {
      name: "Lion",
      description: "Visit the lion enclosure",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/c08ddb5733f3b04dd89a8ce4b1213d16227be9c8?placeholderIfAbsent=true"
    },
    {
      name: "Tiger",
      description: "Visit the Tiger enclosure",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/cf4314d767288b67e3698b4183494a589a25dd8c?placeholderIfAbsent=true"
    }
  ];

  // Footer navigation items
  const footerItems = [
    [
      { icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/4ec9824a72cd8b92a4ebc3b5f4c6cc45b35a0fe6?placeholderIfAbsent=true", label: "Home", alt: "Home Icon" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/dd74e3c5283e30fb05adb7e31a07dbb67fa86c6b?placeholderIfAbsent=true", label: "Animals", alt: "Animals Icon" }
    ],
    [
      { icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/4972026a2514a74e64dcaec01ff9808ec1116ee5?placeholderIfAbsent=true", label: "Tickets", alt: "Tickets Icon" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/d11f4b86697006743febabe3b08f674dd0d9b2a9?placeholderIfAbsent=true", label: "Map", alt: "Map Icon" }
    ],
    [
      { icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/a2b4ca5b1f6caa3ff4acddb10ea2ee2c98f55c16?placeholderIfAbsent=true", label: "QR Code", alt: "QR Code Icon" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/65ed7c3735b1440d3e40fa42372fd35b9965da72?placeholderIfAbsent=true", label: "Profile", alt: "Profile Icon" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/6ef025307469d48bb44c5b09feae532c4fe1bcd5?placeholderIfAbsent=true", label: "Setting", alt: "Settings Icon" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/2a23e35d78b8b30b19754804cb65b4858f31d0de?placeholderIfAbsent=true", label: "Logout", alt: "Logout Icon" }
    ]
  ];

  return (
    <div className="bg-white max-w-[480px] w-full overflow-hidden mx-auto">
      <Header title="Peshawar Zoo" />
      <HeroSection />
      <div className="flex w-full flex-col items-stretch mt-[11px] px-3.5">
        <WelcomeSection 
          title="Welcome to Peshawar Zoo" 
          description="Discover wildlife in the heart of Peshawar" 
        />
        <InfoBanner 
          backgroundImage="https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/2e1f2deb50d8cbd4fc4434352068561a0dd6b995?placeholderIfAbsent=true" 
          items={infoItems} 
        />
        <FeaturedAnimals 
          title="Featured Animals" 
          images={featuredImages} 
        />
        <AnimalGallery animals={animals} />
      </div>
      <Footer items={footerItems} />
    </div>
  );
};
