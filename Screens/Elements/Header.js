import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';

const Header = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    translateX.setValue(0);
    Animated.timing(translateX, {
      toValue: -1920,
      duration: 7000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      startAnimation();
    });
  };

  useEffect(() => {
    startAnimation();
  }, [translateX]);

  const handleBtn1Press = () => {
    // Твой функционал для кнопки 1
    // Например, навигация на страницу btn1
  };

  const handleBtn2Press = () => {
    // Твой функционал для кнопки 2
    // Например, навигация на страницу btn2
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleBtn1Press} style={styles.buttonContainerLeft}>
        <Image source={require('../../assets/Search.png')} style={styles.buttonIcon} />
      </TouchableOpacity>
      <Animated.Image
        source={require('../../assets/WaveTop.png')}
        style={[
          styles.backgroundImage,
          { transform: [{ translateX }] },
        ]}
      />
      <Animated.Image
        source={require('../../assets/WaveTop2.png')}
        style={[
          styles.backgroundImage,
          {
            transform: [{ translateX: Animated.add(translateX, 1920) }],
          },
        ]}
      />
      <TouchableOpacity onPress={handleBtn2Press} style={styles.buttonContainerRight}>
        <Image source={require('../../assets/Education.png')} style={styles.buttonIcon} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/SoltLogo.png')}
          style={styles.logoImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    height: 180,
    backgroundColor: '#aec5e7',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: 1920,
    height: 110,
    backgroundColor: '#aec5e7',
    top: 100,
  },
  logoContainer: {
    position: 'absolute',
    left: '50%', 
    marginLeft: -55, 
    top: 38,
  },
  logoImage: {
    width: 110,
    height: 62,
    zIndex: 2,
  },
  buttonContainerLeft: {
    paddingHorizontal: 20,
    position: 'absolute',
    left: 0,
    top: 60,  
  },
  buttonContainerRight: {
    paddingHorizontal: 20,
    position: 'absolute',
    right: 0,
    top: 63, 
  },
  buttonIcon: {
    width: 30,
    height: 30,
  },
});

export default Header;