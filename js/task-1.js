function slugify(title) {
  title = title.toLowerCase();
  const words = title.split(" ");
  return words.join("-");
}

console.log("-------Task 1-------");
console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
console.log("--------------------");
