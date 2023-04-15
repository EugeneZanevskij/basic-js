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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (this.alphabet.includes(char)) {
        const keyChar = key[keyIndex % key.length];
        const keyChIndex = this.alphabet.indexOf(keyChar);
        const chIndex = this.alphabet.indexOf(char);
        const encryptedChIndex = (chIndex + keyChIndex) % this.alphabet.length;
        const encryptedCh = this.alphabet[encryptedChIndex];
        encryptedMessage += encryptedCh;
        keyIndex++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let message = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      if (this.alphabet.includes(char)) {
        const keyChar = key[keyIndex % key.length];
        const keyChIndex = this.alphabet.indexOf(keyChar);
        const chIndex = this.alphabet.indexOf(char);
        const decryptedChIndex = (chIndex - keyChIndex + this.alphabet.length) % this.alphabet.length;
        const decryptedCh = this.alphabet[decryptedChIndex];
        message += decryptedCh;
        keyIndex++;
      } else {
        message += char;
      }
    }

    return this.isDirect ? message : message.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
