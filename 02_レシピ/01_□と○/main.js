const figure = document.getElementById("figure")
const classes = ["square", "rounded", "triangle"]
let index = 0

figure.onclick = function () {
  figure.classList.remove(classes[index])
  index = (index + 1) % classes.length
  figure.classList.add(classes[index])
}
