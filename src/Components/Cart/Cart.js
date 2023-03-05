import React from "react";
import "./Cart.css";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const { name, id, total, logo } = cart;

  return (
    <div className="cart-design">
      <img src={logo} alt=""></img>
      <h4>{name}</h4>
      <p>Total Quiz:{total}</p>
      <Link to={`/cart/${id}`}>
        <button className="button-72">
          Start Quiz
          <ArrowRightOnRectangleIcon className="icon-style" />{" "}
        </button>
      </Link>
    </div>
  );
};

export default Cart;
