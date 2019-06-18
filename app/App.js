import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import Login from './Login';
import Pop from "./Pop";
import Genres from './Genres'; 
import Rock from './Rock';
import Country from './Country';
import Intrumental from './Instrumental';
import Player from './Player';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';


const Appnavigator = createStackNavigator({
    Login:{
        screen: Login,
    },
    Pop: {
        screen: Pop,
        navigationOptions:{
            header: null
        }
    },
    Rock: {
        screen: Rock,
        navigationOptions:{
            header: null
        }
    },
    Country: {
        screen: Country,
        navigationOptions:{
            header: null
        }
    },
    Intrumental: {
        screen: Intrumental,
        navigationOptions:{
            header: null
        }
    },
    Genres: {
        screen: Genres,
        navigationOptions:{
            header: null
        }
    }
})

const AppNavContainer = createAppContainer(Appnavigator);


export default class App extends Component {
    componentDidMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyA4btXH_FLxMXr5YeaEucYiNEpbgBjbxtQ",
            authDomain: "musicapp-4d135.firebaseapp.com",
            databaseURL: "https://musicapp-4d135.firebaseio.com",
            projectId: "musicapp-4d135",
            storageBucket: "musicapp-4d135.appspot.com",
            messagingSenderId: "255788535732",
            appId: "1:255788535732:web:48c5d5b8b70ec0d1"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return (
            <AppNavContainer></AppNavContainer>
        );
    }
}
