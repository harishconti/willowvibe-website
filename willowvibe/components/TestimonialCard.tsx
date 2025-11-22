import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string; // URL to image
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  authorName,
  authorTitle,
  authorImage
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative h-full flex flex-col">
      <div className="absolute top-6 left-6 opacity-10">
        <Quote size={48} className="text-teal-600" />
      </div>
      <div className="relative z-10 flex-grow">
        <p className="text-lg text-gray-600 italic mb-6 pt-6">
          "{quote}"
        </p>
      </div>
      <div className="flex items-center mt-auto">
        {authorImage ? (
          <Image
            src={authorImage}
            alt={authorName}
            width={48}
            height={48}
            className="rounded-full mr-4 object-cover bg-gray-100"
          />
        ) : (
          <div className="w-12 h-12 rounded-full mr-4 bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-lg">
            {authorName.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-gray-900">{authorName}</h4>
          <p className="text-sm text-gray-500">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
