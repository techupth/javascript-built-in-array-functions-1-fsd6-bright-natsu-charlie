const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  let totalScore = students.reduce((sum, students) => {
    return sum + students.score;
  }, 0);

  let studentsScore = totalScore / students.length;
  return studentsScore;
}
console.log(getAverageStudentScore(students));
