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
      
      <Text style={styles.paragraph}>
        Comment section.
      </Text>
      <Text style={styles.comment}>
        @lol: Nice recipe.{'\n'}
        @wow: Is changing few stuff ok?
      </Text>

      <Text style={styles.paragraph}>
      Username: <TextInput style={styles.input}/>
      </Text>
      
      
      
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
    backgroundColor: 'powderblue',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input: {
    backgroundColor: 'grey',
    width: 200, 
    height: 40
  },

  logo:{
    resizeMode: 'contain',
    height: 250,
    width: 250
  },
   comment: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },

});
