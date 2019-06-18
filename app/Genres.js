import React, { Component } from 'react';
import { View} from 'react-native';
import { Container, Text,Button } from "native-base";

export default class Genres extends Component {
    render() {
        return (
            <Container>
                <Text style={styles.headerText}>GENRES</Text>
                <Button style={styles.buttonStyle} onPress={()=>this.props.navigation.navigate("Pop")}>
                    <Text>POP MUSIC</Text>
                </Button>
                <Button success style={styles.buttonStyle} onPress={()=>this.props.navigation.navigate("Rock")}>
                    <Text>ROCK MUSIC</Text>
                </Button>
                <Button info style={styles.buttonStyle} onPress={()=>this.props.navigation.navigate("Country")}>
                    <Text>CONTRY MUSIC</Text>
                </Button>
                <Button warning style={styles.buttonStyle} onPress={()=>this.props.navigation.navigate("Intrumental")}>
                    <Text>INSTRUMENTAL MUSIC</Text>
                </Button>
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
        width:'100%',
        height: 150,
        marginTop: 20,
        alignSelf:'center',
    }
}