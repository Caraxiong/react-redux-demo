// 根据当前显示的状态来对todo列表进行过滤，并渲染TodoList
import { connect } from 'react-redux'
// 建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染。
import { toggleTodo } from '../actions/index.js'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
	}
}

const mapStateToProps = (state) => {
	return {
		todos:getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	// VisibleTodoList 向 TodoList 组件中注入一个叫 onTodoClick 的 props 中，
	// 还希望 onTodoClick 能分发 TOGGLE_TODO 这个 action
	return {
		onTodoClick : (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	// 指定如何把当前 Redux store state 映射到展示组件的 props 中
	mapStateToProps,
	// 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList
