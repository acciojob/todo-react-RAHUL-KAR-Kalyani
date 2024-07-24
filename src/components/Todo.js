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
	};
	return (
		<div>


			<p className='heading fs-2 wittgenstein' >To-Do List</p>
			<form>
				<div className='d-flex justify-content-center'>
					<input className='textbox' type="text" onChange={handleInput} />
					<button className="button btn btn-outline-secondary assistant" onClick={addTask}>Add Todo</button>
				</div>
			</form>
			<div>
				{
					Task.map((item, index) => {
						return <ul class="container">
									<li class="row" key={index}>
										<div class="col-10 wittgenstein"><div>{item}</div></div>
										<div class="col-2"><button className="btn btn-outline-secondary assistant" onClick={() => deleteTask(index)}>Delete</button></div>
									</li>
								</ul>

						/* If write onClick={deleteTask(index)}, it would immediately invoke deleteTask with index as 
						its argument when the component renders. This is not what you want because you want deleteTask 
						to be called only when the button is clicked.*/
					})
				}
			</div>
		</div>
	)
}

export default Todo