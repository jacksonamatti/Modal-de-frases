const frases = [
  "Sonhos sem asas foi o meu Busquei o infinito Senti um despertar Um sonho de Ícaro...",
  "Nuances belas avistei Num multicolorido indescritível Voei alto demais, busquei o pináculo... Enveredei pelo desconhecido",
  "Sem estruturas minhas asas cansaram-se Lutando e sonhando compreendi... Sou mero sonhador, um tolo, um bobo... Um pobre pecador, que suplica piedade...Amém!",
  "Asas de cera, a certeza da morte e o sonho de Ícaro",
  "Ô vida arriscada, nossa quanta besteira, viver sonhando com a morte, sonhando em tocar a Estrela.",
  "Estrela, linda Estrela, Estrela da minha cidade, arriscaria perder as ceras das minhas asas em busca de reciprocidade.",
  "Estrela, bela rainha, se as ceras que colam as asas dos meus sonhos, suportassem só por segundos o imenso poder dos seus raios, arriscaria sonhar mais alto e nessa peça protagonizar.",
  "Estrela, voar em direção aos raios, que chamo de braços, mesmo significando a morte, seria um prazer eterno, mas vivido em apenas segundos.",
  "Chama-me Estrela, mais vale ser pulverizado pelo calor de suas entranhas do que viver no labirinto, onde as pedras dizem me amar.",
  "Deixe-me queimar a cera das minhas asas e morrer feliz.",
  "Estrela, há prazer em olhar para ti só de relance, ou através da parede de desilusões, pois o humano pode viver sonhando com o céu, é direito, mas não pode experimentá-lo ainda vivo.",
];

const abrirModal = () => {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const textoModal = document.createElement("p");
  textoModal.classList.add("txtModal");
  for (let i = 0; i < frases.length; i++) {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    textoModal.textContent = frases[numeroAleatorio];
  }
  const container = document.querySelector(".container");
  container.appendChild(modal);
  modal.appendChild(textoModal);

  const buttonModal = document.createElement("button");
  buttonModal.innerHTML = "fechar modal";
  buttonModal.classList.add("fechar");
  modal.appendChild(buttonModal);

  buttonModal.addEventListener("click", () => fecharModal(modal));
};

const buttonAbrir = document.getElementById("buttonAbrir");
buttonAbrir.addEventListener("click", abrirModal);

const fecharModal = (modal) => {
  if (modal.parentNode) {
    modal.parentNode.removeChild(modal);
  }
};
