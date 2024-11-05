import React from 'react';
import { Check } from 'lucide-react';

type StepIndicatorProps = {
  currentStep: number;
  steps: Array<{
    id: number;
    title: string;
    icon: React.ReactNode;
  }>;
};

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="relative flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${
                    step.id < currentStep
                      ? 'bg-indigo-600 border-indigo-600'
                      : step.id === currentStep
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-gray-300 text-gray-300'
                  }`}
              >
                {step.id < currentStep ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  step.icon
                )}
              </div>
              <p
                className={`mt-2 text-xs ${
                  step.id <= currentStep ? 'text-indigo-600' : 'text-gray-400'
                }`}
              >
                {step.title}
              </p>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-20 h-0.5 ${
                  step.id < currentStep ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}