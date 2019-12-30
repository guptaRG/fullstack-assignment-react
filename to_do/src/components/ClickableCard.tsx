import { ClickableCardProps } from "../types";
import React from "react";
import { Card, Collapse } from "react-bootstrap";
import InfoCard from "./InfoCard";
import './css/ClickableCard.css';

class ClickableCard extends React.Component<ClickableCardProps> {

    render() {
        return (
            <Card onClick={() => this.props.toggleCard()} aria-controls="card-items">
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Collapse in={this.props.open}>
                <Card.Text id="card-items">
                    {this.props.items.map(item => (
                        <InfoCard
                            theme={this.props.theme}
                            title={item.title ? item.title : item.name}
                            subTitle={item.bucketName ? "Bucket: " + item.bucketName : null}
                            text={item.description}
                            toDo={'done' in item}
                        />
                    ))}
                </Card.Text>
                </Collapse>
                </Card.Body>
            </Card>
        )
    }
}

export default ClickableCard
