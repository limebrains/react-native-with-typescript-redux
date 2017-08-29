import * as React from 'react';
import {Text, View} from 'react-native';

class LoadingScreen extends React.Component {
  public render() {
    return (
      <View style={{paddingTop: 30}}><Text>Loading...</Text></View>
    );
  }
}

export default LoadingScreen;
