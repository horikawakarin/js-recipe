const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

choice1.onclick = function () {
  feedback.textContent = "残念！グーでした"
}
choice2.onclick = function () {
  feedback.textContent = "正解！チョキでした"
}
choice3.onclick = function () {
  feedback.textContent = "残念！パーでした"
}
