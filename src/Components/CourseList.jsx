const CourseList = ({ onEnroll, enrolledCourses }) => {
  const allCourses = [
    {
      id: 1,
      title: "AngularJs Notes",
      desc: "Learn Angular fundamentals.",
      icon: "fa-brands fa-angular",
      link: "https://drive.google.com/file/d/1e0DJMHwVF_cWkRd6VOPOR_2hH-z0MmNG/view",
    },
    {
      id: 2,
      title: "DBMS Notes",
      desc: "Spring Boot CRUD project.",
      icon: "fa-solid fa-database",
      link: "https://drive.google.com/file/d/1epxJxRU_T5VBPh8m4EpE3ZB0aXNQ34oe/view",
    },
    {
      id: 3,
      title: "Computer Network Notes",
      desc: "CN concepts and protocols.",
      icon: "fa-solid fa-computer",
      link: "https://drive.google.com/file/d/1efcK-EnT4XP7VZ4bVP42tTKAJdqOFgkH/view",
    },
    {
      id: 4,
      title: "Computer Network",
      desc: "CN concepts and protocols.",
      icon: "fa-solid fa-computer",
      link: "https://drive.google.com/file/d/1efcK-EnT4XP7VZ4bVP42tTKAJdqOFgkH/view",
    },
  ];

  return (
    <>
      <div id="courses" className="bg-gray-300 py-20 mt-1 px-4">
        <h1 className="text-center text-4xl pb-10 font-bold">🎓 Available Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.map((course) => {
          const isEnrolled = enrolledCourses.some((c) => c.id === course.id);
          return (
            <div key={course.id} className="text-center bg-gray-100 hover:bg-gray-200 shadow-lg rounded-xl p-6 transition-transform hover:-translate-y-1">
              <i className={`${course.icon} text-4xl text-orange-500`}></i>
              <h2 className="text-xl font-semibold my-2">{course.title}</h2>
              <p className="text-sm text-gray-600">{course.desc}</p>
              <button
                onClick={() => onEnroll(course)}
                disabled={isEnrolled}
                className={`mt-4 px-4 py-2 rounded text-white ${
                  isEnrolled ? "px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow cursor-not-allowed" : "px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow"
                }`}
              >
                {isEnrolled ? "Enrolled" : "Enroll"}
              </button>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default CourseList;
