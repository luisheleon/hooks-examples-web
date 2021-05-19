import React from "react";
import { Form, Button } from "react-bootstrap";

const AddCardForm = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="cardholder">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Name on card" />
        </Form.Group>

        <Form.Group controlId="bin">
          <Form.Label>Card number</Form.Label>
          <Form.Control type="text" placeholder="Card number" maxLength="16" />
        </Form.Group>

        <Form.Group controlId="bin">
          <Form.Label>cvv</Form.Label>
          <Form.Control type="text" placeholder="CVV" maxLength="3" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddCardForm;
