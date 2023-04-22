const resetbtn = document.querySelector("#reset");
resetbtn.addEventListener("click", resetAll);
function resetAll() {
  localStorage.clear();
  location.reload();
}
