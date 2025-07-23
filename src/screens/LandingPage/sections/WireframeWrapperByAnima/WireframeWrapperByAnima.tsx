import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const WireframeWrapperByAnima = (): JSX.Element => {
  // Product data organized by categories
  const categories = [
    {
      title: "...in handcrafted",
      products: [
        {
          image: "/rectangle-17-1.png",
          title: "Handcrafted handbag accessory",
          price: "K40",
        },
        {
          image: "/rectangle-18-1.png",
          title: "Handcrafted earring",
          price: "K70",
        },
        {
          image: "/rectangle-19-1.png",
          title: "Handcrafted abstract face earrings",
          price: "K100",
        },
      ],
    },
    {
      title: "...in chitenge",
      products: [
        {
          image: "/rectangle-11-1.png",
          title: "Chitenge Material - Green",
          price: "K80/sqm",
        },
        {
          image: "/rectangle-12-1.png",
          title: "Chitenge Dress",
          price: "K250",
        },
        {
          image: "/rectangle-13-1.png",
          title: "Chitenge Bag",
          price: "K130",
        },
      ],
    },
    {
      title: "...in art",
      products: [
        {
          image: "/rectangle-14-1.png",
          title: "Woman at Sunset",
          price: "K300",
        },
        {
          image: "/rectangle-15-1.png",
          title: "Family",
          price: "K450",
        },
        {
          image: "/rectangle-16-1.png",
          title: "Carrying Pot",
          price: "K400",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[40px] font-normal leading-10 mb-16">
          Today&apos;s top picks
        </h1>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-xl font-normal leading-5 mb-6">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => (
                <Card key={productIndex} className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-[263px] object-cover mb-4"
                      />
                      <div className="mt-2">
                        <p className="font-single-line-body-base text-black text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
                          {product.title}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-single-line-body-base text-black text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
                          {product.price}
                        </span>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-[#386641] flex items-center gap-2"
                        >
                          <span className="font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
                            View
                          </span>
                          <ArrowRightIcon className="w-[21px] h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
