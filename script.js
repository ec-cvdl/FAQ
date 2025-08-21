function showQuestion(id) {
  document.querySelectorAll('.question, .solution').forEach(el => el.hidden = true);
  document.getElementById(id).hidden = false;
}

function showSolution(id) {
  document.querySelectorAll('.question, .solution').forEach(el => el.hidden = true);
  document.getElementById(id).hidden = false;
}
