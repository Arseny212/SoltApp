import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  settingsButton: {
      position: 'absolute',
      bottom: 5,
      left: 50,
      borderRadius: 2,
      padding: 10,
  },
  content: {
    padding: 15,
    alignItems: 'center',
    paddingTop: 0,
  },
});