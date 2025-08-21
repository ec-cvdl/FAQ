function showQuestion(id) {
  document.querySelectorAll('.question, .solution').forEach(el => el.hidden = true);
  document.getElementById(id).hidden = false;
}

function showSolution(id) {
  document.querySelectorAll('.question, .solution').forEach(el => el.hidden = true);
  document.getElementById(id).hidden = false;
}

function selectCategory(category) {
  document.getElementById("main-categories").hidden = true;

  // Affiche les sous-problèmes
  const sub = document.getElementById("sub-" + category);
  if (sub) sub.hidden = false;
}

function showSolution(id) {
  document.querySelectorAll("section").forEach(s => s.hidden = true);
  document.getElementById(id).hidden = false;
  document.getElementById("back-to-start").hidden = false;
}

function goBack() {
  document.querySelectorAll("section").forEach(s => s.hidden = true);
  document.getElementById("main-categories").hidden = false;
}

function resetAll() {
  document.querySelectorAll("section").forEach(s => s.hidden = true);
  document.getElementById("main-categories").hidden = false;
}
