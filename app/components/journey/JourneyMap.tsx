'use client'

import React from 'react';
import { LearningStep } from '@/app/types';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';

interface JourneyMapProps {
  steps: LearningStep[];
  currentStep: string;
  onStepSelect: (stepId: string) => void;
}

const JourneyMap: React.FC<JourneyMapProps> = ({ steps, currentStep, onStepSelect }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex items-center p-4 rounded-lg transition-colors
              ${step.status === 'locked' ? 'bg-gray-100 cursor-not-allowed' : 
                step.status === 'completed' ? 'bg-green-50 cursor-pointer' :
                step.status === 'in-progress' ? 'bg-blue-50 cursor-pointer' : 'bg-white cursor-pointer'}
            `}
            onClick={() => step.status !== 'locked' && onStepSelect(step.id)}
          >
            <div className="mr-4">
              {step.status === 'locked' && <Lock className="w-6 h-6 text-gray-400" />}
              {step.status === 'completed' && <CheckCircle className="w-6 h-6 text-green-500" />}
              {step.status === 'in-progress' && <PlayCircle className="w-6 h-6 text-blue-500" />}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
            <div className="text-sm text-gray-400">
              {step.duration} min
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyMap;
