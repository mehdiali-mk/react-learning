function generateNnumber(arraySize) {
  let numberArray = new Array(arraySize);

  for (let i = 0; i < arraySize; i++) {
    numberArray[i] = Math.floor(Math.random() * 10);
  }

  return numberArray;
}

function sumArray(array) {
  return array.reduce((sum, number) => sum + number, 0);
}

export { generateNnumber, sumArray };
