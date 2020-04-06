import * as React from "react";

export class LiveTracker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/elexon')
            .then(response => response.json())
            .then(json => {
                this.setState({isLoaded: true, items: json,})
            })
            .catch(console.log)
    }

    render() {
        let isLoaded, items;
        ({isLoaded, items} = this.state);
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            console.log(items.elexonResponseBody.responseList.items);
            const responseBody = items.elexonResponseBody;
            console.log(responseBody);
            return (
                <div className="LiveTracker">
                    <ul>
                        {/*//implement https://observablehq.com/@d3/sortable-bar-chart*/}
                    {items.elexonResponseBody.responseList.items.map((item, index) => (
                    <li key={index}>{item.fuelType} - amount in MW - {item.currentMW}</li>
                    ))};
                    </ul>
                    a
                </div>
            );
        }
    }
}


