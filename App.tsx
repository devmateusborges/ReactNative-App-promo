import { View, Text, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routers } from "./src/router/router";
import React, { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import Home from "./src/pages/Home";
import HomeProdutos from "./src/pages/HomeProdutos";
const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber;
  }, []);
  return (
    <>
      <StatusBar
        animated={false}
        backgroundColor="#ffffff"
        showHideTransition={"none"}
        hidden={false}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={user ? "Produtos" : "Home"}>
          <Stack.Screen
            options={{ headerShown: false }}
            name={user ? "Produtos" : "Home"}
            component={user ? HomeProdutos : Home}
          />

          {routers.map((router) => (
            <Stack.Screen
              key={router.name}
              options={{ headerShown: false }}
              name={router.name}
              component={router.components}
              initialParams={{ id: undefined }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
