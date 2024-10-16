import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const backgroundImage = require('../assets/8140 1.png'); 
const overlayImage = require('../assets/Group.png');

const Onboarding = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Signin'); // Điều hướng đến màn hình Signin
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
        <Image source={overlayImage} style={styles.overlayImage} resizeMode="contain" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Welcome</Text>
          <Text style={styles.text}>to our store</Text>
          <Text style={styles.subText}>Get your groceries in as fast as one hour</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    paddingBottom: 50,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 3, 
  },
  subText: {
    color: 'white',
    fontSize: 13, 
    fontWeight: 'normal',
  },
  overlayImage: {
    position: 'absolute', 
    top: 420, 
    left: '50%', 
    transform: [{ translateX: -25 }], 
    width: 50, 
    height: 50, 
  },
  button: {
    backgroundColor: '#53b175', 
    borderRadius: 10, 
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50, 
    marginBottom: 20, 
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default Onboarding;
