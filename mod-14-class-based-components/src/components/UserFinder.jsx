import { Component, Fragment } from 'react'

import Users from './Users'
import classes from './UserFinder.module.css'
import UsersContext from '../store/users-context'
import ErrorBoudary from './ErrorBoundary'

class UserFinder extends Component {
	static contextType = UsersContext

	constructor() {
		super()
		this.state = {
			filteredUsers: [],
			searchTerm: '',
		}
	}

	componentDidMount() {
		this.setState({ filteredUsers: this.context.users })
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: this.context.users.filter((user) =>
					user.name.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
			})
		}
	}

	searchChangeHandler = (event) => {
		this.setState({searchTerm: event.target.value})
	}

	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type='search' onChange={this.searchChangeHandler} />
				</div>
				<ErrorBoudary>
					<Users users={this.state.filteredUsers} />
				</ErrorBoudary>
			</Fragment>
		)
	}
}

export default UserFinder