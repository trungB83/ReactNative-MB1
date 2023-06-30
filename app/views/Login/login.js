import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === 'admin' && password === '123456') {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      navigation.replace('Main');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Log In</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, width: '80%' }}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 20, width: '80%' }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10 }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;