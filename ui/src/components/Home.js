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
                <br/>
                <p>Power Hyper has the mission to support all activities contributing
                    to the
                    transition to a world running on renewable energy. It provides analysis and
                    suggestions on steps to reach that goal.
                </p>
                <br/>
                <br/>
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
                <br/>
            </div>
        )
    }
}