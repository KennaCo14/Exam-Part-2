// Remove old cards from the DOM
const clearTodoList = () => {
    const todosDiv = document.getElementById('todos');
    while (todosDiv.firstChild) {
        todosDiv.removeChild(todosDiv.firstChild);
    }
};

// Generate and render new cards
const renderTodos = (todos) => {
    clearTodoList();
    const todosDiv = document.getElementById('todos');
    todos.forEach(todo => {
        const todoCardElement = createCardDiv(todo);
        todosDiv.appendChild(todoCardElement);
    });
};

// Create card element for a single todo
const createCardDiv = (todo) => {
    const todoCardElement = document.createElement("div");
    todoCardElement.classList.add("todo-item");
    if (todo.isComplete) {
        todoCardElement.classList.add('completed');
    }

    const todoTitleElement = document.createElement("h3");
    todoTitleElement.textContent = todo.title;
    todoCardElement.appendChild(todoTitleElement);

    const todoNotesElement = document.createElement("p");
    todoNotesElement.textContent = todo.notes;
    todoCardElement.appendChild(todoNotesElement);

    const todoCompleteStatusElement = document.createElement("p");
    todoCompleteStatusElement.textContent = `Completed: ${todo.isComplete ? "Yes" : "No"}`;
    todoCardElement.appendChild(todoCompleteStatusElement);

    const markCompleteButton = document.createElement('button');
    markCompleteButton.textContent = 'Mark Complete';
    markCompleteButton.addEventListener('click', function () {
        markTodoAsComplete(todo);
    });
    todoCardElement.appendChild(markCompleteButton);

    return todoCardElement;
};

// Validate title
const validateTitle = (title) => {
    const titleErrorElement = document.getElementById('title-error');
    if (title.length === 0) {
        titleErrorElement.textContent = "Title is required";
        return false;
    } else if (title.length > 10) {
        titleErrorElement.textContent = "Title is too long";
        return false;
    }
    titleErrorElement.textContent = "";
    return true;
};

// Validate notes
const validateNotes = (notes) => {
    const notesErrorElement = document.getElementById('notes-error');
    if (notes.length > 30) {
        notesErrorElement.textContent = "Notes is too long";
        return false;
    }
    notesErrorElement.textContent = "";
    return true;
};

// Submit logic
const submitForm = () => {
    const titleInput = document.getElementById('title');
    const notesInput = document.getElementById('notes');
    const title = titleInput.value.trim();
    const notes = notesInput.value.trim();
    if (validateTitle(title) && validateNotes(notes)) {
        addTask(title, notes);
        titleInput.value = '';
        notesInput.value = '';
    }
};

// Event listener for form submission
document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault();
    submitForm();
});

// Event listener for title input field
const titleInput = document.getElementById('title');
titleInput.addEventListener('input', function () {
    const title = this.value.trim();
    const errorMessage = document.getElementById('title-error');
    if (title.length === 0) {
        errorMessage.textContent = "Title is required";
    } else if (title.length > 10) {
        errorMessage.textContent = "Title is too long";
    } else {
        errorMessage.textContent = ""; // Clear error message when input is valid
    }
});

// Event listener for notes textarea
const notesInput = document.getElementById('notes');
notesInput.addEventListener('input', function () {
    const notes = this.value.trim();
    const errorMessage = document.getElementById('notes-error');
    if (notes.length > 30) {
        errorMessage.textContent = "Notes is too long";
    } else {
        errorMessage.textContent = "";
    }
});
