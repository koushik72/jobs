import React, {Component} from 'react';
import {
    View,
    Text,
    Platform
} from 'react-native';
import {Button} from 'react-native-elements';

class ReviewScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Review',
            headerRight: (
                <Button
                    onPress={() => navigation.navigate('settings')}
                    title="Settings"
                    color="red"
                />
            )
        };
    };

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;