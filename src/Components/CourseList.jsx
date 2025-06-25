import { useState } from "react";

const CourseList = ({ onEnroll, enrolledCourses }) => {
  const allCourses = [
    // Java Category
    {
      id: 1,
      title: "Core Java",
      desc: "Object-Oriented Programming, Collections, and more.",
      icon: "fa-brands fa-java",
      category: "Java",
      link: "https://drive.google.com/file/java_core_link",
    },
    {
      id: 2,
      title: "Spring Boot",
      desc: "Create REST APIs and Microservices.",
      icon: "fa-solid fa-leaf",
      category: "Java",
      link: "https://drive.google.com/file/spring_boot_link",
    },

    // Python Category
    {
      id: 3,
      title: "Python Basics",
      desc: "Introduction to Python, syntax, loops, functions.",
      icon: "fa-brands fa-python",
      category: "Python",
      link: "https://drive.google.com/file/python_basics_link",
    },
    {
      id: 4,
      title: "Django Web Dev",
      desc: "Full-stack development with Django framework.",
      icon: "fa-solid fa-server",
      category: "Python",
      link: "https://drive.google.com/file/django_web_link",
    },

    // MERN Category
    {
      id: 5,
      title: "React.js Notes",
      desc: "Build UI with components and hooks.",
      icon: "fa-brands fa-react",
      category: "MERN",
      link: "https://drive.google.com/file/react_notes_link",
    },
    {
      id: 6,
      title: "MongoDB + Node.js",
      desc: "Backend APIs and database using Node and MongoDB.",
      icon: "fa-solid fa-database",
      category: "MERN",
      link: "https://drive.google.com/file/mern_stack_link",
    },

    // Fundamentals Category
    {
      id: 7,
      title: "DBMS Notes",
      desc: "Database Management System fundamentals.",
      icon: "fa-solid fa-database",
      category: "Fundamentals",
      link: "https://drive.google.com/file/dbms_notes_link",
    },
    {
      id: 8,
      title: "Computer Networks",
      desc: "Networking layers, protocols, and models.",
      icon: "fa-solid fa-network-wired",
      category: "Fundamentals",
      link: "https://drive.google.com/file/cn_notes_link",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Java", "Python", "MERN", "Fundamentals"];

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="courses" className="bg-gray-300 py-20 mt-1 px-4">
      <h1 className="text-center text-4xl pb-6 font-bold">🎓 Available Courses</h1>

      {/* Search and Category Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full sm:w-1/2 px-4 py-2 rounded border"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          const isEnrolled = enrolledCourses.some((c) => c.id === course.id);
          return (
            <div
              key={course.id}
              className="text-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-6 transition-transform hover:-translate-y-1"
            >
              <i className={`${course.icon} text-4xl text-orange-500`}></i>
              <h2 className="text-xl font-semibold my-2">{course.title}</h2>
              <p className="text-sm text-gray-600">{course.desc}</p>
              <button
                onClick={() => onEnroll(course)}
                disabled={isEnrolled}
                className={`mt-4 px-4 py-2 rounded-full text-white shadow ${
                  isEnrolled
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {isEnrolled ? "Enrolled" : "Enroll"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseList;
