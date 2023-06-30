import React from 'react';
import { View, Button, Alert } from 'react-native';

const AlertHello = () => {
  const handlePress = () => {
    Alert.alert('Hello');
  };

  return (
    <View>
      <Button title="Tap me" onPress={handlePress} />
    </View>
  );
};

export default AlertHello;