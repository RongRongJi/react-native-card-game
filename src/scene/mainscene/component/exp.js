/**
 * 等级条
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
import '../../../config/global.js'

export default class Level extends React.Component {
    

    constructor(props){
        super(props);

    }

    _getLevel(num){
        var b = num %10;
        var a = (num-b)/10;
        return(
            <View style={{
                flexDirection:'row',
                left:this.props.componentWidth*0.43,
                top:this.props.componentHeight*0.35,
              }}>
                {this._getNum(1,a)}
                {this._getNum(2,b)}
            </View>
        )
    }

    _getNum(order,num){
        switch(num){
            case 0:
            if(order==1) return;
            return (<Image style={styles.num} source={require('../../../img/mainscene/0.png')}/>);
            case 1:
            return (<Image style={styles.num} source={require('../../../img/mainscene/1.png')}/>);
            case 2:
            return (<Image style={styles.num} source={require('../../../img/mainscene/2.png')}/>);
            case 3:
            return (<Image style={styles.num} source={require('../../../img/mainscene/3.png')}/>);
            case 4:
            return (<Image style={styles.num} source={require('../../../img/mainscene/4.png')}/>);
            case 5:
            return (<Image style={styles.num} source={require('../../../img/mainscene/5.png')}/>);
            case 6:
            return (<Image style={styles.num} source={require('../../../img/mainscene/6.png')}/>);
            case 7:
            return (<Image style={styles.num} source={require('../../../img/mainscene/7.png')}/>);
            case 8:
            return (<Image style={styles.num} source={require('../../../img/mainscene/8.png')}/>);
            case 9:
            return (<Image style={styles.num} source={require('../../../img/mainscene/9.png')}/>);
        }
    }

    render() {
        return (
        <ImageBackground style={{
            position:'absolute',
            width:this.props.componentWidth,
            height:this.props.componentHeight,
            left:this.props.componentLeft,
            top:this.props.componentTop,
        }}
            source={require('../../../img/mainscene/level.png')} >
           {this._getLevel(global.level)}

        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  num:{
      width:10,
      height:10,
  },
});
