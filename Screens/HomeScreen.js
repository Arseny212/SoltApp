import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../Screens/Elements/Header';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonsContainer from './Elements/ButtonsContainer';
import HomeScreenStyles from '../Styles/HomeScreenStyles'; 

const HomeScreen = () => {
  return (
    <>
      <Header style={{ zIndex: 2 }} />
      <View style={HomeScreenStyles.container}>
        <LinearGradient colors={['#fff', '#5873B7']} style={[HomeScreenStyles.gradient, { marginTop: 20, zIndex: 1 }]}>
          <ScrollView contentContainerStyle={HomeScreenStyles.scrollContent}>
            <View style={HomeScreenStyles.content}>
              <ButtonsContainer />
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </>
  );
};

export default HomeScreen;