const Button = ({ children, onClick, type = "button", className = "" }) => (
  <button type={type} onClick={onClick} className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`}>
    {children}
  </button>
);

export default Button;