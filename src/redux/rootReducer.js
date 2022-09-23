import { combineReducers } from 'redux';
import mediaReducer from './Media/reducer';

const rootReducer = combineReducers({
    media: mediaReducer,
});

export default rootReducer;