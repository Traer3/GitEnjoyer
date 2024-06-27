import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

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
