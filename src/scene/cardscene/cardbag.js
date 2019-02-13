/**
 * 卡片背包
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
import Card from './component/card';

export default class CardBagScene extends Component {

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
            source={require('../../img/cardbag/背景.png')} >
            {this._goBack()}
            <Image style={{
                position:'absolute',
                left: deviceWidth/2-deviceWidth/14,
                top: 10,
                width:deviceWidth/7*1.5,
                height:deviceWidth/21*1.5,
            }}
                source={require('../../img/cardbag/卡片背包（文字）.png')} />
            <Card 
                componentWidth={deviceWidth}
                componentHeight={deviceHeight}
                componentTop={0}
                componentLeft={0}
                navigation={this.props.navigation}/>
        </ImageBackground>
        );
    }
}
