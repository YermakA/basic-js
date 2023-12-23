const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  processing(text, key, mode) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let char of text) {
      const charIndex = alphabet.indexOf(char);

      if (charIndex !== -1) {
        const shift = alphabet.indexOf(key[keyIndex % key.length]);
        if (mode === 'encrypt') {
          result += alphabet[(charIndex + shift) % alphabet.length];
        } else {
          result += alphabet[(charIndex - shift + alphabet.length) % alphabet.length];
        }
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ?
      result
      : result.split('').reverse().join('');
  }
  encrypt(text, key) {
    return this.processing(text, key, 'encrypt');
  }

  decrypt(text, key) {
    return this.processing(text, key, 'decrypt');
  }
}

module.exports = {
  VigenereCipheringMachine
};
