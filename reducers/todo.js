// reducer
// 是响应的抽象  
// 是纯方法  不能调ajax，输出不是完全由输入决定
// 传入旧状态和action
// 返回新状态

const todo = (state,action) => {
	switch (action.type){
		case 'ADD_TODO':
			return {
				id : action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if(state.id !== action.id){
				return state
			}
			return object.assign({},state, {
				completed: !state.completed
			})
		default:
		    return state
	}
}

const todos = (state,action) => {
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined , action)
			]
		case 'TOGGLE_TODO':
			return state.map(t => todo( t,action))
		default: 
			return state
	}
}

export default todos