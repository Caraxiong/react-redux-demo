import { connect } from "react-redux"
import Link from "../components/Link"
import { serVisibility } from "../actions"

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

const FilterLink = connet(
	mapStateToProps,
	mapDispatchToProps,
)(Link)