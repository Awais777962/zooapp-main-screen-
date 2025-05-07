import React from "react";

interface FooterItem {
  icon: string;
  label: string;
  alt: string;
}

interface FooterProps {
  items: FooterItem[][];
}

export const Footer: React.FC<FooterProps> = ({ items }) => {
  return (
    <footer className="bg-[rgba(30,191,121,1)] flex items-stretch gap-4 mt-[22px] px-[9px] py-[13px]">
      {/* Home */}
      <div className="text-xs text-white font-normal whitespace-nowrap">
        <img
          src={items[0][0].icon}
          alt={items[0][0].alt}
          className="aspect-[0.96] object-contain w-6"
        />
        <div className="mt-1.5">{items[0][0].label}</div>
      </div>

      {/* Animals */}
      <div className="flex flex-col items-stretch text-xs text-white font-normal whitespace-nowrap">
        <img
          src={items[0][1].icon}
          alt={items[0][1].alt}
          className="aspect-[0.91] object-contain w-[21px] self-center"
        />
        <div className="mt-1.5">{items[0][1].label}</div>
      </div>

      {/* Tickets and Map */}
      <div className="flex flex-col items-stretch my-auto">
        <div className="flex items-stretch gap-[30px] ml-3">
          <img
            src={items[1][0].icon}
            alt={items[1][0].alt}
            className="aspect-[0.95] object-contain w-5 shrink-0"
          />
          <img
            src={items[1][1].icon}
            alt={items[1][1].alt}
            className="aspect-[0.95] object-contain w-[18px] shrink-0"
          />
        </div>
        <div className="flex items-stretch gap-[19px] text-xs text-white font-normal whitespace-nowrap mt-1.5">
          <div>{items[1][0].label}</div>
          <div>{items[1][1].label}</div>
        </div>
      </div>

      {/* Other options */}
      <div className="flex flex-col items-stretch">
        <div className="self-center flex w-[185px] max-w-full items-center gap-5 justify-between">
          <img
            src={items[2][0].icon}
            alt={items[2][0].alt}
            className="aspect-[0.96] object-contain w-6 self-stretch shrink-0"
          />
          <img
            src={items[2][1].icon}
            alt={items[2][1].alt}
            className="aspect-[0.95] object-contain w-[18px] self-stretch shrink-0 my-auto"
          />
          <img
            src={items[2][2].icon}
            alt={items[2][2].alt}
            className="aspect-[0.95] object-contain w-5 self-stretch shrink-0 my-auto"
          />
          <img
            src={items[2][3].icon}
            alt={items[2][3].alt}
            className="aspect-[0.95] object-contain w-[18px] self-stretch shrink-0 my-auto"
          />
        </div>
        <div className="flex items-stretch gap-[13px] text-xs text-white font-normal">
          <div className="grow">{items[2][0].label}</div>
          <div className="my-auto">{items[2][1].label}</div>
          <div className="text-[rgba(255,246,246,1)]">{items[2][2].label}</div>
          <div>{items[2][3].label}</div>
        </div>
      </div>
    </footer>
  );
};
