import React from 'react';

// Banner Component (New section below navbar)
const Banner = () => {
  return (
    <section className="relative h-64 md:h-80 overflow-hidden">
      <img 
        src="https://z-cdn-media.chatglm.cn/files/065f688d-90db-4f53-a9ee-8327b6764a73_mana-akbarzadegan-VwppU7Hi8G0-unsplash.jpg?auth_key=1790975396-950881799036460e979631f79305a8f7-0-4bc676c7089c3df6a7eb8ded27aa9d79" 
        alt="Student studying for IELTS exam" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ielts-blue/80 to-ielts-dark/60 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Start Your IELTS Journey Today</h2>
          <p className="text-lg md:text-xl opacity-90">Expert guidance to achieve your target band score</p>
        </div>
      </div>
    </section>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <>
      <Banner />
      <section id="home" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-ielts-dark">
                Achieve Your Dream <span className="text-yellow-400">IELTS Score</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-600">
                Join thousands of successful students who have improved their scores with our expert guidance and personalized approach.
              </p>
              <button className="btn-primary bg-yellow-400 text-ielts-dark font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-all">
                Get Started Now
              </button>
            </div>
            <div className="md:w-1/2 animate-slide-up">
              <img 
                src="https://z-cdn-media.chatglm.cn/files/065f688d-90db-4f53-a9ee-8327b6764a73_mana-akbarzadegan-VwppU7Hi8G0-unsplash.jpg?auth_key=1790975396-950881799036460e979631f79305a8f7-0-4bc676c7089c3df6a7eb8ded27aa9d79" 
                alt="Student studying for IELTS exam with notebook and IELTS cup" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;