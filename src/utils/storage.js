// src/utils/storage.js

const ENROLLED_KEY = "enrolledCourses";
const PROGRESS_KEY = "courseProgress";

export const getEnrolledCourses = () => {
  return JSON.parse(localStorage.getItem(ENROLLED_KEY)) || [];
};

export const saveEnrolledCourses = (courses) => {
  localStorage.setItem(ENROLLED_KEY, JSON.stringify(courses));
};

export const getCourseProgress = () => {
  return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
};

export const saveCourseProgress = (progress) => {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
};

export const clearStorage = () => {
  localStorage.removeItem(ENROLLED_KEY);
  localStorage.removeItem(PROGRESS_KEY);
};
