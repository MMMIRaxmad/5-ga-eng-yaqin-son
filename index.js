
let a = Math.random() * 20
a = parseInt(a);
let b = Math.random() * 20
b = parseInt(b);




let atvet1 = a - 5
atvet1 = Math.abs(atvet1);

let atvet2 = b - 5
atvet2 = Math.abs(atvet2);

console.log(a);
console.log(b);


if(atvet1 === 0 || atvet2 === 0 ){
  console.log("5 o'ziku");
}
else if(atvet1 === atvet2){
console.log("Bir xil yaqinlikda");  
}
else if(atvet1 < atvet2 ){
console.log(a + " 5 ga yaqin son");
} 
else if(atvet1 > atvet2){
console.log(b + " 5 ga yaqin son");
}
else{
console.log(a,b);
}




