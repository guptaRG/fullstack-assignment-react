import { HomeProps, HomeState } from "../types";
import { Row } from "react-bootstrap";
import React from "react";
import './css/Home.css';
import ClickableCard from "./ClickableCard";

class Home extends React.Component<HomeProps, HomeState> {

    constructor(props:HomeProps) {
        super(props)
        this.state = {
            toDoOpen: false,
            bucketOpen: false
        }
    }
    

    toggleToDo = () => {
        this.setState({toDoOpen: !this.state.toDoOpen} as HomeState)
    }

    toggleBucket = () => {
        this.setState({bucketOpen: !this.state.bucketOpen} as HomeState)
    }

    render() {
        return (
            <Row id="home-body">
                <ClickableCard
                    toggleCard={this.toggleToDo}
                    title="ToDos"
                    theme={this.props.theme}
                    open={this.state.toDoOpen}
                />
                <ClickableCard
                    title="Buckets"
                    toggleCard={this.toggleBucket}
                    theme={this.props.theme}
                    open={this.state.bucketOpen}
                />
            </Row>
        )
    }
}

export default Home
