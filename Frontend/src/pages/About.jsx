import React, { useEffect, useRef, useState } from 'react';
import { Leaf, ShieldCheck, Globe, Star, Wind, RefreshCcw } from 'lucide-react';

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
      className={`transition-all duration-700 ease-out ${visible ? 'animate-flip-in' : 'opacity-0 translate-y-10'
        }`}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <AnimatedSection>
          <h1 className="text-5xl font-bold text-white mb-10 text-center">About Us</h1>
        </AnimatedSection>

        {/* Our Story Section */}
        <AnimatedSection>
          <div className="text-white text-lg space-y-6 leading-8 mb-16">
            <h2 className="text-3xl font-semibold text-red-500">Our Story</h2>
            <p className="text-red-200">
              Sanco Toys was founded with a passion for creating high-quality, safe, and fun ventures toys for children.
              Our journey began with a small team of dedicated toy enthusiasts who believed in the power of play to
              inspire creativity and adventure. Today, we are proud to offer a range of toys that bring joy to children.
            </p>
          </div>
        </AnimatedSection>

        {/* Core Values Section */}
        <AnimatedSection>
          <div className="text-white text-lg space-y-6 leading-8 mb-16">
            <h2 className="text-3xl font-semibold text-green-500">Core Values</h2>
            <p className="text-green-300">Our commitment to quality, safety, and innovation forms the cornerstone of our values. We believe in:</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 text-green-100">
              {[
                { icon: <Leaf />, label: 'Sustainable Products' },
                { icon: <ShieldCheck />, label: 'Virgin Food Grade Material' },
                { icon: <Globe />, label: 'Environment Friendly' },
                { icon: <Star />, label: 'Quality' },
                { icon: <Wind />, label: 'Dust Prevented' },
                { icon: <RefreshCcw />, label: 'Recyclable Products' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 blink-on-hover bg-green-900/20 p-3 rounded-lg">
                  <span className="text-primary">{item.icon}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Vision Section */}
        <AnimatedSection>
          <div className="text-white text-lg space-y-6 leading-8 mb-16">
            <h2 className="text-3xl font-semibold text-blue-500">Vision</h2>
            <p className="text-blue-200">
              Founded by passionate toy creators, <span className="font-semibold text-primary">SancoToys</span> started
              with a mission to ignite the imagination of children everywhere. From humble beginnings to a
              leading toy brand, our story is one of dedication to fun, learning, and endless playtime
              memories.
            </p>
          </div>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection>
          <div className="text-white text-lg space-y-6 leading-8 mb-16">
            <h2 className="text-3xl font-semibold text-orange-500">Mission</h2>
            <p className="text-orange-200">
              Our mission is to provide toys that spark imagination and promote adventure in children. We value safety,
              creativity, and quality in everything we do.
            </p>
          </div>
        </AnimatedSection>
        {/* Mission Section */}
        <AnimatedSection>
          <div className="text-white text-lg space-y-6 leading-8 mb-16">
            <h2 className="text-3xl font-semibold text-yellow-500">SANCO CSR</h2>
            <p className="text-yellow-200">
              We welcome all good working toys (Sanco & Non-Sanco) as part of TAKEBACK PROGRAMME
              & encourage you to donate toys for local charity so that underprivileged children can also enjoy &
              share fun as long as possible
            </p>
          </div>
        </AnimatedSection>
        
      </div>
    </div>
  );
};

export default About;
