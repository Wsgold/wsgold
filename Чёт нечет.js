const dec = 21;
let rez = dec.toString(2).slice(-1) == 1 ? 'Нечет': 'Чет';
console.log(rez);