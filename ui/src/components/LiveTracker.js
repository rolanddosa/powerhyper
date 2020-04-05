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
        // fetch('http://jsonplaceholder.typicode.com/users')
        fetch('http://localhost:8080/api/elexon')
            //read this https://www.golangprograms.com/display-json-data-in-reactjs.html
            .then(res.elexonResponseBody.responseList => json)
            .then(json => {
                this.setState({isLoaded: true, items: json,})
            })
            .catch(console.log)
    }

    render() {

        var {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="LiveTracker">
                    <ul>
                        {items.map(item => (
                            <li key={item.fuelType}>
                                Name: {item.recordType} | Email: {item.fuelType}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}