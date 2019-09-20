import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                first: '',
                last: ''
            },
            email: ''
        }
    }

    handleChangeName = nameType => ({ target: { value }}) => {
        const name = { ...this.state.name, [nameType]: value };
        this.setState({ name });
    }

    handleChangeEmail = ({ target: { value }}) => this.setState({ email: value });

    render() {
        const { name, email } = this.state;
        return (
            <div>
                <form>
                    <div>First Name</div>
                    <input type="text" name="firstName" value={name.first} onChange={this.handleChangeName('first')} />
                    <div>Last Name</div>
                    <input type="text" name="lastName" value={name.last} onChange={this.handleChangeName('last')} />
                    <div>Email</div>
                    <input type="text" name="email" value={email} onChange={this.handleChangeEmail} />
                </form>
            </div>     
        );
    }
};

export default App;
