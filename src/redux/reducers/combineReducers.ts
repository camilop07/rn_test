/** Import Redux **/
import {combineReducers} from 'redux';

/** Import Slices **/
import {bankReducer} from '../states';

export default combineReducers({
  bank: bankReducer,
});
