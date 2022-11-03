import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { produtos, propsNavigationStack } from "../types/types";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Produto_Service } from "../service/produto_service";
import { ProdutosUni_styles } from "../styles/components/ProdutosUni";
import ButtonFavoriteProduto from "./FavoriteSet";
import { Divider } from "@react-native-material/core";
import ButtonRouter from "./ButtonRoute";
import FavoriteStar from "./FavoriteStar";
import Favorites from "../../assets/animations/favoriteConjunto.json";
import Coment from "../../assets/animations/comentario.json";
import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
import ComentCard from "./ComentarioCard";
const Produtoo = new Produto_Service();

export default function ProdutosUni() {
  const [Loading, SetLoading] = useState(true);
  const [produto, setproduto] = useState<produtos[]>([]);
  const comentRef = useRef<AnimatedLottieView>(null);

  const params = useRoute<RouteProp<propsNavigationStack, "ProdutosUni">>();
  async function ProdutosLoading() {
    const res = await Produtoo.get_all_produtos().finally(() =>
      SetLoading(false)
    );

    setproduto(
      res.filter((produto: produtos) => produto.ID == params.params?.id)
    );
  }

  useEffect(() => {
    comentRef.current?.play(0, 60);
    ProdutosLoading();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {produto.map((produto, indice) => {
        return (
          <View style={ProdutosUni_styles.container_Pro_uni} key={produto.ID}>
            <Image
              style={ProdutosUni_styles.Img_cont}
              source={{ uri: produto.img_produto }}
            />

            <View style={ProdutosUni_styles.container_list}>
              <View style={ProdutosUni_styles.ContainerTitleSub}>
                <Text style={ProdutosUni_styles.Title}>{produto.Titulo}</Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: "#5e5f5f",
                  }}
                >
                  {produto.SubTitulo}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 45,
                  fontWeight: "600",
                  color: "#5e5f5f",
                  marginLeft: 15,
                }}
              >
                {produto.preco},00
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  color: "#5e5f5f",
                  marginRight: 10,
                }}
              >
                R$
              </Text>
            </View>
            <ButtonRouter
              hover="#415f46"
              color="#fff"
              style={ProdutosUni_styles.ButtonRouteComp}
              nameButton="Comprar"
            />
            <ScrollView style={ProdutosUni_styles.container_scroll}>
              <View style={ProdutosUni_styles.container_list}>
                <ButtonRouter
                  style={{ marginRight: 45 }}
                  nameButton={
                    <LottieView
                      style={{ height: 50, width: 50 }}
                      loop={false}
                      source={Coment}
                      autoPlay
                      ref={comentRef}
                    />
                  }
                />
                <ButtonFavoriteProduto />
              </View>

              <Divider leadingInset={16} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "800",
                  color: "#5e5f5f",
                  textAlign: "center",
                }}
              >
                Descrição
              </Text>
              <View style={ProdutosUni_styles.container_Desc}>
                <Text style={{ fontSize: 15 }}>{produto.descricao}</Text>
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "800",
                  color: "#5e5f5f",
                  textAlign: "center",
                }}
              >
                Comentarios
              </Text>
              <ScrollView style={{ padding: 5 }}>
                <ComentCard />
              </ScrollView>

              <Divider leadingInset={36} />
              <View style={ProdutosUni_styles.ContainerFavorite}>
                <Text style={{ fontWeight: "700", color: "#5e5f5f" }}>
                  Números de Favoritos : {produto.favorite}
                </Text>
                <FavoriteStar
                  favoriteNumber={produto.favorite}
                  favoriteCon
                  name_file={Favorites}
                  style={{
                    top: -30,
                    width: 200,
                    height: 200,
                    position: "absolute",
                  }}
                />
              </View>
            </ScrollView>
          </View>
        );
      })}
    </View>
  );
}
