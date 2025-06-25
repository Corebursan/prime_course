import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CourseList from "./CourseList";
import Dashboard from "./Dashboard";
import {
  getEnrolledCourses,
  saveEnrolledCourses,
  getCourseProgress,
  saveCourseProgress,
} from "../utils/storage";

const CourseManager = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [progress, setProgress] = useState({});

  // Load once on mount
  useEffect(() => {
    setEnrolledCourses(getEnrolledCourses());
    setProgress(getCourseProgress());
  }, []);

  // Save enrolled courses
  useEffect(() => {
    saveEnrolledCourses(enrolledCourses);
  }, [enrolledCourses]);

  // Save progress
  useEffect(() => {
    saveCourseProgress(progress);
  }, [progress]);

  const handleEnroll = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses((prev) => [...prev, course]);
    }
  };

  const handleProgressClick = (courseId) => {
    setProgress((prev) => ({ ...prev, [courseId]: true }));
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
