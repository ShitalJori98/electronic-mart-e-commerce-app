import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Banner extends Component {
    render() {
        return (
            <div>
                 <Carousel>
                <div className="h-50">
                    <img src="./assets/images/banner1.jpg" />
                    <p className="legend">Electronic Appliences</p>
                </div>
                <div>
                    <img src="./assets/images/banner2.jpg" />
                    <p className="legend">Kitchen Appliences</p>
                </div>
                <div>
                    <img src="./assets/images/banner5.jpg" />
                    <p className="legend">Mobiles</p>
                </div>
            </Carousel>
           </div>
        )
    }
}
