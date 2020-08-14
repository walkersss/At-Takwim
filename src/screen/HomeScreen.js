import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert, Icon, SafeAreaView } from 'react-native';
import { IconButton, Colors, Provider as PaperProvider, Card } from 'react-native-paper';
import {Styles} from './Styles';
import NewPost from './src/screen/NewPost';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import AssetExample from './components/AssetExample';
//import { Router, Scene } from 'react-native-router-flux';
//import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
    <View style={Styles.container}>
      <Text style={Styles.paragraph}>
        POST TODAY!
      </Text>
        <Button title= "Add new Post" onPress={() => this.prop.navigation.navigate('NewPost')} />
       <IconButton icon='camera' color={Colors.black} size={30} onPress={() => console.log('Pressed')}/>
      
    </View>
    </SafeAreaView>
    
  );
}


