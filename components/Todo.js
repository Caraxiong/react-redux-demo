const Todo = ({onclick,conpleted, text}) => {
	<li
		onclick ={onclick}
		style={{textDecoration:completed?"line-through":"none"}}>
	</li>
}

export default Todo
