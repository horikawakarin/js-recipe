const inputText = document.getElementById("input-text")
const inputText2 = document.getElementById("input-text2")
const display = document.getElementById("display")

const button = document.getElementById("button")

button.onclick = function () {
  const value1 = Number(inputText.value)
  const value2 = Number(inputText2.value)
  const count = value1 + value2
  display.textContent = count
}
