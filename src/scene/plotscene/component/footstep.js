/**
 * 脚标
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
import '../../../config/global';

export default class FootStep extends Component {

    constructor(props){
        super(props);    
    }

    _getFooter(){
        footstep= [];
        for(var i=0;i<=global.totalChapter;i++){
            footstep.push(this._getFootStep(i));
        }
        return footstep;
    }

    _getFootStep(num){
        if(num==0)
            return(
                <Image key={num} style={{
                    position:'absolute',
                    left:-this.props.componentWidth/40,
                    top:this.props.componentWidth/70,
                    width:this.props.componentWidth/15,
                    height:this.props.componentWidth/15,
                }}
                source={require('../../../img/plot/footstep0.png')}/>
            )
        else if(num<global.currentChapter){
            return(
                <Image key={num}  style={{
                    position:'absolute',
                    left:(num-1)*this.props.componentWidth/6.5,
                    top:0,
                    width:this.props.componentWidth/5,
                    height:this.props.componentWidth/10,
                }}
                source={require('../../../img/plot/unlockfoot.png')}/>
            )
        }else{
            return(
                <Image key={num}  style={{
                    position:'absolute',
                    left:(num-1)*this.props.componentWidth/6.5,
                    top:0,
                    width:this.props.componentWidth/5,
                    height:this.props.componentWidth/10,
                }}
                source={require('../../../img/plot/lockfoot.png')}/>  
            )
        }
    }


    render() {
        return (
            <View style={{
                position:'absolute',
                top:this.props.componentTop,
                left:this.props.componentLeft,
            }}>
                {this._getFooter()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    num:{
        width:10,
        height:10,
        left: -10,
        top:10,
    },
  });