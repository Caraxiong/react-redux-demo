//action
//是行为对象
//是普通js对象
//一般由方法生成
//必须有一个type
let nextTodoId = 0
export const addTodo = (text) => {
	return {
		type: "ADD_TODO",
		id:nextTodoId,
		text
	}
}

export const serVisibility = (filter) => {
	return{
		type: 'SET_VISIBILITY',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type : "TOGGLE_TODO",
		id
	}
}
