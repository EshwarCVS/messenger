import React from "react";
import "./styles.css";

/**
* @author Eshwar CVS
* @function Card
**/

const Card = (props) => {
  return (
    <div className="card">
      {props.children}
    </div>
  );
};

export default Card;
