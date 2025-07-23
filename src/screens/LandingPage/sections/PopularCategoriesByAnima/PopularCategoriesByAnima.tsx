import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PopularCategoriesByAnima = (): JSX.Element => {
  // Define categories data for mapping
  const categories = [
    {
      id: 1,
      name: "Art",
      icon: "/mdi-art.svg",
      alt: "Mdi art",
    },
    {
      id: 2,
      name: "Clothes",
      icon: "/fluent-clothes-hanger-20-regular.svg",
      alt: "Fluent clothes",
    },
    {
      id: 3,
      name: "Jewelry",
      icon: "/game-icons-prayer-beads.svg",
      alt: "Game icons prayer",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] font-normal leading-10 mb-16 font-['Inter',Helvetica]">
          Browse Categories
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="w-full md:w-[299px] h-[506px] rounded-[30px] flex flex-col items-center"
            >
              <CardContent className="flex flex-col items-center justify-center pt-20 pb-10 h-full">
                <div className="w-[237px] h-[237px] flex items-center justify-center">
                  <img
                    src={category.icon}
                    alt={category.alt}
                    className={`${category.name === "Jewelry" ? "w-[207px] h-[207px]" : "w-[237px] h-[237px]"}`}
                  />
                </div>
                <h3 className="text-[40px] font-normal leading-10 mt-auto font-['Inter',Helvetica]">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="h-[65px] px-6 py-3 bg-[#386641] text-neutral-100 rounded-[30px] border border-solid border-[#009951] hover:bg-[#2d5234]">
            <span className="text-2xl font-normal leading-6 font-['Inter',Helvetica]">
              View all categories
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
