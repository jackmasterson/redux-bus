import React, { Component } from 'react';
import { connect } from 'react-redux';
import {grabData, applyFilter} from '../reducers/data';
import {Jumbotron, Button} from 'react-bootstrap';

const Data = (info) => {
    console.log('info: ', info);
    return (
            <ul>
                <li className="bullet" >Time: {info.time}</li>
                <li>Message: {info.message}</li>
                <li>Destination: {info.destination}</li>
                <li>Reported from: {info.reportedFrom}</li>
            </ul>
    )
}

const FilterOptions = () => (
    <div className="dropdown">
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
                this.props.applyFilter(option.value, this.props.data);
            }
        }
    }
    componentWillMount() {
        let t = this.props.grabData();
        return t;
    }
    render() {
        if (!this.props.filter) {
            return (
                <div>
                    <p>Scroll down for more</p>
                    <div className="status">
                        {this.props.data.map(info =>
                            <Data key={info.id} {...info} />
                        )}
                        <FilterOptions />
                    </div>
                    <button className="button" onClick={() => this.handleSubmit()}>Filter</button>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Scroll down for more</p>
                    <div className="status">
                        {this.props.filter.map(info =>
                            <Data key={info.id} {...info} />
                        )}
                        <FilterOptions />
                    </div>
                    <button className="button" onClick={() => this.handleSubmit()}>Filter</button>
                </div>
            )
        }
    }
}

export default connect(
    (state) => ({...state, data: state.data.data, filter: state.data.filter}),
    {grabData, applyFilter}
)(Mapped);