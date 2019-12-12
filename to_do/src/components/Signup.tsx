import React, { Component } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { SignupProps, SignupState, RootState } from "../types";
import { connect } from "react-redux";
import userActions from "../actions/user";
import "./css/Signup.css";

class Signup extends Component<SignupProps, SignupState> {
    state = {
        username: '',
        password: '',
        submitted: false,
        firstName: '',
        lastName: '',
        email: ''
    }

    handleChange = (event:React.FormEvent) => {
        const target = event.currentTarget as any
        this.setState({ [target.getAttribute('id')]: target.value } as SignupState)
    }

    handleSubmit = (event:React.FormEvent) => {
        event.preventDefault()
        this.setState({ submitted: true })
        const { username, firstName, password, lastName, email } = this.state
        if (username && password && firstName) {
            this.props.signup(firstName, lastName, username, email, password)
        }
    }

    render() {
        const { firstName, email, username, password, submitted } = this.state;

        return (
            <div className="Signup">
            <form onSubmit={this.handleSubmit}>
                <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    size="lg"
                    onChange={this.handleChange}
                    isInvalid={Boolean(submitted && !firstName)}
                />
                <Form.Control.Feedback type="invalid">
                  First name is required
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    size="lg"
                    onChange={this.handleChange}
                />
                </Form.Group>
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
                <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    size="lg"
                    onChange={this.handleChange}
                    isInvalid={Boolean(submitted && !email)}
                />
                <Form.Control.Feedback type="invalid">
                  Email is required
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    autoFocus
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
                    this.props.signingUp ?
                    <Spinner
                        animation="border"
                        {...this.props.theme.spinner}
                        as="span"
                        role="status"
                        aria-hidden="true"
                    /> :
                    "Signup"
                }
                </Button>
            </form>
            </div>
        )
    }
}

function mapState(state:RootState) {
    const { signingUp } = state.signup;
    return { signingUp };
}

const actionCreators = {
    signup: userActions.signup,
};

const connectedSignupPage = connect(mapState, actionCreators)(Signup)
export {connectedSignupPage as Signup}
