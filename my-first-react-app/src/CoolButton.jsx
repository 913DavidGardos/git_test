function TableOfWhatever() {
  const animals = ["lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {
          animals.map((animal) => { return <li key={animal}> {animal} </li>; })
        }
      </ul>
    </div>);
}



export default TableOfWhatever;
