import { mockLearningPath, mockUserProgress } from './mock-data';

export async function getLearningPath() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockLearningPath;
}

export async function getUserProgress() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockUserProgress;
}

export async function updateProgress(stepId: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    success: true,
    message: 'Progress updated successfully'
  };
}
