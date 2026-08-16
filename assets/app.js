const challenges = [
  "Fais rire quelqu'un en moins de 30 secondes.",
  "Choisis une chanson : tout le monde doit danser pendant 20 secondes.",
  "Imite une célébrité jusqu'à ce que quelqu'un trouve son nom.",
  "Envoie un compliment sincère à une personne de ton choix.",
  "Raconte ton meilleur souvenir de vacances en une minute.",
  "Fais 10 squats pendant qu'une autre personne compte à l'envers.",
  "Trouve trois objets de la même couleur en moins de 20 secondes.",
  "Prends une photo de groupe originale sans refaire deux fois la même pose.",
  "Invente un slogan pour votre groupe en 15 secondes.",
  "Choisis une personne : elle doit donner le prochain défi."
];
function pick(){return challenges[Math.floor(Math.random()*challenges.length)]}
function setChallenge(){const t=document.getElementById('challengeText');if(t)t.textContent=pick()}
document.getElementById('randomChallenge')?.addEventListener('click',()=>{setChallenge();document.getElementById('challengeBox')?.scrollIntoView({behavior:'smooth',block:'center'})});
document.getElementById('anotherChallenge')?.addEventListener('click',setChallenge);
document.getElementById('shareChallenge')?.addEventListener('click',async()=>{const text=document.getElementById('challengeText')?.textContent||'Viens relever un défi sur Défi Flash !';try{if(navigator.share)await navigator.share({title:'Défi Flash',text,url:location.href});else{await navigator.clipboard.writeText(text+' '+location.href);alert('Défi copié !')}}catch(e){}});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}))}
