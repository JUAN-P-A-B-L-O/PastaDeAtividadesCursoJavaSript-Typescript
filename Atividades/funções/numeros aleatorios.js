function rand(min =1000, max =3000){
    const num = Math.random() * (max- min) + min;
    return Math.floor(num);
}
console.log(rand()); /// utilizando default 
console.log(rand(10,20)); // Utilizando range