/**
 * 篇章按钮
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

export default class Chapters extends Component {

    constructor(props){
        super(props);    
    }

    _getChapters(){
        array = [];
        for(var i=0;i<=global.totalChapter;i++){
            if(i%2==0)
                array.push(this._getEven(i));
            else
                array.push(this._getOdd(i));
        }
        return array;
    }

    inDialog(){
        this.props.navigation.navigate('dialog');
    }
    
    _getEven(num){
        if(global.currentChapter<num)
            return(
                <Image key={num} style={{
                    position:'absolute',
                    width:this.props.componentWidth/4.2,
                    height:this.props.componentWidth/4.2,
                    top:0,
                    left:num/2*(this.props.componentWidth/4.2),
                }}
                source={require('../../../img/plot/锁定章节.png')}/>
            )
        else if(global.currentChapter>num)
            return(<TouchableOpacity key={num} onPress={()=>this.inDialog()}
            style={{
                position:'absolute',
                width:this.props.componentWidth/4.2,
                height:this.props.componentWidth/4.2,
                top:0,
                left:num/2*(this.props.componentWidth/4.2),
            }}>
                <ImageBackground key={num}  style={{
                    width:this.props.componentWidth/4.2,
                    height:this.props.componentWidth/4.2,
                }}
                source={num==0?require('../../../img/plot/chapter0.png')
                        :require('../../../img/plot/偶数章节（后篇已解锁）.png')}>
                    <View style={{
                        flexDirection:'row',
                        position:'absolute',
                        left:this.props.componentWidth/8.4-this.props.componentWidth/14-this.props.componentWidth/50,
                        top:this.props.componentWidth/8.4-this.props.componentWidth/42,
                        justifyContent:'center',
                        }}>
                    <Image style={{
                        width:this.props.componentWidth/7,
                        height:this.props.componentWidth/21,
                    }}  source={require('../../../img/plot/CHAPTER..png')}/>
                    {this._getNum(num)}
                    </View>
                </ImageBackground>
                </TouchableOpacity>
            )
        else if(global.currentChapter==num)
            return(
                <TouchableOpacity key={num}  onPress={()=>this.inDialog()}
                style={{
                    position:'absolute',
                    width:this.props.componentWidth/4.2,
                    height:this.props.componentWidth/4.2,
                    top:0,
                    left:num/2*(this.props.componentWidth/4.2),
                }}>
                <ImageBackground key={num}
                 style={{
                    width:this.props.componentWidth/4.2,
                    height:this.props.componentWidth/4.2,
                }}
                source={num==0?require('../../../img/plot/CHAPTER.0（后篇未解锁）.png')
                        :require('../../../img/plot/偶数章节（后篇未解锁）.png')}>
                    <View style={{
                        flexDirection:'row',
                        position:'absolute',
                        left:this.props.componentWidth/8.4-this.props.componentWidth/14-this.props.componentWidth/50,
                        top:this.props.componentWidth/8.4-this.props.componentWidth/42,
                        justifyContent:'center',
                        }}>
                    <Image style={{
                        width:this.props.componentWidth/7,
                        height:this.props.componentWidth/21,
                    }}  source={require('../../../img/plot/CHAPTER..png')}/>
                    {this._getNum(num)}
                    </View>
                </ImageBackground>
                </TouchableOpacity>
            )
    }

    _getOdd(num){
        if(global.currentChapter<num)
            return(
                <Image key={num} style={{
                    position:'absolute',
                    width:this.props.componentWidth/4.2,
                    height:this.props.componentWidth/4.2,
                    top:this.props.componentWidth/8.4,
                    left:this.props.componentWidth/8.4+(num-1)/2*(this.props.componentWidth/4.2),
                }}
                source={require('../../../img/plot/锁定章节.png')}/>
            )
        else if(global.currentChapter>num)
            return(
                <TouchableOpacity key={num} onPress={()=>this.inDialog()}
                style={{
                    position:'absolute',
                    width:this.props.componentWidth/4.2,
                    height:this.props.componentWidth/4.2,
                    top:this.props.componentWidth/8.4,
                    left:this.props.componentWidth/8.4+(num-1)/2*(this.props.componentWidth/4.2),
                }}>
                <ImageBackground key={num} style={{
                    width:this.props.componentWidth/4.2,
                    height:this.props.componentWidth/4.2,
                }}
                source={require('../../../img/plot/奇数章节（后篇已解锁）.png')}>
                    <View style={{
                        flexDirection:'row',
                        position:'absolute',
                        left:this.props.componentWidth/8.4-this.props.componentWidth/14-this.props.componentWidth/50,
                        top:this.props.componentWidth/8.4-this.props.componentWidth/42,
                        justifyContent:'center',
                        }}>
                    <Image style={{
                        width:this.props.componentWidth/7,
                        height:this.props.componentWidth/21,
                    }}  source={require('../../../img/plot/CHAPTER..png')}/>
                    {this._getNum(num)}
                    </View>
                </ImageBackground>
                </TouchableOpacity>
            )
        else if(global.currentChapter==num)
            return(
                <TouchableOpacity key={num} onPress={()=>this.inDialog()}
                style={{
                    position:'absolute',
                    width:this.props.componentWidth/4.2,
                    height:this.props.componentWidth/4.2,
                    top:this.props.componentWidth/8.4,
                    left:this.props.componentWidth/8.4+(num-1)/2*(this.props.componentWidth/4.2),
                }}>
                <ImageBackground key={num} style={{
                    width:this.props.componentWidth/4.2,
                    height:this.props.componentWidth/4.2,
                }}
                source={require('../../../img/plot/奇数章节（后篇未解锁）.png')}>
                    <View style={{
                        flexDirection:'row',
                        position:'absolute',
                        left:this.props.componentWidth/8.4-this.props.componentWidth/14-this.props.componentWidth/50,
                        top:this.props.componentWidth/8.4-this.props.componentWidth/42,
                        justifyContent:'center',
                        }}>
                    <Image style={{
                        width:this.props.componentWidth/7,
                        height:this.props.componentWidth/21,
                    }}  source={require('../../../img/plot/CHAPTER..png')}/>
                    {this._getNum(num)}
                    </View>
                </ImageBackground>
                </TouchableOpacity>
            )
    }

    
    _getNum(num){
        switch(num){
            case 0:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/0.png')}/>);
            case 1:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/1.png')}/>);
            case 2:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/2.png')}/>);
            case 3:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/3.png')}/>);
            case 4:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/4.png')}/>);
            case 5:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/5.png')}/>);
            case 6:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/6.png')}/>);
            case 7:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/7.png')}/>);
            case 8:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/8.png')}/>);
            case 9:
            return (<Image style={{width:12,height:12,left:-this.props.componentWidth/60,top:this.props.componentWidth/80}} source={require('../../../img/mainscene/9.png')}/>);
        }
    }

    render() {
        return (
            <View style={{
                position:'absolute',
                top:this.props.componentTop,
                left:this.props.componentLeft,
            }}>
                {this._getChapters()}
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