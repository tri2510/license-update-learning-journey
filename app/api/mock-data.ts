import { LearningPath, UserProgress } from '../types';

export const mockLearningPath: LearningPath = {
  id: 'sdv-basics',
  title: 'SDV Development Fundamentals',
  description: 'Learn the fundamentals of Software-Defined Vehicle development',
  steps: [
    {
      id: 'playground-intro',
      title: 'Playground Introduction',
      description: 'Get started with the digital.auto playground',
      status: 'completed',
      duration: 15,
      prerequisites: [],
      type: 'reading'
    },
    {
      id: 'explore-existing',
      title: 'Explore Existing Model',
      description: 'Explore and understand existing vehicle models',
      status: 'in-progress',
      duration: 30,
      prerequisites: ['playground-intro'],
      type: 'exercise'
    },
    {
      id: 'vehicle-model',
      title: 'Vehicle Model',
      description: 'Learn about vehicle modeling concepts',
      status: 'locked',
      duration: 45,
      prerequisites: ['explore-existing'],
      type: 'video'
    },
    // Add more steps as needed
  ],
  totalDuration: 180,
  completedSteps: 1,
  progress: 25
};

export const mockUserProgress: UserProgress = {
  userId: 'user123',
  completedSteps: ['playground-intro'],
  currentStep: 'explore-existing',
  overallProgress: 25,
  lastAccessed: new Date().toISOString(),
  achievements: [
    {
      id: 'first-step',
      title: 'First Step',
      description: 'Completed your first learning module',
      earnedAt: new Date().toISOString(),
      icon: '🎯'
    }
  ]
};
