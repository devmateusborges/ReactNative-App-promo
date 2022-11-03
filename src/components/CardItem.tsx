import { useNavigation, StackActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { card_styles } from "../styles/components/card_styles";
import { produtos, propsStack } from "../types/types";
import FavoriteStar from "./FavoriteStar";
import Favorites from "../../assets/animations/favoriteConjunto.json";
export default function CardItem(props: produtos) {
  const navigation = useNavigation<propsStack>();
  const [quantidadecolor, setcolorquantidade] = useState("");

  const colorquantidade = (quantidade: number) => {
    if (quantidade > 50 || quantidade > 25) {
      return setcolorquantidade("#1ea187");
    } else if (quantidade > 10 && quantidade <= 25) {
      return setcolorquantidade("#a19f1e");
    } else if (quantidade <= 10 && quantidade > 0) {
      return setcolorquantidade("#a11e1e");
    }
  };

  useEffect(() => {
    colorquantidade(props.quantidade || 0);
  }, []);
  const produto = () => {
    navigation.navigate("ProdutosUni", { id: props.ID });
  };
  return (
    <TouchableHighlight onPress={() => produto()} underlayColor="none">
      <View style={card_styles.card_container}>
        <View>
          <Image
            style={card_styles.Img_cont}
            source={{ uri: props.img_produto }}
          />
        </View>
        <View style={card_styles.card_sub_container}>
          <Text
            style={{
              position: "absolute",
              color: "#fff",
              backgroundColor: quantidadecolor,
              borderRadius: 10,
              fontWeight: "800",
              fontSize: 15,
              right: 5,
              padding: 4,
              width: "10%",
            }}
          >
            {props.quantidade}
          </Text>
          <Text style={card_styles.title_card}>{props.Titulo}</Text>
          <Text numberOfLines={4} style={card_styles.sub_title_card}>
            {props.descricao}
          </Text>
          <View style={card_styles.card_sub_container_}>
            <FavoriteStar
              style={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                width: 150,
                height: 150,
              }}
              name_file={Favorites}
              favoriteNumber={props.favorite}
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
