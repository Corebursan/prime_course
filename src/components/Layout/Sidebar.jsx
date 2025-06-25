// components/Layout/Sidebar.jsx
const Sidebar = () => (
  <aside className="w-64 h-full p-4 bg-gray-100">
    <ul className="space-y-2">
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/courses">Courses</a></li>
    </ul>
  </aside>
);

export default Sidebar;