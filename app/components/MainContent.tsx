'use client'

import React from 'react';
import { useLearningJourney } from '../hooks/useLearningJourney';
import JourneyMap from './journey/JourneyMap';
import ProgressTracker from './progress/ProgressTracker';

const MainContent = () => {
  const { learningPath, userProgress, loading, error, markStepComplete } = useLearningJourney();

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!learningPath || !userProgress) {
    return null;
  }

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold mb-6">Learning Journey</h1>
            <JourneyMap
              steps={learningPath.steps}
              currentStep={userProgress.currentStep}
              onStepSelect={markStepComplete}
            />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-6">Progress Overview</h2>
            <ProgressTracker progress={userProgress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
