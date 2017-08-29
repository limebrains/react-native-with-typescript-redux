import {NavigationActions} from 'react-navigation';
import * as Redux from 'redux';
import {LOGIN_SUCCESS} from './types';

interface IFacebookResponse {
  accessToken: string;

}

export const getAccessToken = ({accessToken}: IFacebookResponse) => {
  return (dispatch: Redux.Dispatch<any>) => {
    dispatch(NavigationActions.navigate({routeName: 'Loading'}));
    loginSuccess(dispatch, accessToken)
  };
};

const loginSuccess = (dispatch: Redux.Dispatch<any>, key: string) => {
  dispatch({type: LOGIN_SUCCESS, payload: key});
  dispatch(NavigationActions.navigate({routeName: 'MainScreen'}));
};

export {IFacebookResponse};
