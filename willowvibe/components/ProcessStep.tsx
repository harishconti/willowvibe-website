import React from 'react';

interface ProcessStepProps {
  stepNumber: string | number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, title, description }) => {
  // Ensure stepNumber is formatted as two digits if it's a number
  const formattedStep = typeof stepNumber === 'number' && stepNumber < 10
    ? `0${stepNumber}`
    : stepNumber;

  return (
    <div className="p-4 flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center font-bold text-lg mb-4 border border-teal-100">
        {formattedStep}
      </div>
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default ProcessStep;
