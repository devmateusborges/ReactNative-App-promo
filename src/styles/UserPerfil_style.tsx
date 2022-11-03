import { StyleSheet } from "react-native";

export const UserPerfil_style = StyleSheet.create({
    
  container_user_perfil: {
        marginTop: 150,
        flex: 1,
        padding: 1,
        backgroundColor: "#ffffff",
        width: "100%",
        height:"50%",
        borderRadius: 5,
        alignItems:"center"
  },
  container_img: {
        marginTop: "10%",
        height: 150,
        width: "105%",
        position: "absolute",
        zIndex: 5,
        alignItems:"center"
  },
  img: {
        height: "100%",
        width: "40%",
        borderRadius: 100,
        borderColor: "#3b9b7e",
        borderWidth: 5,
  },
  title_name: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: "800",
        color:"#2f343b"
  },
  buttons_cards: {
      flexDirection: "row",
      borderRadius: 15,
      shadowColor: "#2f343b",
      shadowOffset: {
          width: 0,
          height: 0.1,
      },
      shadowOpacity: 2,
      elevation:40,
      padding: 10,
      height: 50,  
      justifyContent:"center",
      alignItems:"center",
      width:  "104%"

  }


   });

