import * as React from "react";

interface ILoginContainerState {
    username: string;
    password: string;
    isSubmitted: boolean;
}

export class LoginContainer extends React.Component<unknown, ILoginContainerState> {
    constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            password: "",
            isSubmitted: false
        }
    }
    render() {
        return (
            <div className="login-container">
                <form className="content">
                    Login Screen
                </form>
            </div>
        )
    }
}