import React from "react";
import { Link } from "react-router-dom";
import "../style/card.css";

const Card = ({ title, description, icon, btnText, path }) => {
  return (
    <div className="e-card playing">
      <div className="image"></div>

      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="infotop">
        <div className="icon" style={{ color: "#ff9704" }}>{icon}</div>
        <div className="font-semibold text-lg mt-2">{title}</div>
        <div className="name max-w-2xl px-2 text-sm mt-2">{description}</div>

        <div className="mt-6">
          <Link to={path}>
            <button className="btn-primary">{btnText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

