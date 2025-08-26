// Visitor counter using CountAPI
fetch('https://api.countapi.xyz/hit/yourphotolanding/visitor')
  .then(res => res.json())
  .then(data => {
    // console.log("Visitor count incremented:", data.value);
  });

// Google Form submission function
function submitNameForm() {
  let name = document.getElementById('visitor-name').value.trim();
  if (!name) name = "";
  document.getElementById('hidden-visitor-name').value = name;
  document.getElementById('hidden-google-form').submit();
  document.getElementById('thank-you-msg').innerText = name.length > 0
    ? `Thank you for visiting, ${name}!`
    : `Thank you for visiting!`;
  document.getElementById('visitor-name').value = '';
}

// Placeholder function for journey button
function goToJourney() {
  alert("Next: Your photography journey page will go here.");
}

// Multilingual rolling letters animation on button - all letters change simultaneously on hover
const languagesMap = [
  ["W", "Ｗ", "ウ", "维", "V", "Β", "व", "వ", "வ", "ವ", "𑢾", "墨西哥的"],
  ["a", "ａ", "ア", "啊", "A", "Α", "अ", "అ", "அ", "ಅ", "𑢱", "啊"],
  ["n", "ｎ", "ン", "恩", "N", "Ν", "न", "న", "ந", "ನ", "𑢨", "恩"],
  ["n", "ｎ", "ン", "恩", "N", "Ν", "न", "న", "ந", "ನ", "𑢨", "恩"],
  ["a", "ａ", "ア", "啊", "A", "Α", "अ", "అ", "அ", "ಅ", "𑢱", "啊"],
  [" ", "　", "　", "　", " ", " ", " ", " ", " ", " ", " ", " "],
  ["s", "ｓ", "ス", "斯", "S", "Σ", "स", "స", "ச", "ಸ", "𑢴", "斯"],
  ["e", "ｅ", "エ", "伊", "E", "Ε", "ए", "ఎ", "எ", "ಎ", "𑢷", "伊"],
  ["e", "ｅ", "エ", "伊", "E", "Ε", "ए", "ఎ", "எ", "ಎ", "𑢷", "伊"],
  [" ", "　", "　", "　", " ", " ", " ", " ", " ", " ", " ", " "],
  ["m", "ｍ", "ム", "姆", "M", "Μ", "म", "మ", "ம", "ಮ", "𑢰", "姆"],
  ["y", "ｙ", "イ", "伊", "Y", "Υ", "य", "య", "ய", "ಯ", "𑢹", "伊"],
  [" ", "　", "　", "　", " ", " ", " ", " ", " ", " ", " ", " "],
  ["j", "ｊ", "ジ", "杰", "J", "Ξ", "ज", "జ", "ஜ", "ಜ", "𑢽", "杰"],
  ["o", "ｏ", "オ", "欧", "O", "Ο", "ओ", "ఒ", "ஒ", "ಒ", "𑢬", "欧"],
  ["u", "ｕ", "ウ", "宇", "U", "Υ", "उ", "ఉ", "உ", "ಉ", "𑢤", "宇"],
  ["r", "ｒ", "ル", "尔", "R", "Ρ", "र", "ర", "ர", "ರ", "𑢷", "尔"],
  ["n", "ｎ", "ン", "恩", "N", "Ν", "न", "న", "ந", "ನ", "𑢨", "恩"],
  ["e", "ｅ", "エ", "伊", "E", "Ε", "ए", "ఎ", "எ", "ಎ", "𑢷", "伊"],
  ["y", "ｙ", "イ", "伊", "Y", "Υ", "य","య", "ய", "ಯ", "𑢹", "伊"],
  [" ", "　", "　", "　", " ", " ", " ", " ", " ", " ", " ", " "],
  ["a", "ａ", "ア", "啊", "A", "Α", "अ", "అ", "அ", "ಅ", "𑢱", "啊"],
  ["s", "ｓ", "ス", "斯", "S", "Σ", "स", "స", "ச", "ಸ", "𑢴", "斯"],
  [" ", "　", "　", "　", " ", " ", " ", " ", " ", " ", " ", " "],
  ["a", "ａ", "ア", "啊", "A", "Α", "अ", "అ", "அ", "ಅ", "𑢱", "啊"],
  [" ", "　", "　", "　", " ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "ｐ", "プ", "普", "P", "Π", "प", "ప", "ப", "ಪ", "𑢲", "普"],
  ["h", "ｈ", "フ", "哈", "H", "Η", "ह", "హ", "ஹ", "ಹ", "𑢶", "哈"],
  ["o", "ｏ", "オ", "欧", "O", "Ο", "ओ", "ఒ", "ஒ", "ಒ", "𑢬", "欧"],
  ["t", "ｔ", "ト", "特", "T", "Τ", "त", "త", "த", "ತ", "𑢸", "特"],
  ["o", "ｏ", "オ", "欧", "O", "Ο", "ओ", "ఒ", "ஒ", "ಒ", "𑢬", "欧"],
  ["g", "ｇ", "グ", "古", "G", "Γ", "ग", "గ", "க", "ಗ", "𑢵", "古"],
  ["r", "ｒ", "ル", "尔", "R", "Ρ", "र", "ర", "ர", "ರ", "𑢷", "尔"],
  ["a", "ａ", "ア", "啊", "A", "Α", "अ", "అ", "அ", "ಅ", "𑢱", "啊"],
  ["p", "ｐ", "プ", "普", "P", "Π", "प", "ప", "ப", "ಪ", "𑢲", "普"],
  ["h", "ｈ", "フ", "哈", "H", "Η", "ह", "హ", "ஹ", "ಹ", "𑢶", "哈"],
  ["e", "ｅ", "エ", "伊", "E", "Ε", "ए", "ఎ", "எ", "ಎ", "𑢷", "伊"],
  ["r", "ｒ", "ル", "尔", "R", "Ρ", "र", "ర", "ர", "ರ", "𑢷", "尔"],
  ["?", "？", "？", "？", "?", "?", "?", "?", "?", "?", "?", "?"]
];

const button = document.getElementById('multilingual-btn');
const spans = button.querySelectorAll('span');
let intervalId;
let langIndex = 0;
let paused = false;

button.addEventListener('mouseenter', () => {
  if (paused) return;
  intervalId = setInterval(() => {
    langIndex = (langIndex + 1) % languagesMap[0].length;
    spans.forEach((span, i) => {
      span.textContent = languagesMap[i][langIndex];
    });
  }, 200);
});

button.addEventListener('mouseleave', () => {
  if (!paused) {
    clearInterval(intervalId);
    spans.forEach((span, i) => {
      span.textContent = languagesMap[i][0];
    });
  }
});

button.addEventListener('click', () => {
  paused = !paused;
  if (paused) {
    clearInterval(intervalId);
  } else {
    langIndex = 0;
    spans.forEach((span, i) => {
      span.textContent = languagesMap[i][0];
    });
  }
});

// For mobile touch support toggle
button.addEventListener('touchstart', () => {
  paused = !paused;
  if (paused) {
    clearInterval(intervalId);
  } else {
    langIndex = 0;
    spans.forEach((span, i) => {
      span.textContent = languagesMap[i][0];
    });
  }
});

