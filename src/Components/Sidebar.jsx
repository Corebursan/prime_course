const Sidebar = ({ enrolledCourses, onSelectCourse }) => {
  return (
    <aside className="w-64 h-screen bg-white shadow-md px-4 py-6 fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onSelectCourse(null)}
            className="text-blue-700 font-semibold"
          >
            Show All Courses
          </button>
        </li>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <button
              onClick={() => onSelectCourse(course.id)}
              className="text-gray-800 hover:text-blue-500"
            >
              {course.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
