//js拡張
import { combineReducers } from 'redux';

//reducer取込
import stateData from './DataReducer';

//reducer集約
const reducer = combineReducers({
  stateData,
});

export default reducer;