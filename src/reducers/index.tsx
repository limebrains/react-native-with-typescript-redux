import {combineReducers} from 'redux';
import {BaseRouter, TabBar} from '../TabBarNavigation';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer,
  baseRouting: (state, action) => BaseRouter.router.getStateForAction(action, state),
  tabBarRouting: (state, action) => TabBar.router.getStateForAction(action, state),
});
