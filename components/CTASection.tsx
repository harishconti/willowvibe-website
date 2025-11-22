import React from 'react';
import Link from 'next/link';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={primaryButtonLink}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
          >
            {primaryButtonText}
          </Link>

          {secondaryButtonText && secondaryButtonLink && (
            <Link
              href={secondaryButtonLink}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal-700 bg-white border border-teal-200 rounded-lg hover:bg-teal-50 transition-all shadow-sm"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
