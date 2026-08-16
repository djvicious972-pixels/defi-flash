const challengesByCategory = {
  soiree: [
    "Fais rire quelqu'un en moins de 30 secondes.",
    "Choisis une chanson : tout le monde doit danser pendant 20 secondes.",
    "Imite une célébrité jusqu'à ce que quelqu'un trouve son nom."
  ],
  amis: [
    "Envoie un compliment sincère à une personne de ton choix.",
    "Invente un slogan pour votre groupe en 15 secondes.",
    "Choisis une personne : elle doit donner le prochain défi."
  ],
  couple: [
    "Dis une qualité que tu apprécies particulièrement chez ton partenaire.",
    "Raconte votre meilleur souvenir ensemble en une minute.",
    "Choisissez ensemble votre prochaine sortie idéale."
  ],
  famille: [
    "Raconte un souvenir de famille qui te fait rire.",
    "Choisis quelqu'un : il doit imiter un autre membre de la famille.",
    "Trouvez ensemble trois choses que vous aimez faire en famille."
  ],
  soft: [
    "Trouve trois objets de la même couleur en moins de 20 secondes.",
    "Raconte ton meilleur souvenir de vacances en une minute.",
    "Prends une photo originale sans refaire deux fois la même pose."
  ],
  challenge: [
    "Fais 10 squats pendant qu'une autre personne compte à l'envers.",
    "Tiens en équilibre sur un pied pendant 20 secondes.",
    "Fais 15 jumping jacks sans t'arrêter."
  ]
};

const allChallenges = Object.values(challengesByCategory).flat();

function pick(list = allChallenges) {
  return list[Math.floor(Math.random() * list.length)];
}

function setChallenge(list = allChallenges) {
  const t = document.getElementById("challengeText");
  if (t) t.textContent = pick(list);
}

document.getElementById("randomChallenge")?.addEventListener("click", () => {
  setChallenge();
  document.getElementById("challengeBox")?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

document.getElementById("anotherChallenge")?.addEventListener("click", () => {
  setChallenge();
});

document.querySelectorAll("[data-category]").forEach(button => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const category = button.dataset.category;
    const list = challengesByCategory[category];

    if (list) {
      setChallenge(list);
      document.getElementById("challengeBox")?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
});

document.getElementById("shareChallenge")?.addEventListener("click", async () => {
  const text =
    document.getElementById("challengeText")?.textContent ||
    "Viens relever un défi sur Défi Flash !";

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Défi Flash",
        text,
        url: location.href
      });
    } else {
      await navigator.clipboard.writeText(text + " " + location.href);
      alert("Défi copié !");
    }
  } catch (e) {}
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("sw.js").catch(() => {})
  );
}