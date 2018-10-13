import {createBottomTabNavigator} from 'react-navigation';
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";

export default createBottomTabNavigator({
    welcome: {screen: WelcomeScreen},
    auth: {screen: AuthScreen}
});