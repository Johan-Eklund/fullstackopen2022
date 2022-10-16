import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [filterPersons, setFilterPersons] = useState(persons);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3000/persons").then((response) => {
      console.log("promise fulfilled");
      // setNotes(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (
      persons.filter((person) => person.name === personObject.name).length > 0
    ) {
      return alert(`${personObject.name} is already added to phonebook!`);
    }

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const filter = (event) => {
    setNewSearch(event.target.value);
    setFilterPersons(
      persons.filter(
        (person) =>
          person.name
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) !== -1
      )
    );
  };

  const formData = {
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    addPerson,
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} newSearch={newSearch} />
      <PersonForm formData={formData} />
      <h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch} />
    </div>
  );
};

export default App;
