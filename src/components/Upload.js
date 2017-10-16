import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addData} from '../reducers/data';

class Upload extends Component {
    handleSubmit(e) {
        let message = document.getElementById('message').value;
        let bus = document.getElementById('bus').value;
        let reportedFrom = document.getElementById('reported-from').value;
        let info = {message, bus, reportedFrom}
        return info;
    }
    render() {
        return (
            <div>
                <form onSubmit={() => this.handleSubmit()}>
                    <input type="bus" id="bus" placeholder="bus destination" />
                    <input type="text" id="message" placeholder="your message here" />
                    <input type="text" id="reported-from" placeholder="where are you now?" />
                </form>
                <button onClick={() => this.props.addData(this.handleSubmit())}>Submit</button>
            </div>
        )
    }
}

export default connect(
    (state) => (state),
    {addData}
)(Upload);