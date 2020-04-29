import React from "react";

const animals = [
  "Chicken",
  "Sloth",
  "Porcupine",
  "Killer whale",
  "Velociraptor",
];

const htmlAnimals = animals.map((animal, i) => {
  return (
    <li>
      Awesomeness level {i + 1}: {animal}
    </li>
  );
});

function AwesomeAnimals() {
  return <ul>{htmlAnimals}</ul>;
}

export default AwesomeAnimals;
