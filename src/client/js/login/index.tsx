import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./../../css/login.scss";
import { LoginContainer } from "./LoginContainer";

class Login extends React.Component {
    render() {
        return (
            <Router>
                <div id={"App"} className="App">
                    <Route path="/login" component={LoginContainer} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <Login />,
    document.getElementById("root")
);