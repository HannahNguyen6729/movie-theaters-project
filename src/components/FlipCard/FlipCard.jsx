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
        <div className="flip-card-back flex items-center justify-center px-10">
          <div>
            <p className="text-lg font-bold">{movie.tenPhim}</p>
            <a href='#' className="btn__play"><i className="fa fa-play fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div  onClick={()=>{history.push(`/detail/${movie.maPhim}`)}}
            className="py-2 text-center button"> BOOK TICKETS</div>
    </div>
  );
}
