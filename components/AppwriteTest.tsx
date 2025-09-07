import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { account } from '@/services/appwrite';

const AppwriteTest = () => {
  const sendPing = async () => {
    try {
      console.log('Sending ping to Appwrite...');
      
      // Test the connection
      const response = await account.get();
      
      Alert.alert('Success!', 'Ping successful - Appwrite connected!');
      console.log('Appwrite ping successful:', response);
    } catch (error) {
      // If no user is logged in, you'll get a 401 error, but connection still works
      if (error.code === 401) {
        Alert.alert('Success!', 'Appwrite connected! (No user session found - this is normal)');
      } else {
        Alert.alert('Error', `Ping failed: ${error.message}`);
        console.error('Appwrite ping failed:', error);
      }
    }
  };

  return (
    <TouchableOpacity 
      onPress={sendPing}
      className="bg-blue-500 p-3 rounded-lg mx-5 mb-5"
    >
      <Text className="text-white text-center font-bold">
        Send a ping
      </Text>
    </TouchableOpacity>
  );
};

export default AppwriteTest;