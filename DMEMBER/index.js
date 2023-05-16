/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Screnn from './Screen/Screen';
import login from './login/login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => login);
