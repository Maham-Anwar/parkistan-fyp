
import { StyleSheet, Text, View } from 'react-native';
import Map from '../../Features/QuickPark'
export default function Locations() {

  return (
    <View>
       <Text onPress={()=>navigation.navigate('Map')} style={styles.BottomHeading} >
           Available Parkings
       </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});