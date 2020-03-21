import * as React from "react";
import './Common.css';
import InvestmentsImage from '../images/investments.png';
import WindImage from '../images/wind.jpg';
import SolarImage from '../images/solar.jpg';
import Carousel from 'react-bootstrap/Carousel'
import './Home.css';

export class Home extends React.Component {
    render() {
        return (
            <div className="my-5 ml-custom mr-custom">
                <h3>Friend With Earth</h3>
                <br/>
                <p>Friend With Earth has the mission to support all activities contributing
                    to the
                    transition to a world running on renewable energy. It is a place that provides analysis and
                    suggestions on reaching that goal in the shortest time.
                </p>
                <br/>
                <Carousel className={'carousel'}>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src={InvestmentsImage}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src={WindImage}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src={SolarImage}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}