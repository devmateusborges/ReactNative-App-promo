import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import { routers } from './src/router/router';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routers.map((router)=>(
          <Stack.Screen key={router.name} name={router.name} component={router.components} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App