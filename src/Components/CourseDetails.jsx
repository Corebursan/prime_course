import { useParams } from "react-router-dom";

const CourseDetails = ({ enrolledCourses, progress, onProgressClick }) => {
  const { id } = useParams();
  const courseId = parseInt(id);
  const course = enrolledCourses.find((c) => c.id === courseId);

  if (!course) return <p className="p-4">Course not found or not enrolled.</p>;

  const isCompleted = progress[courseId];

  return (
    <div className="ml-64 p-6">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="mb-4">{course.desc}</p>
      <a
        href={course.link}
        target="_blank"
        rel="noreferrer"
        className="inline-block mb-4 px-4 py-2 bg-orange-500 text-white rounded-full shadow"
      >
        Read Me
      </a>
      <button
        onClick={() => onProgressClick(courseId)}
        className={`px-4 py-2 rounded-full text-white ${
          isCompleted ? "bg-green-600" : "bg-blue-600"
        }`}
      >
        {isCompleted ? "Completed" : "Mark as Complete"}
      </button>
    </div>
  );
};

export default CourseDetails;
