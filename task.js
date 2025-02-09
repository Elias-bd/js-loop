/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

// let num = 1;
// while (num <= 60){
//     console.log(num);
//     console.log(' i Will invest at least 6 hrs every single day for next 60 days!');
//     num++;
// }

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***



Subtask-2:

Find all the even numbers from 78 to 98.

 */
// let num = 100;
// while(num >= 60){
//     console.log(num);
//     num--;

//     if(num % 2 !== 0){
//         console.log('odd number', num);
//     }
// }





// let num = 78;
// while(num <= 98){
//     console.log(num);
//     num++;

//     if(num % 2 === 0){
//         console.log('even number', num)
//     }
// }

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

// let sum = 0;

// for (let num = 81; num <=131; num++){
//     if (num % 2 !== 0){
//         sum += num;
//     }
    
// }

// console.log('sum of all odd number from 81 to 131 is:', sum);

// let sum = 0;
// for (let num = 
//     206; num <= 311; num++){
//     if (num % 2 === 0){
//         sum += num;
//     }
// }

// console.log ('sum of all even number from 206 to 311 is:', sum)



/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let number = 5;
let limit = 10;
console.log('Multiplication table for:', number);

for (let i = 1; i <= limit; i++){
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
    // console.log('{$}', number, '{x}', '{$}', i = '{$}', result);
}