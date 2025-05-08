import React, { useEffect, useRef, useState } from 'react';
import {
  Leaf,
  ShieldCheck,
  Globe,
  Star,
  Wind,
  RefreshCcw,
} from 'lucide-react';

// Reusable animation wrapper
const AnimatedSection = ({ children }) => {
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
      className={`transition-all duration-700 ease-out ${visible ? 'animate-flip-in' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};

// Reusable SectionCard component
const SectionCard = ({ title, text, color, children }) => {
  return (
    <AnimatedSection>
      <div
        className={`border-t-4 ${color.border} bg-white text-lg leading-8 p-6 mb-10 rounded-xl shadow-md hover:shadow-xl`}
      >
        <h2 className={`text-3xl font-semibold mb-4 ${color.text}`}>{title}</h2>
        <p className={`${color.text}`}>{text}</p>
        {children}
      </div>
    </AnimatedSection>
  );
};

const About = () => {
  const colorMap = {
    red: { border: 'border-red-700', text: 'text-red-500' },
    green: { border: 'border-green-700', text: 'text-green-500' },
    blue: { border: 'border-blue-700', text: 'text-blue-500' },
    orange: { border: 'border-orange-700', text: 'text-orange-500' },
    yellow: { border: 'border-yellow-700', text: 'text-yellow-500' },
  };

  const coreValues = [
    { icon: <Leaf />, label: 'Sustainable Products' },
    { icon: <ShieldCheck />, label: 'Virgin Food Grade Material' },
    { icon: <Globe />, label: 'Environment Friendly' },
    { icon: <Star />, label: 'Quality' },
    { icon: <Wind />, label: 'Dust Prevented' },
    { icon: <RefreshCcw />, label: 'Recyclable Products' },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <AnimatedSection>
          <h1 className="text-5xl font-bold text-black mb-10 text-center">
            About Us
          </h1>
        </AnimatedSection>

        {/* Our Story */}
        <SectionCard
          title="Our Story"
          text="Sanco Toys was founded with a passion for creating high-quality, safe, and fun ventures toys for children. Our journey began with a small team of dedicated toy enthusiasts who believed in the power of play to inspire creativity and adventure. Today, we are proud to offer a range of toys that bring joy to children."
          color={colorMap.red}
        />

        {/* Core Values */}
        <SectionCard
          title="Core Values"
          text="Our commitment to quality, safety, and innovation forms the cornerstone of our values. We believe in:"
          color={colorMap.green}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 text-green-700">
            {coreValues.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-3 bg-green-100 p-3 rounded-lg shadow-sm hover:bg-green-200 transition"
              >
                <span className="text-green-800">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        {/* Vision */}
        <SectionCard
          title="Vision"
          text="Founded by passionate toy creators, SancoToys started with a mission to ignite the imagination of children everywhere. From humble beginnings to a leading toy brand, our story is one of dedication to fun, learning, and endless playtime memories."
          color={colorMap.blue}
        />

        {/* Mission */}
        <SectionCard
          title="Mission"
          text="Our mission is to provide toys that spark imagination and promote adventure in children. We value safety, creativity, and quality in everything we do."
          color={colorMap.orange}
        />

        {/* CSR */}
        <SectionCard
          title="SANCO CSR"
          text="We welcome all good working toys (Sanco & Non-Sanco) as part of TAKEBACK PROGRAMME & encourage you to donate toys for local charity so that underprivileged children can also enjoy & share fun as long as possible"
          color={colorMap.yellow}
        />
      </div>
    </div>
  );
};

export default About;
