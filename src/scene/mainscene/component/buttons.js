/**
 * 按钮盘
 */

import React, {PureComponent} from 'react';
import {
    View,
    Image,   
    TouchableOpacity,
} from 'react-native';
import '../../../config/global.js'

export default class Buttons extends React.Component {

    constructor(props){
        super(props);
        
    }

    
    render() {
        return (
        <View style={{
            position:'absolute',
            width:this.props.componentWidth,
            height:this.props.componentHeight,
            left:this.props.componentLeft,
            top:this.props.componentTop,
        }} >
            <TouchableOpacity style={{
                position:'absolute',
                left:this.props.componentWidth/4*3,
                top:this.props.componentHeight/4,
            }}>
                <Image style={{
                    width: this.props.componentWidth/4,
                    height: this.props.componentHeight/4,
                }}
                    source={require('../../../img/mainscene/mapclick.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{
                position:'absolute',
                left:this.props.componentWidth/2,
                top:this.props.componentHeight/2,
            }}>
                <Image style={{
                    width: this.props.componentWidth/2,
                    height: this.props.componentHeight/2,
                }}
                    source={require('../../../img/mainscene/bagclick.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={{
                position:'absolute',
                left:this.props.componentWidth/4,
                top:this.props.componentHeight/4*3,
            }}
                onPress={()=>this.props.navigation.navigate('plot')}>
                <Image style={{
                    width: this.props.componentWidth/4,
                    height: this.props.componentHeight/4,
                }}
                    source={require('../../../img/mainscene/plotclick.png')}/>
            </TouchableOpacity>
        </View>
        );
    }
}

