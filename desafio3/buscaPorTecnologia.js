const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

const trabalha = "HTML "; //informar a tecnologia a ser pesquisada

function checaSeUsuarioUsaCSS(usuario, trabalha) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
  let tecno = false;

  for (let i = 0; i < usuario.tecnologias.length; i++) {
    if (usuario.tecnologias[i] === trabalha) {
      tecno = true;
    }
  }
  return tecno;
}

let informacao = false;
for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i], trabalha);
  if (usuarioTrabalhaComCSS) {
    informacao = true;
    console.log(`O usuário ${usuarios[i].nome} trabalha com ${trabalha}`);
  }
}

console.log(
  informacao
    ? `Pesquisa realidade com sucesso
    `
    : `Tecnologia ${trabalha} não encontrada`
);
