import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import streamsReducer from './streams.reducer';
import { reducer as formReducer } from "redux-form";

// const init = (state, action) => ({});

const rootReducer = combineReducers({
    auth: userReducer,
    form: formReducer,
    streams: streamsReducer
})

export default rootReducer