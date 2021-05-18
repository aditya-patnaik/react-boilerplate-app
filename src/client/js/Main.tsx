import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

interface MainProps {}

class Main extends React.Component<MainProps> {
    constructor(props: MainProps) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="main-container">
                    Index Screen
                </div>
            </Router>
        )
    }

}

export default Main;
