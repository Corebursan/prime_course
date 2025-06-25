const Input = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="border border-gray-300 p-2 rounded w-full"
  />
);

export default Input;