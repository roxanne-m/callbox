/*  ROXANNE CANTU
Create a function that accepts three arguments: "type", "id", and "score". Inside the function, will contain a hardcoded array of objects.
 
Example: ScoreArray = [{"id": 1, "score": 1}, { "id": 2, "score": 2}].
•	"type" will always be required and consists of four possible values ("create", "read", "update", "delete")
•	"id" will only be required when ("read", "update", "delete") type is passed.
•	"score" will only be required when ("create", "update") type is passed.
If "create" type is passed, then add a new object to the ScoreArray with the value of the "score" that was passed and return the full ScoreArray. The "id" field should always be the max "id" of the ScoreArray + 1.
If "read" type is passed, then return the corresponding object that matches the "id" that was passed.
If "update" is passed, then update the "score" value of the corresponding object that matches the "id" that was passed and return the full ScoreArray.
If "delete" is passed, then delete the corresponding object that matches the "id" that was passed and return the full ScoreArray.

*/

function ScoreFunction(type, id, score) {
  // hardcoded array of objects
  let ScoreArray = [
    { id: 1, score: 1 },
    { id: 2, score: 2 },
  ];

  //   Make parameter type not case sensitive.
  let finalType = type.toLowerCase();

  //   Make parameter id an integer (in case id is passed as a string)
  let finalId = parseInt(id);

  //   "type" will always be required and consists of four possible values ("create", "read", "update", "delete")
  if (finalType === undefined || finalType === '') {
    let missingTypeMessage =
      'Type is required. Please enter either "create", "read", "update", or "delete" as your type.';
    return missingTypeMessage;
  }

  //   "id" will only be required when ("read", "update", "delete") type is passed.
  else if (finalType !== 'create' && finalId === null) {
    let missingIdMessage =
      'An Id is required when ("read", "update", "delete") type is passed.';
    return missingIdMessage;
  }

  //   "score" will only be required when ("create", "update") type is passed.
  else if (
    (finalType === 'create' || finalType === ' update') &&
    score === null
  ) {
    let missingScoreMessage =
      'A score is required when ("create" or "update") type is passed.';

    return missingScoreMessage;
  }

  //   If "read" type is passed, then return the corresponding object that matches the "id" that was passed.
  else if (finalType === 'read' && finalId !== null) {
    let idCheck = false; // Flag variable
    // Iterate through array of objects and find matching id, return if found, otherwise output message.
    for (let i = 0; i < ScoreArray.length; i++) {
      if (finalId === ScoreArray[i].id) {
        return ScoreArray[i];
        idCheck = true;
      }
    }
    if (idCheck === false) {
      let idNotFound =
        'A corresponding object with the id used could not be found.';
      return idNotFound;
    }
  }

  //  If "update" is passed, then update the "score" value of the corresponding object that matches the "id" that was passed and return the full ScoreArray.
  else if (finalType === 'update' && finalId !== null) {
    let checker = false;
    //  Iterate through array of objects, find matching id, and update score of object to value passed in.
    for (let i = 0; i < ScoreArray.length; i++) {
      if (finalId === ScoreArray[i].id) {
        ScoreArray[i].score = score;
        checker = true;
      }
    }
    if (checker === false) {
      let updateInvalidMessage =
        'Matching Id was not found. Score update could not be completed.';
      return updateInvalidMessage;
    }
    return ScoreArray;
  }

  //   If "delete" is passed, then delete the corresponding object that matches the "id" that was passed and return the full ScoreArray.
  else if (finalType === 'delete' && finalId !== null) {
    checker = false;
    // iterate through array of objects, find matching id, and remove object from array.
    for (let i = 0; i < ScoreArray.length; i++) {
      if (finalId === ScoreArray[i].id) {
        ScoreArray.splice(i, 1);
        checker = true;
        return ScoreArray;
      }
    }
    if (checker === false) {
      let deleteMessage =
        'Matching Id was not found. Object could not be deleted.';
      return deleteMessage;
    }
  }

  // If "create" type is passed, then add a new object to the ScoreArray with the value of the "score" that was passed and return the full ScoreArray. The "id" field should always be the max "id" of the ScoreArray + 1.
  else if (finalType === 'create' && score !== null) {
    // Find largest id value in ScoreArray
    let largest = 0;
    for (let i = 0; i < ScoreArray.length; i++) {
      if (ScoreArray[i].id > largest) {
        largest = ScoreArray[i].id;
      }
    }
    // Add new object to ScoreArray and set id to largest value + 1;
    ScoreArray.push({ id: largest + 1, score: score });

    return ScoreArray;
  }
}

console.log(ScoreFunction('create', null, 3));
console.log(ScoreFunction('read', 2, null));
console.log(ScoreFunction('update', '2', 3));
console.log(ScoreFunction('delete', 2, null));
