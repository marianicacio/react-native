import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import Login from './src/pages/Login';
import Card from './src/components/Card';
import Button from './src/components/Button';
import BasicModal from './src/components/BasicModal';
import styled from 'styled-components';
// import { useState } from 'react';

const Container = styled.View`
  flex: 1;
  display: flex;
  background-color: red;
`


export default function App() {
  // const [open, setOpen] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Container>

      </Container>
      {/* <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text style={styles.teste} >Modal</Text>
      </TouchableOpacity>
      <BasicModal visible={open} onClose={() => setOpen(false)} /> */}
      {/* <Login/> */}
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
  },
  teste: {
    textAlign: 'center',
  }
})