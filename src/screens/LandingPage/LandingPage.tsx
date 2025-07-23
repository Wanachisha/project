import React from "react";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { HeroSectionByAnima } from "./sections/HeroSectionByAnima";
import { PopularCategoriesByAnima } from "./sections/PopularCategoriesByAnima";
import { ScrollSectionOneByAnima } from "./sections/ScrollSectionOneByAnima";
import { WireframeByAnima } from "./sections/WireframeByAnima";
import { WireframeWrapperByAnima } from "./sections/WireframeWrapperByAnima";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-white" data-model-id="30:89">
      <HeroSectionByAnima />
      <ScrollSectionOneByAnima />
      <div className="w-full">
        <WireframeByAnima />
        <WireframeWrapperByAnima />
        <PopularCategoriesByAnima />
      </div>
      <DivWrapperByAnima />
      <FooterByAnima />
    </div>
  );
};
