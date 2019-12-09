import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Homescreen from '../Home/Homescreen.js';
import Addscreen from '../Add/Addscreen.js';
import Editscreen from '../Edit/Editscreen.js';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Homescreen,
    },
    Add: {
      screen: Addscreen,
    },
    Edit: {
      screen: Editscreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1e88e5',
      },
      headerTintColor: '#6807f9',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(RootStack);
