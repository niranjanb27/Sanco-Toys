import { Truck, Phone, PackageCheck, Smile, ShieldCheck } from "lucide-react";

const InfoBanner = () => {
  const items = [
    {
      icon: <Truck size={36} className="text-primary" />,
      title: "Free Shipping",
      description: "On everything",
    },
    {
      icon: <Phone size={36} className="text-primary" />,
      title: "Give Us A Call",
      description: "Or Whatsapp on - 6969696969",
    },
    {
      icon: <PackageCheck size={36} className="text-primary" />,
      title: "Bulk Inquiry",
      description: "Email - sanco@gmail.com",
    },
    {
      icon: <Smile size={36} className="text-primary" />,
      title: "Sanco's Quality Assurance",
      description: "Every product is original and of high quality",
    },
    {
      icon: <ShieldCheck size={36} className="text-primary" />,
      title: "BIS Certified",
      description: "Products meet BIS safety standards",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-3">
            {item.icon}
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoBanner;
