import React, { useState, useRef } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

// Import your Google and Facebook icons from assets
const googleIcon = require('../assets/Platform=Google, Color=Negative.png'); // Replace with your actual icon path
const facebookIcon = require('../assets/Vector.png'); // Replace with your actual icon path
const headerImage = require('../assets/601 1.png'); // Replace with your actual header image path

const Signin = ({ navigation = null }) => {
  const [value, setValue] = useState(''); // Store the phone number
  const [formattedValue, setFormattedValue] = useState(''); // Store the formatted phone number
  const [valid, setValid] = useState(false); // Validity status of the phone number
  const phoneInput = useRef(null); // Reference to PhoneInput component

  const handleGoogleLogin = () => {
    console.log('Continue with Google');
  };

  const handleFacebookLogin = () => {
    console.log('Continue with Facebook');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Header Image */}
      <Image source={headerImage} style={styles.headerImage} />

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Get your groceries</Text>
        <Text style={styles.subtitle}>with nectar</Text>

        {/* Phone Input Field */}
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="VN"
          layout="first"
          onChangeText={(text) => setValue(text)}
          onChangeFormattedText={(text) => setFormattedValue(text)}
          withDarkTheme
          withShadow
          autoFocus={false}
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
        />

        {/* Add some space before the social media text */}
        <View style={styles.spacing} />

        {/* Black bar and subtext */}
        <View style={styles.blackBar} />
        <Text style={styles.subText}>Or connect with social media</Text>
      </View>

      {/* Google Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
        <Image source={googleIcon} style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Facebook Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleFacebookLogin}>
        <Image source={facebookIcon} style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    marginLeft: 10,
  },
  headerContainer: {
    alignItems: 'flex-start', // Align items to the left
    marginTop: 200,
    marginBottom: 40,
    width: '100%', // Take up full width to align text properly
    paddingHorizontal: 20, // Add some padding for text alignment
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left', // Align text to the left
  },
  subtitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left', // Align text to the left
  },
  phoneContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 15,
  },
  textInput: {
    paddingVertical: 0,
  },
  spacing: {
    height: 20, // Add space between the phone input and the text
  },
  blackBar: {
    height: 2,
    width: '100%',
    backgroundColor: 'black',
    marginBottom: 10,
  },
  subText: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center', // Center the text within its parent view
  },
  button: {
    backgroundColor: '#5383ec',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Signin;
