import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { Menu_styles } from "../styles/components/menu_styles";
import { FontAwesome5 } from "@expo/vector-icons";
import ButtonRouter from "../components/ButtonRoute";
import { Entypo } from "@expo/vector-icons";
import { Auth_service } from "../service/auth_service";
import { Produto_Service } from "../service/produto_service";
import { produtos } from "../types/types";
import CardItem from "../components/CardItem";
import { styles_global } from "../styles/global_styles";
import { ListaProdutos_styles } from "../styles/ListaProdutos_styles";
import LoadingS from "../components/Loading";
import MenuIcon from "../../assets/animations/menu.json";
import AnimatedLottieView from "lottie-react-native";
import LottieView from "lottie-react-native";
const Auth = new Auth_service();
const Produtoo = new Produto_Service();

export default function HomeProdutos() {
  const [text, onChangeText] = useState("");
  const [Loading, SetLoading] = useState(true);
  const [produto, setproduto] = useState<produtos[]>([]);
  const [produtoUp, setprodutoUp] = useState<produtos[]>([]);
  const MenuRef = useRef<AnimatedLottieView>(null);

  const logout = () => {
    Auth.LogOut();
  };

  async function ProdutosLoading() {
    const res = await Produtoo.get_all_produtos().finally(() =>
      SetLoading(false)
    );
    setproduto(res);
  }

  useEffect(() => {
    MenuRef.current?.play(0, 120);
    ProdutosLoading();
  }, []);

  useEffect(() => {
    const filterP = produto.filter((name) => name.Titulo == text);
    setprodutoUp(filterP);
  }, [text]);
  return (
    <>
      <View style={Menu_styles.Container_menu}>
        <View style={Menu_styles.Subcontainer_menu}>
          <ButtonRouter
            hover="#ffffff0"
            nameButton={
              <LottieView
                style={{ height: 50 }}
                loop={false}
                source={MenuIcon}
                autoPlay
                ref={MenuRef}
              />
            }
            nameButtonOn={true}
            onPress={true}
            nameRoute="UserPerfil"
          />
          <TextInput
            style={Menu_styles.Input_menu}
            placeholder="Produtos"
            value={text}
            onChangeText={onChangeText}
          />
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#275d29"
            onPress={logout}
            style={{ margin: 10 }}
          >
            <Entypo name="log-out" size={24} color="#fff" />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles_global.container}>
        <View style={ListaProdutos_styles.container_list_fundo}>
          <ScrollView style={ListaProdutos_styles.scroll_l}>
            <LoadingS Loading={Loading} />
            {text
              ? produtoUp.map((produto, indice) => {
                  return (
                    <CardItem
                      key={produto.ID}
                      ID={produto.ID}
                      Titulo={produto.Titulo}
                      SubTitulo={produto.SubTitulo}
                      preco={produto.preco}
                      descricao={produto.descricao}
                      img_produto={produto.img_produto}
                      quantidade={produto.quantidade}
                      favorite={produto.favorite}
                    />
                  );
                })
              : produto.map((produto, indice) => {
                  return (
                    <CardItem
                      key={produto.ID}
                      ID={produto.ID}
                      Titulo={produto.Titulo}
                      SubTitulo={produto.SubTitulo}
                      preco={produto.preco}
                      descricao={produto.descricao}
                      img_produto={produto.img_produto}
                      quantidade={produto.quantidade}
                      favorite={produto.favorite}
                    />
                  );
                })}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
