import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth } from '../store/user'

/**
 * COMPONENT
 */
const Form = props => {
	const { name, displayName, handleSubmit, error } = props
	console.log('In form')
	return (
		<div className="login">
			<form onSubmit={handleSubmit} name={name}>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input name="email" type="text" className="form-control" />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input name="password" type="password" className="form-control" />
				</div>
				<div>
					<button type="submit" className="btn btn-primary">
						{displayName}
					</button>
				</div>
				{error && error.response && <div> {error.response.data} </div>}
			</form>
			<a href="/auth/google">
				{/* <button type="button" className="btn btn-primary"> */}
				{displayName} with Google
				{/* </button> */}
			</a>
		</div>
	)
}

const mapLogin = state => {
	return {
		name: 'login',
		displayName: 'Login',
		error: state.user.error
	}
}

const mapSignup = state => {
	return {
		name: 'signup',
		displayName: 'Sign Up',
		error: state.user.error
	}
}

const mapDispatch = dispatch => {
	return {
		handleSubmit(evt) {
			evt.preventDefault()
			const formName = evt.target.name
			const email = evt.target.email.value
			const password = evt.target.password.value
			dispatch(auth(email, password, formName))
		}
	}
}

export const Login = connect(
	mapLogin,
	mapDispatch
)(Form)
export const Signup = connect(
	mapSignup,
	mapDispatch
)(Form)

/**
 * PROP TYPES
 */
Form.propTypes = {
	name: PropTypes.string.isRequired,
	displayName: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	error: PropTypes.object
}
