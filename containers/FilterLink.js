//得到当前过滤器并渲染Link
import { connect } from "react-redux"
import Link from "../components/Link"
import { serVisibility } from "../actions/index.js"

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch,ownProps) => {
	return {
		onClick: () => {
			dispatch(serVisibility(ownProps.filter))
		}
	}
}

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Link)

export default FilterLink
