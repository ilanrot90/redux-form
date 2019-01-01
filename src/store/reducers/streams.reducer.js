import { CTREATE_STREAM, GET_STREAMS, SELECT_STREAM, UPDATE_STREAM, DELETE_STREAM } from '../actionTypes';

const initStreams = {
    streamsList: [],
    selectedStream: null
};

const streamsReducer = ( state = initStreams, action ) => {
    switch (action.type) {
        case SELECT_STREAM:
            return {...state, selectedStream: action.payload};

        case GET_STREAMS:
            return {...state, streamsList: action.payload};

        case CTREATE_STREAM:
            return {...state, streamsList: [...state.streamsList, action.payload]};

        case UPDATE_STREAM:
            return {...state, streamsList: [...action.payload]};

        case DELETE_STREAM:
            return {...state, streamsList: [...action.payload]};

        default:
            return state;
    }
}

export default streamsReducer;