import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BarScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Экран Меню</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BarScreen;
