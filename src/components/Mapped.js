import React, { Component } from 'react';
import { connect } from 'react-redux';
import {grabData, applyFilter} from '../reducers/data';

const Data = (info) => (
    <ul>
        <li>Time: {info.time}</li>
        <li>Message: {info.message}</li>
        <li>Destination: {info.destination}</li>
        <li>Reported from: {info.reportedFrom}</li>
    </ul>
);

const Filter = () => (
    <div>
        <select name="filter">
            <option value="bus-destination">select bus destination</option>
            <option value="port-authority">port authority</option>
            <option value="monmouth">monmouth</option>
            <option value="red-bank">red bank</option>
            <option value="pnc">pnc</option>
        </select>
    </div>
)

class Mapped extends Component {
    handleSubmit() {
        let options = document.getElementsByTagName('option');
        for (let option of options) {
            if (option.selected && option.value !== 'bus-destination') {
                this.props.applyFilter(option.value);
            }
        }
    }
    componentWillMount() {
        let t = this.props.grabData();
        return t;
    }
    render() {
        return (
            <div>
                {this.props.data.map(info => 
                    <Data key={info.id} {...info} />
            )}
            <Filter />
            <button onClick={() => this.handleSubmit()}>Filter</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({...state, data: state.data.data}),
    {grabData, applyFilter}
)(Mapped);