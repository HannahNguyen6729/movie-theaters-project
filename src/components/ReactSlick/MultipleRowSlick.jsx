import React, { Fragment, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID } from "../../util/settings/config";
import FlipCard from "../FlipCard/FlipCard";
import './MultipleRowSlick.css'
import { getMovieListAction } from "../../redux/actions/MovieListAction";
import { GET_COMING_MOVIES, GET_CURRENT_MOVIES } from "../../redux/types/types";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "white" }}
        onClick={onClick}
      />
    );
  }
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "white" }}
        onClick={onClick}
      />
    );
  }
  
export const MultipleRowSlick=() =>{
    const dispatch= useDispatch();
    const {movieList,currentMovie,comingMovie} = useSelector(state=> state.MovieListReducer);
    console.log(currentMovie)
    console.log('coming',comingMovie)
    useEffect(()=>{
        dispatch(getMovieListAction(GROUPID))
    },[])

    const renderMovieList = ()=>{
        // return movieList.slice(0,20).map((movie, index)=> (
          return movieList.filter((item)=> item.dangChieu === true).map((movie, index)=> (
            <div key={index}>
                <FlipCard movie={movie}/>
            </div>
        ))
    }
    const settings = {
        infinite: true,
        slidesToShow: 4,
        rows:2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
   
    const handleCurrentMovie = ()=>{
        dispatch({type: GET_CURRENT_MOVIES})
    }
    const handleNewMovie = ()=>{
        dispatch({type: GET_COMING_MOVIES})
    }
  return (
    <Fragment>
        <div className="mb-5">
            <button onClick={()=> handleCurrentMovie()}
                    style={{backgroundColor: currentMovie? 'rgb(202 138 4)': ''}}
                    type="button" 
                    className="px-8 py-4 ml-4 font-semibold rounded bg-neutral-800 text-white text-base mr-1 hover:underline decoration-white"> Now in the cinema</button>
            <button onClick={()=> handleNewMovie()}
                    style={{backgroundColor: comingMovie? 'rgb(202 138 4)': ''}}
                    type="button" 
                    className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-neutral-800 text-white text-base hover:underline decoration-white">Coming soon
	            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center  whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-yellow-600">New</span>
            </button>
        </div>
      <Slider {...settings} >
        {renderMovieList()}
      </Slider>
    </Fragment>
  );
}
