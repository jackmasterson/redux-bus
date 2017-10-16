import { getData, postData } from '../lib/dataServices';
const initialData = {
    "data": [],
}

export const DATA_ADDED="DATA_ADDED";
export const DATA_SENT="DATA_SENT";

export const dataAdded = (val) => ({ type: DATA_ADDED, payload: val });
export const dataGrabbed = (val) => ({ type: DATA_SENT, payload: val });

export const addData = (data) => {
    return (dispatch) => {
        postData(data);
        dispatch(dataAdded(data))
    }
}

export const grabData = (data) => {
    return (dispatch) => {
        getData()
            .then(data => dispatch(dataGrabbed(data)));
    }
}

export default (state = initialData, action) => {
    switch (action.type) {
        case DATA_ADDED:
            return {...state, data: action.payload}
        case DATA_SENT: 
            return {...state, data: action.payload}
        default:
            return state;
    }
};