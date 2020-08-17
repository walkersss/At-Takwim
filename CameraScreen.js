
import * as React from 'react';
import {Component, StyleSheet,Button, Image, View, Text, CameraRoll, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default class CameraScreen extends React.Component {
  state = { image: null,};

  render() {
    let { image } = this.state;
    
    return (
        <View style={styles.container}>  
        <View>
        <View style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Home" />
        </View>
        <Text style = {styles.paragraph}>MakanToday Recipe To Cook For Lunch</Text>
        </View>

        
        
        

        <View style={styles.camerabutton}>
        <Button color="#0000CD" title="Take picture of your food" onPress={this._takePhoto} />
      </View>
      {image && <Image source={{ uri: image }} style={{ justifyContent: 'space-evenly', width: 250, height: 250 }} />}
      
      <Text style = {styles.paragraph}>Ingredient</Text>
      <Text>8 slices crusty bread, such as sourdough or ciabatta</Text>
            <Text>1/2 c. herb mayo</Text>
            <Text>1/4 c. Dijon mustard</Text>
            <Text>12 slices deli ham </Text>
            <Text>8 slices provolone</Text>
            <Text>1 arugula</Text>
            <Text>1 tomato, thinly sliced</Text>
            <Text>1/2 red onion, thinly sliced</Text>
            <Text style = {styles.paragraph}>Instruction</Text>
            <Text> 1) In a medium bowl whisk together mayonnaise, parsley, thyme, oil, and garlic. </Text>
            <Text> 2) Spread 2 tablespoons herb mayo on 4 slices of bread. Spread 1 tablespoon mustard on the other 4 slices of bread. 
              Top each mayo slice of bread with 3 slices of ham, 2 slices of provolone, arugula, a couple slices of tomato, and red onion. 
              Top with remaining bread slices, mustard side down.</Text>
      </View>

      

    );
  }

  _takePhoto = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);

    if (status == 'granted') {
    try {
      let pic = await ImagePicker.launchCameraAsync({
        allowEditing: true,
        aspect: [4, 3],
        quality: 1,
        exif: true
      });
      if (!pic.cancelled) {
        this.setState({ image: pic.uri });
      }
      CameraRoll.saveToCameraRoll(this.state.image);
    } catch (E) {
      console.log(E);
    }
  }
  else{
    Alert.alert("You need permission to use Camera");
 }
  };
}

const styles = StyleSheet.create({

  container: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    textAlignVertical: 'top',
    },

  camerabutton: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }

});

