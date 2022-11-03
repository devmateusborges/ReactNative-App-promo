import auth from "@react-native-firebase/auth";
export class Auth_service {
  User: {};

  constructor() {
    this.User = {};
  }
  //Entrar na conta
  async Login(Email: string, Pass: string) {
    return auth()
      .signInWithEmailAndPassword(Email, Pass)
      .then(() => {})
      .catch((error) => console.log(error));
  }
  // Sair da conta
  async LogOut() {
    auth().signOut();
  }
}
