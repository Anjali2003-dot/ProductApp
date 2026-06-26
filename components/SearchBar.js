export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control shadow-sm"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}