let words = ["hello", "world"];

function getWordLengths(words) {
  return words.length;
}

const result = words.map(getWordLengths);

console.log(result);
console.log(words[0]);
console.log(words[0].length);
console.log(words[1]);
console.log(words[1].length + words[0].length);
