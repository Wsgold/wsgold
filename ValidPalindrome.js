var ValidPalindrome = function (s ) {
    let liters_off = s.toLowerCase();
    liters_off = liters_off.replace(/ /g,'');
    liters_off = liters_off.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', ')
    liters_rev = liters_off.split('').reverse().join('');
    if (liters_off === liters_rev){
      return(true)
    }
      return(false)
               
  }
  
  console.log(ValidPalindrome('a'))