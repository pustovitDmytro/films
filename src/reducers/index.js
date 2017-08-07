import { combineReducers } from 'redux';
import columns from './columns';
import cards from './cards';

const App = combineReducers({
  columns,
});

export default App;
