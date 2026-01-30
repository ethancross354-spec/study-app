// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

// Logic for Task List
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  if (taskInput.value === "") return;
  const li = document.createElement('li');
  li.textContent = taskInput.value;
  // In a real app, save this to localStorage for persistence!
  localStorage.setItem('tasks', taskInput.value); 
  taskList.appendChild(li);
  taskInput.value = "";
}

// Installation Prompt Logic
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBtn').style.display = 'block';
});

document.getElementById('installBtn').addEventListener('click', () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(() => {
    document.getElementById('installBtn').style.display = 'none';
  });

});
