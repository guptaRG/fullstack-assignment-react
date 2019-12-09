import { ClickableCardProps } from "../types";
import React from "react";
import { Card } from "react-bootstrap";
import './css/ClickableCard.css';

class ClickableCard extends React.Component<ClickableCardProps> {

    render() {
        return (
            <Card onClick={() => this.props.toggleCard()}>
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}

export default ClickableCard
