import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScene from './scene/mainscene/mainScene';
import PlotScene from './scene/plotscene/plotScene';

const MainStack = createStackNavigator({
  'main':{
    screen: MainScene,
  },
  'plot':{
    screen: PlotScene,
  },
},
{
  headerMode:'none',
});

const AppNavigator = createStackNavigator({
  'init': {
    screen: MainStack,
  },  
},
{
  headerMode:'none',
}
);

export default createAppContainer(AppNavigator);