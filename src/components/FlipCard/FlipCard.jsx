import React from "react";
import "./FlipCard.css";
import { history } from "../../App";

export default function FlipCard(props) {
    const {movie}= props;
    const movieStyle={
        height: "300px",
        width: "300px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ ...movieStyle, backgroundImage: `url(${movie.hinhAnh})` }}>
          <img
            src={movie.hinhAnh}
            alt={movie.maPhim}
            style={{ width: 300, height: 300 , opacity: 0}}
          />
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect &amp; Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
      <div  onClick={()=>{history.push(`/detail/${movie.maPhim}`)}}
            className="py-2 text-center button"> MORE...</div>
    </div>
  );
}
