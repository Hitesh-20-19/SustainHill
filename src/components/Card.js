import React from 'react'
import {Card,Container,Button,Row,Col} from 'react-bootstrap'

const CarD = (props) => {
    return (
      <div >
        <Container>
          <Row>
            {props.items.map((item) => {
              return (
                <Col md={4} xs={12}>
                  <Card key={item.id} style={{ marginTop: "8%" }}>
                    <Card.Img variant="top" src={`${item.img}`} />
                    <Card.Body>
                      <Card.Title>{item.modelName}</Card.Title>
                      <Card.Text>{item.price}</Card.Text>
                      <Button
                        style={{ paddingLeft: "10%", paddingRight: "10%" }}
                        data-id={item.id}
                        onClick={props.handleClick}
                      >
                        Add
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
}

export default CarD
