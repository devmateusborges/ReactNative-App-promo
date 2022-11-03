import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image } from "react-native";
import ButtonRouter from "../components/ButtonRoute";
import { styles_global } from "../styles/global_styles";
import { UserPerfil_style } from "../styles/UserPerfil_style";
import { PerfilPage } from "../types/types";

export default function UserPerfil(props: PerfilPage) {
  return (
    <View style={styles_global.container}>
      <View style={UserPerfil_style.container_img}>
        <Image
          style={UserPerfil_style.img}
          source={{
            uri: props.img
              ? props.img
              : "https://www.w3schools.com/howto/img_avatar.png",
          }}
        />
      </View>

      <View style={UserPerfil_style.container_user_perfil}>
        <Text style={UserPerfil_style.title_name}>Mateus</Text>
        <ButtonRouter
          nameButton="Documentos"
          style={UserPerfil_style.buttons_cards}
          nameButtonOn={false}
          onPress={true}
          nameRoute={"Produtos"}
        />
        <ButtonRouter
          nameButton="Editar Perfil"
          style={UserPerfil_style.buttons_cards}
          nameButtonOn={false}
          onPress={true}
          nameRoute={"Produtos"}
        />
        <ButtonRouter
          nameButton="Mudar senha"
          style={UserPerfil_style.buttons_cards}
          nameButtonOn={false}
          onPress={true}
          nameRoute={"Produtos"}
        />

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
