let str = "ankush";
let vowels = "a,e,i,o,u"
// let char = "abcdefghijklmnopqrstuvwxyz";
let Vowels_Consonant = (str) => {
  let vowels = "";
  let consonant = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      vowels += str[i];
    } else if (
      str[i] == "b" ||
      str[i] == "c" ||
      str[i] == "d" ||
      str[i] == "f" ||
      str[i] == "f" ||
      str[i] == "h" ||
      str[i] == "g" ||
      str[i] == "j" ||
      str[i] == "k" ||
      str[i] == "l" ||
      str[i] == "m" ||
      str[i] == "n" ||
      str[i] == "p" ||
      str[i] == "q" ||
      str[i] == "r" ||
      str[i] == "s" ||
      str[i] == "t" ||
      str[i] == "v" ||
      str[i] == "w" ||
      str[i] == "x" ||
      str[i] == "y" ||
      str[i] == "z"
    ) {
      consonant += str[i];
    }
  }

  console.log(vowels.length, consonant.length);
};
Vowels_Consonant("ankush");
