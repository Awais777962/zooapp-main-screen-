import React from "react";

interface WelcomeSectionProps {
  title: string;
  description: string;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ title, description }) => {
  return (
    <section className="flex w-full flex-col items-stretch">
      <h1 className="text-neutral-950 text-base font-normal">
        {title}
      </h1>
      <p className="text-neutral-950 text-[10px] font-normal mt-[9px]">
        {description}
      </p>
    </section>
  );
};
