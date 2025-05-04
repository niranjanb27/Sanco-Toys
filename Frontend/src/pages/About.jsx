import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-10 text-center">About Us</h1>

        <div className="text-lg text-gray-700 leading-8 space-y-6">
          <p>
            Welcome to <span className="font-semibold text-primary">SancoToys</span> — where imagination meets play!
            We're committed to offering the most fun, safe, and creative toys for kids of all ages.
          </p>

          <p>
            At SancoToys, we believe play is essential for learning and development. That's why we carefully curate a
            diverse collection of toys — from puzzles and educational games to action figures, vehicles, and soft toys —
            that spark joy and creativity in every child.
          </p>

          <p>
            With over a decade of experience in the toy industry, our mission is simple: to bring endless smiles to
            families across the world by offering top-quality products and excellent customer service.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Visit Us</h2>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
  <iframe
    title="Sanco Toys India Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.314631373901!2d73.8014473!3d18.6429455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93706031c95%3A0x5b32aafd8ca27dfb!2sSanco%20Toys%20India%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1712072343941!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>
    </div>
  );
};

export default About;
