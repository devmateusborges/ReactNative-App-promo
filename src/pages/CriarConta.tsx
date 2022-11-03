import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { styles_global } from "../styles/global_styles";
import { Home_styles } from "../styles/home_styles";
import LottieView from "lottie-react-native";
import AnimatedLottieView from "lottie-react-native";
import Logo from "../../assets/animations/carrinho.json";
import ButtonRouter from "../components/ButtonRoute";
import auth from "@react-native-firebase/auth";
import { AntDesign } from "@expo/vector-icons";

export default function CriarConta() {
  const [Email, onChangeEmail] = useState("");
  const [Pass, onChangePass] = useState("");
  const [Img, onChangeImg] = useState("");
  const [cpf, onChangecpf] = useState("");
  const [Load, SetLoad] = useState(true);
  const loadingAnimation = useRef<AnimatedLottieView>(null);

  function creataccont() {}

  useEffect(() => {
    loadingAnimation.current?.play(0, 120);
  }, []);

  function createAccont() {
    auth()
      .createUserWithEmailAndPassword(Email, Pass)
      .then(() => {
        alert("cadastrado");
      })
      .catch((error) => console.log(error))
      .finally(() => SetLoad(false));
  }

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
        <Text style={Home_styles.titles_styled}>Criar conta</Text>
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
        <TextInput
          style={Home_styles.Inputs}
          placeholder="Confirmar Senha"
          onChangeText={(e) => onChangePass(e)}
          value={Pass}
        />
        <TextInput
          style={Home_styles.Inputs}
          placeholder="CPF"
          onChangeText={(e) => onChangeEmail(e)}
          value={cpf}
        />
        <TouchableHighlight
          onPress={() => createAccont()}
          style={{
            marginTop: "10%",
            padding: 15,
            borderRadius: 10,
            backgroundColor: "#379f7c",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "#fff" }}>Criar conta</Text>
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
          style={{ borderRadius: 100 }}
          onPress
          hover="#7f7878"
          nameRoute="Home"
          nameButton={
            <Text
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "#2e8e51",
                fontWeight: "600",
              }}
            >
              <AntDesign name="leftcircle" size={50} color="#389763" />
            </Text>
          }
        />
      </View>
    </View>
  );
}
