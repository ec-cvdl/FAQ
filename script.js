function selectCategory(category) {
  document.getElementById("main-categories").hidden = true;
  hideAllSubCategories();
  hideAllSolutions();

  const subSection = document.getElementById("sub-" + category);
  if (subSection) {
    subSection.hidden = false;
  }
}

function showSolution(solutionId) {
  hideAllSubCategories();
  hideAllSolutions();

  const solution = document.getElementById(solutionId);
  if (solution) {
    solution.hidden = false;
    document.getElementById("solutions").hidden = false;
  }
}

function goBack() {
  hideAllSubCategories();
  hideAllSolutions();

  document.getElementById("main-categories").hidden = false;
  document.getElementById("solutions").hidden = true;
}

function resetAll() {
  hideAllSubCategories();
  hideAllSolutions();

  document.getElementById("main-categories").hidden = false;
  document.getElementById("solutions").hidden = true;
}

function hideAllSubCategories() {
  document.querySelectorAll("section[id^='sub-']").forEach(s => s.hidden = true);
}

function hideAllSolutions() {
  document.querySelectorAll(".solution").forEach(s => s.hidden = true);
}
