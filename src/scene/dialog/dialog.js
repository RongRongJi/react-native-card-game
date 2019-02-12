/**
 * 剧情界面
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


export default class DialogScene extends Component {

    constructor(props){
        super(props);    
        deviceWidth = Dimensions.get('window').width; 
        deviceHeight = Dimensions.get('window').height; 
        this.state={
            content: this.message.chapter0[this.index]["content"],
            next: true,
            last: false,
        }
    }
    message=require('../../config/chapter0.json');

    index=0;
    _show(){
        return(
            <Text style={{
                position:'absolute',
                width:deviceWidth-40-40,
                height:deviceHeight/3+20,
                left:60,
                top:deviceHeight/3*2,
                fontSize:16,
            }}>{this.state.content}</Text>
        )
    }

   _skip(){
       return(
           <TouchableOpacity
                style={{
                    position:'absolute',
                    left: deviceWidth-deviceWidth/10,
                    top: deviceHeight/10,
                }}>
               <Image source={require('../../img/dialog/skip.png')}
                style={{
                    width: deviceWidth/20,
                    height: deviceWidth/20,
                }}/>
           </TouchableOpacity>
       )
   }

   _goNext(){
       this.setState({last:true});
        this.index++;
        if(this.index==8){
            this.setState({next:false});
        }
        this.setState({content:this.message.chapter0[this.index]["content"]});
   }

   _goLast(){
       this.setState({next:true});
       this.index--;
       if(this.index==0){
           this.setState({last:false});
       }
       this.setState({content:this.message.chapter0[this.index]["content"]});
   }

   _Dialog(){
       return(
           <View style={{
               position:'absolute',
               width:deviceWidth-40,
               height:deviceHeight/3,
               left:40,
               top:deviceHeight/3*2-20,
               backgroundColor:'rgba(255,255,255,0.5)',
               borderRadius:3,
           }}>

           </View>
       )
   }

   _Next(){
       return(
           <TouchableOpacity style={this.state.next?{
               position:'absolute',
               left:deviceWidth-deviceWidth/10,
               top:deviceHeight/3*2-deviceWidth/20,
           }:{
                position:'absolute',
                left:deviceWidth*3,
                top:deviceHeight*3,
           }} onPress={()=>this._goNext()}>
               <Image style={{
                   width: deviceWidth/20,
                   height: deviceWidth/20,
               }}
               source={require('../../img/dialog/下一步.png')}/>
           </TouchableOpacity>
       )
   }

   _Last(){
      return(
        <TouchableOpacity style={this.state.last?{
            position:'absolute',
            left:deviceWidth-deviceWidth/5,
            top:deviceHeight/3*2-deviceWidth/20,
        }:{
            position:'absolute',
                left:deviceWidth*3,
                top:deviceHeight*3,
        }} onPress={()=>this._goLast()}>
            <Image style={{
                width: deviceWidth/20,
                height: deviceWidth/20,
            }}
            source={require('../../img/dialog/上一步.png')}/>
        </TouchableOpacity>
      )
   }

   _StartGame(){
       return(
           <TouchableOpacity style={!this.state.next?{
               position:'absolute',
               left:deviceWidth-deviceWidth/10,
               top:deviceHeight-deviceWidth/15,
           }:{
            position:'absolute',
            left:deviceWidth*3,
            top:deviceHeight*3,
           }}>
            <Image style={{
                width:deviceWidth/20,
                height:deviceWidth/20,
            }}
            source={require('../../img/dialog/开始.png')}/>
           </TouchableOpacity>
       )
   }

    render() {
        return (
        <ImageBackground style={{flex:1}}
            source={require('../../img/plot/background.png')} >
            {this._skip()}
            {this._Dialog()}
            {this._Next()}
            {this._Last()}
            {this._show()}
            {this._StartGame()}
        </ImageBackground>
        );
    }
}
