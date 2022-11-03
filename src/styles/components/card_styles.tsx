import { StyleSheet } from "react-native";

export const card_styles = StyleSheet.create({
  card_container: {
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
    height: 230,
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#c8bdbd",
    flexDirection: "row",
    borderRadius: 15,
    shadowColor: "#2f343b",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    elevation: 10,
  },
  card_sub_container: {
    margin: 5,
    width: "70%",
  },
  card_sub_container_: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title_card: {
    textAlign: "center",
    color: "#343838",
    fontWeight: "800",
    fontSize: 25,
  },
  title_card_preco: {
    color: "#434242",
    fontWeight: "400",
    fontSize: 20,
  },
  sub_title_card: {
    margin: 10,
    color: "#343838",
    fontWeight: "400",
    fontSize: 17,
  },
  Img_cont: {
    borderRadius: 5,
    width: 115,
    height: 230,
  },
});
