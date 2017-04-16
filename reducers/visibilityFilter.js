// action作用于store
// reducer根据store响应
// store是唯一的
// store包括了完整的state
// state完全可预测
// store根据reducer生成

const visibilityFilter = (state="SHOW_ALL",action) => {
	switch(action.type){
		case 'SET_VISIBILITY_FILTER':
		 	return action.visibilityFilter
		default: 
			return state
	}
}

export default visibilityFilter