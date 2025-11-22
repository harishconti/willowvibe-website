import React from 'react';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  linkUrl: string;
  linkText?: string;
  iconColorClass?: string;
  iconBgClass?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  linkUrl,
  linkText = "Learn more",
  iconColorClass = "text-teal-600",
  iconBgClass = "bg-teal-100"
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
      <div className={`w-14 h-14 ${iconBgClass} rounded-xl flex items-center justify-center mb-6`}>
        <Icon className={`h-7 w-7 ${iconColorClass}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">
        {description}
      </p>
      <Link href={linkUrl} className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center mt-auto">
        {linkText} <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
