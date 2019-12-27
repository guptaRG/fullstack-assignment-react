import { HomeProps, HomeState, RootState } from "../types";
import { Row } from "react-bootstrap";
import React from "react";
import './css/Home.css';
import ClickableCard from "./ClickableCard";
import { connect } from "react-redux";
import toDoActions from "../actions/to_do";
import bucketActions from "../actions/bucket";

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

    componentDidMount = () => {
        this.props.getToDos();
        this.props.getBuckets();
    }

    render() {
        return (
            <Row id="home-body">
                <ClickableCard
                    toggleCard={this.toggleToDo}
                    title="ToDos"
                    theme={this.props.theme}
                    open={this.state.toDoOpen}
                    items={this.props.toDos}
                />
                <ClickableCard
                    title="Buckets"
                    toggleCard={this.toggleBucket}
                    theme={this.props.theme}
                    open={this.state.bucketOpen}
                    items={this.props.buckets}
                />
            </Row>
        )
    }
}

const actionCreators = {
    getToDos: toDoActions.getAll,
    getBuckets: bucketActions.getAll
}

const mapState = (state:RootState) => {
    const { toDos } = state.toDoReducer
    const { buckets } = state.bucketReducer
    return { toDos, buckets }
}

const connectedHomePage = connect(mapState, actionCreators)(Home);

export { connectedHomePage as Home }
