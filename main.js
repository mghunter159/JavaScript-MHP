let input = document.querySelector("#todo");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

let alltask_div1 = 0;
let doneTask_div1 = 0;

let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
let doneTasks = JSON.parse(localStorage.getItem("done")) || [];

savedTasks.forEach(addUIItem);
doneTasks.forEach(doneUIItem);

btn.addEventListener("click", () => {
   let txt = input.value;
   if (txt === "") {
      alert("Ты не ввел ничего!");
   } else {
      savedTasks.push(txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
      input.value = "";
      addUIItem(txt);
   }
});

list.addEventListener("click", (e) => {
   if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
   }
});

function addUIItem(txt) {
   let li = document.createElement("li");
   li.innerHTML = txt;
   li.classList.add("list-group-item");
   list.insertBefore(li, list.childNodes[0]);


   alltask_div1 = alltask_div1 + 1;
   document.getElementById("alltask_div").innerHTML = alltask_div1;

   let delBtn = document.createElement("button");
   delBtn.textContent = "x";
   delBtn.classList.add("btn", "btn-danger", "ml");

   li.appendChild(delBtn);
   delBtn.addEventListener("click", (e) => {
      li.parentNode.removeChild(li);
      savedTasks = savedTasks.filter((e) => e !== txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));

      alltask_div1 = alltask_div1 - 1;
      document.getElementById("alltask_div").innerHTML = alltask_div1;
   });

   let doneBtn = document.createElement("button");
   doneBtn.textContent = "Ok";
   doneBtn.classList.add("btn", "btn-success", "ml");

   li.appendChild(doneBtn);
   doneBtn.addEventListener("click", (e) => {
      li.parentNode.removeChild(li);
      savedTasks = savedTasks.filter((e) => e !== txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
      doneTasks.push(txt);
      localStorage.setItem("done", JSON.stringify(doneTasks));
      doneUIItem(txt);

      alltask_div1 = alltask_div1 - 1;
      document.getElementById("alltask_div").innerHTML = alltask_div1;

   });


}

function doneUIItem(txt) {
   let li = document.createElement("li");
   li.innerHTML = txt;
   li.classList.add("list-group-item", "done");
   list.insertBefore(li, list.childNodes[0]);

   doneTask_div1 = doneTask_div1 + 1;
   document.getElementById("doneTask_div").innerHTML = doneTask_div1;

   let delBtn = document.createElement("button");
   delBtn.textContent = "x";
   delBtn.classList.add("btn", "btn-danger", "delete");
   li.appendChild(delBtn);
   delBtn.addEventListener("click", (e) => {
      li.parentNode.removeChild(li);
      doneTasks = doneTasks.filter((e) => e !== txt);
      localStorage.setItem("done", JSON.stringify(doneTasks));

      doneTask_div1 = doneTask_div1 - 1;
      document.getElementById("doneTask_div").innerHTML = doneTask_div1;
   });
}
