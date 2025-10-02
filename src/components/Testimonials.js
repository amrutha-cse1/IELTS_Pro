import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      content: "IELTS Pro helped me improve my score from 6.5 to 8.0 in just 3 months. The personalized feedback was invaluable!",
      rating: 5,
      image: 'https://picsum.photos/seed/student-female/100/100.jpg'
    },
    {
      name: "Rahul Patel",
      content: "The mock tests were exactly like the real exam. Thanks to IELTS Pro, I felt confident and well-prepared on test day.",
      rating: 5,
      image: 'https://picsum.photos/seed/student-male/100/100.jpg'
    },
    {
      name: "Anita Kumar",
      content: "The flexible timings allowed me to balance my job and preparation. The trainers are extremely knowledgeable and supportive.",
      rating: 5,
      image: 'https://picsum.photos/seed/student-female2/100/100.jpg'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-ielts-light-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ielts-dark mb-4">Student Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have achieved their dream scores with our guidance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <p className="font-semibold text-ielts-dark">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;