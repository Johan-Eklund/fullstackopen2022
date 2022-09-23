const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ name }) => <h1>{name}</h1>;

const Total = ({ parts }) => {
  let sum = parts.reduce((total, part) => part.exercises);
  return <p>Number of exercises: {sum}</p>;
};

const Part = ({ part }) => (
  <p>
    {part.name}: {part.exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part) => <Part key={part.id} part={part} />);

export default Course;
