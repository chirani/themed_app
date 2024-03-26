import Button from '@/components/UI/Button';
import Card from '@/components/UI/Card';
import { spacing } from '@/components/UI/Colors';
import Container from '@/components/UI/Container';
import Text from '@/components/UI/Text';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

const Home = () => {
  return (
    <Container alignItems="stretch" style={{ padding: spacing.lg }}>
      <StatusBar animated={true} />
      <Card>
        <Text size="h1">Good Morning</Text>
        <View style={{ marginTop: spacing.md }} />

        <Container alignItems="stretch" style={{ padding: spacing.md }}>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            repudiandae, enim molestiae, pariatur dolores error sed quo dolorem
            architecto, veritatis est suscipit soluta blanditiis illum quae
            deleniti! Culpa, maxime molestias aperiam fuga laudantium,
            asperiores quaerat nulla atque dolore earum id!
          </Text>
        </Container>

        <View style={{ marginTop: spacing.xl }} />
        <Container flexDirection="row">
          <Button title={'Hello World'} size="md" type="regular" />
          <View style={{ marginTop: spacing.md }} />
          <Button title={'Hello World'} size="md" type="outline" />
        </Container>
      </Card>
    </Container>
  );
};

export default Home;
