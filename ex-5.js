const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const result =
    students.reduce((acc, curr) => acc + curr.score, 0) / students.length;
  console.log(result);
  return result;
}

getAverageStudentScore(students); // Output: 87.5
