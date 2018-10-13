import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {facebookLogin} from '../actions';
import {AsyncStorage} from 'react-native';

class AuthScreen extends Component {
    componentDidMount() {
        console.log('mounted');
        AsyncStorage.setItem('token', 'value');
        this.props.facebookLogin();
    }

    render() {
        return (
            <View/>
        );
    }
}

export default connect(null, {facebookLogin})(AuthScreen);