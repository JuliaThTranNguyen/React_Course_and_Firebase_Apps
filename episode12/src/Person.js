import PropTypes from "prop-types";

export const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Email: {props.email}</h1>
      <h1>This person is: {props.IsMarried ? "is" : "is not"} Married</h1>
      {props.friends.map((friend) => {
        return <h1 key={friend}>{friend}</h1>;
      })}
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  IsMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};
