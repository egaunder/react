/**
 *
 * Initial Setup:
 * Let an array of string called fruits, for example: ["apple", "banana", ...]
 * Display the list in the UI.
 *
 * Search Input:
 * Use the provided input fields. As the User types into the input, filter the displayed list to include only those items
 *
 * Real-Time Filtering:
 * The List should update as soon as the user types into the search box, without need to press anything
 *
 * No Matches:
 * Dispaly a friendly message if no items match the search term
 */

import { useState } from "react";

const FruitList = () => {
  const [matchedFruits, setMatchedFruits] = useState([]);
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Blueberry",
    "Cherry",
    "Cranberry",
    "Date",
    "Dragonfruit",
    "Elderberry",
    "Fig",
    "Grape",
    "GrapeFruite",
  ];

  const handleInputChange = (e) => {
    const text = e.target.value.trim();
    let matches = [];
    if (text !== "") {
      matches = fruits.filter((fruit) => {
        const res = fruit.toLowerCase().startsWith(text.toLowerCase().trim());
        return res;
      });
      matches = matches.map((fruit) => {
        return (
          <p key={fruit}>
            <b>{`${fruit.slice(0, text.length)}`}</b>
            {`${fruit.slice(text.length)}`}
          </p>
        );
      });
    }
    setMatchedFruits(matches);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => handleInputChange(e)}
      />
      {matchedFruits.length > 0 &&
        matchedFruits.map((fruit) => <p key={fruit}>{fruit}</p>)}
      {matchedFruits.length === 0 && <h1>Sorry no fruits were matched</h1>}
    </div>
  );
};

export default FruitList;
