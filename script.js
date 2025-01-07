console.log('Hello!');
const showTaskContainer = document.getElementById('showTaskContainer');
const taskStatusFilter = document.getElementById('taskStatusFilter');
console.log(taskStatusFilter);
const tasks = [
  { id: 1, title: 'Task 1', status: 'todo' },
  { id: 2, title: 'Task 2', status: 'inProgress' },
  { id: 3, title: 'Task 3', status: 'completed' },
  { id: 4, title: 'Task 4', status: 'todo' },
];
const showFilteredTasks = (taskstatus) => {
  const filteredArr = taskstatus
    ? tasks.filter((task) => task.status === taskstatus)
    : tasks;
  const showHtml = filteredArr.map(
    (task) =>
      `<strong>ID: </strong>${task.id} <br>
<strong>Title: </strong>${task.title} <br>
<strong>Status: </strong>${task.status} <br>
<hr>
`
  );
  showTaskContainer.innerHTML = showHtml.join('');
};
showFilteredTasks();
taskStatusFilter.addEventListener('change', () => {
  const taskstatus = taskStatusFilter.value;
  if (taskstatus === '') {
    showFilteredTasks();
  } else {
    showFilteredTasks(taskstatus);
  }
});
