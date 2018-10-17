import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Firebase from 'firebase';
import {Header} from './components/common';

class App extends Component {

    componentWillMount() {
        Firebase.initializeApp({
            apiKey: 'AIzaSyDPwkEdRNQIg1iVXXza2BQ_6xObvtNfu5o',
            authDomain: 'reactuserauth-60f84.firebaseapp.com',
            databaseURL: 'https://reactuserauth-60f84.firebaseio.com',
            projectId: 'reactuserauth-60f84',
            storageBucket: 'reactuserauth-60f84.appspot.com',
            messagingSenderId: '991440931496'
          });
    }

    render() {
        return (
            <View>
                <Header headerText = 'Authentication' />
                <Text>An app</Text>
            </View>
        );
    }
}

export default App;