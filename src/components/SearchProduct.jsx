function SearchProduct({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border px-3 py-2 rounded-lg border-gray-300"
    />
  );
}

export default SearchProduct;
