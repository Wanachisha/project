import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  const steps = [
    {
      title: "Sign up",
      content: (
        <div className="relative h-[177px]">
          <div className="absolute w-[170px] h-[177px] top-0 left-6 bg-[#386641] rounded-[30px]" />
          <div className="absolute w-[117px] h-[27px] top-[30px] left-[49px] bg-white rounded-[30px]" />
          <div className="absolute w-[117px] h-[27px] top-[75px] left-[49px] bg-white rounded-[30px]" />
          <div className="absolute w-[69px] h-3.5 top-[136px] left-[74px] bg-white rounded-[30px]" />
          <img
            className="absolute w-[75px] h-9 top-[109px] left-0"
            alt="Vector"
            src="/vector-1.svg"
          />
        </div>
      ),
    },
    {
      title: "Upload product details",
      content: (
        <div className="relative">
          <div className="absolute w-[173px] h-[184px] bg-[#386641] rounded-[30px]">
            <div className="absolute w-[88px] h-2.5 top-[136px] left-[43px] bg-white rounded-[30px]" />
            <div className="absolute w-16 h-2.5 top-[155px] left-[55px] bg-white rounded-[30px]" />
            <div className="absolute w-16 h-2.5 top-[118px] left-[55px] bg-white rounded-[30px]" />
            <img
              className="absolute w-[97px] h-[97px] top-[21px] left-[38px]"
              alt="Fe picture"
              src="/fe-picture.svg"
            />
          </div>
          <div className="absolute w-3.5 h-[91px] top-[53px] left-[153px] rotate-[36.67deg]">
            <div className="absolute w-[19px] h-[79px] top-3 left-[-3px]">
              <div className="absolute w-3.5 h-[66px] top-0 left-[3px] bg-[#707070]" />
              <img
                className="absolute w-3 h-4 top-[61px] left-1 rotate-[-36.67deg]"
                alt="Rectangle"
                src="/rectangle-50.svg"
              />
            </div>
            <div className="absolute w-3.5 h-[9px] top-0 left-0 bg-[#707070]" />
          </div>
        </div>
      ),
    },
    {
      title: "Sell & Earn",
      content: (
        <div className="relative w-[306px] h-[528px]">
          <div className="absolute w-[270px] h-[528px] top-0 left-0">
            <div className="absolute w-[70px] h-[301px] -top-6 left-[100px] bg-white rotate-[-47.79deg]" />
            <div className="absolute w-[70px] h-[301px] top-[251px] left-[100px] bg-white rotate-[47.79deg]" />
          </div>
          <img
            className="absolute w-[179px] h-[179px]"
            alt="Shopping cart"
            src="/gravity-ui-shopping-cart.svg"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full py-16 px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-normal text-black mb-6 font-['Inter',Helvetica]">
          Start selling goods today
        </h2>

        <p className="text-xl font-normal text-black mb-16 font-['Inter',Helvetica]">
          Streamlined production to market in three easy steps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardContent className="flex flex-col items-center pt-6">
                <div className="h-[361px] flex items-center justify-center mb-6">
                  {step.content}
                </div>
                <h3 className="text-3xl font-normal text-black font-['Inter',Helvetica]">
                  {step.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="h-[65px] px-8 bg-[#386641] text-white rounded-[30px] border border-solid border-[#009951] text-2xl font-normal font-['Inter',Helvetica] hover:bg-[#2d5234]">
            Sign up as a seller
          </Button>
        </div>
      </div>
    </section>
  );
};
