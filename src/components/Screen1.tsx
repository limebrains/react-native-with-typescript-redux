import * as React from 'react';
import {Text, View} from 'react-native';
import {IState} from '../reducers/AuthReducer';

class Screen1 extends React.Component<IState> {
  public render() {
    return (
      <View style={{paddingTop: 30}}>
        <Text>A sample tab</Text>
      </View>
    );
  }
}

export default Screen1;
