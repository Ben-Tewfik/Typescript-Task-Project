const form = document.querySelector<HTMLFormElement>(".form")!;
const tasksList = document.querySelector<HTMLUListElement>(".list");
const taskInput = document.querySelector<HTMLInputElement>(".task");

type Task = {
  description: string;
  isCompleted: boolean;
};

form.addEventListener("submit", e => {
  e.preventDefault();
  let task = taskInput?.value;
  if (task) {
    // remove this console later
    console.log(task);
    return task;
  }
  alert("You did not enter anything");
});
