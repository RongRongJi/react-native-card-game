import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScene from './scene/mainscene/mainScene';
import PlotScene from './scene/plotscene/plotScene';
import DialogScene from './scene/dialog/dialog';
import CardBagScene from './scene/cardscene/cardbag';

const MainStack = createStackNavigator({
  'main':{
    screen: MainScene,
  },
  'plot':{
    screen: PlotScene,
  },
  'dialog':{
    screen: DialogScene,
  },
  'cardbag':{
    screen: CardBagScene,
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