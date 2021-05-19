import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import AddCard from "./components/AddCard";

function App() {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Novopayment</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/profile">Perfil</Nav.Link>
          <Nav.Link href="/addCard">Agregar Tarjeta</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-danger">Logout</Button>
        </Form>
      </Navbar>
      <Switch>
        <Route path="/addCard">
          <AddCard />{" "}
        </Route>
        <Route path="/users">{/* <Users /> */}</Route>
      </Switch>
    </Router>
  );
}

export default App;
