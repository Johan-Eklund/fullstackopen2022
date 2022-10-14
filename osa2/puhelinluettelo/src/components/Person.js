const Person = ({ name, number }) => {
  return (
    <div>
      <ul>
        <li>
          {name}: {number}
        </li>
      </ul>
    </div>
  );
};
export default Person;
