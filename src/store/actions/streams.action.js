import  streams from '../../services/api.service';
import { CTREATE_STREAM, GET_STREAMS, SELECT_STREAM, UPDATE_STREAM, DELETE_STREAM } from '../actionTypes';

export const getStreams = () => async dispatch => {
    const { data } = await streams.get('/streams');

    dispatch({
        type: GET_STREAMS,
        payload: data
    })
}

export const selectStream = streamId => async dispatch => {
    const { data } = await streams.get(`/streams/${streamId}`);

    dispatch({
        type: SELECT_STREAM,
        payload: data
    })
}

export const createStream = formValues => async dispatch => {   
    const { data } = await streams.post('/streams', formValues);

    dispatch({
        type: CTREATE_STREAM,
        payload: data
    })
}

export const updateStream = (streamId, formValues) => async (dispatch, prevState) => {
    const { data } = await streams.put(`/streams/${streamId}`, formValues);
    const updatedStreams = prevState().streams.streamsList.map( stream => (stream.id === streamId) ? data : stream );

    dispatch({
        type: UPDATE_STREAM,
        payload: updatedStreams
    })
}

export const deleteStream = streamId => async (dispatch, prevState) => {
    await streams.delete(`/streams/${streamId}`);
    const updatedStreams = prevState().streams.streamsList.filter( stream => stream.id !== streamId );

    dispatch({
        type: DELETE_STREAM,
        payload: updatedStreams
    })
}