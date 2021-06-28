const morseCodeArray =  [ 
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'];

const numberCodeArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z', ' ', 'æ',
     'ø', 'å'];

const keyBoard = document.querySelector('#text');
let textValue = null;

let response = '';
