import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image style={{
        width: 150,
        height: 150
      }} source={{uri: 'https://artpoin.com/wp-content/uploads/2023/10/artpoin-sonic-the-hedgehog.png'}}/>
      <Text>Ifruit</Text>
    </View>
  );
}
