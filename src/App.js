import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
         firebase.initializeApp({
             apiKey: 'AIzaSyDPwkEdRNQIg1iVXXza2BQ_6xObvtNfu5o',
             authDomain: 'reactuserauth-60f84.firebaseapp.com',
             databaseURL: 'https://reactuserauth-60f84.firebaseio.com',
             projectId: 'reactuserauth-60f84',
            storageBucket: 'reactuserauth-60f84.appspot.com',
             messagingSenderId: '991440931496'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
          });

    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}> 
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText = 'Authentication' />
                { this.renderContent() }
            </View>
        );
    }
}

export default App;