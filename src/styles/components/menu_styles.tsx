import { StyleSheet } from "react-native";

export const Menu_styles = StyleSheet.create({
  Container_menu: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    backgroundColor: "#3f786a",
  },
  Subcontainer_menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Input_menu: {
    width: 300,
    justifyContent: "center",
    height: 35,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  Title_menu: {
    color: "#fff",
    marginTop: 1,
    borderRadius: 5,
    fontWeight: "800",
    fontSize: 25,
  },
});
