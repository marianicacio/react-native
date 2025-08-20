import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import Login from './src/pages/Login';
import Card from './src/components/Card';
import Button from './src/components/Button';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Login/>
    {/* <Button label={'tem que botar'}/> */}
      {/* <Card title="coisa 1"/>
      <Card title="coisa 2"/>
      <Card title="coisa 3" image={require("./src/assets/images/avatar.png")}/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})