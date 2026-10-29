const temporadas = [
  {
    numero: 1,
    titulo: "Temporada 1",
    capitulos: [
      { numero: 5, videoId: "k7qr6FvAQZLWV1CzteY" },
      { numero: 6, videoId: "k2dstMVbAsmB7FCTeXg" },
      { numero: 7, videoId: "k69eeYdxMXjtQqCTfnY" },
      { numero: 8, videoId: "k7t3EaCPMbkp5ACTnJQ" },
    ],
  },
  {
    numero: 2,
    titulo: "Temporada 2",
    capitulos: [
      { numero: 1, videoId: "k5OZJAVABkOn43E2WQY" },
      { numero: 2, videoId: "k55ZEZpEvfrxHWE2WVw" },
      { numero: 3, videoId: "k3bzq3Z86eUuZvE2X6y" },
      { numero: 4, videoId: "k1JrHY72OUc9G1EdvpO" },
      { numero: 5, videoId: "k2Z0V50hZZn3iuEdvri" },
      { numero: 6, videoId: "k1DGZFw3pjqfbnEdvBm" },
      { numero: 7, videoId: "k614gZcs1L0EvWEe6Uw" },
      { numero: 8, videoId: "kd9yMnGPORZ9qWEeatQ" },
      { numero: 9, videoId: "k7GXgmkzwgQu6dEeatO" },
      { numero: 10, videoId: "k1Wn4Rzt8sO8tBEeatM" },
      { numero: 11, videoId: "k7nZYEXyNBdPkvEeLqo" },
      { numero: 12, videoId: "k1xvcQqtIPEd4gEeLuE" },
      { numero: 13, videoId: "k1xpoK0VyZRbYvEeLuC" },
    ],
  },
];

const seasonsList = document.getElementById("seasons-list");
let botonActivo = null;

function renderMenu() {
  temporadas.forEach((temporada) => {
    const section = document.createElement("section");
    section.className = "temporada";

    const header = document.createElement("button");
    header.className = "temporada-titulo";
    header.textContent = `${temporada.titulo}`;
    header.setAttribute("aria-expanded", "false");

    const lista = document.createElement("div");
    lista.className = "capitulos";

    temporada.capitulos.forEach((cap) => {
      const btn = document.createElement("button");
      btn.className = "capitulo-btn";
      btn.textContent = `Capítulo ${cap.numero}`;
      btn.dataset.videoId = cap.videoId;
      btn.addEventListener("click", () => abrirVideo(cap.videoId, btn));
      lista.appendChild(btn);
    });

    header.addEventListener("click", () => {
      const abierto = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", String(!abierto));
      lista.classList.toggle("abierto", !abierto);
    });

    section.appendChild(header);
    section.appendChild(lista);
    seasonsList.appendChild(section);
  });

  const primera = seasonsList.querySelector(".temporada");
  if (primera) {
    const header = primera.querySelector(".temporada-titulo");
    const lista = primera.querySelector(".capitulos");
    header.setAttribute("aria-expanded", "true");
    lista.classList.add("abierto");
  }
}

function abrirVideo(videoId, boton) {
  const url = `https://www.dailymotion.com/video/${videoId}`;

  if (botonActivo) {
    botonActivo.classList.remove("activo");
  }
  if (boton) {
    boton.classList.add("activo");
    botonActivo = boton;
  }

  window.open(url, "_blank");
}

renderMenu();
