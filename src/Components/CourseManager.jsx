import { useEffect, useState } from "react";
import CourseList from "./CourseList";
import Courses from "./Courses";

const CourseManager = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const handleEnroll = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses((prev) => [...prev, course]);
    }
  };

  return (
    <>
      <CourseList onEnroll={handleEnroll} enrolledCourses={enrolledCourses} />
      <Courses enrolledCourses={enrolledCourses} />
    </>
  );
};

export default CourseManager;
