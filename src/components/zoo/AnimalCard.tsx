import React from "react";

interface AnimalCardProps {
  name: string;
  description: string;
  imageSrc: string;
}

export const AnimalCard: React.FC<AnimalCardProps> = ({ name, description, imageSrc }) => {
  return (
    <div className="flex-1">
      <div className="bg-white flex flex-col pl-[7px] pr-[22px] py-1.5 rounded-[20px]">
        <div className="self-center">{name}</div>
        <div>{description}</div>
      </div>
      <img
        src={imageSrc}
        alt={name}
        className="aspect-[1.02] object-contain w-[158px] mt-[9px] rounded-[20px]"
      />
    </div>
  );
};
