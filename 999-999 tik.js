// заполняем масив 
function mass(){
  let left = [];
  for (i = 1; i<1000; i++){
    if (i < 10){
      let pas = "00" + i;
      left.push(pas);     
    } else if (i<100){
      let pas = "0" + i;
      left.push(pas);
    } else {
      let pas = "" + i;
      left.push(pas);
    }  
  }
  return(left)
}
// считаем сумму цифр 
function count_mass(one){
  return (one[0] * 1) + (one[1] * 1) + (one[2] * 1);  
}

let heppy_tik = 0;
const mas_l = mass();
const mas_r = mass();

for (j = 0; j < 999; j++){
  for (k = 1; k < 999; k++){
    let left = count_mass(mas_l[j]);
    let right = count_mass(mas_r[k]);
    if (left === right){
      heppy_tik++
      
    }
  }
}
console.log(heppy_tik);
                