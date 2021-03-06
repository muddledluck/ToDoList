//Function
const addTodo = (event) => {
	//Prevent form from submitting
	event.preventDefault();

	//Todo DIV
	const todoDiv = document.createElement('div');
	todoDiv.classList.add("todo");

	//Create LI
	const newTodo = document.createElement('li');
	if(todoInput.value != ""){
		newTodo.innerText = todoInput.value;
		newTodo.classList.add('todo-item');
		todoDiv.appendChild(newTodo);
	}

	//CHECK MARK BUTTON
	const completedButton = document.createElement('button');
	if(todoInput.value != ""){
		completedButton.innerHTML = '<i class="fas fa-check"></i>';
		completedButton.classList.add("complete-btn");
		todoDiv.appendChild(completedButton);
	}

	//CHECK DELETE BUTTON
	const trashButton = document.createElement('button');
	if(todoInput.value != ""){
		trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	 	trashButton.classList.add("trash-btn");
	 	todoDiv.appendChild(trashButton);
	} 

	//APPEND TO LIST
	if(todoInput.value != ""){
		todoList.appendChild(todoDiv);
	}

	//Clear Todo INPUT VALUE
	todoInput.value = "";
}

const deleteCheck = (event) => {
	const item = event.target;
	//DELETE TODO
	if (item.classList[0] === 'trash-btn'){
		const todo = item.parentElement;
		//Animation
		todo.classList.add("fall");
		todo.addEventListener('transitionend', function(){
			todo.remove();
		})
	}

	//CHECK MAEK
	if (item.classList[0] === "complete-btn"){
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

const filterTodo = (event) => {
	const todos = todoList.childNodes;
	todos.forEach(function(todo){
		switch(event.target.value){
			case "all":
				todo.style.display = "flex";
				break
			case "completed":
				if(todo.classList.contains('completed')){
					todo.style.display = 'flex';			
				}else{
					todo.style.display = "none";
				}
				break;

			case "uncompleted":
				if(!todo.classList.contains('completed')){
					todo.style.display = 'flex';
				}else{
					todo.style.display = 'none';
				}
				break;
		}
	})
}

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
