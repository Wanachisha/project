import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ScrollSectionOneByAnima = (): JSX.Element => {
  // Carousel data
  const carouselData = [
    {
      id: 1,
      title: "Traditional Masks under K800",
      isActive: true,
    },
    {
      id: 2,
      title: "Second slide",
      isActive: false,
    },
    {
      id: 3,
      title: "Third slide",
      isActive: false,
    },
  ];

  return (
    <section className="relative w-full h-[502px] bg-white py-[70px] px-[121px]">
      <div className="relative w-full h-[361px]">
        <img
          className="w-full h-[359px] object-cover rounded-[30px]"
          alt="Traditional masks showcase"
          src="/rectangle-10.png"
        />

        <Card className="absolute w-[400px] h-[361px] top-0 left-0 rounded-[30px_0px_0px_30px] overflow-hidden border border-solid border-[#757575]">
          <CardContent className="p-10 flex flex-col h-full justify-between">
            <h2 className="font-['Inter',Helvetica] font-semibold text-black text-[40px] leading-[50px] max-w-[291px]">
              {carouselData[0].title}
            </h2>

            <Button className="w-fit mt-auto bg-[#386641] rounded-[20px] border border-solid border-[#2c2c2c] hover:bg-[#2d5234]">
              Explore
            </Button>
          </CardContent>
        </Card>

        <div className="absolute bottom-[47px] left-1/2 -translate-x-1/2 flex items-center gap-[48px]">
          {carouselData.map((item) => (
            <button
              key={item.id}
              className={`w-[30px] h-[30px] rounded-full ${
                item.isActive ? "bg-white" : "bg-[#b0b0b0]"
              }`}
              aria-label={`Go to slide ${item.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
