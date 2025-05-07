export interface LearningStep {
  id: string;
  title: string;
  description: string;
  status: 'locked' | 'available' | 'completed' | 'in-progress';
  duration: number; // in minutes
  prerequisites: string[];
  type: 'video' | 'exercise' | 'quiz' | 'reading';
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  steps: LearningStep[];
  totalDuration: number;
  completedSteps: number;
  progress: number;
}

export interface UserProgress {
  userId: string;
  completedSteps: string[];
  currentStep: string;
  overallProgress: number;
  lastAccessed: string;
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  earnedAt: string;
  icon: string;
}
