export const Search = ({ value, inputChange }) => {
  return (
    <input
      value={value}
      onChange={inputChange}
      type="text"
      className="py-2 pl-4 text-gray-700 rounded-md"
      placeholder="Search Movies"
    />
  );
};
