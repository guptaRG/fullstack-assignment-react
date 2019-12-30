import React from "react";
import { InfoCardProps } from "../types";
import { Card } from "react-bootstrap";

class InfoCard extends React.Component<InfoCardProps> {
    render() {
        console.log(this.props)
        return (
            <Card className="text-center" {...this.props.theme.card}>
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                {this.props.subTitle ? this.props.subTitle : null}
                </Card.Subtitle>
                <Card.Text>{this.props.text}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default InfoCard
