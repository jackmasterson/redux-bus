import React, { Component } from 'react';
import { connect } from 'react-redux';
import {grabData} from '../reducers/data';

const Data = (info) => (
    <ul>
        <li>Message: {info.message}</li>
        <li>Destination: {info.bus}</li>
        <li>Reported from: {info.reportedFrom}</li>
    </ul>
);

class Mapped extends Component {
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
            </div>
        )
    }
}

export default connect(
    (state) => ({...state, data: state.data.data}),
    {grabData}
)(Mapped);