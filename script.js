const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const audio = document.getElementById("bgMusic");
const textEl = document.getElementById("typeText");

let slide = 1;
let typingIndex = 0;
let typingText = '';
let typingInterval;

const texts = [
  "", // Slide 1 - kosong
  `Hey kamu 😊✨, aku nggak tau kenapa, tapi tiap kali ngobrol sama kamu rasanya selalu nyenengin banget 💬💖. Bahkan hal-hal kecil pun bisa bikin aku senyum sendiri 😌🌸.

Ada sesuatu dari caramu ketawa yang bikin hariku jadi lebih ringan 😍, dan jujur aja… kadang aku nungguin notif dari kamu kayak nunggu kejutan spesial 🎁📱.`,
  `Aku nggak bisa janjiin hal besar sekarang, tapi aku pengen banget kenal kamu lebih jauh 🚶‍♂️🚶‍♀️. Rasanya ada bagian dari diriku yang bilang kalau kamu itu spesial ✨💫.

Kalau nanti ada kesempatan, aku pengen kita sering habisin waktu bareng, entah sekadar ngobrol random ☕ atau jalan santai 🌆. Siapa tau dari hal-hal kecil itu, kita bisa nemuin sesuatu yang lebih indah 💕.`
];

// Play music
playBtn.addEventListener("click", () => {
  audio.play();
});

// Next slide
nextBtn.addEventListener("click", () => {
  if (slide < 3) {
    slide++;
    showSlide(slide);
  }
});

function typeText(text) {
  clearInterval(typingInterval);
  typingIndex = 0;
  textEl.textContent = '';
  typingText = text;

  typingInterval = setInterval(() => {
    if (typingIndex < typingText.length) {
      textEl.textContent += typingText.charAt(typingIndex);
      typingIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
}

function showSlide(slideNum) {
  if (slideNum === 2 || slideNum === 3) {
    typeText(texts[slideNum - 1]);
  }

  if (slideNum === 3) {
    nextBtn.style.display = "none";
  }
}
