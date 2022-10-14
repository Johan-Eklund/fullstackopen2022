const Filter = ({ filter, newSearch }) => {
  return (
    <div>
      filter shown with:
      <input value={newSearch} onChange={filter} />
    </div>
  );
};

export default Filter;
