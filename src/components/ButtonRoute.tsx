
import { Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import { ButtonComponents, HomeNameRoutes } from '../types/types';

type authScreenProp = StackNavigationProp<HomeNameRoutes, 'Cadastrar'>;


export default function ButtonRouter(props: ButtonComponents ) {
  
const navigation = useNavigation<authScreenProp>();

  return (
      <Button title={props.nameButton} onPress={ props.onPress ? () => navigation.navigate(props.nameRoute) : undefined} />
  );
}

