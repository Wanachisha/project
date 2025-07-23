import { InstagramIcon, LinkedinIcon, StarIcon } from "lucide-react";
import React from "react";

export const FooterByAnima = (): JSX.Element => {
  // Footer links data organized by columns
  const footerLinks = [
    {
      links: [
        { title: "About Us", href: "#" },
        { title: "Contact Us", href: "#" },
        { title: "Sustainability", href: "#" },
      ],
    },
    {
      links: [
        { title: "Privacy Policy", href: "#" },
        { title: "Terms of Service", href: "#" },
        { title: "Seller Information/FAQ", href: "#" },
      ],
    },
    {
      links: [
        { title: "Help Center", href: "#" },
        { title: "Selling", href: "#" },
        { title: "Buying", href: "#" },
      ],
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: <LinkedinIcon className="w-10 h-10" />, href: "#" },
    { icon: <StarIcon className="w-9 h-9" />, href: "#" },
    { icon: <InstagramIcon className="w-9 h-9" />, href: "#" },
  ];

  return (
    <footer className="w-full bg-white py-16 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {footerLinks.map((column, columnIndex) => (
            <div
              key={`column-${columnIndex}`}
              className="flex flex-col space-y-8"
            >
              {column.links.map((link, linkIndex) => (
                <a
                  key={`link-${columnIndex}-${linkIndex}`}
                  href={link.href}
                  className="font-normal text-black text-xl leading-5"
                >
                  {link.title}
                </a>
              ))}

              {/* Social media icons only in the first column */}
              {columnIndex === 0 && (
                <div className="flex space-x-8 mt-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={`social-${index}`}
                      href={social.href}
                      className="text-black"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-[946px] h-auto">
            <img
              className="w-full h-auto object-cover"
              alt="Footer image"
              src="/layer-1-1.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
