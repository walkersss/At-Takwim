import React, { Component } from "react";
import { View, Text, StyleSheet, Button, SafeAreaView, TextInput} from "react-native";
import{IconButton, Colors} from "react-native-paper";
//import {Styles} from './Styles';



export default class NewPost extends Component {
    state = {
        tasks: [],
        text: ""
      };
      changeTextHandler = text => {
    this.setState({ text: text });
  };

  render() {
    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
        <Text style={styles.title}>New Post</Text>
        </View>
        <View>
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          //onSubmitEditing={this.addTask} //addPost x buat lagi
          value={this.state.text}
          placeholder="What are you cooking today? :-D"
          placeholderTextColor = "#4d4949"
          borderWidth= "1"
          borderColor= "#FF9800"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        </View>
        <View>
        <Button onPress={this.addPost} color="#841584" title="Submit" /> 
        <IconButton icon='camera' color={Colors.black} size={20} onPress={() => console.log('Pressed')}/>
        </View>
      </View></SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0fc7f5',
    textAlignVertical: 'top',
  },
  title: {
    fontSize: 20,
  },
  textInput: {
    height: 180,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    //borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  }
});