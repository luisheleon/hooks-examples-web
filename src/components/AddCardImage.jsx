import React from "react";
import frontCard from "../assets/image/cardvisabluelg.svg";

const AddCardImage = () => {
  return (
    <div className="addCard-image-container">
      <div className="addcard-image-bin"> 3435 2342 3432 2346 </div>
      <div className="addcard-image-name"> Luis Miguel Hernandez</div>
      <img src={frontCard} alt="frontCard"></img>
    </div>
  );
};

export default AddCardImage;
