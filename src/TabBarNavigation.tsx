import * as React from 'react';
import {
  addNavigationHelpers, StackNavigator, TabBarBottom,
  TabNavigator,
} from 'react-navigation';
import {connect} from 'react-redux';
import LoadingScreen from './components/LoadingScreen';
import LoginForm from './components/LoginForm';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import {IState} from './reducers/AuthReducer';

const TabBar = TabNavigator({
  Screen1: {screen: Screen1},
  Screen2: {screen: Screen2},
}, {
  animationEnabled: true,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
});

const BaseRouter = StackNavigator({
  Login: {screen: LoginForm},
  Loading: {screen: LoadingScreen},
  MainScreen: {screen: TabBar},
}, {
  headerMode: 'none',
});

class TabBarNavigation extends React.Component<any, IState> {
  public render() {
    const {dispatch, navigationState} = this.props;
    return (
      <BaseRouter
        navigation={addNavigationHelpers({dispatch, state: navigationState})
        }
      />
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    navigationState: state.baseRouting,
  };
};

export {BaseRouter};
export {TabBar};
export default connect(mapStateToProps)(TabBarNavigation);
