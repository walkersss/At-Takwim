import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform, SafeAreaView, Alert
} from "react-native";
import{IconButton, Colors} from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';

const isAndroid = Platform.OS == "android";
const viewPadding = 10;
 
export default class ProjectList extends Component {
  state = {
    posts: [],
    text: ""
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { posts, text } = prevState;
          return {
            posts: posts.concat({ key: posts.length, text: text }),
            text: ""
          };
        },
        () => posts.save(this.state.posts)
      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let posts = prevState.posts.slice();

        posts.splice(i, 1);

        return { posts: posts };
      },
      () => posts.save(this.state.posts)
    );
  };
  buttonAlert = i =>
    Alert.alert(
      "WAIT!",
      "Sure you want to delete post?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.deleteTask(i) }
      ],
      { cancelable: false });
  
  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewMargin: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewMargin: viewPadding })
    );

    posts.all(posts => this.setState({ posts: posts || [] }));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View
        style={[styles.container, { paddingBottom: this.state.viewMargin }]}
      >
      <View>
        <Text style={styles.tajuk}>MAKAN TODAY!</Text>
        <Text> Let's see what the community have for meal today</Text>
        </View>
        <FlatList
          style={styles.list}
          data={this.state.posts}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Button title="X" onPress={() => this.buttonAlert(index)} />
              </View>
              <View style={styles.hr} />
            </View>}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="What are you cooking today?"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <IconButton icon="myIcon" onPress={() => console.log('Pressed')}/>
      </View></SafeAreaView>
    );
  }
}

let posts = {
  convertToArrayOfObject(posts, callback) {
    return callback(
      posts ? posts.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(posts) {
    return posts.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("POSTS", (err, posts) =>
      this.convertToArrayOfObject(posts, callback)
    );
  },
  save(posts) {
    AsyncStorage.setItem("POSTS", this.convertToStringWithSeparators(posts));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: "center",
    backgroundColor: "#0fc7f5",
    padding: viewPadding,
    paddingTop: 20
  },
  tajuk: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  }
});

AppRegistry.registerComponent("ProjectList", () => ProjectList);
