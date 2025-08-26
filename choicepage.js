// Function to wrap letters of button text in spans for animation
function wrapLetters(button) {
  const text = button.textContent;
  button.textContent = '';
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    button.appendChild(span);
  });
}

const languagesMapPortraits = [
  ["P", "Ｐ", "ピ", "普", "P", "Π", "प", "ప", "ப", "ಪ", "𑢲", "普"],
  ["o", "ｏ", "オ", "欧", "O", "Ο", "ओ", "ఒ", "ஒ", "ಒ", "𑢬", "欧"],
  ["r", "ｒ", "ル", "尔", "R", "Ρ", "र", "ర", "ர", "ರ", "𑢷", "尔"],
  ["t", "ｔ", "ト", "特", "T", "Τ", "त", "త", "த", "ತ", "𑢸", "特"],
  ["r", "ｒ", "ル", "尔", "R", "Ρ", "र", "र", "ர", "ರ", "𑢷", "尔"],
  ["a", "ａ", "ア", "啊", "A", "Α", "अ", "అ", "அ", "ಅ", "𑢱", "啊"],
  ["i", "ｉ", "イ", "伊", "I", "Ι", "इ", "ఇ", "இ", "ಇ", "𑢴", "伊"],
  ["t", "ｔ", "ト", "特", "T", "Τ", "त", "త", "த", "ತ", "𑢸", "特"],
  ["s", "ｓ", "ス", "斯", "S", "Σ", "स", "స", "ச", "ಸ", "𑢴", "斯"],
];

const languagesMapLandscapes = [
  ["L", "Ｌ", "エル", "劳", "L", "Λ", "ल", "ల", "ல", "ಲ", "𑢵", "劳"],
  ["a", "ａ", "ア", "啊", "A", "Α", "अ", "అ", "அ", "ಅ", "𑢱", "啊"],
  ["n", "ｎ", "ン", "恩", "N", "Ν", "न", "న", "ந", "ನ", "𑢨", "恩"],
  ["d", "ｄ", "ド", "德", "D", "Δ", "द", "ద", "த", "ದ", "𑢧", "德"],
  ["s", "ｓ", "ス", "斯", "S", "Σ", "स", "స", "ச", "ಸ", "𑢴", "斯"],
  ["c", "ｃ", "ク", "克", "C", "Κ", "क", "క", "க", "ಕ", "𑢳", "克"],
  ["a", "ａ", "ア", "啊", "A", "Α", "अ", "అ", "அ", "ಅ", "𑢱", "啊"],
  ["p", "ｐ", "プ", "普", "P", "Π", "प", "ప", "ப", "ಪ", "𑢲", "普"],
  ["e", "ｅ", "エ", "伊", "E", "Ε", "ए", "ఎ", "எ", "ಎ", "𑢷", "伊"],
  ["s", "ｓ", "ス", "斯", "S", "Σ", "स", "స", "ச", "ಸ", "𑢴", "斯"],
];

const portraitsBtn = document.getElementById('portraits-btn');
const landscapesBtn = document.getElementById('landscapes-btn');
const bufferText = document.getElementById('buffer');

wrapLetters(portraitsBtn);
wrapLetters(landscapesBtn);

function animateButtonLetters(button, languagesMap) {
  const spans = button.querySelectorAll('span');
  let langIndex = 0;
  if (button._intervalId) clearInterval(button._intervalId);
  button._intervalId = setInterval(() => {
    langIndex = (langIndex + 1) % languagesMap[0].length;
    spans.forEach((span, i) => {
      if (languagesMap[i]) {
        span.textContent = languagesMap[i][langIndex];
      }
    });
  }, 200);
  return button._intervalId;
}

function onOptionClick(option) {
  portraitsBtn.disabled = true;
  landscapesBtn.disabled = true;
  bufferText.style.visibility = 'visible';

  setTimeout(() => {
    bufferText.style.visibility = 'hidden';
    if (option === 'portraits') {
      clearInterval(landscapesBtn._intervalId);
      animateButtonLetters(portraitsBtn, languagesMapPortraits);
    } else {
      clearInterval(portraitsBtn._intervalId);
      animateButtonLetters(landscapesBtn, languagesMapLandscapes);
    }
  }, 2000);
}

portraitsBtn.addEventListener('click', () => onOptionClick('portraits'));
landscapesBtn.addEventListener('click', () => onOptionClick('landscapes'));
