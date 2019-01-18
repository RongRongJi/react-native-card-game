/**
 * 主界面
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
import Level from './component/exp';
import Buttons from './component/buttons';


export default class MainScene extends PureComponent {

    constructor(props){
        super(props);
        deviceHeight=1280;
        deviceWidth=720;
    }

    componentWillMount() {
        Orientation.lockToLandscape();
    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
    }

    render() {
        deviceWidth = Dimensions.get('window').width; 
        deviceHeight = Dimensions.get('window').height; 
        return (
        <ImageBackground style={{flex:1}}
            source={require('../../img/mainscene/background.jpg')} >
            <Level componentWidth={deviceWidth/3}
                    componentHeight={deviceWidth/9}
                    componentLeft={10}
                    componentTop={10}
                    />
            <Buttons componentWidth={deviceWidth/3}
                    componentHeight={deviceWidth/3}
                    componentLeft={deviceWidth*0.7}
                    componentTop={deviceHeight*0.4}
                    navigation={this.props.navigation}
                    />

        </ImageBackground>
        );
    }
}
