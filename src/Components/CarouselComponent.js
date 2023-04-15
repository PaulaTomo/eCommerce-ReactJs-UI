import OwlCarousel from "react-owl-carousel";

import {Link} from "react-router-dom";
import React from "react";

function CarouselComponent(props){
    const autoplay = props.autoplay;
    const margin = props.margin;

    return(
        <div className='container-fluid m-0 p-0'>
            <OwlCarousel items={5} margin={props.margin} autoplay={props.autoplay}
                         autoplayTimeout={1000}
                         autoplayHoverPause={true}
                         loop={true}>
                <div><img className="img" src={props.image1}/></div>
                <div><img className="img" src={props.image2}/></div>
                <div><img className="img" src={props.image3}/></div>
                <div><img className="img" src={props.image4}/></div>
                <div><img className="img" src={props.image5}/></div>
                <div><img className="img" src={props.image6}/></div>
                <div><img className="img" src={props.image7}/></div>
            </OwlCarousel>

        </div>
    )
}

export default  CarouselComponent;
