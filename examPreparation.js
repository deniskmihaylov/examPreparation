function solve(input) {
  let index = 0;

  let maxBadGrades = Number(input[index]);
  index++;

  let taskName = input[index];
  index++;

  let actualGrade = Number(input[index]);
  index++;

  let badGrades = 0;
  let gradesSum = 0;
  let gradesCount = 0;
  let lastProblem = ''

  while (taskName !== "Enough") {
    lastProblem = taskName
    if (actualGrade <= 4) {
      badGrades++;
    }

    if (badGrades === maxBadGrades) {
      console.log(`You need a break, ${badGrades} poor grades.`);
      return;
    }

    gradesSum += actualGrade;
    gradesCount++;

    taskName = input[index];
    index++;

    actualGrade = Number(input[index]);
    index++;
  }

  let averageGrade = gradesSum / gradesCount;

  console.log(`Average score: ${averageGrade.toFixed(2)}`);
  console.log(`Number of problems: ${gradesCount}`);
  console.log(`Last problem: ${lastProblem}`);
}


solve([
  3,

  "Money",

  6,

  "Story",

  4,

  "Spring",

  "Time",

  5,

  "Bus",

  6,

  "Enough",
]);
