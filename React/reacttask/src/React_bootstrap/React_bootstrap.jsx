/*
React Bootstrap
React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from 
scratch as a true React component, without unneeded dependencies like jQuery.

Installation

npm install react-bootstrap bootstrap

use any component then import

import Button from 'react-bootstrap/Button';

*/

import React from 'react'
import { Card, Table ,Container ,Row ,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function React_bootstrap() {
    return (
        <div>
            <button type="button" class="btn">Basic</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-dark">Dark</button>
            <button type="button" class="btn btn-light">Light</button>
            <button type="button" class="btn btn-link">Link</button>

            <hr />

            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
            <hr />
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-light">Light</Button>
            <Button variant="outline-dark">Dark</Button>
            <hr />
            <Button variant="primary" size="lg">
                Large button
            </Button>

            <Button variant="primary" size="md">
                Small button
            </Button>

            <Button variant="primary" size="sm">
                Small button
            </Button>

            <hr />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_19aa5d43252%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_19aa5d43252%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <hr />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>

            <hr />

            <Container>
                <Row>
                    <Col>1 of 1</Col>
                </Row>

                <hr />
                <Row>
                    <Col xs={12} md={8}>
                        xs=12 md=8
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                </Row>

                {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                <Row>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                        xs=6 md=4
                    </Col>
                </Row>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={6}>xs=6</Col>
                    <Col xs={6}>xs=6</Col>
                </Row>
            </Container>
        </div>
    )
}

export default React_bootstrap