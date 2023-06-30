import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./images/logo.png')} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Welcome to My App</Text>
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10, marginTop: 20 }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'green', padding: 10, marginTop: 10 }}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;