import React, { useState } from 'react'

function Todo() {
	const [input, setInput] = useState("");
	const [Task, setTask] = useState([])
	const handleInput = (e) => {	//e is a event
		setInput(e.target.value);	//here e push our input to target.value due to onchange event handler
	}
	const addTask = (e) => {
		setTask([...Task, input]);
		setInput('');
		e.preventDefault();		// when use event within form then use preventdefault must. it stop refreshing
	}
	const deleteTask = (index) => {
		const updatedTasks = [...Task];
		// console.log(`task ${Task}`);
		// console.log(`updatedTasks ${updatedTasks}`);
		updatedTasks.splice(index, 1);
		setTask(updatedTasks);
		// console.log(`task ${Task}`);
		// console.log(`updatedTasks ${updatedTasks}`);
		// console.log(`task ${Task}`);
	};
	return (
		<div>
			<form>
				<input type="text" onChange={handleInput} />
				<button onClick={addTask}>Add</button>
			</form>
			<div>
				<ol>
					{
						Task.map((item, index) => {
							return <li key={index}>{item} <button onClick={() => deleteTask(index)}>Delete</button></li>

							/* If write onClick={deleteTask(index)}, it would immediately invoke deleteTask with index as 
							its argument when the component renders. This is not what you want because you want deleteTask 
							to be called only when the button is clicked.*/
						})
					}
				</ol>
			</div>
		</div>
	)
}

export default Todo