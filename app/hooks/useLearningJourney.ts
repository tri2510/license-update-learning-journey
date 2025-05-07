'use client'

import { useState, useEffect } from 'react';
import { LearningPath, UserProgress } from '../types';
import { getLearningPath, getUserProgress, updateProgress } from '../api/learning-journey';

export function useLearningJourney() {
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [path, progress] = await Promise.all([
        getLearningPath(),
        getUserProgress()
      ]);
      setLearningPath(path);
      setUserProgress(progress);
    } catch (err) {
      setError('Failed to load learning journey data');
    } finally {
      setLoading(false);
    }
  }

  async function markStepComplete(stepId: string) {
    try {
      await updateProgress(stepId);
      await loadData(); // Reload data after update
    } catch (err) {
      setError('Failed to update progress');
    }
  }

  return {
    learningPath,
    userProgress,
    loading,
    error,
    markStepComplete
  };
}
