import Button from '@/components/UI/Button';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Home = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <StatusBar backgroundColor="green" animated={false} />
      <Text>Hello World</Text>
      <Button title={'Hello World'} size="lg" type="outline" />
    </View>
  );
};
export default Home;
