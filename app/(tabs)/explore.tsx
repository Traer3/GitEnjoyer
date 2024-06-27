import { StyleSheet, Image, Platform } from 'react-native';


export default function TabTwoScreen() {
  return (
    <Image
          source={require('@/assets/images/aru.gif')}
          style={styles.titleContainer}
        />
  );
}

const styles = StyleSheet.create({
  
  titleContainer: {
    position: 'absolute',
    top : '40%',
    
    left: '15%',
    
    
  },
});
