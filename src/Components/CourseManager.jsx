// File: components/CourseManager.jsx
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CourseList from "./CourseList";
import Dashboard from "./Dashboard";

const CourseManager = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [progress, setProgress] = useState({}); // For storing course completion

  // Load enrolled courses and progress from localStorage
  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const savedProgress = JSON.parse(localStorage.getItem("courseProgress")) || {};
    setEnrolledCourses(savedCourses);
    setProgress(savedProgress);
  }, []);

  // Persist enrolled courses on update
  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  // Persist progress on update
  useEffect(() => {
    localStorage.setItem("courseProgress", JSON.stringify(progress));
  }, [progress]);

  // Add course to enrolledCourses if not already there
  const handleEnroll = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses((prev) => [...prev, course]);
    }
  };

  // Mark a course as complete
  const handleProgressClick = (courseId) => {
    const updated = { ...progress, [courseId]: true };
    setProgress(updated);
  };

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <Dashboard
            enrolledCourses={enrolledCourses}
            progress={progress}
            onProgressClick={handleProgressClick}
          />
        }
      />
      <Route
        path="/courses"
        element={
          <CourseList
            onEnroll={handleEnroll}
            enrolledCourses={enrolledCourses}
          />
        }
      />
    </Routes>
  );
};

export default CourseManager;
