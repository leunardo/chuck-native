import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Joke from './screens/Joke';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Joke: {screen: Joke},
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;