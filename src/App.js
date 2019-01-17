import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScene from './scene/mainScene';


const AppNavigator = createStackNavigator({
  'main': {
    screen: MainScene,
  },  
},
{
  headerMode:'none',
}
);

export default createAppContainer(AppNavigator);