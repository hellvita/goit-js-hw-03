function makeArray(firstArray, secondArray, maxLength) {
  let finalArr = firstArray.concat(secondArray);
  if (finalArr.length > maxLength) {
    finalArr = finalArr.slice(0, maxLength);
  }
  return finalArr;
}

console.log("-------Task 2-------");
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
console.log("--------------------");
