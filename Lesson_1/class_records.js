function sum(arr) {
  return arr.reduce((sum, val) => sum + val);
}

function calcExamAverage(examScores) {
  return sum(examScores) / examScores.length;
}

function calcExerciseScore(exerciseScores) {
  return sum(exerciseScores);
}

// calculate percent grade based on weighting
function calcPercentGrade(examScore, exerciseScore) {
  const EXAM_WEIGHT = 0.65;
  const EXERCISES_WEIGHT = 0.35;

  return Math.round(examScore * EXAM_WEIGHT + exerciseScore * EXERCISES_WEIGHT);
}

// edge case -- invalid grades > 100
function getLetterGrade(percentGrade) {
  if (percentGrade >= 93) {
    return 'A';
  } else if (percentGrade >= 85) {
    return 'B';
  } else if (percentGrade >= 77) {
    return 'C';
  } else if (percentGrade >= 69) {
    return 'D';
  } else if (percentGrade >= 60) {
    return 'E';
  } else if (percentGrade >= 0) {
    return 'F';
  } else {
    return 'Invalid grade'
  }
}

// return string of grade in appropriate format
function formatGrade(score) {
  return `${score} (${getLetterGrade(score)})`;
}

function getStudentGrades(data) {
  // isolate just the exam and exercise scores
  let scores = Object.values(data).map(student => student.scores);;
  
  // calculate the final scores
  scores = scores.map(grades => {
    return {
      exams: calcExamAverage(grades.exams),
      exercises: calcExerciseScore(grades.exercises),
    }
  });
  
  // condense exam and exercise grade to final average
  scores = scores.map(grades => {
    return calcPercentGrade(grades.exams, grades.exercises)
  });

  // return appropriately formatted array containing final averages
  scores = scores.map(formatGrade);

  return scores;
}



function getExamData(data) {
  let examScores = Object.values(data).map(student => student.scores.exams);
  let examData = [];

  for (let i = 0; i < 4; i += 1) {
    let exam = examScores.map((subArr) => subArr[i]);
    
    let average = calcExamAverage(exam);
    let minimum = exam.reduce((min, current) => {
      if (current < min) {
        return current;
      } else {
        return min;
      }
    });

    let obj = {
      average,
      minimum,
      maximum: 100,
    }

    examData.push(obj);
  }

  return examData; 
}

function generateClassRecordSummary(scores) {
  return {
    studentGrades: getStudentGrades(scores),
    exams: getExamData(scores),
  };
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};


console.log(generateClassRecordSummary(studentScores));

// // returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }