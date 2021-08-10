/* ROXANNE CANTU
Create a function that accepts a single array as an argument. Given an array of objects, with each object consisting of an "id", "name", and "score" key:
•	Remove any objects that are missing any of the above fields or do not contain values for the above fields.
•	Remove any objects where the "score" is lower than or equal to 50
•	Remove any duplicates that have the same "id" and "name".
•	Return the final array sorted by the "score" descending from highest to lowest, if there is a tie, then sort by name ascending from A-Z.
Note: If there are duplicate objects that have the same "id" and "name" and only differ by "score", then keep the object with the highest "score".
Example Input: [{"id": 1, "name": "Alice", "score": 60}, {"id": 2, "name": "Bob", "score": 50}, {"id": 1, "name": "Alice", "score": 50}, {"id": 3, "name": "", "score": 100}, {"id": 4, "name": "Bob", "score": 60}, {"name": "Bob", "score": 90}, {"id": 5, "name": "Charles", "score": 51}]
Example Output: [{"id": 1, "name": "Alice", "score": 60}, {"id": 4, "name": "Bob", "score": 60}, {"id": 5, "name": "Charles", "score": 51}]

*/

function sortedScore(array) {
  let finalArray = [];

  // sort array in descending order by score
  array.sort((a, b) => b.score - a.score);

  //   iterate backwards so as to avoid errors since iterating forward would cause issues since length of array of objects may change.
  for (let i = array.length - 1; i >= 0; --i) {
    // If condition checking if an object is missing a field, if so, remove from array.
    if (
      array[i].id === undefined ||
      array[i].name === undefined ||
      array[i].score === undefined
    ) {
      array.splice(i, 1);
    }

    // If condition checking if id, name, or score is equal to null or no value is set, if true, remove from array.
    else if (
      array[i].id === null ||
      array[i].name === '' ||
      array[i].name === ' ' ||
      array[i].name === null ||
      array[i].score === 0 ||
      array[i].score === null
    ) {
      array.splice(i, 1);
    }
    // If condition checking of score is less than or equal to 50, then remove from array.
    else if (array[i].score <= 50) {
      array.splice(i, 1);
    }
    // If condition checking if id and name are duplicated, then remove lowest score from array.
    for (let j = i - 1; j >= 0; --j) {
      if (array[i] !== undefined) {
        // Since already sorted from greatest to least score, when spliced, lowest score is removed when splicing i, because j will always be a greater number
        if (array[i].id === array[j].id && array[i].name === array[j].name) {
          array.splice(i, 1);
        }
      }
    }

    finalArray.push(array);
  }
  return finalArray;
}

// Array of objects that needs to be sorted.
let arrObj = [
  { id: 1, name: 'Alice', score: 60 },
  { id: 2, name: 'Bob', score: 50 },
  { id: 1, name: 'Alice', score: 50 },
  { id: 3, name: '', score: 100 },
  { id: 4, name: 'Bob', score: 60 },
  { name: 'Bob', score: 90 },
  { id: 5, name: 'Charles', score: 51 },
  { id: 1, name: 'Alice', score: 51 },
];

// Call sortedScore function and pass in arrObj as argument
console.log(sortedScore(arrObj));
