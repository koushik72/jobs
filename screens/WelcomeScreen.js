import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Slides from "../components/Slides";

const slideData = [
    {'text': 'Welcome'},
    {'text': 'Use this to get a job'},
    {'text': 'Set your location bitches'}
];

class WelcomeScreen extends Component {
    login = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <Slides data={slideData} login={this.login}/>
        );
    }
}

export default WelcomeScreen;