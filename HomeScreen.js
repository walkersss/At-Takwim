import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Constants } from "expo-camera";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          
        <Text style= {styles.paragraph}>
          MakanToday
          </Text>
        <Text style = {styles.paragraph}>
          Press "Post a new Recipe" to snap a picture of your food and the recipe </Text>
        
        </View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Camera')} title="Post New Recipe" />
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    textAlignVertical: 'top',
    paddingLeft: Constants.status,
    padding: 8
  },
  button: {
    flexDirection: 'row'  
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});