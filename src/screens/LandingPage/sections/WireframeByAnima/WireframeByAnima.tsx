import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WireframeByAnima = (): JSX.Element => {
  // Product data organized by categories
  const categories = [
    {
      title: "...in handcrafted",
      products: [
        {
          image: "/rectangle-17.png",
          name: "Handcrafted handbag accessory",
          price: "K40",
          alt: "Handcrafted handbag accessory",
        },
        {
          image: "/rectangle-18-1.png",
          name: "Handcrafted earring",
          price: "K70",
          alt: "Handcrafted earring",
        },
        {
          image: "/rectangle-19-1.png",
          name: "Handcrafted abstract face earrings",
          price: "K100",
          alt: "Handcrafted abstract face earrings",
        },
      ],
    },
    {
      title: "...in chitenge",
      products: [
        {
          image: "/rectangle-11-1.png",
          name: "Chitenge Material - Green",
          price: "K40",
          alt: "Chitenge Material - Green",
        },
        {
          image: "/rectangle-12-1.png",
          name: "Chitenge Dress",
          price: "K250",
          alt: "Chitenge Dress",
        },
        {
          image: "/rectangle-13-1.png",
          name: "Chitenge Bag",
          price: "K130",
          alt: "Chitenge Bag",
        },
      ],
    },
    {
      title: "...in art",
      products: [
        {
          image: "/rectangle-14-1.png",
          name: "Woman at Sunset",
          price: "K300",
          alt: "Woman at Sunset",
        },
        {
          image: "/rectangle-15-1.png",
          name: "Family",
          price: "K450",
          alt: "Family",
        },
        {
          image: "/rectangle-16-1.png",
          name: "Carrying Pot",
          price: "K400",
          alt: "Carrying Pot",
        },
      ],
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-normal text-black mb-6 font-['Inter',Helvetica]">
          Today&apos;s top picks
        </h1>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-xl font-normal text-black mb-6 font-['Inter',Helvetica]">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => (
                <Card key={productIndex} className="border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="flex flex-col">
                      <img
                        className="w-full h-[263px] object-cover mb-4"
                        alt={product.alt}
                        src={product.image}
                      />
                      <div className="font-single-line-body-base text-black text-[16px] tracking-[0px] leading-[100%] mb-2">
                        {product.name}
                      </div>
                      <div className="font-single-line-body-base text-black text-[16px] tracking-[0px] leading-[100%]">
                        {product.price}
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
