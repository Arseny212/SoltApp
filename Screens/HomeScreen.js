import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Screens/Elements/Header';
import ButtonsContainer from './Elements/ButtonsContainer';
import HomeScreenStyles from '../Styles/HomeScreenStyles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSettingPress = () => {
    navigation.navigate('Setting');
  };

  return (
    <>
      <Header style={{ zIndex: 2 }} />
      <View style={HomeScreenStyles.container}>
        <LinearGradient colors={['#fff', '#5873B7']} style={[HomeScreenStyles.gradient, { marginTop: 20, zIndex: 1 }]}>
          <ScrollView contentContainerStyle={HomeScreenStyles.scrollContent}>
            <View style={HomeScreenStyles.content}>
              <ButtonsContainer />

              {/* Используйте изображение вместо текста как кнопку */}
              <TouchableOpacity onPress={handleSettingPress} style={HomeScreenStyles.settingsButton}>
                <Image source={require('../assets/menuG.png')} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </>
  );
};

export default HomeScreen;