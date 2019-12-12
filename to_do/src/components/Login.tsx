import React, { Component } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { LoginState, RootState, LoginProps } from "../types";
import "./css/Login.css";
import userActions from '../actions/user';
import { connect } from 'react-redux';

class Login extends Component<LoginProps, LoginState> {

    constructor(props:LoginProps) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    handleChange = (event:React.FormEvent) => {
        const target = event.currentTarget as any
        this.setState({ [target.getAttribute('id')]: target.value } as LoginState)
    }

    handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        this.setState({ submitted: true })
        const { username, password } = this.state
        if (username && password) {
            this.props.login(username, password)
        }
    }
    
    render() {
        const { username, password, submitted } = this.state;

        return (
            <div className="Login">
            <form onSubmit={this.handleSubmit}>
                <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    size="lg"
                    onChange={this.handleChange}
                    isInvalid={Boolean(submitted && !username)}
                />
                <Form.Control.Feedback type="invalid">
                  Username is required
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    size="lg"
                    onChange={this.handleChange}
                    isInvalid={Boolean(submitted && !password)}
                />
                <Form.Control.Feedback type="invalid">
                  Password is required
                </Form.Control.Feedback>
                </Form.Group>
                <Button block {...this.props.theme.button} type="submit">
                {
                    this.props.loggingIn ?
                    <Spinner
                        animation="border"
                        {...this.props.theme.spinner}
                        as="span"
                        role="status"
                        aria-hidden="true"
                    /> :
                    "Login"
                }
                </Button>
            </form>
            </div>
        )
    }
}

// Adds a prop loggingIn to Login component which depends on the reducer authentication
const mapState = (state:RootState) => {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };
