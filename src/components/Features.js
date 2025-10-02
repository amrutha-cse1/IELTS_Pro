import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fa-comments',
      title: 'Speaking Practice',
      description: 'One-on-one sessions with certified trainers to improve your fluency and confidence.',
      image: 'https://z-cdn-media.chatglm.cn/files/5361cda0-197f-4771-9dfb-d36665c23ed8_laura-nyhuis-gTnkepDDJ90-unsplash.jpg?auth_key=1790976980-57ca0617bb9f4fb88d0df30cb3451596-0-5b93bc00fbed62c7b89e1fdf89c65039'
    },
    {
      icon: 'fa-file-alt',
      title: 'Mock Tests',
      description: 'Real-time test simulations with detailed feedback to track your progress.',
      image: 'https://z-cdn-media.chatglm.cn/files/1ab7bd0a-0013-4f8c-9f0d-9336001776b9_mocktest.png?auth_key=1790976980-0884ccccb6d5405eb6ef8317cf685810-0-d22821c37d22905888bb72ecba89cf34'
    },
    {
      icon: 'fa-robot',
      title: 'AI Band Score',
      description: 'Get instant AI-powered evaluation of your writing and speaking tasks.',
      image: 'https://z-cdn-media.chatglm.cn/files/d3122ce3-2497-4e97-9fd1-c86460c629ff_IELTS-Band-Score-Calculator.png?auth_key=1790976980-07457970e76c42a5b5a39d76d2f73b2d-0-a1d2398374378003cd8de10cbbe9c492'
    },
    {
      icon: 'fa-clock',
      title: 'Flexible Timings',
      description: 'Choose from morning, evening, or weekend batches to fit your schedule.',
      image: 'https://z-cdn-media.chatglm.cn/files/9a974847-50ac-448f-a453-fd53fc8de396_images.jpeg?auth_key=1790976980-46964e4afaac4594b1ace2018187a1f6-0-2f25ea8b537b92880c573723fdd8adf7'
    }
  ];

  return (
    <section id="courses" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ielts-dark mb-4">Why Choose IELTS Pro?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive training with personalized attention to help you achieve your target band score.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card-hover bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden bg-gray-100">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <div className="feature-icon w-16 h-16 bg-ielts-light-blue rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10">
                  <i className={`fas ${feature.icon} text-2xl text-ielts-blue`}></i>
                </div>
                <h3 className="text-xl font-semibold text-ielts-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;