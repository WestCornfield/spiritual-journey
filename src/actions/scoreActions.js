export function calculateAllScores(questions) {
  var sum = [0, 0, 0];
  for (var i = 0; i < questions.length; i++) {
    if (i % 3 == 0) {
      sum[0] += questions[i];
    } else if (i % 3 == 1) {
      sum[1] += questions[i];
    } else if (i % 3 == 2) {
      sum[2] += questions[i];
    }
  }
  return sum;
}
