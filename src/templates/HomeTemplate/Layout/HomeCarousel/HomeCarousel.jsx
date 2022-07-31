import React from "react";
import { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";
import './HomeCarousel.css'

export default function HomeCarousel() {
  const { carouselArray } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();
  const contentStyle = {
    height: "670px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const renderCarousel = () => {
    return Array.from(carouselArray).reverse().map((item, index) => (
      <div key={index}>
        <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.3)'}}>
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.maBanner}
            />
          </div>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    dispatch(getCarouselAction())
  }, []);
  return (
    <div>
      <Carousel autoplay>{renderCarousel()}</Carousel>
    </div>
  );
}
