/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    ImageBackground, 
    Image,   
    Dimensions,
} from 'react-native';
import Orientation from 'react-native-orientation';
export const deviceWidth = Dimensions.get('window').width;      //设备的宽度
export const deviceHeight = Dimensions.get('window').height;    //设备的高度

export default class MainScene extends PureComponent {
    

    componentWillMount() {
        Orientation.lockToLandscape();
    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
    }

    render() {
        return (
        <ImageBackground style={{flex:1}}
            source={require('../img/mainscene/background.jpg')} >
            <Image style={styles.mapbtn}
                source={require('../img/mainscene/mapclick.png')}/>
            <Image style={styles.bagbtn}
                source={require('../img/mainscene/bagclick.png')}/>
            <Image style={styles.plotbtn}
                source={require('../img/mainscene/plotclick.png')}/>

        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  mapbtn:{
      position: 'absolute',
      width: deviceWidth/10,
      height: deviceWidth/10,
      left: deviceWidth / 20 * 19,
      top: deviceHeight / 9 * 5,
  },
  bagbtn:{
    position: 'absolute',
    width: deviceWidth/5,
    height: deviceWidth/5,
    left: deviceWidth / 20 * 19 - deviceWidth/10,
    top: deviceHeight / 9 * 5 + deviceWidth/15,
  },
  plotbtn:{
    position: 'absolute',
    width: deviceWidth/10,
    height: deviceWidth/10,
    left: deviceWidth / 20 * 19 - deviceWidth/10 - deviceWidth/15,
    top: deviceHeight / 9 * 5 + deviceWidth/15 + deviceWidth/10,
  }
});
