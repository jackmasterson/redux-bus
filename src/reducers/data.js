import { getData, postData } from '../lib/dataServices';
const initialData = {
    "data": [],
}

export const DATA_ADDED="DATA_ADDED";
export const DATA_SENT="DATA_SENT";
export const APPLY_FILTER="APPLY_FILTER";

export const dataAdded = (val) => ({ type: DATA_ADDED, payload: val });
export const dataGrabbed = (val) => ({ type: DATA_SENT, payload: val });
export const filterApplied = (val) => ({ type: APPLY_FILTER, payload: val });

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

export const applyFilter = (option, data) => {
    let filtered = [];
    for (let res of data) {
        if (res.destination === option) {
            filtered.push(res);
        }
    }
    return (dispatch) => {
        dispatch(filterApplied(filtered));
    }
}

export default (state = initialData, action) => {
    switch (action.type) {
        case DATA_ADDED:
            return {...state, data: action.payload, filter: action.payload}
        case DATA_SENT: 
            return {...state, data: action.payload, filter: action.payload}
        case APPLY_FILTER:
            return {...state, filter: action.payload}
        default:
            return state;
    }
};