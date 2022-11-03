import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//============================= TYPES ROUTES
export type propsNavigationStack = {
  Cadastrar: undefined;
  Home: undefined;
  UserPerfil: undefined;
  ProdutosUni?: { id: string | undefined | number };
  CriarConta: undefined;
  Produtos: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
//=============================  TYPES COMPONENTS
export type LoadingType = {
  Loading: boolean;
};
export type ButtonComponents = {
  nameButton?: any;
  nameButtonOn?: boolean;
  onPress?: boolean;
  nameRoute?: any;
  color?: string;
  hover?: string;
  style?: any;
};

export type PerfilPage = {
  img?: any;
  name?: String;
};

export type CardfavoriteStar = {
  favoriteCon?: boolean;
  favoriteUni?: boolean;
  favoriteNumber?: number;
  style?: any;
  name_file?: any;
};

export type ComentCardType = {
  ID?: string;
  sexo?: boolean;
  nome?: string;
  comentario?: string;
};
//=============================  Tabela

export type produtos = {
  ID?: string;
  Titulo?: string;
  SubTitulo?: string;
  preco?: number;
  descricao?: string;
  quantidade?: number;
  img_produto?: string;
  favorite?: number;
};
