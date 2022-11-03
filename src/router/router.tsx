import React from "react";
import ProdutosUni from "../components/ProdutosUni";
import CriarConta from "../pages/CriarConta";
import UserPerfil from "../pages/UserPerfil";

export const routers = [
  { name: "UserPerfil", components: UserPerfil },
  { name: "ProdutosUni", components: ProdutosUni },
  { name: "CadastroUsuario", components: CriarConta },
];
