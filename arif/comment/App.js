import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    
    <View>
    <Image 
    style={styles.logo} 
    source={require('./pic/Karipap')} 
    />
    </View>
      
    <View style={styles.section}>
      <Text style={styles.section}>
        Recipe
      </Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.comment}>
        @Arif: Nice recipe.{'\n'}
        @Rihab: tried the recipe, it's finger licking good?
      </Text>
    </View>
      <Text style={styles.paragraph}>
      Irfan: 
      </Text>

      <TextInput style={styles.input} placeholder='comment'/>
      
     <Button
         //onPress = {}
         title = "Comment"
         color = "black"
      />
      
      
      {/*<Card>
      <AssetExample/>
      </Card>
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingLeft: Constants.status,
    backgroundColor: '#0fc7f5',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    backgroundColor: 'white',
    width: 200, 
    height: 40,
    textAlign: 'center'
  },

  logo:{
    resizeMode: 'contain',
    height: 250,
    width: 250
  },
   comment: {
     flex: 1,
    margin: 24,
    fontSize: 18,
    textAlign: 'left',
    backgroundColor: 'white',
  },
  section: {
     flex: 1,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'white',
  },

});
