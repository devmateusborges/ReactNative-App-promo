import { StyleSheet } from "react-native";

export const ProdutosUni_styles = StyleSheet.create({
  container_Pro_uni: {
    padding: 15,
    flex: 1,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
  container_list: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
  },
  Img_cont: {
    height: 300,
    borderRadius: 15,
  },
  Title: {
    fontWeight: "800",
    fontSize: 30,
    color: "#5e5f5f",
  },
  container_scroll: {
    padding: 5,
  },
  container_Desc: {
    margin: 5,
    backgroundColor: "#cfd4d46b",
    borderRadius: 15,
    padding: 15,
  },
  favorite_button: {
    position: "absolute",
    width: 150,
    height: 150,
  },
  ButtonRouteComp: {
    borderRadius: 15,
    padding: 16,
    backgroundColor: "#4bd499",
    alignItems: "center",
  },
  ContainerTitleSub: {
    paddingLeft: 5,
    marginLeft: 5,
    borderColor: "#b1aaaa",
    borderLeftWidth: 0.3,
  },
  ContainerFavorite: {
    alignItems: "center",
    height: 60,
  },
});
