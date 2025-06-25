import CourseCard from './CourseCard';

const CourseList = ({ courses, onEnroll }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {courses.map(course => (
      <CourseCard key={course.id} {...course} onEnroll={() => onEnroll(course.id)} />
    ))}
  </div>
);

export default CourseList;