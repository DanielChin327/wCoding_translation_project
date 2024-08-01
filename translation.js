const alBhedDictionary = {
  'a': 'y', 'b': 'p', 'c': 'l', 'd': 't', 'e': 'a', 'f': 'v', 'g': 'k',
  'h': 'r', 'i': 'e', 'j': 'z', 'k': 'g', 'l': 'm', 'm': 's', 'n': 'h',
  'o': 'u', 'p': 'b', 'q': 'x', 'r': 'n', 's': 'c', 't': 'd', 'u': 'i',
  'v': 'j', 'w': 'f', 'x': 'q', 'y': 'o', 'z': 'w',
  'A': 'Y', 'B': 'P', 'C': 'L', 'D': 'T', 'E': 'A', 'F': 'V', 'G': 'K',
  'H': 'R', 'I': 'E', 'J': 'Z', 'K': 'G', 'L': 'M', 'M': 'S', 'N': 'H',
  'O': 'U', 'P': 'B', 'Q': 'X', 'R': 'N', 'S': 'C', 'T': 'D', 'U': 'I',
  'V': 'J', 'W': 'F', 'X': 'Q', 'Y': 'O', 'Z': 'W'
};

const englishDictionary = {
  'y': 'a', 'p': 'b', 'l': 'c', 't': 'd', 'a': 'e', 'v': 'f', 'k': 'g',
  'r': 'h', 'e': 'i', 'z': 'j', 'g': 'k', 'm': 'l', 's': 'm', 'h': 'n',
  'u': 'o', 'b': 'p', 'x': 'q', 'n': 'r', 'c': 's', 'd': 't', 'i': 'u',
  'j': 'v', 'f': 'w', 'q': 'x', 'o': 'y', 'w': 'z',
  'Y': 'A', 'P': 'B', 'L': 'C', 'T': 'D', 'A': 'E', 'V': 'F', 'K': 'G',
  'R': 'H', 'E': 'I', 'Z': 'J', 'G': 'K', 'M': 'L', 'S': 'M', 'H': 'N',
  'U': 'O', 'B': 'P', 'X': 'Q', 'N': 'R', 'C': 'S', 'D': 'T', 'I': 'U',
  'J': 'V', 'F': 'W', 'Q': 'X', 'O': 'Y', 'W': 'Z'
};


const englishInput = document.querySelector('#englishInput')
const textResult = document.querySelector('.textResult')


englishInput.addEventListener('input', translateToAlBhed)



function translateToAlBhed() {
  const englishInput = document.getElementById('englishInput').value;
  const alBhedOutput = translateEnglishToAlBhed(englishInput);
  textResult.innerText = alBhedOutput;
}

function translateEnglishToAlBhed(input) {
  let translated = '';
  for (let char of input) {
    if (alBhedDictionary[char]) {
      translated += alBhedDictionary[char]
    }
    else {
      translated += char
    }
  }
return translated;
}




// function translateToEnglish() {
//   const alBhedInput = document.querySelector('.alBhedInput').value;
//   const englishOutput = translateAlbhedToEnglish(alBhedInput);
//   document.querySelector('.englishOutput').innerText = englishOutput;
// }

// function translateAlbhedToEnglish(input) {
//   let translated = '';
//   for (let char of input) {
//     if (englishDictionary[char]) {
//       translated += englishDictionary[char]
//     }
//     else {
//       translated += char
//     }
//   }
//   return translated;
// }
