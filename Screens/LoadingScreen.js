import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoadingScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      navigation.navigate('Home');
    }, 3000);

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#65A6D1', '#06246F']} // Цвета вашего градиента
      style={styles.container}
    >
      <Text style={styles.title}>Ожидаем, загрузка... {progress}%</Text>
      <ActivityIndicator size="large" color="#fff" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    height: '100%', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34D0BA',
    marginBottom: 20,
  },
});

export default LoadingScreen;