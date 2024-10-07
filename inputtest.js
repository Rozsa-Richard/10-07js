import input from './input.js'

//0
let txt ="teveMereKereszttizakarmiNemTudom"; 
//1
console.log(txt.slice(0,5))
//2
console.log(txt.slice(1,9))
//3
console.log(txt.slice(4))
//4
console.log(txt.slice(4,10))
//5
console.log(txt.toUpperCase())
//6
let sixtxt="";
for (let i = 0; i < txt.length; i++) {
    if ((i+1)%2==0){
        sixtxt+=txt[i].toUpperCase();
    }
    else {
        sixtxt+=txt[i];
    }
}
console.log(sixtxt);
//7
console.log(txt.replace("e","E"))
//8
console.log(txt.split("e"))
