import { ClickableCardProps } from "../types";
import React from "react";
import { Card, Collapse } from "react-bootstrap";
import './css/ClickableCard.css';

class ClickableCard extends React.Component<ClickableCardProps> {

    render() {
        return (
            <Card onClick={() => this.props.toggleCard()} aria-controls="card-items">
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Collapse in={this.props.open}>
                <Card.Text id="card-items">
                    <ul>
                        {this.props.items.map(item => (
                            <li>
                                { item.description }
                            </li>
                        ))}
                    </ul>
                </Card.Text>
                </Collapse>
                </Card.Body>
            </Card>
        )
    }
}

export default ClickableCard
