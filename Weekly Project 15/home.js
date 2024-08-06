/* counter */
let index = 0;
let stop = setInterval(()=>{
    index++

    document.getElementById("count1").innerHTML = index

    if(index === 18){
        clearInterval(stop)
    }
},550)
document.getElementById("count1").innerHTML = index


let index1 = 0
let stop1 = setInterval(()=>{
    index1++

    document.getElementById("count2").innerHTML = index1

    if(index1 === 100){
        clearInterval(stop1)
    }
},100)
document.getElementById("count2").innerHTML = index1



let index2 = 0
let stop2 = setInterval(()=>{
    index2++

    document.getElementById("count3").innerHTML = index2

    if(index2 === 50){
        clearInterval(stop2)
    }
},200)
document.getElementById("count3").innerHTML = index2


let index3 = 12500
let stop3 = setInterval(()=>{
    index3++

    document.getElementById("count4").innerHTML = index3

    if(index3 === 15000){
        clearInterval(stop3)
    }
},1)
document.getElementById("count4").innerHTML = index3
