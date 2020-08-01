import React from 'react'
import {Container,Card} from 'react-bootstrap'
const CartItem = (props) => {
    return (
      <div
        style={{
          width:"70%"
        }}
      >
        <Container>
          {props.item.map((item) => {
            return (
              <Card style={{ marginTop: "5%" }} key={item.id}>
                <Card.Img variant="top" src={`${item.img}`} />
                <Card.Body>
                  <Card.Text>
                    <div>
                      {item.price}
                      {<br></br>}
                      {item.companyName}
                      <h6 style={{ cursor: "pointer" }} data-id={item.id} onClick={props.remove}>
                        remove
                      </h6>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
      </div>
    );
}

export default CartItem
