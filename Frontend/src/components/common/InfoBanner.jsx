import React, { useEffect, useRef, useState } from "react";
import { Phone, PackageCheck, Smile, ShieldCheck, Baby } from "lucide-react";

const AnimatedItem = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "animate-flip-in" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const InfoBanner = () => {
  const items = [
    {
      icon: <Phone size={30} className="text-primary hover:scale-110 transition-transform" />,
      title: "Give Us A Call",
      description: "+91 8446090922",
    },
    {
      icon: <PackageCheck size={30} className="text-primary hover:scale-110 transition-transform" />,
      title: "Bulk Inquiry",
      description: "Email - info@sancotoys.com",
    },
    {
      icon: <Smile size={30} className="text-primary hover:scale-110 transition-transform" />,
      title: "Sanco's Quality Assurance",
      description: "High Quality Products",
    },
    {
      icon: <ShieldCheck size={30} className="text-primary hover:scale-110 transition-transform" />,
      title: "BIS Certified",
      description: "Meets BIS Safety Standards",
    },
    {
      icon: <Baby size={30} className="text-primary hover:scale-110 transition-transform" />,
      title: "For Ages 3+",
      description: "Safe for children 3 years and above",
    },
  ];

  return (
    <section className="w-full py-6 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
        {items.map((item, index) => (
          <AnimatedItem key={index}>
            <div className="flex flex-col items-center space-y-3 px-4">
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
};

export default InfoBanner;
