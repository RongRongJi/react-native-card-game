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


export default class Card extends Component {

    constructor(props){
        super(props);    
        this.state={
            currentPostion:0,
        }
    }

    cards = require('../../../config/cardbag.json');

    _card(){
        return(
            <ImageBackground style={{
                position:'absolute',
                top:this.props.componentWidth*0.11,
                left:this.props.componentWidth*0.045,
                width:this.props.componentWidth*0.972,
                height:this.props.componentWidth*0.972/1752*726,
            }}
                source={this._cardSource()}>
                <Image style={{
                    position:'absolute',
                    width:this.props.componentWidth/7,
                    height:this.props.componentWidth/21,
                    top:this.props.componentWidth*0.02,
                    left:this.props.componentWidth*0.65,
                }}
                source={require('../../../img/cardbag/卡片情报（文字）.png')}
                />
            </ImageBackground>
        )
    }

    _cardSource(){
        var tmp = this.cards.cardbag[this.state.currentPostion]["rare"];
        if(tmp=="n")
            return require('../../../img/cardbag/卡片边框（N）.png');
        else if(tmp=="r")
            return require('../../../img/cardbag/卡片边框（R）.png');
        else if(tmp=="sr")
            return require('../../../img/cardbag/卡片边框（SR）.png');
        else if(tmp=="ssr")
            return require('../../../img/cardbag/卡片边框（SSR）.png');
    }

    _framework(){
        return(
            <Image style={{
                position:'absolute',
                top:this.props.componentWidth*0.117,
                left:this.props.componentWidth*0.045,
                width:this.props.componentWidth*0.972,
                height:this.props.componentWidth*0.972/1752*726,
            }}
            source={this._frameSource()}
            />
        )
    }

    _frameSource(){
        switch(this.state.currentPostion){
            case 0:
            return require('../../../img/cardbag/真·卡片边框（1）.png');
            case 1:
            return require('../../../img/cardbag/真·卡片边框（2）.png');
            case 2:
            return require('../../../img/cardbag/真·卡片边框（3）.png');
            case 3:
            return require('../../../img/cardbag/真·卡片边框（4）.png');
            case 4:
            return require('../../../img/cardbag/真·卡片边框（5）.png');
            case 5:
            return require('../../../img/cardbag/真·卡片边框（6）.png');
        }
    }

    _label(){
        return(
            <ImageBackground style={{
                position:'absolute',
                top:this.props.componentWidth*0.5,
                left:0,
                width:this.props.componentWidth*0.28,
                height:this.props.componentWidth*0.28/492*176,
            }}
            source={require('../../../img/cardbag/滑动条-首张（停留）.png')}
            >
            <TouchableOpacity style={{
                 position:'absolute',
                 top:this.props.componentWidth*0.005,
                 left:this.props.componentWidth*0.165,
                 width:this.props.componentWidth*0.09,
                 height:this.props.componentWidth*0.09,
            }} onPress={()=>{this.setState({currentPostion:0})}}>
                <ImageBackground style={{
                    width:this.props.componentWidth*0.09,
                    height:this.props.componentWidth*0.09,
                }}
                source={this._labelRareSource(0)}
                >
                    <Image style={{
                        position:'absolute',
                        top:this.props.componentWidth*0.015,
                        left:this.props.componentWidth*0.015,
                        width:this.props.componentWidth*0.06,
                        height:this.props.componentWidth*0.06,
                    }}
                        source={this._labelPropSource(0)}/>
                </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        )
    }

    _labelRareSource(num){
        var tmp = this.cards.cardbag[num]["rare"];
        if(tmp=="n")
            return require('../../../img/cardbag/滑动条预览（N）.png');
        else if(tmp=="r")
            return require('../../../img/cardbag/滑动条预览（R）.png');
        else if(tmp=="sr")
            return require('../../../img/cardbag/滑动条预览（SR）.png');
        else if(tmp=="ssr")
            return require('../../../img/cardbag/滑动条预览（SSR）.png');
    }

    _labelPropSource(num){
        var tmp = this.cards.cardbag[num]["property"];
        if(tmp=="火")
            return require('../../../img/cardbag/卡片属性（火）.png');
        else if(tmp=="雷")
            return require('../../../img/cardbag/卡片属性（雷）.png');
        else if(tmp=="水")
            return require('../../../img/cardbag/卡片属性（水）.png');
        else if(tmp=="中性")
            return require('../../../img/cardbag/卡片属性（中性）.png');
    }

    _label2(num){
        return(
            <ImageBackground style={{
                position:'absolute',
                top:this.props.componentWidth*0.508,
                left:this.props.componentWidth*0.185+this.props.componentWidth*0.156*num,
                width:this.props.componentWidth*0.28/492*427,
                height:this.props.componentWidth*0.28/492*427/492*176,
            }}
            source={require('../../../img/cardbag/滑动条-后续（停留）.png')}
            >
            <TouchableOpacity style={{
                    position:'absolute',
                    top:0,
                    left:this.props.componentWidth*0.138,
                    width:this.props.componentWidth*0.09,
                    height:this.props.componentWidth*0.09,
            }}
                onPress={()=>{this.setState({currentPostion:num+1})}}>
                    <ImageBackground style={{
                        width:this.props.componentWidth*0.09,
                        height:this.props.componentWidth*0.09,
                    }}
                    source={this._labelRareSource(num+1)}
                    >
                        <Image style={{
                            position:'absolute',
                            top:this.props.componentWidth*0.015,
                            left:this.props.componentWidth*0.015,
                            width:this.props.componentWidth*0.06,
                            height:this.props.componentWidth*0.06,
                        }}
                            source={this._labelPropSource(num+1)}/>
                    </ImageBackground>
                </TouchableOpacity>
            </ImageBackground>
        )
    }

    render() {
        return (
            <View style={{
                position:'absolute',
                top:this.props.componentTop,
                left:this.props.componentLeft,
            }}>
                {this._card()}
                {this._framework()}
                {this._label()}
                {this._label2(0)}
                {this._label2(1)}
                {this._label2(2)}
                {this._label2(3)}
                {this._label2(4)}
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