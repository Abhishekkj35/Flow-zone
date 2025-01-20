const notesBtn = document.getElementById('notes-btn');
const todoBtn = document.getElementById('todo-btn');
const stopwatchBtn = document.getElementById('stopwatch-btn');
const calculatorBtn = document.getElementById('calculator-btn');

notesBtn.addEventListener('click', () => {
  window.location.href = '/notes/notes.html';
});

todoBtn.addEventListener('click', () => {
  window.location.href = '/to-do/todo.html';
});

stopwatchBtn.addEventListener('click', () => {
  window.location.href = '/stopwatch/stopwatch.html';
});

calculatorBtn.addEventListener('click', () => {
  window.location.href = '/calculator/calculator.html';
});