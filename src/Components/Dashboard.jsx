const Dashboard = ({ enrolledCourses, progress, onProgressClick }) => {
  return (
    <div className="bg-gray-300 py-20 px-4 mt-1">
      <h2 className="text-center text-4xl pb-10 font-bold">📘 My Enrolled Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-600 text-center">You haven't enrolled in any courses yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => {
            const isCompleted = progress[course.id];

            return (
              <li
                key={course.id}
                className="text-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center space-y-3">
                  <i className={`${course.icon} text-4xl text-green-600`}></i>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow"
                  >
                    Read Me
                  </a>
                  <button
                    onClick={() => onProgressClick(course.id)}
                    className={`px-4 py-2 rounded-full shadow text-white transition-all ${
                      isCompleted
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  >
                    {isCompleted ? "Completed" : "Mark as Complete"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
