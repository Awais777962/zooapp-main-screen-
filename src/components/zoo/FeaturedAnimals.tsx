import React from "react";

interface ImageItem {
  src: string;
  alt: string;
}

interface FeaturedAnimalsProps {
  title: string;
  images: ImageItem[];
}

export const FeaturedAnimals: React.FC<FeaturedAnimalsProps> = ({ title, images }) => {
  return (
    <section className="flex gap-5 justify-between mt-[11px]">
      <div className="self-stretch flex flex-col items-stretch">
        <div className="flex items-stretch gap-5 justify-between">
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="aspect-[3.38] object-contain w-[81px] shrink-0 rounded-md"
          />
          <img
            src={images[1].src}
            alt={images[1].alt}
            className="aspect-[3.38] object-contain w-[81px] shrink-0 rounded-md"
          />
        </div>
        <h2 className="text-white text-[15px] font-extrabold self-center mt-3">
          {title}
        </h2>
      </div>
      <img
        src={images[2].src}
        alt={images[2].alt}
        className="aspect-[3.38] object-contain w-[81px] shrink-0 rounded-md"
      />
      <img
        src={images[3].src}
        alt={images[3].alt}
        className="aspect-[3.38] object-contain w-[81px] shrink-0 rounded-md"
      />
    </section>
  );
};
