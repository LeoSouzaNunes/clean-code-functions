function renderActiveTodos(todos) {
    const ulElement = document.querySelector("ul");
    createListItems(ulElement, todos);
}

function createListItems(ulElement, todos) {
    todos.forEach((todo) => {
        if (todo.active || todo.daysFinished < 0) {
            const liElement = document.createElement("li");
            liElement.innerHTML = todo.text;
            ulElement.appendChild(liElement);
        }
    });
}
