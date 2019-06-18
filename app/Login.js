import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Item, Form, Input, Button, Label } from "native-base";
import * as firebase from 'firebase';

export default class Login extends Component {

    state={
        email:'',
        password:''
    }
    signUpButtonPress = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(success => {
            console.log('sucess', success)
            this.props.navigation.navigate("Genres")
        })
        .catch(error => (
            console.log('error', error)
        ))
    }

    signInButtonPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => (
            this.props.navigation.navigate("Genres")
        ))
        .catch(error => (
            console.log('error', error)
        ))
    }

    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Text style={styles.headerText}>Login</Text>
                    <Form>
                        <Item fixedLabel>
                            <Label>Email</Label>
                            <Input autoCapitalize={'none'} autoCorrect={false} onChangeText={(email) => this.setState({email})}/>
                        </Item>
                        <Item fixedLabel last>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
                        </Item>
                        <Button success style={styles.buttonStyle} onPress={this.signInButtonPress}>
                            <Text>SIGN IN</Text>
                        </Button>
                        <Button style={styles.buttonStyle} onPress={this.signUpButtonPress}>
                            <Text>SIGN UP</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = {
    headerText: {
        marginTop: 50,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    buttonStyle:{
        width: '100%',
        marginTop: 20,
        alignSelf: 'center'
    }
}