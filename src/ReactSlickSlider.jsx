import React from 'react'
import Slider from "react-slick";
import TransportModes from './ReactMuiCheckbox';
import DestinationMode from './ReactMuiCheckBoxPlaces';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='p-5 bg-secondary' >
            <h2> Single Item</h2>
            <Slider {...settings}>
                <div>
                    <TransportModes />
                </div>
                <div>
                    {/* <h3>2</h3> */}
                    <DestinationMode />
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default ReactSlickSlider