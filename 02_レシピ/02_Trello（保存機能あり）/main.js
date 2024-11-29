const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// ページロード時に保存済みToDoを復元
window.onload = function () {
  const todos = JSON.parse(localStorage.getItem("todos")) || []
  todos.forEach((text) => {
    const card = createCard(text)
    container.append(card)
  })
}

// 追加ボタンを押したときの処理を登録
addButton.onclick = function () {
  // カードを作成する
  const text = inputElement.value
  if (text.trim() === "") return // 空欄は追加しない
  const card = createCard(text)
  container.append(card)

  // ローカルストレージに保存する
  saveToLocalStorage(text)

  // 入力欄を空にする
  inputElement.value = ""
}

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function () {
    // カードを削除する
    card.remove()

    // ローカルストレージを更新する
    const todos = JSON.parse(localStorage.getItem("todos")) || []
    const index = todos.indexOf(text)
    if (index > -1) {
      todos.splice(index, 1)
      localStorage.setItem("todos", JSON.stringify(todos))
    }
  }
  card.append(deleteButton)

  return card
}

// ローカルストレージに保存する
const saveToLocalStorage = function (text) {
  const todos = JSON.parse(localStorage.getItem("todos")) || []
  todos.push(text)
  localStorage.setItem("todos", JSON.stringify(todos))
}
