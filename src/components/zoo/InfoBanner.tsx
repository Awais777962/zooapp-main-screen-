import React from "react";

interface InfoItem {
  icon: string;
  text: string;
  alt: string;
}

interface InfoBannerProps {
  backgroundImage: string;
  items: InfoItem[];
}

export const InfoBanner: React.FC<InfoBannerProps> = ({ backgroundImage, items }) => {
  return (
    <section className="flex flex-col relative aspect-[15.423] w-full gap-[40px_100px] text-[6px] text-[rgba(255,246,246,1)] font-semibold mt-[11px] px-[33px] py-[3px]">
      <img
        src={backgroundImage}
        alt="Info Banner Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      {items.map((item, index) => (
        <div key={index} className="relative flex-1 flex flex-col items-stretch">
          <img
            src={item.icon}
            alt={item.alt}
            className="aspect-[1] object-contain w-3 self-center"
          />
          <div>{item.text}</div>
        </div>
      ))}
    </section>
  );
};
