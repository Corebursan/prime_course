const CourseCard = ({ title, description, onEnroll }) => (
  <div className="p-4 shadow rounded bg-white">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    <button onClick={onEnroll} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Enroll</button>
  </div>
);

export default CourseCard;