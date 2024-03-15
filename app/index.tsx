import Button from '@/components/UI/Button';
import { spacing } from '@/components/UI/Colors';
import Container from '@/components/UI/Container';
import Text from '@/components/UI/Text';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

const Home = () => {
  return (
    <Container alignItems="stretch">
      <StatusBar animated={true} />
      <Text size="h1">Good Morning</Text>
      <View style={{ marginTop: spacing.md }} />
      <Button title={'Hello World'} size="md" type="outline" />
      <View style={{ marginTop: spacing.sm }} />
      <Button title={'Hello World'} size="md" type="regular" />
      <View style={{ marginTop: spacing.sm }} />
      <Button title={'Hello World'} size="md" type="transparent" />
    </Container>
  );
};

export default Home;
