import firestore from "@react-native-firebase/firestore";

export class Produto_Service {
  items_qnt: any;
  produtos: any;

  constructor() {
    this.produtos = [];
  }

  async get_all_produtos() {
    this.produtos = [];
    await firestore()
      .collection("produtos")
      .get()
      .then((querySnapshot) => {
        this.items_qnt = querySnapshot.size; // quantidade de produtos
        querySnapshot.forEach((documentSnapshot) => {
          this.produtos.push(documentSnapshot.data()); //produto por produto
        });
      });

    return this.produtos;
  }
}
