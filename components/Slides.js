import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const screenWidth = Dimensions.get('window').width;

export default class Slides extends Component {
    renderStyles() {
        return this.props.data.map((slide, i) => {
            return (
                <View key={i}
                      style={styles.slide}>
                    <Text style={styles.text}>{slide.text}</Text>
                    <Button title="Login"
                            onPress={this.props.login}/>
                </View>
            )
        });
    }

    render() {
        return (
            <ScrollView horizontal
                        pagingEnabled
                        style={{flex: 1}}>
                {this.renderStyles()}
            </ScrollView>
        );
    }
}

const styles = {
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth
    },
    text: {
        fontSize: 30
    }
};