import {LOGIN_SUCCESS} from '../actions/types';

interface IAction {
  type: string;
  payload: {};
}

interface IAuth {
  access_token: string;
}

interface IState {
  access_token: string;
  auth: IAuth;
  baseRouting: object;
}

const INITIAL_STATE = {access_token: '', auth: null, baseRouting: null};

export default (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, ...INITIAL_STATE, access_token: action.payload};
    default:
      return state;
  }
};

export {IState};
