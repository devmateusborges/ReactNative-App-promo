import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styles_global } from "../styles/global_styles";
import { Home_styles } from "../styles/home_styles";
import LottieView from "lottie-react-native";
import AnimatedLottieView from "lottie-react-native";
import Logo from "../../assets/animations/carrinho.json";
import ButtonRouter from "../components/ButtonRoute";
import { Auth_service } from "../service/auth_service";

const Auth = new Auth_service();

export default function Home() {
  const [Email, onChangeEmail] = useState("");
  const [Pass, onChangePass] = useState("");
  const loadingAnimation = useRef<AnimatedLottieView>(null);
  const [Load, SetLoad] = useState(true);

  function SingIn(Email: string, Password: string) {
    Auth.Login(Email, Password);
  }

  useEffect(() => {
    loadingAnimation.current?.play(0, 120);
  }, []);

  return (
    <View style={styles_global.container}>
      <View style={Home_styles.container_home}>
        <LottieView
          style={{
            height: 290,
          }}
          source={Logo}
          loop={false}
          autoPlay={false}
          ref={loadingAnimation}
        />
        <Text style={Home_styles.titles_styled}>Compre Aqui</Text>
        <TextInput
          style={Home_styles.Inputs}
          placeholder="Email"
          onChangeText={(e) => onChangeEmail(e)}
          value={Email}
        />
        <TextInput
          style={Home_styles.Inputs}
          placeholder="Senha"
          onChangeText={(e) => onChangePass(e)}
          value={Pass}
        />

        <TouchableHighlight
          onPress={() => SingIn(Email, Pass)}
          style={{
            marginTop: "10%",
            padding: 21,
            borderRadius: 10,
            backgroundColor: "#379f7c",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "#fff" }}>Entrar</Text>
        </TouchableHighlight>
      </View>

      <StatusBar style="auto" />

      <View
        style={{
          marginTop: 55,
          alignItems: "center",
        }}
      >
        <ButtonRouter
          style={{ left: 2 }}
          hover="#aa3131"
          nameButton={
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "#783f3f",
                fontWeight: "600",
              }}
            >
              Esqueceu a senha ?
            </Text>
          }
        />
        <ButtonRouter
          hover="#e7e5e5"
          onPress
          nameRoute="CadastroUsuario"
          nameButton={
            <Text
              style={{
                color: "#458d62",
                fontWeight: "600",
              }}
            >
              Não tem uma conta ?
            </Text>
          }
        />
      </View>
    </View>
  );
}
