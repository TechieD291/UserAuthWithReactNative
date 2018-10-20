import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
         firebase.initializeApp({
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
                <LoginForm/>
            </View>
        );
    }
}

export default App;