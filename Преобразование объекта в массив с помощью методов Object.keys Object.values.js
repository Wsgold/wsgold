// Преобразование объекта в массив с помощью методов Object.keys Object.values

const obj_mat = {
    audi: 400,
    bmw: 150,
    oman: 60
}

const mass_probeg = Object.values(obj_mat);
const mass_avto = Object.keys(obj_mat);
console.log(mass_probeg)
console.log(mass_avto)