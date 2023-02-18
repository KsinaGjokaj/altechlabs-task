const Pets = (props) => {
  return (
    <li className="pet-component">
      <img src="https://placekitten.com/640/360" />
      <div>{props.petsObj.name}</div>
      <div>{props.petsObj.status}</div>
    </li>
  );
};
export default Pets;
