const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function imprimir() {
  for (let i = 0; i < usuarios.length; i++) {
    let tecno = "";
    for (
      let tecnologias = 0;
      tecnologias < usuarios[i].tecnologias.length;
      tecnologias++
    ) {
      tecno +=
        usuarios[i].tecnologias[tecnologias] +
        (tecnologias < usuarios[i].tecnologias.length - 1 ? "," : "");
    }
    console.log(`${usuarios[i].nome} trabalha com tecnologias:${tecno}`);
  }
}

imprimir();
