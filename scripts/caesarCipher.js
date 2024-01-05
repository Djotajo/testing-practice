function caesarCipher(word, shift) {
  let letters = word.split("");
  let chars = [];
  letters.forEach((element) => {
    let position = element.charCodeAt(0);
    if (position >= 97 && position <= 122) {
      position = position + shift;
      while (position > 122) {
        position = 96 + (position - 122);
      }
    } else if (position >= 65 && position <= 90) {
      position = position + shift;
      while (position > 90) {
        position = 64 + (position - 90);
      }
    }
    chars.push(position);
  });
  chars = chars.map((element) => String.fromCharCode(element));
  return chars.join("");
}

module.exports = caesarCipher;
