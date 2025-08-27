document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('journey-btn'); // Use correct button id
  if (!button) {
    console.error('Button with id "journey-btn" not found!');
    return;
  }

  const originalText = button.textContent;
  button.textContent = '';

  // Wrap each letter inside a span
  originalText.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    button.appendChild(span);
  });
  // console.log(document.getElementById('journey-btn').textContent)

  // Map for multilingual letters per character (English + others in order)
  const languagesMap = [
    // Fill in the characters as per your previous mappings, total arrays equal to originalText.length
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
    ["e", "ｅ", "エ", "伊", "E", "Ε", "ए", "ఎ", "எ", "എ", "𑢷", "伊"],
    ["r", "ｒ", "ル", "尔", "R", "Ρ", "र", "ర", "ர", "ರ", "𑢷", "尔"],
    ["?", "？", "？", "？", "?", "?", "?", "?", "?", "?", "?", "?"]
  ];

  let langIndex = 0;
  let intervalId;

  // Start cycling multilingual text on hover
  button.addEventListener('mouseenter', () => {
    if (intervalId) return; // prevent multiple intervals
    intervalId = setInterval(() => {
      langIndex = (langIndex + 1) % languagesMap[0].length;
      const spans = button.querySelectorAll('span');
      spans.forEach((span, index) => {
        span.textContent = languagesMap[index][langIndex];
      });
    }, 300); // speed of cycling in ms
  });

  // Stop cycling and revert to English on mouse leave
  button.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    intervalId = null;
    const spans = button.querySelectorAll('span');
    spans.forEach((span, index) => {
      span.textContent = languagesMap[index][0];
    });
  });

  // Navigate to choice page on click
  button.addEventListener('click', () => {
    window.location.href = 'choicepage.html';
  });

  // Initialize button text spans with English on load
  const spans = button.querySelectorAll('span');
  spans.forEach((span, index) => {
    span.textContent = languagesMap[index][0];
  });
});
