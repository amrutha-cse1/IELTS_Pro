import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-ielts-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <i className="fas fa-graduation-cap text-2xl mr-2"></i>
              <span className="text-xl font-bold">IELTS Pro</span>
            </div>
            <p className="text-gray-300">
              Your trusted partner for IELTS preparation with expert guidance and personalized attention.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                info@ieltspro.com
              </p>
              <p className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                +1 (123) 456-7890
              </p>
              <p className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Education Street, Learning City
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 IELTS Pro Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;