const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
    const length = 10;
    const chapt = 2;
    
    for (let m = 0; m < expr.length; m += length) {
        let letter = expr.slice(m, m + length);
        let morse = '';
    
        if (letter === '**********') {
          str += ' ';
        };
        for(let n = 0; n < letter.length; n += chapt){
          let symbol = letter.slice(n, n + chapt);
          switch(symbol){
            case '10': morse += '.'; break;
            case '11': morse += '-'; break;
          }
        }
        for (let item in MORSE_TABLE) {
          if (item === morse) {
            str += MORSE_TABLE[item];
          }
        }
      }
    
      return str;
    }

module.exports = {
    decode
}
