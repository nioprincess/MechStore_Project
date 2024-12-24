import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Steel",
      heading: "We Have 95% Of The Equipment You Need",
      image: "/api/placeholder/800/800"
    },
    {
      title: "Power Tools",
      heading: "Professional Grade Tools For Every Job",
      image: "/api/placeholder/800/800"
    },
    {
      title: "Safety Gear",
      heading: "Complete Protection For Your Workforce",
      image: "/api/placeholder/800/800"
    },
    {
      title: "Heavy Machinery",
      heading: "Industrial Equipment For Major Projects",
      image: "/api/placeholder/800/800"
    },
    {
      title: "Maintenance",
      heading: "Quality Tools For Perfect Upkeep",
      image: "/api/placeholder/800/800"
    }
  ];
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <h3 className="text-2xl font-medium">{slides[currentSlide].title}</h3>
            <h1 className="text-5xl font-bold leading-tight">
              {slides[currentSlide].heading}
            </h1>
            <div className="pt-4">
              <button className="group flex items-center space-x-2 text-lg font-medium hover:text-gray-300 transition-colors">
                <span>Shop Now</span>
                <svg 
                  className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block w-1/2">
            <div className="relative w-[500px] h-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src={slides[currentSlide].image}
                  alt="Equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-red-500' : 'bg-yellow-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;