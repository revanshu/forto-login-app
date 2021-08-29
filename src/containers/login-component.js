import React, {Component} from 'react';

export default class LoginComponent extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    clickHandler = () => {
        const {email, password} = this.state;
        console.log('value', email, password);
    }

    emailChange = (event) => {
        this.setState({email: event.target.value});
    }

    passwordChange = (event) => {
        this.setState({password: event.target.value});
    }

    render(){
        const {email, password} = this.state;
        return (
            <div className="container">
                <div className="login">
                    <div className="left-side">

                    </div>
                    <div className="right-side">
                        <div className="image-circle"></div>
                        <input type="text" placeholder="Email" value={email} onChange={this.emailChange}/>
                        <input type="text" placeholder="Password" value={password} onChange={this.passwordChange}/>
                        <button type="button" onClick={this.clickHandler}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }

}