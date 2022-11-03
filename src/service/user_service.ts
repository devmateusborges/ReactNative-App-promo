import firestore from "@react-native-firebase/firestore";

export class user_Service {
  comentario: any;

  constructor() {
    this.comentario = [];
  }

  get_all_coment() {
    return [
      {
        ID: "30c15b7e-1243-487f-bae9-dbbfcf070fb5",
        produto_id: "",
        sexo: true,
        nome: "Mateus",
        comentario: "Eu amei essa pizza melhor piza de calabreza que ja comi",
      },
      {
        ID: "3c5b25be-af04-496c-a93f-c4b186ba647b",
        produto_id: "",
        sexo: false,
        nome: "Camilly",
        comentario: "Horrivel essa pizza de calabreza",
      },
    ];
  }
}
