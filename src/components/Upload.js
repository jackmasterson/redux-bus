import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addData} from '../reducers/data';

class Upload extends Component {
    handleSubmit(e) {
        let message = document.getElementById('message').value;
        let reportedFrom = document.getElementById('reported-from').value;
        let time = document.getElementById('time').value;
        let options = document.getElementsByTagName('option');
        let destination;
        for (let option of options) {
            if (option.selected) {
                destination = option.value;
            }
        }
        let info = {message, reportedFrom, destination, time}
        return info;
    }
    render() {
        return (
            <div>
                <form onSubmit={() => this.handleSubmit()}>
                    <input type="text" id="message" placeholder="your update here" />
                    <input type="text" id="reported-from" placeholder="where are you now?" />
                    <input type="text" id="time" placeholder="about what time is it?" />
                    <select name="reported">
                        <option value="bus-destination">select bus destination</option>
                        <option value="port-authority">port authority</option>
                        <option value="monmouth">monmouth</option>
                        <option value="red-bank">red bank</option>
                        <option value="pnc">pnc</option>
                    </select>
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