/**
 * 主界面
 */

import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    ImageBackground, 
    Image,   
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Orientation from 'react-native-orientation';


export default class PlotScene extends Component {

    constructor(props){
        super(props);    
        deviceWidth = Dimensions.get('window').width; 
        deviceHeight = Dimensions.get('window').height; 
    }

    _goBack(){
        return(
            <TouchableOpacity style={{
                position:'absolute',
                left: 10,
                top: 10,
            }}
                onPress={()=>this.props.navigation.goBack()}>
                <Image style={{
                    width: deviceWidth/10,
                    height: deviceWidth/10,
                }}
                    source={require('../../img/plot/返回按键.png')}/>
            </TouchableOpacity>
        )
    }

    render() {
        return (
        <ImageBackground style={{flex:1}}
            source={require('../../img/plot/background.png')} >
            {this._goBack()}
            <Image style={{
                position:'absolute',
                left: deviceWidth/2-deviceWidth/14,
                top: 10,
                width:deviceWidth/7*1.5,
                height:deviceWidth/21*1.5,
            }}
                source={require('../../img/plot/剧情回顾.png')} />
        </ImageBackground>
        );
    }
}
