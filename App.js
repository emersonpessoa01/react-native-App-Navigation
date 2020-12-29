import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

/**
 * Utilizando o conceito de navigators, presente
 * na lib react-navigation e react-navigation-stack
 */
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Detail: {screen: DetailScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
