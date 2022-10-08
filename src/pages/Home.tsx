import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ButtonRouter from '../components/ButtonRoute';




export default function Home() {
  

  return (
    <View >
      <Text style={{"fontSize":55}}>Home</Text>
      <ButtonRouter nameButton='Home' onPress={true} nameRoute={"Cadastrar"}/>

      <StatusBar style="auto" />
    </View>
  );
}

