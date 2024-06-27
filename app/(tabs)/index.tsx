import { Image, StyleSheet, Platform } from 'react-native';


export default function HomeScreen() {
  return (
    <Image
          source={require('@/assets/images/arona.gif')}
          style={styles.reactLogo}
        />
  );
}

const styles = StyleSheet.create({
 
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
