import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <Quote size={32} className="text-teal-600 opacity-20" />
              </div>

              <p className="text-gray-600 mb-6 flex-grow italic relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`mr-1 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <div className="flex items-center mt-auto pt-4 border-t border-gray-50">
                <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-teal-50"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                    <br />
                    <span className="text-teal-600 font-medium">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
