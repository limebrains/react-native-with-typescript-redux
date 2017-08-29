import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AccessToken, LoginButton} from 'react-native-fbsdk';
import {connect} from 'react-redux';
import {getAccessToken} from '../actions';
import {IState} from '../reducers/AuthReducer';
import {IFacebookResponse} from '../actions';

interface IProps extends IState {
  getAccessToken(data: IFacebookResponse): any;
}

class LoginForm extends React.Component<IProps> {
  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.textheader}>
            Welcome to the example app!
          </Text>
        </View>
        <View style={styles.bottom}>
          {this.renderButton()}
        </View>
      </View>
    );
  }

  private renderButton() {
    return <LoginButton
      readPermissions={['public_profile']}
      onLoginFinished={
        (error: any, result: any) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(
              (data: any) => {
                this.props.getAccessToken(data);
              },
            );
          }
        }
      }
      onLogoutFinished={() => console.log('logout.')}/>;
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textheader: {
    color: '#000',
    fontSize: 50,
    textAlign: 'center',
  },
  top: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default connect(null, {getAccessToken})(LoginForm);
