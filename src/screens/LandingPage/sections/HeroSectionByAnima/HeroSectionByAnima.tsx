import { ChevronDownIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const HeroSectionByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-4">
        {/* Header Navigation */}
        <header className="flex items-center justify-between py-8">
          {/* Logo */}
          <div className="w-[154px] h-[94px] bg-[url(/layer-1.png)] bg-[100%_100%]" />

          {/* Category Selector */}
          <div className="flex items-center gap-1 mr-4">
            <span className="font-single-line-body-base text-black">
              Select category
            </span>
            <ChevronDownIcon className="w-[29px] h-[29px]" />
          </div>

          {/* SearchIcon Bar */}
          <div className="relative flex-1 max-w-[343px]">
            <Input
              className="pl-4 pr-12 py-6 rounded-full border border-[#d9d9d9]"
              placeholder="Explore Products"
            />
            <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] text-[#686868]" />
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-4">
            <ShoppingCartIcon className="w-[51px] h-[51px]" />

            <Button
              variant="outline"
              className="rounded-[20px] border-[#02542d] text-[#386641]"
            >
              Sign in | Sign up
            </Button>

            <Button className="rounded-[20px] bg-[#386641] border-[#2c2c2c] text-neutral-100 hover:bg-[#2a4d31]">
              Start Selling
            </Button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="flex mt-16">
          <div className="w-1/2 pt-16">
            <h1 className="font-['Inter',Helvetica] font-normal text-black text-[80px] leading-[100px]">
              Buy local.
              <br />
              All in one place.
              <br />
              For less.
            </h1>
          </div>

          <div className="w-1/2">
            <img
              className="w-full h-[710px] object-cover"
              alt="Hero image"
              src="/image-1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
