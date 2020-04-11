import React, {useRef, useEffect, useState} from "react";
import {select, axisBottom, axisRight, scaleLinear, scaleBand} from "d3";
import "./LiveTracker.css";
import rd3 from 'react-d3-library'
import {Bar} from "react-chartjs-2";

// https://www.createwithdata.com/react-chartjs-dashboard/
// https://github.com/jerairrest/react-chartjs-2/blob/master/example/src/components/bar.js

export class LiveTracker extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items: [],
    //         isLoaded: false,
    //     };
    // };
    //
    // componentDidMount() {
    //     fetch('http://localhost:8080/api/elexon')
    //         .then(response => response.json())
    //         .then(json => {
    //             this.setState({
    //                 items: json,
    //                 isLoaded: true,
    //             })
    //         })
    //     // .catch(console.log)
    // }
    //
    //
    // render() {
    //     let isLoaded, items;
    //     ({isLoaded, items} = this.state);
    //     if (!isLoaded) {
    //         return <div>Loading...</div>
    //     } else {
    //         let labels = items.elexonResponseBody.responseList.items.map(function (e) {
    //             return e.fuelType;
    //         });
    //         // console.log(labels);
    //
    //         let mydata = items.elexonResponseBody.responseList.items.map(function (e) {
    //             return e.currentMW;
    //         });
    //         // console.log(data);
    //
    //         let data = [];
    //         for (let i = 0; i < 15; i++) {
    //             data.push({
    //                 // label: labels[i],
    //                 label: "a",
    //                 value: i
    //                 // value: mydata[i]
    //             })
    //         }
    //         console.log(data);
    //         return (
    //             <div className="sub chart-wrapper">
    //                 BarChart here:
    //                 <BarChart
    //                     data={data}
    //                     title={"Power Chart"}
    //                     color="#70CAD1"
    //                 />
    //             </div>
    //         );
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    };

    getElexonApi() {
        if (window.location.hostname.includes("localhost")) {
            return window.location.protocol + "//" + window.location.hostname + ":8080/api/elexon";
        } else {
            return window.location.protocol + "//" + window.location.hostname + "/api/elexon";
        }
    }

    componentDidMount() {
        fetch(this.getElexonApi())
            .then(response => response.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            })
        // .catch(console.log)
    }


    render() {
        let isLoaded, items;
        ({isLoaded, items} = this.state);
        if (!isLoaded) {
            return <div>
                <br/>
                <br/>
                <br/>
                <br/>
                Loading...
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        } else {
            let mylabels = items.elexonResponseBody.responseList.items.map(function (e) {
                return e.fuelType;
            });
            // console.log(labels);

            let mydata = items.elexonResponseBody.responseList.items.map(function (e) {
                return e.currentMW;
            });
            // console.log(data);

            const data = {
                labels: mylabels,
                datasets: [
                    {
                        label: 'Live Power Generation Tracker - United Kingdom',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: mydata
                    }
                ]
            };

            return (
                <div>
                    <Bar
                        data={data}
                        width={100}
                        height={500}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Power (Megawatt)'
                                    }
                                }],
                                xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Fuel Type'
                                    }
                                }]
                            }
                        }}
                    />
                    <a className={"alignRight"}>Source: Balancing Mechanism Reporting Service, ELEXON</a>
                </div>
            );
        }
    }


}


