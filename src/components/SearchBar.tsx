interface Props {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search images by name..."
      className="w-full p-2 border rounded shadow-sm"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
