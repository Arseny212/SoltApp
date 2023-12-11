import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ButtonsContainer = () => {
  const navigation = useNavigation();

  const handleBtn1Press = () => {
    navigation.navigate('Bar');
  };

  const handleBtn2Press = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={[styles.scrollContainer, { marginTop: -100, alignItems: 'flex-start' }]}>
      <TouchableOpacity onPress={handleBtn1Press} style={[styles.buttonContainer, { marginRight: 10 }]}>
        <Text style={styles.buttonText}>Бар</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBtn2Press} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Кухня</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'flex-start',
  },
  buttonContainer: {
    width: '47%',
    marginBottom: 20,
    padding: 30,
    borderWidth: 1,
    borderColor: '#D1DFF3',
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#aec5e7',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default ButtonsContainer;