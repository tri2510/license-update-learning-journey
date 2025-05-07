'use client'

import React from 'react';
import { UserProgress } from '@/app/types';

interface ProgressTrackerProps {
  progress: UserProgress;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Your Progress</h2>
        <div className="mt-2 h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${progress.overallProgress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          {progress.overallProgress}% Complete
        </p>
      </div>
      
      <div className="mt-6">
        <h3 className="text-md font-medium mb-3">Recent Achievements</h3>
        <div className="space-y-2">
          {progress.achievements.map(achievement => (
            <div
              key={achievement.id}
              className="flex items-center p-2 bg-gray-50 rounded"
            >
              <span className="text-2xl mr-3">{achievement.icon}</span>
              <div>
                <p className="font-medium">{achievement.title}</p>
                <p className="text-sm text-gray-500">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
