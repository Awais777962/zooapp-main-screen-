import React from "react";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white flex w-full items-stretch gap-5 justify-between pl-2 pr-[19px] py-[3px]">
      <div className="flex items-stretch gap-5 text-[15px] text-[rgba(37,34,34,1)] font-extrabold">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/03c4efc4ea25ab9a71d7bffe22550af2bccecf78?placeholderIfAbsent=true"
          alt="Zoo Logo"
          className="aspect-[0.98] object-contain w-[49px] shrink-0"
        />
        <div className="basis-auto my-auto">
          {title}
        </div>
      </div>
      <div className="flex gap-6 my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/ec80a913b82779900ba6ae265cae4d1eb7a04e85?placeholderIfAbsent=true"
          alt="Search"
          className="aspect-[1] object-contain w-2.5 shrink-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/3d399602b37a413d91937f73e0d94933/182859a04c09f9a339a29b338da8533696c0a5ac?placeholderIfAbsent=true"
          alt="Menu"
          className="aspect-[1.22] object-contain w-[11px] shrink-0"
        />
      </div>
    </header>
  );
};
