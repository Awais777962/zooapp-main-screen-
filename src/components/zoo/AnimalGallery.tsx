import React from "react";
import { AnimalCard } from "./AnimalCard";

interface AnimalInfo {
  name: string;
  description: string;
  imageSrc: string;
}

interface AnimalGalleryProps {
  animals: AnimalInfo[];
}

export const AnimalGallery: React.FC<AnimalGalleryProps> = ({ animals }) => {
  return (
    <section className="mt-[132px]">
      <div className="self-center flex w-full max-w-[366px] items-stretch gap-[40px_49px] text-xs text-[rgba(17,16,16,1)] font-normal">
        {animals.map((animal, index) => (
          <AnimalCard
            key={index}
            name={animal.name}
            description={animal.description}
            imageSrc={animal.imageSrc}
          />
        ))}
      </div>
      <div className="text-[rgba(50,48,48,1)] text-xs font-normal self-center mt-[22px] text-center">
        View All Animals
      </div>
    </section>
  );
};
