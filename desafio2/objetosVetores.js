const objetos = {
  nome: "André Souza Nunes",
  idade: 49,
  tecnologias: [
    { nome: "Node backend", especialidade: "Servidor" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};

console.log(
  `O Usuário ${objetos.nome} tem ${objetos.idade} e usa a tecnologia: *** ${objetos.tecnologias[0].nome} *** especialidade:${objetos.tecnologias[0].especialidade}`
);
