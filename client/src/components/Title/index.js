import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Title = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">React Google Book Search</h1>
                    <h3 className="lead">Search for and Save Boos of Interst .</h3>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Title;