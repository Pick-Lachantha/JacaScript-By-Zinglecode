//console.log('Phanuphon Lachantha')

/*
let x = 2
y = 10
z = x + y
console.log(z);
*/

/*
//Operators
a1 = 3 + 2 // 5
a2 = 3 - 2 // 1
a3 = 3 * 2 // 6
a4 = 3 / 2 // 1.5
a5 = 3 ** 2 // 9
a6 = 3 % 2 // 1

x = 5
x ++  // 6
x -- // 4
x += 5 //10
*/

/*
//ตัวเปรียบเทียบ
let x = 7
let y = 5

let a1 = x > y //true
let a2 = x >= y //true

let a3 = x < y //false
let a4 = x <= y //false

let a5 = x === y //false
let a6 = x !== y //true
*/

/*
// ตรรกศาสตร์
let p = true
let q = false

let a1 = p && q // false
let a2 = p || q // true
let a3 = !p     //false
*/

/*
//conditions เงื่อนไข
let score = 60
if(score >= 80){
    console.log('Grade A')
}else if (score >= 70) {
    console.log('Grade B')
}else if (score >= 60){
    console.log('Grade D')
}else{
    console.log('Grade F')
}
*/

/*
//Loop
for (let i = 1; i <= 12; i++){
    //console.log(i)

   /* if(i % 2 === 0){
        continue;
    }*/
    
    /*if (i % 10  === 0){
        break
    }*/
/*
   let answer = i ** 2;
   console.log(answer);
}*/




//function
/*
function getPyramidArea(length, width, height){
    let baseArea = length * width
    let pyramidVolum = 1/3 * baseArea * height
    
    //console.log(pyramidVolum)
    return pyramidVolum
}
let area1 = getPyramidArea(2, 2, 3)
let area2 =getPyramidArea(4, 5, 6)

console.log('Area 1 = ' + area1 + ', Area 2 =' + area2)
*/


let content2 = document.getElementById('content-2')
let textHtml = '<b>Phanuphong Lacahtha</b>'
textHtml += '<i> PICK</i>'
content2.innerHTML = textHtml


let discountButton = document.getElementById('discount-button')
let message = document.getElementById('massage')

function showMessage(){
    message.innerHTML = 'หมดเวลาสนุกแล้วสิ'
}
discountButton.addEventListener('click', showMessage)



let numberInput = document.getElementById('number-input')
let runButton = document.getElementById('run-button')
let output = document.getElementById('output')

function printMultiply(){
    let number = Number(numberInput.value)
    let outputHtml = '';

    for (let i = 1; i <= 12; i++){
        outputHtml +='<p>'
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>'
    }
    outputHtml.innerHTML = outputHtml
    
}
runButton.addEventListener('click', printMultiply)