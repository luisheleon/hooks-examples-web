import React from "react";
import "./AddCard.css";
import AddCardImage from "./AddCardImage";
import AddCardForm from "./AddCardForm";

const AddCard = () => {
  return (
    <div className="addcard">
      <div className="addCard-items addCard-form">
        <AddCardForm />
      </div>
      <div className="addCard-items addCard-image">
        <AddCardImage />
      </div>
    </div>
  );
};

export default AddCard;
