import { combineReducers } from 'redux';

import { authentication } from './auth.reducer';
import { marca } from './marca.reducer';


const rootReducer = combineReducers({
  authentication,
  marca
});

export default rootReducer;
