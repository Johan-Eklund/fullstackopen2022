import Person from "./Person";

const Persons = ({ persons, newSearch }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toUpperCase().includes(newSearch.toUpperCase())
        )
        .map((person, key) => (
          <Person key={key} name={person.name} number={person.number} />
        ))}
    </div>
  );
};

export default Persons;
